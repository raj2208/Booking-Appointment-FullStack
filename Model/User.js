const Sequelize=require('sequelize');

const sequelize=require('../utll/database')

const User=sequelize.define('User',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      userName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false
      },
      phoneNumber:{
        type: Sequelize.BIGINT,
        allowNull: false
      }
})

module.exports=User;