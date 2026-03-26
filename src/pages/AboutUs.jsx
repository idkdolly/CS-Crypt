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
          IEEE Computer Society
        </h1>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e5e7eb', marginBottom: '1.5rem', textAlign: 'justify' }}>
          “Serving computing at its best with inclusion and diversity” is the prime motto of the IEEE Computer Society. This society was created keeping in mind IEEE’s continued commitment to providing options at best. The IEEE Computer Society is driven by the central goals of equity, diversity, inclusion, and yearn to serve computing at its perfection.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e5e7eb', marginBottom: '1.5rem', textAlign: 'justify' }}>
          With an intent to expand the IEEE’s reach and learnings, this society was started a year back in early 2020. Since then, society has tried every possible course of action by conducting diverse events such as webinars, competitions, workshops, and mentorship programs to set a goal for the young achievers. The members of IEEE CS have been skilled and earned minimal expertise in roughly all possible sub-sections of CS via our accelerator program. The senior student mentors steer them on each stage they take and deliver them with the professional material for further reference.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e5e7eb', marginBottom: '1.5rem', textAlign: 'justify' }}>
          We aim to proactively support diversity and inclusion by being the premier source for information, inspiration, and collaboration in computer science and engineering. Connecting members on campus, this IEEE Computer Society empowers the students who wish to advance in technology by delivering tools at all stages of their professional careers.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e5e7eb', margin: '0', textAlign: 'justify' }}>
          “Computer science is the operating system for all innovations.” At IEEE CS, we look at it similarly, trying to make a better world by working as a team.
        </p>

      </div>
    </div>
  );
}
