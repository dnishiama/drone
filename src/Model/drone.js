const { Model } = require('sequelize');

//Modelo Drone
class Drone extends  Model{
    static init (sequelize){
        super.init({
            id: {
                type: Number,
                required: true,
                primaryKey: true,
            },
            customer_image: String,
            customer_name: String,
            customer_address: String,
            battery: {
                type: Number,
                required: true,
            },
            max_speed: {
                type: Number,
                required: true,
            },
            average_speed: {
                type: Number,
                required: true,
            },
            status: {
                type: String,
                required: true,
            },
            current_fly: {
                type: Number,
                required: true,
            },
        },
        {
            sequelize
        })
    }
}

module.exports = Drone;