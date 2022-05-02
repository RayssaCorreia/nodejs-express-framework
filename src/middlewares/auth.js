const user = 'ray'
const pass = '432'

const auth = (req, res, next)=>{
    if(req.header('username')!= user || req.header('password') != pass){
        return res.status(403).send()
    }
    next()
}
module.exports = auth;