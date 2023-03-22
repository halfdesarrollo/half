import {ExtractJwt, Strategy, StrategyOptions, } from 'passport-jwt';
import User from '../../Models/user';
import config from '../../config/ConfigEntorno/config'

const opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret   
};

export default new Strategy(opts, async(payload, done) =>{
try {
    const user = await User.findById(payload.id);
    if (user){
        return done(null, user)
    }
    return done(null, false)
} catch (error) {
    console.log(error)
}
})