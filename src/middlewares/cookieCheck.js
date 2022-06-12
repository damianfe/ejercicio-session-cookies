module.exports = (req, res, next) => {
    if(req.cookies.cookie34){
        console.log("Acaaa")
        req.session.color = req.cookies.cookie34;
    }
    next()
}