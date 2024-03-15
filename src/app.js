const PLAYERS = [
  "Spiderman",
  "Captain America",
  "Wonderwoman",
  "Popcorn",
  "Gemwoman",
  "Bolt",
  "Antwoman",
  "Mask",
  "Tiger",
  "Captain",
  "Catwoman",
  "Fish",
  "Hulk",
  "Ninja",
  "Black Cat",
  "Volverine",
  "Thor",
  "Slayer",
  "Vader",
  "Slingo",
];

// initialize players with image and strength
const initPlayers = (players) => {
  let detailedPlayers = [];

  // Instead of forloop use Map method
  // Code here
  PLAYERS.map((name, i) => {
    detailedPlayers.push({
      name: name,
      strength: getRandomStrength(),
      image: "images/super-" + (i + 1) + ".png",
      type: i > 9 ? "hero" : "villain",
    });
  });
  return detailedPlayers;
};

// getting random strength
const getRandomStrength = () => {
  return Math.ceil(Math.random() * 100);
};

// Build player template
const buildPlayers = (players, type) => {
  let fragment = "";

  // Instead of using for loop
  // Use chaining of Array methods - filter, map and join
  // Type your code here
  const filteredPlayers = players.filter((player) => {
    return player.type === type;
  });
  const mappedPlayers = [];
  filteredPlayers.map(function (item) {
    let updatedDiv = `<div class="player">
                 <img src="${item.image}" />
                 <p>${item.name}</p><br>
                 <p> ${item.strength}</p>
               </div>`;
    mappedPlayers.push(updatedDiv);
  });
  fragment = mappedPlayers.join("");
  return fragment;
};

// Display players in HTML
const viewPlayers = (players) => {
  document.getElementById("heroes").innerHTML = buildPlayers(players, "hero");
  document.getElementById("villains").innerHTML = buildPlayers(
    players,
    "villain"
  );
};

window.onload = () => {
  viewPlayers(initPlayers(PLAYERS));
};
