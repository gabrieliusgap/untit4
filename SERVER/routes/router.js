const express = require('express')
const router = express.Router()
const controller = require('../controllers/main')
// const {checkEmail, check3UpperLetters, check1Numeric, check3Keys, checkSum100, checkNoStar} require ('..../src/Validators/Val1.js')

const validators =  require ('../Validators/Val1')


router.post('/createObj', (req, res) => controller.createObj(req, res))

router.get('/get', (req, res) => controller.findAllDB(req, res))


// router.get('/searchUser/:id', (req, res) => controller.searchUser(req, res))
// router.get('/searchPost/:id', (req, res) => controller.searchPost(req, res))
// router.get('/length', (req, res) => controller.length(req, res))
// router.post('/addKey', (req, res) => controller.addKey(req, res))
// router.post('/addText', (req, res) => controller.addText(req, res))

// router.post('/email', validators.checkEmail , controller.EML)
// router.post('/upper', validators.check3UpperLetters , controller.UPL3)
// router.post('/num', validators.check1Numeric , controller.NUM1)
// router.post('/key',  validators.check3Keys , controller.KEY3)
// router.post('/sum',  validators.checkSum100 , controller.SUM100)
// router.post('/str',  validators.checkNoStar , controller.NOST)







module.exports = router
