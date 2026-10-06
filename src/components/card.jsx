import React from 'react';

const Card = ({ name, role }) => {
  return (
    <div style={{ margin: '15px 0' }}>
      <h4 style={{ margin: '4px 0', fontSize: '1.1rem' }}>Nama: {name}</h4>
      <p style={{ margin: 0, color: '#aaa', fontSize: '0.95rem' }}>Pekerjaan: {role}</p>
    </div>
  );
};

export default Card;