const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// FOTOS ALEATÓRIAS (Sem trava)
// Dica: Atualize a página (F5) até virem fotos bonitas!
const produtos = [
    { 
        id: 1, 
        title: 'Vaso de Cerâmica', 
        price: 45.00, 
        artisan: 'Dona Maria', 
        // Busca: Cerâmica, barro
        image: 'https://oprodutorgarden.com.br/wp-content/uploads/2023/01/ceramica.png' 
    },
    { 
        id: 2, 
        title: 'Tapete de Crochê', 
        price: 120.00, 
        artisan: 'Sr. João', 
        // Busca: Lã, fio (mais bonito que tapete genérico)
        image: 'https://tapetedecroche.com.br/wp-content/uploads/2022/05/tapete-de-croche-de-barbante.jpg' 
    },
    { 
        id: 3, 
        title: 'Boneca de Pano', 
        price: 35.00, 
        artisan: 'Ana Souza', 
        // Busca: Pelúcia (garante que seja fofo e não assustador)
        image: 'https://cdn.awsli.com.br/600x700/1779/1779395/produto/299678878/97-4ckrwgy4zi.jpg' 
    },
    { 
        id: 4, 
        title: 'Cesta de Palha', 
        price: 25.00, 
        artisan: 'Pedro Silva', 
        // Busca: Palha, vime
        image: 'https://images.tcdn.com.br/img/img_prod/1289191/fruteira_de_palha_30cm_unidade_1639_1_6b09562c46eab79292f5ae983f2834f9.jpeg' 
    }
];

app.get('/', (req, res) => res.send('API Vitrine Rodando!'));
app.get('/api/products', (req, res) => res.json(produtos));

module.exports = app;

if (require.main === module) {
    const PORT = 3001;
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
}