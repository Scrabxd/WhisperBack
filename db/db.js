const Sequelize = require('sequelize')


// const db = new Sequelize("ykvuzhii", "ykvuzhii" ,"dh5vBkkm71b_nJHEI4YsuSLfm0CY_QR", {
//     host: "drona.db.elephantsql.com",
//     dialect: 'postgres',
//     logging:false,
//     port: 5432
// })

const db = new Sequelize('postgres://ykvuzhii:dh5vBkkm71b_nJHEI4YsuSLfm0CY_QR-@drona.db.elephantsql.com/ykvuzhii ',{
    dialect:'postgres'
})



module.exports = db