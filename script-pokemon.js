// var $region;






// function getRegGen(reg){
// 	$region = $(`<h2>Regions: </h2>`)

// 	for (var i = 0; reg.regions[i] != null; i++){
//     var region = reg.regions[i].name;

// 		if(i >= 1){
//       region = ", " + region;
// 		}

//      $region.append(region)
// 	}

// }



function showDetails(info){
 var $pokeName = $(`<h1 id="name">${info.name}</h1>`);
var $holder = $(`<div id="info"></div>`);
var pokeSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${info.id}.png`;

var $pokeImg = $(`<img id="pImg" src="${pokeSrc}"></img>`);

var $height = $(`<h2>Height: ${info.height} ft</h2>`);

var $weight = $(`<h2>Weight: ${info.weight} lbs</h2>`);

var $types = $(`<h2>Types: </h2>`)

var $abils = $(`<h2>Abilities: </h2>`)

var $movesList = $(`<ul></ul>`)

var $moves = $(`<h2>Moves: </h2>`)

var $id = $(`<h2>Id: ${info.id}</h2>`)

var $items = $(`<h2>Held Items:</h2>`)



	for (var i = 0; info.types[i] != null; i++){
  var type = info.types[i].type.name;  
		
		if(i >= 1){
      type = ", " + type;
		}

		

		$types.append(type)
	}



	for (var i = 0; info.abilities[i] != null; i++){
    var ability = info.abilities[i].ability.name;

		if(i >= 1){
      ability = ", " + ability;
		}  

		

		$abils.append(ability)
	}

	for (var i = 0; info.moves[i] != null; i++){
    var move = info.moves[i].move.name



      var $mov = $(`<li>${move}</li>`)


     $movesList.append($mov)

	}

	var $stats = $(`<h2></h2>`)

	for (var i = 0; info.stats[i] != null; i++){
     var base = info.stats[i].base_stat;
		 var stat = info.stats[i].stat.name;


		var statsFinal = `${stat}: ${base}`

    


		$stats.append(statsFinal);

			if(i >= 0){
      $stats.append(`<br><br>`);
		}
	}

	for (var i = 0; info.held_items[i] != null; i++){
		var item = info.held_items[i].item.name;

		console.log(item)

		if(i >= 1){
      item = ", " + item;
		}  
		
		$items.append(item)
	}


	$moves.append($movesList)

	

$holder.append($pokeName).append($pokeImg).append($id).append($height).append($weight).append($stats).append($types).append($abils).append($items).append($moves);


$("body").append($holder);
}






function loadPokemonDetails() {
 const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('p');



  $.get(`https://pokeapi.co/api/v2/pokemon/${myParam}`)
    .then((pokemon) => {
      showDetails(pokemon)
    });





  // $.get(`https://pokeapi.co/api/v2/version-group/${1}/`)
  //   .then((vers) => {
  //     getRegGen(vers)
  //   });

}


loadPokemonDetails();