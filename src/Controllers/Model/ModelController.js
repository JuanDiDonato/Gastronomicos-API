class ModelController{

    constructor(model){
        this.model = model;
    }

    /**
     * @description Guarda un dato en la base de datos
     * @param {*} data 
     */
    async Create(data){
        const object = new this.model(data); 
        const result = await object.save()
        return result._id.toString()
    }
    
    /**
     * @description Consulta una colleccion de la base de datos 
     * @returns Retorna todos los datos del modelo
     */
    async Find(){
        return await this.model.find();
    }

    /**
     * @description Consulta una colleccion de la base de datos filtrando por id
     * @param _id Id del elemento a buscar
     * @returns Retorna el dato con el id
     */
    FindById(_id){
        return this.model.find({_id });
    }
    
    /**
     * @description Obtiene un elemento de la base de datos mediante el id y actualiza sus datos con los que recibe la funcion
     * @param {*} _id Id del recurso a modificar
     * @param {*} data Nuevos datos que se cargaran al recurso obtenido
     */
    async FindByIdAndUpdate(_id,data){
        await this.model.findOneAndUpdate({ _id}, data);
    }

    /**
     * @description Recibe un id, lo busca en la base de datos y lo borra.
     * @param {*} _id Id de un elemento en la colleccion
     */
    async FindByIdAndDelete(_id){
        console.log(_id);
        await this.model.findOneAndDelete({_id});
    }

    
}

module.exports = ModelController