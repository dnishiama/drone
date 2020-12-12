const Drone = require('../Model/drone')

module.exports = {

    //Função que retorna todos os drones paginando em 20 e em ordem crescente.
    async listAll(req, res){
        const drones = await Drone.findAll({order: [['id', 'ASC']], limit: 20 });
        return res.json(drones);
    },

    //Função que retorna um drone usando ID como parametro de busca.
    async listById(req, res){
        const drones = await Drone.findByPk(req.params.id)
        return res.json(drones);
    },

    //Função que salva um novo drone no banco de dados.
    async new(req,res){
        const {customer_image,
            customer_name,
            customer_address,
            battery,
            max_speed,
            average_speed,
            status,
            current_fly} = req.body;
        const drones = await Drone.create({customer_image,
                                        customer_name,
                                        customer_address,
                                        battery,
                                        max_speed,
                                        average_speed,
                                        status,
                                        current_fly});
        return res.json(drones);
    },

    //Função que atualiza um drone usando ID como parametro de busca.
    async updateById(req, res){
        const drones = await (await Drone.findByPk(req.params.id)).update(req.body);
        return res.json(drones);
    },

    //Função que deleta um drone usando ID como parametro de busca.
    async deleteById(req, res){
        const drones = await (await Drone.findByPk(req.params.id)).destroy();
        return res.json(drones);
    }
}