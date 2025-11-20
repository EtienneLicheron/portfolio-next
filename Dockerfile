# -----------------------------
# 1. Base builder image
# -----------------------------
FROM node:22-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

# -----------------------------
# 2. Dependencies
# -----------------------------
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

# -----------------------------
# 3. Builder (Next.js build)
# -----------------------------
FROM base AS builder

# Copy node_modules from deps
COPY --from=deps /app/node_modules ./node_modules

# Copy project files
COPY . .

# Set production env
ENV NODE_ENV=production

# Build Next.js (generates .next + standalone server)
RUN npm run build

# -----------------------------
# 4. Runner — minimal image
# -----------------------------
FROM node:22-alpine AS runner
WORKDIR /app

# Security hardening
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Avoid running as root
RUN addgroup -g 1001 nodegrp \
    && adduser -D -H -G nodegrp -u 1001 nodeuser
USER nodeuser

# Copy standalone output (best practice for Next.js)
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Expose runtime port
EXPOSE 3000

# Start Next.js server
CMD ["node", "server.js"]
