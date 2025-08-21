'use client'

import Link from 'next/link'
import React, { useRef } from 'react'
import Buttons from '../Buttons'
import { useInView } from 'framer-motion'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as THREE from 'three'
import { a, easings, useSpring } from '@react-spring/three'


interface ModelProps {
  url: string,
  initialPosition: [number, number, number];
  finalPosition: [number, number, number];
  rotation: [number, number, number];
}

const Model = ({ url, initialPosition, finalPosition, rotation }: ModelProps) => {

  const model = useLoader(GLTFLoader, url)
  const modelRef = useRef<THREE.Mesh>(null);

  const { position } = useSpring({
    from: { position: initialPosition },
    to: { position: finalPosition },
    config: { duration: 1500, easing: easings.easeInOutCubic },
    delay: 200
  })

  return (
    <a.mesh
      ref={modelRef}
      position={position}
      rotation={rotation}
      scale={[0.65, 0.65, 0.65]}
    >
      <primitive object={model.scene} />
    </a.mesh>
  )
}

const Sale = () => {

  const mountRef = useRef(null)
  const isInView = useInView(mountRef, { once: true });

  const leftModelInitialPosition: [number, number, number] = [-2, 0, 0];
  const rightModelInitialPosition: [number, number, number] = [2, 0, 0];

  const leftModelFinalPosition: [number, number, number] = [-3.3, -1.2, 0];
  const rightModelFinalPosition: [number, number, number] = [2.7, 0.9, 0];

  const modelRotation: [number, number, number] = [
    Math.PI / 2,
    Math.PI / 180 * 80,
    Math.PI / 180 * -10,
  ]

  return (
    <div className='max-w-[1536px] flex flex-col items-center gap-9 pt-33 mx-auto overflow-x-hidden'>
      <div ref={mountRef} className='absolute w-full h-[500px] md:h-[700px]'>
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}
          className='w-full h-full'
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={3} />
          <directionalLight position={[-5, 5, 5]} intensity={3} />
          {isInView && (
            <>
              <Model
                url='/assets/keyboard2.glb'
                initialPosition={leftModelInitialPosition}
                finalPosition={leftModelFinalPosition}
                rotation={modelRotation}
              />
              <Model
                url='/assets/keyboard3.glb'
                initialPosition={rightModelInitialPosition}
                finalPosition={rightModelFinalPosition}
                rotation={modelRotation}
              />
            </>
          )}
        </Canvas>
      </div>
      <h2 className='text-4xl md:text-5xl font-bold text-center'>
        Limited Collection <br /> For Sale
      </h2>
      <p className='uppercase text-lg font-bold bg-gradient-to-t from-indigo-900 to-indigo-600 bg-clip-text text-transparent'>Discounts Upto 36%</p>
      <Link href="catalog"
        className='w-36 flex flex-col items-center py-3 rounded-xl text-xs'
      >
        <Buttons
          text='Buy Keyboard'
          className='bg-gradient-to-t from-indigo-900 to-indigo-600'
        />
      </Link>
    </div>
  )
}

export default Sale