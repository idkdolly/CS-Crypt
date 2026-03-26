import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      position: 'relative',
      zIndex: 10,
      width: '100%',
      padding: '4rem 2rem',
      backgroundColor: '#050505',
      backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
      backgroundSize: '10px 10px',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      boxSizing: 'border-box',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '3rem',
        color: '#fff',
      }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#fff' }}>Socials</h3>
          <a href="#" style={{ color: '#d1d5db', textDecoration: 'none', transition: 'color 0.2s', fontSize: '0.95rem' }}>LinkedIn / @ieeecsmuj ↗</a>
          <a href="#" style={{ color: '#d1d5db', textDecoration: 'none', transition: 'color 0.2s', fontSize: '0.95rem' }}>Instagram / @ieee_csmuj ↗</a>
          <a href="#" style={{ color: '#d1d5db', textDecoration: 'none', transition: 'color 0.2s', fontSize: '0.95rem' }}>WhatsApp / @ieeecsmuj ↗</a>
          <a href="#" style={{ color: '#d1d5db', textDecoration: 'none', transition: 'color 0.2s', fontSize: '0.95rem' }}>GitHub / @IEEECSMUJ ↗</a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#fff' }}>Contact Us</h3>
          
          <div style={{ marginBottom: '1rem', color: '#d1d5db', lineHeight: '1.5', fontSize: '0.95rem' }}>
            <div style={{ marginBottom: '0.2rem' }}>+91 98713 40076</div>
            <div style={{ marginBottom: '0.2rem' }}>Samaksh Gupta</div>
            <div>Chairperson</div>
          </div>
          
          <div style={{ color: '#d1d5db', lineHeight: '1.5', fontSize: '0.95rem' }}>
            <div style={{ marginBottom: '0.2rem' }}>+91 88605 14740</div>
            <div style={{ marginBottom: '0.2rem' }}>Tamanna Yadav</div>
            <div>Vice Chairperson</div>
          </div>
      </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#fff' }}>Links</h3>
          <a href="#" style={{ color: '#d1d5db', textDecoration: 'none', transition: 'color 0.2s', fontSize: '0.95rem' }}>MUJ Official Website</a>
          <a href="#" style={{ color: '#d1d5db', textDecoration: 'none', transition: 'color 0.2s', fontSize: '0.95rem' }}>IEEE Official Website</a>
          <a href="#" style={{ color: '#d1d5db', textDecoration: 'none', transition: 'color 0.2s', fontSize: '0.95rem' }}>IEEE Computer Society</a>
          <a href="#" style={{ color: '#d1d5db', textDecoration: 'none', transition: 'color 0.2s', fontSize: '0.95rem' }}>IEEE MUJ Website</a>
          <a href="#" style={{ color: '#d1d5db', textDecoration: 'none', transition: 'color 0.2s', fontSize: '0.95rem' }}>IEEE Global Membership</a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#fff' }}>Address</h3>
          <div style={{ color: '#d1d5db', lineHeight: '1.5', fontSize: '0.95rem' }}>
            <div style={{ marginBottom: '0.2rem' }}>Manipal University</div>
            <div style={{ marginBottom: '0.2rem' }}>Jaipur, Dehmi Kalan,</div>
            <div style={{ marginBottom: '0.2rem' }}>Near GVK Toll Plaza,</div>
            <div style={{ marginBottom: '0.2rem' }}>Jaipur-Ajmer</div>
            <div style={{ marginBottom: '0.2rem' }}>Expressway, Jaipur,</div>
            <div>Rajasthan 303007</div>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
