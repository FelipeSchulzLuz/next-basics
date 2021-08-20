// Multiplos parametros na route passados como atributos do objeto
// Chaves [] duplas para tornar parametro opcional

export default function params(req, res) {
    res.status(200).json({
        params: req.query
    })
}