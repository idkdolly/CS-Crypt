export default function AboutUsPage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: 'transparent',
      color: '#ffffff',
      padding: '8rem 2rem 4rem',
      boxSizing: 'border-box',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        maxWidth: '800px',
        width: '100%',
        padding: '4rem 3rem',
        borderRadius: '30px',
        backgroundColor: 'rgba(20, 20, 25, 0.2)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '0 0 1.5rem', color: '#ffa212' }}>
          About CS-Crypt
        </h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#ffffffff', marginBottom: '1.5rem' }}>
          content idk?
        </p>

      </div>
    </div>
  );
}
