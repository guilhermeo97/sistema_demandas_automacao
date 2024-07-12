import Desenvolvedor from "../entity/Desenvolvedor.js";

export default class DesenvolvedorService{
    constructor() {
        this.desenvolvedores = [];
    }

    criarDesenvolvedor(matricula, nome, email, gestor, senha){
        let desenvolvedor = new Desenvolvedor(matricula, nome, email, gestor, senha);
        this.desenvolvedores.push(desenvolvedor);
        console.log("OK");
    }

    listarDesenvolvedores(){
      this.desenvolvedores.forEach(desenvolvedor => {
        console.log(desenvolvedor.toString());
      });
    }

    listarDesenvolvedor(matricula){
        this.desenvolvedores.forEach(desenvolvedor => {
           if(desenvolvedor.matricula === matricula){
            console.log(desenvolvedor.toString());
        }}); 
        }
    
}