const { INTEGER, STRING } = require('sequelize')
const db = require('../db/db')

const User = db.define('user',{
    id:{
        type:INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:true
    },
    user:{
        type:STRING,
        allowNull:false
    },
    email:{
        type:STRING,
        allowNull:false
    },
    password:{
        type:STRING,
        allowNull:false
    }
},
    {
        freezeTableName:true,
        timestamps:false
    }
)


module.exports = User