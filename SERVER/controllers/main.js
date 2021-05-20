const mainObjDB = require('../schemas/mainObjSchema')

module.exports = {
    createObj: (req, res) => {
        console.log(req.body)

        let obj = new mainObjDB
        obj.title = req.body.title.toString()
        obj.amount = req.body.amount.toString()


        obj.save().then(() => {
            res.send({error: false, message: "All good"})
        }).catch(e => {
            res.send({error: true, message: e})
        })

    },
    findAllDB: async (req, res) => {
        let user = await mainObjDB.find()
        res.send(user)
    },
    // updateUserName: async (req, res) => {
    //     console.log(req.body)
    //     userDb.findOneAndUpdate(
    //         {_id: req.body.id},
    //         {$set: {name: req.body.name}},
    //         {returnOriginal: false})
    //         .then(user => {
    //             console.log(user)
    //         }).catch(e => {
    //         console.log(e)
    //     })
    // },
    //
    // EML: async (req, res) => {
    //     console.log(req.body)
    //
    //
    //     res.send({message: "all good from server", success: true, info: req.body})
    // },
    // UPL3: async (req, res) => {
    //     console.log(req.body)
    //
    //
    //     res.send({message: "all good from server", success: true, info: req.body})
    // },
    // NUM1: async (req, res) => {
    //     console.log(req.body)
    //
    //
    //     res.send({message: "all good from server", success: true, info: req.body})
    // },
    // KEY3: async (req, res) => {
    //     console.log(req.body)
    //
    //
    //     res.send({message: "all good from server", success: true, info: req.body})
    // },
    // SUM100: async (req, res) => {
    //     console.log(req.body)
    //
    //
    //     res.send({message: "all good from server", success: true, info: req.body})
    // },
    // NOST: async (req, res) => {
    //     console.log(req.body)
    //
    //
    //     res.send({message: "all good from server", success: true, info: req.body})
    // },
}