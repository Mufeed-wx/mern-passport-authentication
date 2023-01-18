const router = require('express').Router();
const passport = require('passport')
const clientUrl = 'http://localhost:3000/'


router.get('/login/success', (req, res) => {
    if (req.user) {
        res.status(200).send({
            success: true,
            message: "successfully",
            user:req.user
        })
   }
})

router.get('/logout', (req, res) => {
    req.logOut();
    res.redirect(clientUrl)
})

router.get('/login/failed', (req, res) => {
    res.status(401).send({
        success: false,
        message:"failure"
    })
})

router.get("/google", passport.authenticate("google", { scope: ["profile"] }))

router.get('/google/callback', passport.authenticate("google", {
    successRedirect: clientUrl,
    failureRedirect:'/login/failed'
}))

module.exports =router