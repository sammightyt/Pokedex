$(document).ready(function () {
loadPokemon()

});

var pokeArr;
var sortDir = 1; // a-z
// search


function search(){
	var text = document.getElementById("searchbar").value;
	var result = pokeArr.filter(
    function(eachPokemonInPokeArr) {
      var lowercaseNamePokemon=  eachPokemonInPokeArr.name.toLowerCase();
      var searchTextInLowercase = text.toLowerCase();
      return lowercaseNamePokemon.includes(searchTextInLowercase);
      });
  displayPokemon(result);
}

// 2.) templating
function displayPokemon(results){
  $("#pokemons").html('');
	for (var i = 0; results[i] != null; i++) {
        var pokemonName = results[i].name;
        // var pokemonUrl = `https://www.pokemon.com/us/pokedex/${pokemonName}`;
        

				var pokemonSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getImageUrlOfPokemon(pokemonName) + 1}.png`
        
				var pokemonUrl = `pokemon.html?p=${pokemonName}`;

				var $pokemonLink = $("<a></a>")
				.attr("href", pokemonUrl).html(pokemonName);     
				
				var $pokemonImg = $(`<img src = ${pokemonSrc}>`)
        var $pokemon = $("<div class='pokemon'></div>");
        $pokemon.append($pokemonLink).append($pokemonImg);

        // render
        $("#pokemons").append($pokemon);
				$("#load").text("");
      }
}

function findIndexOf(arr, item) {
  var index =-1;

  for(var i = 0; i < arr.length; i++){ 
    if(arr[i].name == item){
			return i
		}else {
			
		}
  }

  return index;

}

function getImageUrlOfPokemon(name) {

  // [{name: "pikachu", url: ''}, {}..]
  var pos = findIndexOf(pokeArr, name);
	return pos
}

// 1.) Get data from web api
function loadPokemon() {
  $.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898")
    .then((data) => {
      // where u decide how to handle the data
      // parsing the data
      var results = data.results;
			pokeArr = results;
			
      displayPokemon(results);
    });
}

// 


function sort() {
  var newArr = pokeArr.slice(0);
	var result = newArr.sort((a,b)=>{
    var x = a.name;
    var y = b.name;
    if (x < y) {return -1*sortDir;}
    if (x > y) {return sortDir;} 
    return 0;
   });
  displayPokemon(result);
  sortDir *= -1;
  if(sortDir < 0) {
   $("#sortbtn").html("Sort &#8593;")
  } else {
    $("#sortbtn").html("Sort &#8595;")
  }
}

