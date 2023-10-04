const passport=require('passport')
const GoogleStrategy=require('passport-google-oauth20').Strategy
const keys = require('./keys')

passport.use(
    new GoogleStrategy({
        //opciones de estrategias de google
        clientID:keys.google.clientID,
        clientSecret:keys.google.clientSecret,
        callbackURL:'/auth/google/redirect'

    },(accessToken,refreshToken,profile,done)=>{
        //passport callback
        console.log('passpor callback')
        console.log(profile)
    })
)

