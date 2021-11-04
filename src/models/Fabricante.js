module.exports = (sequelize,DataTypes)=>{
    const Fabricante = sequelize.define('Fabricante', {
            id:{
                type:DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome:DataTypes.STRING
        },
        {
            tableName:'fabricante',
            timestamps: false
        }
    )

    return Fabricante
}