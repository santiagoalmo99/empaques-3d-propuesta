import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  PresentationControls, 
  Environment, 
  ContactShadows,
  useTexture,
  Float,
  Center,
  MeshTransmissionMaterial
} from '@react-three/drei';
import * as THREE from 'three';

// Realistic 12oz Cup Geometry
const CoffeeCupModel = ({ materialType = 'kraft', logoUrl }: { materialType?: string, logoUrl?: string }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  // Simulated Geometry for now (since we don't have the .glb yet)
  // Standard 12oz Cup dimensions: Height ~110mm, Top Radius ~45mm, Bottom Radius ~30mm
  
  const logoTexture = useTexture(logoUrl || 'https://cdn-icons-png.flaticon.com/512/9333/9333999.png');

  useFrame(() => {
    if (meshRef.current) {
      // Gentle floating animation
      // meshRef.current.rotation.y += 0.005;
    }
  });

  const material = useMemo(() => {
    if (materialType === 'kraft') {
      return (
        <meshStandardMaterial 
          color="#d4a574" 
          roughness={0.9} 
          metalness={0.05}
          map={logoTexture}
        />
      );
    }
    return (
      <MeshTransmissionMaterial 
        thickness={0.5}
        roughness={0.1}
        transmission={0.9}
        ior={1.2}
        chromaticAberration={0.02}
        anisotropy={0.1}
      />
    );
  }, [materialType, logoTexture]);

  return (
    <group>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Center>
          <mesh ref={meshRef} castShadow receiveShadow>
            {/* Cylinder with slightly tapered radius for 12oz cup shape */}
            <cylinderGeometry args={[1.5, 1.1, 4, 32]} />
            {material}
          </mesh>
          <mesh position={[0, 2.05, 0]}>
             <cylinderGeometry args={[1.6, 1.5, 0.3, 32]} />
             <meshStandardMaterial color="#f8fafc" roughness={0.3} />
          </mesh>
        </Center>
      </Float>
    </group>
  );
};

export const CoffeeCupScene = () => {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
        <color attach="background" args={['#020617']} />
        
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Environment preset="city" />

        <Suspense fallback={null}>
          <PresentationControls
            global
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
             <CoffeeCupModel />
          </PresentationControls>
        </Suspense>

        <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={10} blur={2.5} far={10} />
      </Canvas>
    </div>
  );
};

export default CoffeeCupScene;
