import passport from "passport";

import {
    Strategy as GoogleStrategy
} 

from "passport-google-oauth20";

passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL
    },  
    async (accessToken, refreshToken, profile, done) => {
        try {
            // Here you would typically find or create a user in your database
            // For example:
            // let user = await User.findOne({ googleId: profile.id });
            // if (!user) {
            //     user = await User.create({ googleId: profile.id, name: profile.displayName });
            // }
            // return done(null, user);     
            return done(null, profile); // For demonstration, we return the profile directly
        } catch (err) {
            return done(err, null);
        }     }
)
);

// passport.serializeUser((user, done) => {
//     done(null, user);
// });

export default passport;