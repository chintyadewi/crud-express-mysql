const Sequelize=require("sequelize")
const sequelize=require("../config/db")

const Biodata=sequelize.define(
    "biodata",
    {
        id_biodata:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nama:{
            type:Sequelize.STRING(100)
        },
        alamat:{
            type:Sequelize.STRING(150)
        }
    },
    { timestamps:false }
)
module.exports=Biodata