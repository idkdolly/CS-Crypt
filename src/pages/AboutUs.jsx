import React from 'react';

export default function AboutUsPage() {
  const [isMobile, setIsMobile] = React.useState(typeof window !== 'undefined' && window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: 'transparent',
      color: '#ffffff',
      padding: isMobile ? '6rem 1rem 2rem' : '8rem 2rem 4rem',
      boxSizing: 'border-box',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        maxWidth: '800px',
        width: '100%',
        padding: isMobile ? '1.5rem' : '4rem 3rem',
        borderRadius: isMobile ? '20px' : '30px',
        backgroundColor: 'rgba(20, 20, 25, 0.2)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: isMobile ? '1.75rem' : '3rem', fontWeight: 'bold', margin: '0 0 1rem', color: '#ffa212' }}>
          IEEE Computer Society
        </h1>
        <p style={{ fontSize: isMobile ? '0.95rem' : '1.1rem', lineHeight: '1.7', color: '#e5e7eb', marginBottom: '1rem', textAlign: 'justify' }}>
          “Serving computing at its best with inclusion and diversity” is the prime motto of the IEEE Computer Society. This society was created keeping in mind IEEE’s continued commitment to providing options at best. The IEEE Computer Society is driven by the central goals of equity, diversity, inclusion, and yearn to serve computing at its perfection.
        </p>
        <p style={{ fontSize: isMobile ? '0.95rem' : '1.1rem', lineHeight: '1.7', color: '#e5e7eb', marginBottom: '1rem', textAlign: 'justify' }}>
        </p>
        <p style={{ fontSize: isMobile ? '0.95rem' : '1.1rem', lineHeight: '1.7', color: '#e5e7eb', marginBottom: '1rem', textAlign: 'justify' }}>
        </p>
        <p style={{ fontSize: isMobile ? '0.95rem' : '1.1rem', lineHeight: '1.7', color: '#e5e7eb', margin: '0', textAlign: 'justify' }}>
          “Computer science is the operating system for all innovations.” At IEEE CS, we look at it similarly, trying to make a better world by working as a team.
        </p>

      </div>
    </div>
  );
}
