/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = 'red'

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)
//**ver-1**/
// const playerDiv = document.querySelector(".player-container")
// PLAYERS.forEach(player => 
//   playerDiv.innerHTML += `<div class="player" data-number="${player["number"]}">
//                         <h3>
//                           ${player["name"]} (<em>${player["nickname"]}</em>)
//                         </h3>
//                         <img src="${player["photo"]}" alt="${player["name"]}">
//                         </div>`
//   )

/**ver-2**/
const playerContainer = document.querySelector(".player-container")

PLAYERS.forEach(player => {
  const playerDiv = document.createElement("div")
  playerDiv.setAttribute("class", "player")
  playerDiv.setAttribute("data-number", `${player["number"]}`)
  playerDiv.innerHTML += `<h3>
                          ${player["name"]} (<em>${player["nickname"]}</em>)
                          </h3>
                          <img src="${player["photo"]}" alt="${player["name"]}">`
  playerContainer.appendChild(playerDiv)
})

/***** Deliverable 4 *****/
const player = document.querySelector('[data-number="7"]')
// console.log(player)
player.remove()