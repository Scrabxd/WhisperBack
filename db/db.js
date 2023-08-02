const Sequelize = require('sequelize')


const db = new Sequelize('WhisperBase','root','root1234',
{
    host:'localhost',
    dialect:'mysql',
})



module.exports = db