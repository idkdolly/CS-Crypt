import TiltedCard from '../utils/titlecard.jsx';
import { Github, Linkedin } from 'lucide-react';

const TEAM = [
  { name: 'Dolly Srivastava', role: 'Project Head', image: '/src/assets/Dolly srivastava.jpg', github: 'https://github.com/idkdolly', linkedin: 'https://www.linkedin.com/in/dollysrivastava' },
  { name: 'Anshuman Singh', role: 'Project Head', image: '/src/assets/Anshuman Singh.jpg', github: '', linkedin: '' },
  { name: 'Sarthak Malhotra', role: 'Cipher Team', image: '/src/assets/sarthak malhotra.jpeg', github: 'https://github.com/Sarthak-Malhotra', linkedin: 'https://www.linkedin.com/in/sarthak-will-work/'},
  { name: 'Yuvika', role: 'Cipher Team', image: '/src/assets/yuvika.jpeg', github: 'https://github.com/YuvikaSachdeva', linkedin: 'https://www.linkedin.com/in/yuvika-sachdeva-82a391295/' },
  { name: 'Kashvi Mohta', role: 'Cipher Team', image: '/src/assets/kashvi.jpeg', github: 'https://github.com/kash1007', linkedin: '' },
  { name: 'Dwijesh Chilukuri', role: 'UI/UX', image: '/src/assets/Dwijesh Chilukuri.png', github: 'https://github.com/just-dwijesh', linkedin: 'https://www.linkedin.com/in/dwijesh-chilukuri-803177372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
  { name: 'Ananaya Mishra', role: 'UI/UX', image: '/src/assets/ananya mishra.jpeg', github: '', linkedin: 'https://www.linkedin.com/in/ananya-mishra-87930a3a3/' },
  { name: 'Amisha Upadhyay', role: 'UI/UX', image: '/src/assets/Amisha Upadhyay.jpg', github: 'https://github.com/amishau209-carat', linkedin: 'https://www.linkedin.com/in/amisha-upadhyay-402796378/' },
  { name: 'Tanishq B', role: 'UI/UX', image: '/src/assets/Tanishq B.png', github: 'https://github.com/TanishqBhatnagar312', linkedin: 'https://www.linkedin.com/in/tanishq-bhatnagar-2b9408349' },
  { name: 'Aditi Rai', role: 'UI/UX', image: '/src/assets/Aditi Rai.jpg', github: 'https://github.com/aditirai14002', linkedin: '' },
  { name: 'Anukriti', role: 'UI/UX', image: '/src/assets/Anukriti.jpg', github: 'anukritiverma236-hub', linkedin: 'https://www.linkedin.com/in/anukriti-verma-b3177a376' },
  { name: 'Akshita Dhiman', role: 'UI/UX', image: '/src/assets/Akshita Dhiman.jpeg', linkedin: 'https://www.linkedin.com/in/akshita-dhiman-29630a343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
];

export default function TeamPage() {
  const renderMember = (member) => (
    <TiltedCard
      key={member.name}
      imageSrc={member.image}
      altText={member.name}
      captionText={member.name}
      containerHeight="320px"
      containerWidth="240px"
      imageHeight="320px"
      imageWidth="240px"
      displayOverlayContent={true}
      overlayContent={
        <div style={{ width: '240px', height: '320px', position: 'relative' }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
            borderRadius: '15px'
          }} />

          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            textAlign: 'center',
            padding: '1.5rem 0.75rem',
            zIndex: 10,
            pointerEvents: 'none'
          }}>
            <h2 style={{ margin: 0, fontSize: '1rem', color: '#ffffff', textShadow: '0 2px 10px rgba(0,0,0,0.8)', lineHeight: '1.2', wordWrap: 'break-word', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
              {member.name}
            </h2>
            <p style={{ margin: '0.25rem 0 0', color: '#ffa212', fontSize: '0.875rem', fontWeight: 'bold', textShadow: '0 2px 5px rgba(0,0,0,0.8)' }}>
              {member.role}
            </p>
          </div>

          <div style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            display: 'flex',
            gap: '0.5rem',
            zIndex: 20,
            pointerEvents: 'auto'
          }}>
            {member.github && (
              <a
                href={`https://github.com/${member.github.replace('https://github.com/', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 162, 18, 0.9)',
                  borderRadius: '50%',
                  color: 'black',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 162, 18, 1)';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 162, 18, 0.9)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <Github size={18} />
              </a>
            )}

            {member.linkedin && (
              <a
                href={`https://linkedin.com/in/${member.linkedin.replace('https://linkedin.com/in/', '').replace('https://www.linkedin.com/in/', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 162, 18, 0.9)',
                  borderRadius: '50%',
                  color: 'black',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 162, 18, 1)';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 162, 18, 0.9)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <Linkedin size={18} />
              </a>
            )}
          </div>
        </div>
      }
    />
  );

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: 'transparent',
      color: '#ffffff',
      padding: '8rem 2rem 4rem',
      boxSizing: 'border-box',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ fontSize: '3rem', margin: 30, fontWeight: 'bold' }}>Our Awesome Team</h1>
        <p style={{ color: '#9ca3af', marginTop: '1rem', fontSize: '1.25rem', maxWidth: '600px', textAlign: 'center', backgroundColor: 'black', padding: "16px" }}>
          We are a group of passionate developers, designers, and thinkers building the future, one pixel at a time.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '2.5rem',
        maxWidth: '550px',
        margin: '0 auto 3rem',
        width: '100%',
        justifyItems: 'center',
        alignItems: 'center'
      }}>
        {TEAM.filter(member => member.role === 'Project Head').map(renderMember)}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2.5rem',
        maxWidth: '900px',
        margin: '0 auto',
        width: '100%',
        justifyItems: 'center'
      }}>
        {TEAM.filter(member => member.role !== 'Project Head').map(renderMember)}
      </div>
    </div>
  );
}
