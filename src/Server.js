const express = require("express"), morgan = require("morgan");
const menuRoutes = require("./Routes/Menu");


/**
 * Configuraciones y metodos del servidor
 */
class Server{
    constructor(){
        this.app = express();
    }
    Middlewares(){
        this.app.set("port",4000);
        this.app.use(express.json());
        this.app.use(morgan("dev"));
    }
    Database(){
        require("./Database/mongoDb");
    }
    Routes(){
        this.app.use("/api",require("./Routes/Menu"));
        this.app.use("/api",require("./Routes/Statistics"));
    }
    Run(){
        this.app.listen(this.app.get("port"), () => {
            console.log("[+] Servidor iniciado");
        })
    }
    get init(){
        this.Middlewares();
        this.Database();
        this.Routes();
        this.Run();
    }
}

module.exports=Server;
