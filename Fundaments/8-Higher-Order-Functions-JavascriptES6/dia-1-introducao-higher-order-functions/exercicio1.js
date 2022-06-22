/* 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com. */

const employeeGen = (fullname) => {
  const email = fullname.toLowerCase().split(' ').join('_');
  return {
    fullname,
    email: `${email}@trybe.com`,
  };
}

const newEmployees = (func) => {
  const employees = {
    id1: func('João Silva'),
    id2: func('Maria Souza'),
    id3: func('Pedro Bento'),
  }
  return employees;
}

console.log(newEmployees(employeeGen));
