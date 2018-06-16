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
        category:{
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
        },
        img1:{
            type: DataTypes.STRING,
            allowNull: true
        },
        img2:{
            type: DataTypes.STRING,
            allowNull: true
        },
        img3:{
            type: DataTypes.STRING,
            allowNull: true
        },
        thumb1:{
            type: DataTypes.STRING,
            allowNull: true
        },
        thumb2:{
            type: DataTypes.STRING,
            allowNull: true
        },
        thumb3:{
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    return Inventory;
};