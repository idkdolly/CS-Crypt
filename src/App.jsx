import { useState, useEffect } from 'react'
import './App.css'
import Button from './components/Button'
import HomePage from './pages/Home'
import TeamPage from './pages/team'
import AboutUsPage from './pages/AboutUs'
import EncryptDecryptPage from './pages/EncryptDecrypt'
import FAQs from './components/faqs'
import PixelBlast from './utils/pixelblast'
import Footer from './utils/Footer'
import { useRef } from 'react'

const FloatingHeart = ({ startX, startY, onComplete }) => {
  const heartRef = useRef(null);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    let animationFrame;
    let startTime = Date.now();
    const duration = 1000;
    const phase = Math.random() * Math.PI * 2;
    const amplitude = 30 + Math.random() * 50; 
    const freq = 0.003 + Math.random() * 0.002; 

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = elapsed / duration;

      if (progress >= 1) {
        if (onCompleteRef.current) onCompleteRef.current();
        return;
      }

      if (heartRef.current) {
        const currentY = progress * 300; 
        const currentX = Math.sin(elapsed * freq + phase) * amplitude;
        const opacity = progress > 0.8 ? 1 - ((progress - 0.8) / 0.2) : 1;
        const rotation = Math.cos(elapsed * freq + phase) * 25;

        heartRef.current.style.transform = `translate(-50%, -50%) translate(${currentX}px, ${currentY}px) rotate(${rotation}deg)`;
        heartRef.current.style.opacity = opacity;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [startX, startY]);

  return (
    <div
      ref={heartRef}
      style={{
        position: 'fixed',
        top: startY,
        left: startX,
        fontSize: '2rem',
        zIndex: 9999,
        pointerEvents: 'none',
        willChange: 'transform, opacity'
      }}
    >
      ❤️
    </div>
  );
};

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    return localStorage.getItem('currentPage') || 'home'
  })
  const [hearts, setHearts] = useState([])
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768)

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage)
  }, [currentPage])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case 'encrypt':
        return <EncryptDecryptPage />
      case 'about':
        return <AboutUsPage />
      case 'team':
        return <TeamPage />
      case 'home':
      default:
        return <HomePage />
    }
  }

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', color: 'white', position: 'relative' }}>

      <PixelBlast
        color="#ffa212"
        variant="square"
        pixelSize={4}
        speed={0.4}
        enableRipples={true}
        style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}
      />

      <nav style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: isMobile ? '0.75rem 1rem' : '1.25rem 2.5rem',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderTop: '1px solid rgba(255, 255, 255, 0.3)',
        backgroundColor: 'rgba(20, 20, 25, 0.3)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        position: 'fixed',
        width: isMobile ? '100%' : 'max-content',
        left: isMobile ? '0' : '50%',
        transform: isMobile ? 'none' : 'translateX(-50%)',
        top: isMobile ? '0' : '25px',
        borderRadius: isMobile ? '0' : '100px',
        zIndex: 50,
        boxShadow: '0 20px 40px rgba(0,0,0,0.6), inset 0 2px 5px rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{ display: 'flex', gap: isMobile ? '0.5rem' : '2rem', alignItems: 'center', flexWrap: 'wrap', width: '100%', justifyContent: 'center' }}>
          <Button onClick={() => setCurrentPage('home')}>{isMobile ? 'Home' : 'Home'}</Button>
          <Button scramble onClick={() => setCurrentPage('encrypt')}>{isMobile ? 'Encrypt' : 'Encrypt/Decrypt'}</Button>
          <Button onClick={(e) => {
            setCurrentPage('about');
            if (e && e.clientX) {
              const newHeart = { id: Date.now() + Math.random(), x: e.clientX, y: e.clientY };
              setHearts([newHeart]);
            }
          }}>{isMobile ? 'About' : 'About Us'}</Button>
          <Button onClick={() => setCurrentPage('team')}>{isMobile ? 'Team' : 'Team'}</Button>
        </div>
      </nav>

      <main style={{ minHeight: '100vh', width: '100%', position: 'relative', zIndex: 10 }}>
        {renderPage()}
      </main>

      {currentPage === 'home' && (
        <div style={{ position: 'relative', zIndex: 10, width: '100%', padding: isMobile ? '1.5rem' : '2rem' }}>
          <FAQs />
        </div>
      )}

      {hearts.map(heart => (
        <FloatingHeart 
          key={heart.id} 
          startX={heart.x} 
          startY={heart.y} 
          onComplete={() => setHearts(prev => prev.filter(h => h.id !== heart.id))} 
        />
      ))}

      <Footer />
    </div>
  )
}

export default App


