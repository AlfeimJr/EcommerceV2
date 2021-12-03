module.exports = (conection, DataTypes) => {
    const Usuario = conection.define('Usuario', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING(200),
        },
        email:{
            type: DataTypes.STRING(200),
        },
        senha:{
            type: DataTypes.STRING(200),
        },
        avatar:{
            type: DataTypes.STRING(200),
        },
        admnistrador:{
            type: DataTypes.INTEGER
        },
      
    },
    {
        tableName:'usuario',
        timestamps: false,
    },
    )
    return Usuario
};