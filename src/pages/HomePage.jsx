import React, { Component, useState } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Card from '../components/card';
import Footer from '../components/footer';

// Class Component
class ClassSection extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.4rem', marginBottom: '8px', color: '#111' }}>
          Selamat Datang di React (Class)
        </h1>
        <h3 style={{ margin: '8px 0 4px', color: '#222' }}>Profil Pengguna</h3>
        <p style={{ color: '#666', fontSize: '0.9rem', margin: 0 }}>
          Tampilan menggunakan Class Component terpisah.
        </p>
      </div>
    );
  }
}

// Function Component & Main Layout
const HomePage = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div style={{ 
      backgroundColor: '#ffffff', 
      color: '#212529', 
      minHeight: '100vh', 
      padding: '20px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* Header */}
      <Header />

      {/* Section Class Component */}
      <ClassSection />

      {/* Section Function Component */}
      <div style={{ textAlign: 'center', marginTop: '15px' }}>
        <h3 style={{ margin: '5px 0', color: '#222' }}>Hello dari Function Component!</h3>
        <p style={{ color: '#666', fontSize: '0.85rem', margin: '4px 0' }}>
          Ini dibuat dalam 1 file menggunakan Function Component.
        </p>
        <p style={{ color: '#666', fontSize: '0.85rem', margin: '4px 0' }}>
          © 2026 Belajar ReactJS
        </p>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', margin: '10px 0' }}>
          <Button text="Simpan Data" />
          <Button text="Edit Data" />
        </div>

        {/* User Profile Cards */}
        <Card name="Budi Warsito" role="Frontend Developer" />
        <Card name="Siti Rahma" role="UI/UX Designer" />

        {/* Counter Component */}
        <div style={{ 
          backgroundColor: '#f0f0f0', 
          border: '1px solid #ccc',
          padding: '6px 14px', 
          borderRadius: '4px', 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '8px',
          margin: '12px 0'
        }}>
          <span style={{ fontWeight: 'bold', color: '#111' }}>Counter: {counter}</span>
          <Button text="Tambah" onClick={() => setCounter(counter + 1)} />
          <Button text="Kurang" onClick={() => setCounter(counter - 1)} />
        </div>

        {/* Status & Controls */}
        <p style={{ fontSize: '0.85rem', color: '#555', margin: '4px 0' }}>
          Status: Idle | Total: 0
        </p>
        <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', margin: '8px 0' }}>
          <Button text="Tambah Angka" />
          <Button text="Reset" />
        </div>

        {/* Form Inputs */}
        <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', margin: '12px 0' }}>
          <input 
            type="text" 
            placeholder="Nama Transaksi" 
            style={{ 
              padding: '6px 10px', 
              backgroundColor: '#fff', 
              border: '1px solid #ccc', 
              borderRadius: '4px',
              color: '#333' 
            }} 
          />
          <input 
            type="email" 
            placeholder="Email" 
            style={{ 
              padding: '6px 10px', 
              backgroundColor: '#fff', 
              border: '1px solid #ccc', 
              borderRadius: '4px',
              color: '#333' 
            }} 
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;