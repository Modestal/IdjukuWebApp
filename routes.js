const express = require('express');
const router = express.Router();
router.get('/', (req,res) => {
    res.render('home');
})
router.get('/company_profile', (req,res) => {
    res.render('company_profile');
})
router.get('/services', (req,res) => {
    res.render('services');
})
router.get('/operation', (req,res) => {
    res.render('operation');
})

router.get('/meet_us', (req, res) => {
    res.render('meet_us');
})
module.exports = router;