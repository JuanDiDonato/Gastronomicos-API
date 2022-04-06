const Statistics = require("../Models/Statistics");
const ModelController = require("./Model/ModelController");
const Validations = require("./Model/Validations");
const Responses = require("./Model/Responses");

const responses = new Responses();

class StatisticControllers extends ModelController{
    constructor(){
        super();
        this.model = Statistics;
    }

    /**
     * @description Agrega una nueva estatistica de ganancias y ventas
     * @param {*} req request
     * @param {*} res response
     */
    CreateStatistic(req,res){
        const {sales,profits} = req.body;
        if(Validations.isEmpty([sales,profits])) responses.badRequest(res);
        else{
            this.Create({sales,profits});
            responses.okNotData(res);
        }
    }

    /**
     * @description Obtiene todas las estadisticas
     * @param {*} req request
     * @param {*} res response
     */
    async getAllStatistics(req,res){
        const statistics = await this.Find();
        responses.ok(res,statistics);
    }
}

module.exports = new StatisticControllers();