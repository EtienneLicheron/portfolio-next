"use client";
import { useFrame, createRoot, Canvas, useLoader, Euler, useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { easing } from 'maath';
import { MeshTransmissionMaterial, Environment, Lightformer, useGLTF, useTexture, Gltf, Fisheye } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';
import { Vector3,  } from 'three';

export const Scene = (props: any) => {
    // const gltf = useLoader(GLTFLoader, '/wonderful_world.glb')

    return (
        <div className='a' style={{display: 'block', width: '100vw', height: '100vh', position: 'absolute', top: '0', left: '0', zIndex: '1'}}>
            <Canvas shadows dpr={[1, 2]} camera={{ position: [10, 10, 15], fov: 60 }}>
                <directionalLight color="red" position={[10, 10, 15]} intensity={11} scale={10} />
                {/* <Environment background intensity={0.5} /> */}
                <ambientLight intensity={0.3} />
                <Earth/>
            </Canvas>
        </div>
    )
}

function Earth(props: any) {
    const [carPosition, setCarPosition] = useState([0, 0, 0])
    const [carRotation, setCarRotation] = useState<Euler>([0.1, 0.3, 0])

    const [manRotation, setManRotation] = useState<Euler>([0, -0.7, 0.05])

    const { camera, mouse } = useThree()
    const vec = new Vector3()
    
    useFrame( state  => {
        // if (state.pointer.y < 0.1) return
        if (state.pointer.y > 0) return
        setCarRotation([-state.pointer.y, state.pointer.x/2, 0])
        setManRotation([-state.pointer.y, state.pointer.x - 0.8, 0.05])
        camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 1)
        camera.lookAt(0, 0, 0)
    })

    // '/2/textures/lights_baseColor.png',
    // '/2/textures/material_1_emissive.png',
    // '/2/textures/material_3_baseColor.png',
    // '/2/textures/material_baseColor.png',
    // '/2/textures/material_emissive.png

    // const texture = useTexture({
    //     map: '/2/textures/lights_baseColor.png',
    //     displacementMap: '/2/textures/material_1_emissive.png',
    //     normalMap: '/2/textures/material_3_baseColor.png',
    //     roughnessMap: '/2/textures/material_baseColor.png',
    //     aoMap: '/2/textures/material_emissive.png',
    // })
    return (
        <>
            <Gltf  castShadow receiveShadow src="/man.glb" rotation={manRotation} position={[-2.8,0,4]} scale={0.7} />
            <Gltf  castShadow receiveShadow src="/nissan_skyline_r32_pixel_art.glb" rotation={carRotation} position={[0,0,0]} scale={1}/>
        </>
    )
}
