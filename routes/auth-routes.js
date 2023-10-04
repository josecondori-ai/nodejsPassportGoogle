const router=require('express').Router();
const passport=require('passport')

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/logout', (req, res) => {
    res.send('loggin out');
});
//autenticacacion de  google
router.get('/google',passport.authenticate('google',{
    scope:['profile']
}) )

//callback de google

router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    res.send('tome info')
})

module.exports=router