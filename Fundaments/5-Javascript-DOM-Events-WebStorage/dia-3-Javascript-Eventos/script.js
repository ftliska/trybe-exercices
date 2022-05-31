function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Função que cria dinamicamente cada dia do calendário e os adiciona como filhos/filhas da tag <ul> com ID "days".
//Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day
//Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday.
//Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday.

function createDates() {
  let daysList = document.querySelector('#days');
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let li = document.createElement('li');
    daysList.appendChild(li)
    li.className = 'day';
    li.innerText = day;
    if (day === 24 | day === 31) {
      li.className = 'day holiday';
    } else if (day === 4 | day === 11 | day === 18) {
      li.className = 'day friday';
    } else if (day === 25) {
      li.className = 'day holiday friday';
    }
  }
}
createDates();

// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function createButton(buttonName) {
  let divButton = document.querySelector('.buttons-container');
  let button = document.createElement('button');

  button.innerHTML = buttonName;
  button.id = 'btn-holiday';
  divButton.appendChild(button);
}
createButton('Feriados');

// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".

function changeBgColor() {
  let button = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let newColor = 'lime';

  button.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === newColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = newColor;
      }
    }
  })
}
changeBgColor();

// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function createFridayButton(buttonName) {
  let divButton = document.querySelector('.buttons-container');
  let fridayButton = document.createElement('button');
  fridayButton.id = 'btn-friday';
  fridayButton.innerText = buttonName;
  divButton.appendChild(fridayButton);
}
createFridayButton('Sexta-feira');

/* Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias. */

function changeFridayText() {
  let fridayButton = document.querySelector('#btn-friday');
  let getFridays = document.getElementsByClassName('friday');
  let newFridayText = 'Sextou!'
  let fridayArray = [4, 11, 18, 25];

  fridayButton.addEventListener('click', function() {
    for (let index = 0; index < getFridays.length; index += 1) {
      if (getFridays[index].innerText !== newFridayText) {
        getFridays[index].innerText = newFridayText;
      } else {
        getFridays[index].innerText = fridayArray[index];
      }
    }
  })

  
}
changeFridayText();

/* Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original. */

function zoomIn() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '700';
  })
}

function zoomOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '300';
    event.target.style.fontSize = '20px';
  })

}
zoomIn();
zoomOut();

/* Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks". */

function addTask(task) {

  let taskContainer = document.querySelector('.my-tasks');
  let taskNew = document.createElement('span');
  
  taskNew.innerHTML = task;
  taskContainer.appendChild(taskNew);
}
addTask('cozinhar');

/* Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task.
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks". */

function createColloredLegend(color) {

  let taskContainer = document.querySelector('.my-tasks');
  let divTask = document.createElement('div');

  divTask.className = 'task';
  divTask.style.backgroundColor = color;
  taskContainer.appendChild(divTask);
}
createColloredLegend('red');

/* Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected, ela estará selecionada.
Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, esta tarefa está deixando de ser uma tarefa selecionada. */

function taskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTask = document.querySelector('.task');

  myTask.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  })
}
taskClass();

/* Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119). */

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};
setDayColor();

/* Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
Ao pressionar a tecla "enter" o evento também deverá ser disparado. */

function addNewTask() {
  let getInputText = document.querySelector('#task-input');
  let getAddButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');
  
  getAddButton.addEventListener('click', function() {
    if (getInputText.value.length > 0) {
      let newList = document.createElement('li');
      newList.innerText = getInputText.value;
  
      getTaskList.appendChild(newList);
      getInputText.value = '';
    } else {
      alert('Digite ao menos 1 caractere.');
    }
  })
}
addNewTask();



