const ModelController = require("./Model/ModelController");
const Validations = require("./Model/Validations");
const Responses = require("./Model/Responses");
const Order = require("../Models/Orders");

const response = new Responses();

class OrdersControllers extends ModelController{
    constructor(){
        super();
        this.model = Order;
    }

    /**
     * @description Guarda la orden actual de una mesa
     * @param {*} req request
     * @param {*} res response
     */
    async createOrder(req,res){
        const {mesa,order} = req.body;
        if(Validations.isEmpty([mesa,order])) response.badRequest(res);
        else{
            const data = await this.Create({mesa,order})
            response.createdAndBody(res,data);
        }
    }

    /**
     * @description Actualiza una orden agregando los nuevos pedidos
     * @param {*} req request
     * @param {*} res response
     */
    async updateOrder(req,res){
        const new_order = req.body;
        const {_id} = req.params;
        if(Validations.isEmpty(new_order.order)) response.badRequest(res);
        else{
            const current_order = await this.FindById(_id);
            const order = current_order[0].order
            for(let food of new_order.order){
                order.push(food);
            }
            this.FindByIdAndUpdate(_id,{order})
            response.okNotData(res);
        }
        
    }

    /**
     * @description Obtiene todas las ordenes
     * @param {*} req request
     * @param {*} res response
     */
    async getAllOrders(req,res){
        const orders = await this.Find();
        response.ok(res,orders);
    }

    /**
     * @description Borra una orden
     * @param {*} req request
     * @param {*} res response
     */
    async endOrder(req,res){
        const {_id} = req.params;
        this.FindByIdAndDelete(_id);
        response.okNotData(res);
    }
    
    async generateLink(req,res){
        const {_id} = req.params;
        const order = await this.FindById(_id), foods = order[0].order;
        let total = 0;
        for(let food of foods){
            total = total + food.valor;
        }
        // INCORPORAR API MERCADO PAGO PARA GENERAR LINK
    }
}

module.exports = new OrdersControllers();