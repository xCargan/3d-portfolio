import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {

  //const earth = useGLTF("./planet/scene.gltf");
  //const earth = useGLTF("./planet/taupiqueur.glb");
  const earth = useGLTF("./planet/fusée.glb");

  return (
    <primitive
      object={earth.scene}
      scale={0.27}
      position={[-0, -1.5, 0]}
      rotation-x={Math.PI / 12}  // Inclinaison vers l'avant de 45 degrés
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
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
      <hemisphereLight intensity={1.5} groundColor="black" />
      <pointLight intensity={3} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow={1}
      />

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={0.4}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
