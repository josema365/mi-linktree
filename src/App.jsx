import React from 'react';
import miFotoLocal from './assets/yop.jpeg';

function App() {
  // Aquí puedes personalizar tus datos fácilmente
  const datosUsuario = {
    nombre: "JOSE MANUEL HUANCA TITO",
    carrera: "Licenciatura en Informática",
    universidad: "Universidad Mayor de San Andrés (UMSA)",
    fotoPerfil: miFotoLocal, // Foto temporal de muestra
    descripcion: "Estudiante apasionado por el desarrollo de software y la tecnología. Creando soluciones digitales eficientes.",
    enlaces: [
      { titulo: "Mi Perfil de LinkedIn", url: "https://linkedin.com", color: "#0077B5" },
      { titulo: "Mi GitHub (Proyectos)", url: "https://github.com/josema365", color: "#24292e" },
      { titulo: "Contactame por WhatsApp", url: "https://wa.me/59176546335", color: "#25D366" }, // Reemplaza por tu número
    ]
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0f172a', // Fondo oscuro moderno
      color: '#f8fafc',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px',
      fontFamily: "'Segoe UI', Roboto, sans-serif"
    }}>
      {/* Contenedor Principal */}
      <div style={{ maxWidth: '450px', width: '100%', textAlign: 'center' }}>
        
        {/* Foto de Perfil */}
        <img 
          src={datosUsuario.fotoPerfil} 
          alt="Foto de perfil" 
          style={{
            width: '110px',
            height: '110px',
            borderRadius: '50%',
            border: '3px solid #38bdf8',
            objectFit: 'cover',
            marginBottom: '16px'
          }}
        />

        {/* Información del Estudiante */}
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 8px 0' }}>{datosUsuario.nombre}</h1>
        <p style={{ fontSize: '15px', color: '#38bdf8', margin: '0 0 4px 0', fontWeight: '500' }}>{datosUsuario.carrera}</p>
        <p style={{ fontSize: '13px', color: '#94a3b8', margin: '0 0 16px 0' }}>{datosUsuario.universidad}</p>
        <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: '1.5', marginBottom: '32px' }}>{datosUsuario.descripcion}</p>

        {/* Lista de Enlaces */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {datosUsuario.enlaces.map((enlace, index) => (
            <a 
              key={index}
              href={enlace.url} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'block',
                padding: '14px',
                backgroundColor: enlace.color,
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '15px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              {enlace.titulo}
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;