import Usuario from "./Usuario.js";

export default class Cliente extends Usuario{
    constructor(matricula, nome, email, gestor, senha){
       super(matricula, nome, email, gestor, senha)
    }

}