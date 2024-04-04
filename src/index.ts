
import Aluno from "./Herança/Aluno/Aluno";
import Funcionario from "./Herança/Funcionario/Funcionario";
import Pessoa from "./Herança/Pessoa/Pessoa";
import Professor from "./Herança/Professor/Professor";

let p1 = new Pessoa();
let p2 = new Aluno();
let p3 = new Professor();
let p4 = new Funcionario();

p2.setNome('João');
p3.setNome('Francisco');
p4.setNome('Maria');

p2.setCurso('Informática');
p3.setSalario(2500);
p4.setSetor('Estoque');
