function randomNumber(min = 1, max = 100000) {
    return parseInt(Math.random() * (max - min + 1) + min);
}


export default function handler(req, res) {
    res.status(200).json([
        { id: randomNumber(), name: 'Caneta', price: 10 },
        { id: randomNumber(), name: 'Lápis', price: 5 },
        { id: randomNumber(), name: 'Borracha', price: 2 },
        { id: randomNumber(), name: 'Caderno', price: 15 },
        { id: randomNumber(), name: 'Estojo', price: 20 },
        { id: randomNumber(), name: 'Livro', price: 25 },
        { id: randomNumber(), name: 'Mochila', price: 50 },
        { id: randomNumber(), name: 'Apontador', price: 10 },
        { id: randomNumber(), name: 'Pincel', price: 5 },
        { id: randomNumber(), name: 'Borracha', price: 2 },
        { id: randomNumber(), name: 'Fita adesiva', price: 15 },
    ]);
}