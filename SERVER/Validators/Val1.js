let validators = {
    //
    // checkEmail: (req,res,next) => {
    //     if(!req.body.email.includes("@") || !req.body.email.includes(".")){
    //         return res.send({success: false, message: "email is not valid"})
    //     } else {
    //         res.send({success: true, message: "email is good"})
    //     }
    //     next()
    // },
    //
    //
    // check3UpperLetters: (req,res,next) => {
    //     let counter =0
    //     // req.map(x => x===x.toUpperCase() {counter ++})
    //     for (let i = 0; i < req.body.email.length; i++) {
    //         if (req.body.email[i] === req.body.email[i].toUpperCase()){
    //             counter++
    //         }
    //     }
    //     if(counter < 3){
    //         return res.send({success: false, message: "not enough upper letters"})
    //     } else {
    //         res.send({success: true, message: "enough upper letters"})
    //     }
    //     next()
    // },
    //
    //
    // check1Numeric: (req,res,next) => {
    //     let counter =0
    //     for (let i = 0; i < req.body.email.length; i++) {
    //         if (req.body.email[i] === "0" || req.body.email[i] === "1" || req.body.email[i] === "2" || req.body.email[i] === "3" || req.body.email[i] === "4" ||
    //             req.body.email[i] === "5" || req.body.email[i] === "6" || req.body.email[i] === "7" || req.body.email[i] === "8" || req.body.email[i] === "9" ){
    //             counter++
    //         }
    //     }
    //     if(counter < 1){
    //         return res.send({success: false, message: "not enough numbers"})
    //     } else {
    //         res.send({success: true, message: "enough numbers"})
    //     }
    //     next()
    // },
    // check3Keys: (req,res,next) => {
    //     console.log(Object.keys(req.body.email).length)
    //     if(Object.keys(req.body.email).length  !== 3 ){
    //         return res.send({success: false, message: "object not good"})
    //     } else {
    //         res.send({success: true, message: "object is good"})
    //     }
    //     next()
    // },
    //
    // checkSum100: (req,res,next) => {
    //     console.log(req.body.email)
    //     let counter =0
    //     for (let i = 0; i < req.body.email.length; i++) {
    //             counter+= req.body.email[i]
    //     }
    //     console.log(counter)
    //     if(counter !== 100){
    //         return res.send({success: false, message: "sum is not 100"})
    //     } else {
    //         res.send({success: true, message: "sum is 100"})
    //     }
    //     next()
    // },
    // checkNoStar: (req,res,next) => {
    //     if(req.body.email.includes("*")){
    //         return res.send({success: false, message: "you have forbidden character"})
    //     } else {
    //         res.send({success: true, message: "no stars"})
    //     }
    //     next()
    // },

}

module.exports = validators