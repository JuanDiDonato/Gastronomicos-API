class Validations{

    static isEmpty(data){
        if(typeof(data) === "object"){
            if(data.length === 0) return true;
        }
        for(let i of data){
            if(i === null || i === "") return true;
        }
        return false
    }
}

module.exports=Validations;