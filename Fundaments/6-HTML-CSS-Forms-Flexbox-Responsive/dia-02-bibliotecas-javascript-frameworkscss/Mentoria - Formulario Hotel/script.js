const reservList = document.querySelector('#reserv-list');
const subBtn = document.querySelector('#submit-btn');
const checkIn = document.querySelector('.inputCheckin');
const checkOut = document.querySelector('.inputCheckout');
const roomType = document.querySelectorAll('.bedroom');
const numberP = document.querySelector('.nPessoas');
const textArea = document.querySelector('.obs');

function checkDates() {
  const inDate = checkIn.value;
  const outDate = checkOut.value;

  return `Reserva para o dia ${inDate} até o dia ${outDate} `;
}

function checkBedroom() {
  for (let i = 0; i < roomType.length; i += 1) {
    if (roomType[i].checked) {
      return `Quarto ${roomType[i].value} `;
    }
  }
}

function checkPerson() {
  if (numberP.value > 1) {
    return `Para ${numberP.value} pessoas `;
  }
  return `Para ${numberP.value} pessoa `
}

function checkObsText() {
  if (textArea.value === '') {
    return 'Sem observações'
  }
  return `Obs.: ${textArea.value}`;
}

subBtn.addEventListener('click', (e) => {
  const li = document.createElement('li');
  li.className = 'list';
  li.innerText = checkDates() + checkBedroom() + checkPerson() + checkObsText();
  reservList.appendChild(li);
})
