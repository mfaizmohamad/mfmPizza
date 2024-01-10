import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload} from "@react-three/drei";

import Loader from "../helpers/Loader";

import Pizza from "../models/pizza";

const Pizza3d = () => {
  return (
    <mesh>
      <hemisphereLight intensity={1.5} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapsize={1024}
      />
      <Pizza 
        scale={[3, 3, 3]}
        position={[-5, 1, 0]}
        rotation={[0.5, 2.5, 0]}
      />
    </mesh>
  );
};

const PizzaCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<Loader />}>
      <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Pizza3d/>
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default PizzaCanvas;