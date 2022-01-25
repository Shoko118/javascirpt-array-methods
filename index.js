const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// ================= FILTER
// Get characters with mass greater than 100
const massGreater = characters.filter((character) => character.mass > 100);
// Get characters with height less than 200
const heightLess = characters.filter((character) => character.height <= 200);
// Get all male characters
const getMale = characters.filter((character) => character.gender === "male");
// Get all female characters
const allFemale = characters.filter((character) => {
  return character.gender === "female";
});
// Get all height greater than 100 for male characters
const maleHeight = characters.filter((character) => {
  return character.height >= 150 && character.gender === "male";
});

// =========== MAP
// Get an array of all names
const mapNames = characters.map((character) => character.name);
// Get an array of all heights
const mapHeights = characters.map((character) => character.height);
// Get an array of objects with just name and height properties
const mapNamesAndHeights = characters.map((character) => {
  return { name: character.name, height: character.height };
});
// Get all characters height and mass
const getHeightMass = characters.map((character) => {
  return { height: character.height, mass: character.mass };
});
// Get an array of all first names
const allFirstNames = characters.map((character) => {
  return character.name.split(" ")[0];
});
// Get an array of all last names
const allLastNames = characters.map((character) => {
  return character.name.split(" ")[1];
});
// Get all first name of first letter
const allFirstLetter = characters.map((character) => {
  return character.name.split("")[0];
});

// ============= SORT
// Sort by name
const getName = characters.sort((a, b) => {
  if (a.name < b.name) return -1;
  //   return a.name.localeCompare(b.name);
});
// Sort by mass
const getMass = characters.sort((a, b) => a.mass - b.mass);
// Sort by height
const getHeight = characters.sort((a, b) => a.height - b.height);
// Sort by gender
const getGender = characters.sort((a, b) => a.gender - b.gender);
