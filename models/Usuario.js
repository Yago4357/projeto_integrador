const mongoose=require("mongoose")
const Schema=mongoose.Schema


const Usuario = new Schema({
    nome:{
        type: String,
        requeire:true
    },
    email:{
        type: String,
        requeire:true
    },
    cpf:{
        type:Number,
        require:true
    },
    senha1:{
        type: String,
        requeire:true
    },
    senha2:{
        type: String,
        requeire:true
    }
})
mongoose.model("usuario", Usuario)