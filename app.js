const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')

const {Op} = require('sequelize')

const User = require('./models/userModel')

const app = express()
app.use(express.json())

app.use(cors())

app.post('/login', async(req,res) => {

    const {user, password} = req.body

    try {
        const findUser = await User.findOne({
            where:{
                user
            }
        })

        if(!findUser){
            return res.json({
                msg:'Usuario no existente'
            })
        }
    
        const passMatch = await bcrypt.compare(password, findUser.password)
    
        if(!passMatch){
            return res.json({
                msg:"La combinacion de usuario y contraseña no es correcta"
            })
        }
        delete findUser.dataValues.password
    
        return res.json({
            findUser
        })
        
    } catch (error) {
        console.log(error)

        return res.json({
           msg: 'Error haciendo login.'
        })
    }    

})  


app.post('/register',async(req,res) => {
    const { user, email, password} = req.body


    try {
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync( password, salt)

        const [userCreated, created] = await User.findOrCreate({
            where:{
                [Op.or]:[
                    {user},
                    {email}
                ]
            },
            defaults:{
                user,email,password:hashedPassword
            }
        })

        if(!created){
            return res.json({
                msg:"Ya existe el usuario"
            })
        }

        return res.json({userCreated})
        
    } catch (error) {
        console.log(error)
        return res.json({
            msg:'Error haciendo register'
        })
    }

})


app.listen(5000,() =>{
    console.log('App being listend to port:', 5000)
})