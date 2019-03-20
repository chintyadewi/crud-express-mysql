const Sequelize=require("sequelize");
const sequelize=new Sequelize("crud-express","root","",{
    host:"localhost",
    dialect:"mysql"
})
module.exports=sequelize;