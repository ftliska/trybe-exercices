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



