import Usuario from "./Usuario.js";

export default class Desenvolvedor extends Usuario{
    constructor(matricula, nome, email, gestor, senha){
       super(matricula, nome, email, gestor, senha)
    }
}