module.exports = function(sequelize, DataTypes){
    var Inventory = sequelize.define("Inventory",{
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        catalogNumber:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        size:{
            type: DataTypes.STRING,
            allowNull: true,
            unique: false
        },
        price:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false
        },
        description:{
            type: DataTypes.STRING,
            allowNull: true,
            unique: false
        },
        inStock:{
            type: DataTypes.BOOLEAN,
            defaultValue: 1
        }
    });
    return Inventory;
};