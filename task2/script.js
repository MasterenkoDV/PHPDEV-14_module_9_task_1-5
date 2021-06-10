const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

const alertJs = document.querySelector('#alertJs');

alertJs.addEventListener('click', () => {
    alert('Служит для вывода информации на экран');
})

const promptJs = document.querySelector('#promptJs');

promptJs.addEventListener('click', () => {
    alert('Служит для ввода значения с экрана');
})