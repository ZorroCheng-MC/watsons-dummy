import React from 'react';

const TestChatbot: React.FC = () => {
  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '60px',
      height: '60px',
      backgroundColor: '#ff0000',
      color: 'white',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      fontWeight: 'bold',
      zIndex: 9999,
      border: '3px solid #ffffff',
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      cursor: 'pointer'
    }}>
      CHAT
    </div>
  );
};

export default TestChatbot;