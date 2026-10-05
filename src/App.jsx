import Header from "./components/Header";
import Footer from "./components/footer";
import Button from "./components/Button"; // 1. Import komponen Button

function App() {
  const handleClick = () => {
    alert("Tombol berhasil diklik!");
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Tombol Sederhana menggantikan Search Bar */}
      <div style={{ marginBottom: '20px' }}>
        <Button 
          label="Klik Saya" 
          onClick={handleClick} 
        />
      </div>

      <Header />
      <Footer />
    </div>
  );
}

export default App;