//Coonfiguração do banco de dados.
module.exports = {
    dialect: 'sqlite',
    host: 'src/Database/drones.sqlite',
    database: 'drones',
    define: {
        timestamps: false,
    },
}