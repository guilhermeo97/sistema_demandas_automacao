import Usuario from "./src/model/entity/Usuario.js";
import Cliente from "./src/model/entity/Cliente.js";
import Desenvolvedor from "./src/model/entity/Desenvolvedor.js";

let cliente = new Cliente("24823", "Guilherme Oliveira", "guilherme.oliveira@randoncorp.com", "Édel", "Morango@2024");
let desenvolvedor = new Desenvolvedor("24823", "Guilherme Oliveira", "guilherme.oliveira@randoncorp.com", "Édel", "Morango@2024");

console.log(cliente.toString());
console.log(desenvolvedor.toString());