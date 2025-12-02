import React, { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  const styles = {
    header: { backgroundColor: '#d35400', color: 'white', padding: '20px', textAlign: 'center', fontFamily: 'Arial' },
    grid: { display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '20px', justifyContent: 'center' },
    card: { border: '1px solid #ddd', borderRadius: '8px', padding: '15px', width: '250px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', fontFamily: 'Arial' },
    button: { backgroundColor: '#25D366', color: 'white', border: 'none', padding: '10px', width: '100%', cursor: 'pointer', marginTop: '10px', borderRadius: '5px', fontWeight: 'bold' },
    price: { color: 'green', fontWeight: 'bold', fontSize: '18px' },
    loading: { textAlign: 'center', padding: '20px', fontSize: '20px', fontFamily: 'Arial' }
  };

  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Erro ao buscar produtos:', error));
  }, []);

  return (
    <div>
      <header style={styles.header}>
        <h1>🏺 Vitrine de Artesanato</h1>
        <p>Valorizando a arte da nossa comunidade</p>
      </header>

      <div style={styles.grid}>
        {products.length === 0 ? <p style={styles.loading}>Carregando produtos... (Verifique se o Backend está rodando!)</p> : null}

        {products.map(produto => (
          <div key={produto.id} style={styles.card}>
            <img src={produto.image} alt={produto.title} style={{width: '100%', borderRadius: '5px', height: '150px', objectFit: 'cover'}} />
            <h3>{produto.title}</h3>
            <p>Artesão: {produto.artisan}</p>
            <p style={styles.price}>R$ {produto.price.toFixed(2)}</p>
            <button style={styles.button} onClick={() => alert(`Olá! Tenho interesse no ${produto.title}.`)}>
              💬 Comprar no Zap
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
