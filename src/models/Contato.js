module.exports = (conection, DataTypes) => {
    const Contato = conection.define('Contato', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email:{
            type: DataTypes.STRING(200),
        },
        mensagem:{
            type: DataTypes.STRING(200),
        },

      
    },
    {
        tableName:'contato',
        timestamps: false,
    },
    )
    return Contato
};