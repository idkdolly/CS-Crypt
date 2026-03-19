import TiltedCard from '../utils/titlecard.jsx';

const TEAM = [
  { name: 'Dolly Srivastava', role: 'Project Head', image: '/src/assets/Dolly srivastava.jpg', github: 'https://github.com/idkdolly' },
  { name: 'Sarthak Malhotra', role: 'Cipher Team', image: '/src/assets/sarthak malhotra.jpeg', github: 'https://github.com/Sarthak-Malhotra' },
  { name: 'Akshita Dhiman', role: 'UI/UX', image: '/src/assets/Akshita Dhiman.jpeg' },
  { name: 'Tanishq B', role: 'UI/UX', image: '/src/assets/Tanishq B.png', github: 'https://github.com/TanishqBhatnagar312' },
  { name: 'Yuvika', role: 'Cipher Team', image: '/src/assets/yuvika.jpeg', github: 'https://github.com/YuvikaSachdeva' },
  { name: 'Amisha Upadhyay', role: 'UI/UX', image: '/src/assets/Amisha Upadhyay.jpg', github: 'https://github.com/amishau209-carat' },
  { name: 'Dwijesh Chilukuri', role: 'UI/UX', image: '/src/assets/Dwijesh Chilukuri.png', github: 'https://github.com/just-dwijesh' },
  { name: 'Anukriti', role: 'UI/UX', image: '/src/assets/Anukriti.jpg', github: 'anukritiverma236-hub' },
  { name: 'Kashvi Mohta', role: 'Cipher Team', image: '/src/assets/kashvi.jpeg', github: 'https://github.com/kash1007' },
  { name: 'Anshuman Singh', role: 'Project Head', image: '/src/assets/Anshuman Singh.jpg', github: 'https://github.com/anshuman.singh070' },
  { name: 'Aditi Rai', role: 'UI/UX', image: '/src/assets/Aditi Rai.jpg', github: 'https://github.com/aditirai14002' },
  { name: 'Ananaya Mishra', role: 'UI/UX', image: '/src/assets/Aditi Rai.jpg', github: 'https://github.com/aditirai14002' },
];

export default function TeamPage() {
  const renderMember = (member) => (
    <TiltedCard
      key={member.name}
      imageSrc={member.image}
      altText={member.name}
      captionText={member.name}
      containerHeight="240px"
      containerWidth="240px"
      imageHeight="240px"
      imageWidth="240px"
      displayOverlayContent={true}
      overlayContent={
        <div style={{ width: '240px', height: '240px', position: 'relative' }}>
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
            padding: '2rem 1rem',
            zIndex: 10,
            pointerEvents: 'none'
          }}>
            <h2 style={{ margin: '0 0 0.25rem 0', fontSize: '1.75rem', color: '#ffffff', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
              {member.name}
            </h2>
            <p style={{ margin: 0, color: '#ffa212', fontSize: '1.125rem', fontWeight: 'bold', textShadow: '0 2px 5px rgba(0,0,0,0.8)' }}>
              {member.role}
            </p>
          </div>

          {member.github && (
            <a
              href={`https://github.com/${member.github.replace('https://github.com/', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                zIndex: 20,
                pointerEvents: 'auto',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255, 162, 18, 0.9)',
                borderRadius: '50%',
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
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-1.02-2.44l.06-.06a3.37 3.37 0 0 0-6.36-1.65 3.37 3.37 0 0 0-3.36 0l.06.06a3.37 3.37 0 0 0-1.02 2.44v3.87m8-5s.87-1.5-2-1.5-2.13 1.5-2.13 1.5M9 14a3 3 0 0 1-3-3 3 3 0 1 1 6 0 3 3 0 0 1-3 3z" />
              </svg>
            </a>
          )}
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
        <p style={{ color: '#9ca3af', marginTop: '1rem', fontSize: '1.25rem', maxWidth: '600px', textAlign: 'center' }}>
          We are a group of passionate developers, designers, and thinkers building the future, one pixel at a time.
        </p>
      </div>

      {/* Project Heads Row */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2.5rem',
        maxWidth: '900px',
        margin: '0 auto 2.5rem',
        width: '100%'
      }}>
        {TEAM.filter(member => member.role === 'Project Head').map(renderMember)}
      </div>

      {/* Other Team Members Row */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2.5rem',
        maxWidth: '900px',
        margin: '0 auto',
        width: '100%'
      }}>
        {TEAM.filter(member => member.role !== 'Project Head').map(renderMember)}
      </div>
    </div>
  );
}
