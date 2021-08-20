const persons = [
    {
        name: 'John',
        age: 20
    },
    {
        name: 'Jane',
        age: 21
    },
    {
        name: 'Jack',
        age: 22
    },
    {
        name: 'Paul',
        age: 32
    },
    {
        name: 'Mark',
        age: 42
    }
]


export default function form(req, res) {
    if (req.method === 'POST') {
        post(req, res)
    } else if (req.method === 'GET') {
        get(req, res)
    }
    else {
        res.status(405).send()
    }
}


function post(req, res) {
    const person = JSON.parse(req.body)
    persons.push(person)
    res.status(200).send()
}

function get(req, res) {
    res.status(200).json(persons)
}