export default (req, res) => {
    if (req.method === "GET") {
        res.status(200).json({
            name: "Felipe"
        })
    } else {
        res.status(200).json({
            name: "Maria"
        })

    }


}