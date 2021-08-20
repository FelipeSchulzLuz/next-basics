export default function question(req, res) {
    if (req.method === 'GET') {
        const id = req.query.id;
        res.status(200).json({
            id,
            enunciable: 'This is a sample question?',
            answers: ['This is the answer.', 'Other answer', 'Another answer']
        })
    } else {
        res.status(405).send('Method not allowed');
    }
}