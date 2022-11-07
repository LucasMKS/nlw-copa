// let = variavel
// const = não pode mudar de valor
// função = agrupamento de código / reuso de código / mini programas dentro do programa maior

function createGame(player1, hour, player2) {
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
    `
}

let delay = 0;
function createCard(date, day, games) {
    delay = delay + 0.3 ;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}

// pagina é representada como 'document' 
// querySelector = busca pelo seletor
// innerHTML = HTML interno (pega todo html q tem dentro do app)
document.querySelector('#cards').innerHTML = 
    createCard('24/11', 'quinta', createGame('brazil', '16:00', 'serbia')) +
    createCard('28/11', 'segunda', createGame('brazil', '13:00', 'switzerland') + createGame('portugal', '16:00', 'uruguay')) +
    createCard('28/11', 'sexta', createGame('brazil', '16:00', 'camerron'))



