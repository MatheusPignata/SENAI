const {Model, DataTypes} = require('sequelize');

class Usuario extends Model{
    static init(datacon) {
        super.init(
            {
                email: {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                },
                senha: {
                    type: DataTypes.STRING(150),
                    allowNull: false,
                },
                foto: {
                    type: DataTypes.STRING(10000),
                }

            },
            {
                sequelize: datacon,
                tableName: 'usuarios',
                modelName: 'usuario',
            }
        );
    }
}

module.exports = Usuario;