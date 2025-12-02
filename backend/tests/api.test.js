// backend/tests/api.test.js
const request = require('supertest');
const app = require('../src/server'); // Certifique-se de exportar 'app' no server.js

describe('API Vitrine', () => {
    it('GET /api/products deve retornar status 200 e lista de produtos', async () => {
        const res = await request(app).get('/api/products');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body.length).toBeGreaterThan(0);
    });
});