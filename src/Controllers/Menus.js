const ModelController = require("./Model/ModelController");
const Validations = require("./Model/Validations");
const Responses = require("./Model/Responses");
const Menu = require("../Models/Menu");

const responses = new Responses();

class MenusControllers extends ModelController{
    constructor(){
        super();
        this.model = Menu;
    }
    
    /**
     * @description Crea un menu de platillos
     * @param {*} req request
     * @param {*} res response
     */
    createMenu(req,res){
        const {menu_name,foods} = req.body
        if(Validations.isEmpty([menu_name,foods])) responses.badRequest(res);
        else{
            this.Create({foods,menu_name});
            responses.created(res);
        }
    }

    /**
     * @description Retorna una lista de menus
     * @param {*} req request
     * @param {*} res response
     */
    async getMenu(req,res){
        const foods = await this.Find();
        responses.ok(res,foods)
    }

    /**
     * @description Actualiza un menu por id
     * @param {*} req request
     * @param {*} res response
     */
    async updateMenu(req,res){
        const {menu_name,foods} = req.body;
        const {_id} = req.params;
        if(Validations.isEmpty([menu_name,foods])) responses.badRequest(res);
        else{
            await this.FindByIdAndUpdate(_id,{menu_name,foods}); 
            responses.okNotData(res);
        }
    }

    /**
     * @description Elimina un menu por su id
     * @param {*} req request
     * @param {*} res response
     */
    async deleteMenu(req,res){
        const {_id} = req.params;
            await this.FindByIdAndDelete(_id);
            responses.okNotData(res);
    }
}

module.exports = new MenusControllers();