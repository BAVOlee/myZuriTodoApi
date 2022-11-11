const moment = require('moment');
const mongoosePaginate = require('mongoose-paginate-v2');

const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    timestamp:{
        type:String,
        default:new Date().toLocaleString(undefined, {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute:'2-digit'})
    }
})

taskSchema.plugin(mongoosePaginate);


const taskModel = model('task', taskSchema);
module.exports = taskModel