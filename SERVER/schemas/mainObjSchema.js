const mongoose = require('mongoose')



const Schema = mongoose.Schema;
const mainObjSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    }

})

const mainObj = mongoose.model("UN4", mainObjSchema)

module.exports = mainObj