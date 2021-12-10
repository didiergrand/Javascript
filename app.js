const dinos = [
        {
            "species": "Triceratops",
            "weight": 13000,
            "height": 114,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "First discovered in 1889 by Othniel Charles Marsh"
        },
        {
            "species": "Tyrannosaurus Rex",
            "weight": 11905,
            "height": 144,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "The largest known skull measures in at 5 feet long."
        },
        {
            "species": "Anklyosaurus",
            "weight": 10500,
            "height": 55,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Anklyosaurus survived for approximately 135 million years."
        },
        {
            "species": "Brachiosaurus",
            "weight": 70000,
            "height": "372",
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Jurasic",
            "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
        },
        {
            "species": "Stegosaurus",
            "weight": 11600,
            "height": 79,
            "diet": "herbavor",
            "where": "North America, Europe, Asia",
            "when": "Late Jurasic to Early Cretaceous",
            "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
        },
        {
            "species": "Elasmosaurus",
            "weight": 16000,
            "height": 59,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
        },
        {
            "species": "Pteranodon",
            "weight": 44,
            "height": 20,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
        },
        {
            "species": "Pigeon",
            "weight": 0.5,
            "height": 9,
            "diet": "herbavor",
            "where": "World Wide",
            "when": "Holocene",
            "fact": "All birds are living dinosaurs."
        }
    ]; 
    
    
    // Create Dino Constructor
   function Dino(species, weight, height, diet, where, when, fact) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
    }

    // Create Dino Objects
	function createDinos() {
		const someDinos = dinos.map(
			(item) =>
				new Dino(
					item.species, item.weight, item.height, item.diet, item.where, item.when, item.fact
				)
		);
		generateTiles(someDinos);
	}

    // Create Human Object
	const human = new Dino();

    // Use IIFE to get human data from form

	const myHuman = (function getHuman() {
		human.species = document.getElementById("name").value;
		human.height = document.getElementById("feet").value+"+"+document.getElementById("inches").value;
		human.weight = document.getElementById("weight").value;
		human.diet = document.getElementById("diet").value;
		human.image = "human";
		return human
	}());
	

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
	
    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
	function generateTiles(someDinos){
		someDinos.push(human)
		someDinos.forEach(function(dino){
        	// Add tiles to DOM
			const grid = document.getElementById("grid");
			const div = document.createElement("div");
			div.classList.add('grid-item');
			if(dino.image){
				div.innerHTML = '<img src="images/'+dino.image+'.png">';
			} else {
				div.innerHTML = '<img src="images/'+dino.species.toLowerCase().split(' ').join('_')+'.png">';
			}
			div.innerHTML += dino.species;
			grid.appendChild(div);

		});

		// Remove form from screen
		document.getElementById("dino-compare").style.display = "none";

	}

function compare() {	
	createDinos();
}
 // On button click, prepare and display infographic
const compareBtn = document.querySelector("#btn");

compareBtn.addEventListener("click", compare); 