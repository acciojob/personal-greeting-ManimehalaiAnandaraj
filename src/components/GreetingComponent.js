import React, { useState } from 'react';

const GreetingComponent = () => {
  const [name, setName] = useState('');

  return (
    <div style={styles.container}>
      <h2>Enter your name:</h2>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />
      {name && <h3 style={styles.greeting}>Hello, {name}!</h3>}
    </div>
  );
};

// Optional styling
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '300px',
    margin: 'auto',
  },
  input: {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    marginTop: '10px',
  },
  greeting: {
    marginTop: '20px',
    color: '#333',
  },
};

export default GreetingComponent;
