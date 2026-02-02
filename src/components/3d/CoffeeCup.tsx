import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  OrbitControls, 
  Environment, 
  ContactShadows,
  useTexture,
  Float,
  Center,
  Decal
} from '@react-three/drei';
import * as THREE from 'three';

// --- Photorealistic 16oz Cup Geometry ---
// Taller, slender profile with distinct rolled rim and bottom recess.
const CupGeometry = () => {
    const points = useMemo(() => {
        const p = [];
        // Units relative: Scaling entire group to fit view later.
        // Base Recess center
        p.push(new THREE.Vector2(0, 0));
        // Base Recess edge
        p.push(new THREE.Vector2(2.5, 0));
        p.push(new THREE.Vector2(2.5, 0.5)); // Recess depth
        // Bottom start
        p.push(new THREE.Vector2(2.8, 0.5));
        // Wall slope up to Rim (Height ~14 units)
        p.push(new THREE.Vector2(4.5, 14)); 
        // Rolled Rim Detail (Cross section circle approx)
        p.push(new THREE.Vector2(4.8, 14.1));
        p.push(new THREE.Vector2(4.9, 14.25));
        p.push(new THREE.Vector2(4.8, 14.4));
        p.push(new THREE.Vector2(4.5, 14.4)); // Top inner
        // Inner Wall slope down
        p.push(new THREE.Vector2(4.2, 14));
        p.push(new THREE.Vector2(2.6, 0.6));
        // Inner Bottom
        p.push(new THREE.Vector2(0, 0.6));
        
        return p;
    }, []);

    return (
        <latheGeometry args={[points, 128]} /> // 128 segs for ultra-smoothness
    );
};

// --- Logo Projection with Paper Blend ---
const LogoDecal = ({ logoUrl }: { logoUrl?: string }) => {
    const texture = useTexture(logoUrl || '/trashy_logo.png');
    
    return (
        <>
            {/* Front Logo */}
            <Decal 
                position={[0, 9.0, 3.6]} 
                rotation={[0, 0, 0]} 
                scale={[5.5, 5.5, 2.5]} 
            >
                <meshStandardMaterial 
                    map={texture} 
                    transparent 
                    polygonOffset 
                    polygonOffsetFactor={-10} 
                    roughness={0.5}
                    metalness={0.0}
                    toneMapped={false}
                />
            </Decal>

            {/* Back Logo (Rotated 180deg) */}
            <Decal 
                position={[0, 9.0, -3.6]} 
                rotation={[0, Math.PI, 0]} 
                scale={[5.5, 5.5, 2.5]} 
            >
                <meshStandardMaterial 
                    map={texture} 
                    transparent 
                    polygonOffset 
                    polygonOffsetFactor={-10} 
                    roughness={0.5}
                    metalness={0.0}
                    toneMapped={false}
                />
            </Decal>
        </>
    );
};

// --- Main Cup Model ---
const CoffeeCupModel = ({ logoUrl, color }: { logoUrl?: string, color?: string }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  // Subtle procedural paper texture via noise usually good, but plain standard material with right roughness works for clean look
  const material = useMemo(() => {
    return (
        <meshStandardMaterial 
          color={color || "#ffffff"} 
          roughness={0.8} // Paper is matte/rough
          metalness={0.0} // Paper has no metalness
          envMapIntensity={0.5} // Don't reflect too much world (it's paper)
        />
    );
  }, [color]);

  useFrame((state) => {
    if (meshRef.current) {
        // Very subtle idle animation
        meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
    }
  });

  return (
    <group scale={0.35} position={[0, -1.0, 0]}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <CupGeometry />
        {material}
        <LogoDecal logoUrl={logoUrl} />
      </mesh>
      
      {/* Lid: Black Plastic - Smooth & slightly shiny */}
      <mesh position={[0, 14.4, 0]} castShadow>
         {/* Simple lid shape approximation */}
         <cylinderGeometry args={[4.6, 4.9, 0.8, 64]} />
         <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.1} />
      </mesh>
      <mesh position={[0, 14.8, 0]} castShadow>
         <cylinderGeometry args={[4.2, 4.6, 0.5, 64]} />
         <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.1} />
      </mesh>
    </group>
  );
};

// --- Studio Scene ---
 export const CoffeeCupScene = ({ color, logoUrl, transparent = false }: { color?: string, logoUrl?: string, transparent?: boolean }) => {
   return (
     <div className="w-full h-full min-h-[400px]">
       <Canvas 
         shadows 
         camera={{ position: [0, 4, 14], fov: 35 }} // Zoomed out (Z: 14) for better fit
         dpr={[1, 1.5]} // Optimized for mobile performance (max 1.5x pixel ratio)
         gl={{ 
            preserveDrawingBuffer: true, 
            antialias: true, 
            toneMapping: THREE.ACESFilmicToneMapping, 
            alpha: true,
            powerPreference: "high-performance", // Force dGPU
            stencil: false, // Save memory/bandwidth (not needed for this scene)
            depth: true 
         }}  
       >
         {!transparent && <color attach="background" args={['#0B1121']} />} 
        
        {/* --- Studio Lighting Setup --- */}
        <ambientLight intensity={0.4} />
        
        {/* Key Light (Front-Right, Warm) */}
        <spotLight 
            position={[10, 10, 10]} 
            angle={0.2} 
            penumbra={1} 
            intensity={1.2} 
            color="#ffffff" 
            castShadow 
            shadow-bias={-0.0001}
        />
        
        {/* Fill Light (Left, Cool) */}
        <pointLight position={[-10, 0, -10]} intensity={0.6} color="#dbeafe" />
        
        {/* Rim Light (Back, Strong) - Separates object from background */}
        <spotLight position={[0, 10, -10]} intensity={1.5} color="#ffffff" />

        <Environment preset="city" blur={0.8} background={false} />

        <Suspense fallback={null}>
          <OrbitControls 
            minDistance={8} 
            maxDistance={20} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={1.5}
            dampingFactor={0.05}
          />
             <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2} floatingRange={[0, 0.5]}>
                <Center>
                    <CoffeeCupModel color={color} logoUrl={logoUrl} />
                </Center>
             </Float>
        </Suspense>

        <ContactShadows 
            position={[0, -3, 0]} 
            opacity={0.4} 
            scale={15} 
            blur={2.5} 
            far={4} 
            color="#000000" 
        />
      </Canvas>
    </div>
  );
};

export default CoffeeCupScene;
