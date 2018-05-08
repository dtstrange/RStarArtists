module.exports = function(sequelize, DataTypes){
    var Inventory = sequelize.define("Inventory",{
        catalogNumber:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        size:{
            type: DataTypes.STRING,
            allowNull: true,
            unique: false
        },
        price:{
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
            unique: false,
            validate:{
                isDecimal: true
            }
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