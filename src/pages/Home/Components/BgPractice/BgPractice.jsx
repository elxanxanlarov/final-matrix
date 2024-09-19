import { useEffect, useRef } from 'react';

const BgPractice = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    // VANTA.NET-in asinxron şəkildə dinamik yüklənməsi
    const loadVanta = async () => {
      const THREE = await import('three'); // Three.js-i dinamik olaraq yükləyirik
      const VANTA = await import('vanta/dist/vanta.net.min'); // VANTA.NET-i dinamik olaraq yükləyirik

      VANTA.default({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        THREE, // Yüklənmiş THREE.js-i istifadə edirik
      });
    };

    loadVanta();

    return () => {
      if (vantaRef.current.vantaEffect) {
        vantaRef.current.vantaEffect.destroy(); // Komponent təmizləndikdə VANTA effektini məhv edirik
      }
    };
  }, []);

  return (
    <div ref={vantaRef} style={{ height: '100vh', width: '100%' }}>
      {/* VANTA fonu üçün təyin edilmiş div */}
    </div>
  );
};

export default BgPractice;
