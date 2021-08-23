export default function handler(req, res) {
    res.status(200).json([
        { id: 1, name: 'Caneta', price: 10 },
        { id: 2, name: 'Lápis', price: 5 },
        { id: 3, name: 'Borracha', price: 2 },
        { id: 4, name: 'Caderno', price: 15 },
        { id: 5, name: 'Estojo', price: 20 },
        { id: 6, name: 'Livro', price: 25 },
        { id: 7, name: 'Mochila', price: 50 },
        { id: 8, name: 'Apontador', price: 10 },
        { id: 9, name: 'Pincel', price: 5 },
        { id: 10, name: 'Borracha', price: 2 },
        { id: 11, name: 'Fita adesiva', price: 15 },
    ]);
}