function Button({ label, onClick, color = '#0284c7' }) {
  return (
    <button 
      onClick={onClick} 
      style={{
        padding: '10px 18px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: 'bold',
        marginRight: '10px'
      }}
    >
      {label}
    </button>
  );
}

export default Button;