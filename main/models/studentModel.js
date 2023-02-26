const mongoose=require('mongoose')

const studentSchema= new mongoose.Schema(
    {
        name: String,
        age: Number,
        birth: Date
    }
)

const Student = mongoose.model('student', studentSchema)

module.exports= Student