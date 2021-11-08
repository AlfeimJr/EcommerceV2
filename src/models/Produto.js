// const {Produto} = require('../models')

module.exports = (sequelize,DataTypes)=>{
    const Produto = sequelize.define('Produto', {
            id:{
                type:DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome:DataTypes.STRING(200),
            preco:DataTypes.STRING(200),
            imagem:DataTypes.STRING(200),
            quantidade:DataTypes.STRING(200),
        },
        
        {
            tableName:'produto',
            timestamps: false
        }
    )

    Produto.associate = (models)=>{
        Produto.belongsTo(models.Fabricante, {
          foreignKey: 'id_fabricante',
          as: 'fabricante',
        });
      };

    return Produto
}