class Responses{
    
    /**
     * @description Retorna un estado 400 BAD REQUEST y un JSON con un mesanje de estado y un booleano error
     * @param {*} res response
     */
    badRequest = (res) => {
        res.status(400).json({"Error":true, "Message":"Ocurrio un error, verifique los datos"});
    }

    /**
     * @description Retorna un estado 201 CREATED y un JSON con un mesanje de estado y un booleano error
     * @param {*} res response
     */
    created = (res) => {
        res.status(201).json({"Error":false, "Message":"Operacion realizada con exito"})
    }

    /**
     * @description Retorna un estado 200 OK y un json con los datos que se le suministren
     * @param {*} res response
     * @param {*} data menu
     */
    ok = (res,data) => {
        res.status(200).json(data);
    }

    /**
     * @description Retorna un estado 200 OK y un json con un mesanje de estado y un booleano error
     * @param {*} res response
     */
    okNotData = (res) => {
        res.status(200).json({"Error":false, "Message":"Operacion realizada con exito"})
    }
}

module.exports=Responses;