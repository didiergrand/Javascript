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
	}

    // Create Human Object

    const human = new Dino();

    // Use IIFE to get human data from form
	const myHuman = (function () {
        function getHuman() {
            let humanfeet = parseFloat(document.getElementById("feet").value);
            let humaninches = parseFloat(document.getElementById("inches").value);
            human.species = document.getElementById("name").value;
            human.height = humanfeet*12+humaninches;
            human.weight = document.getElementById("weight").value;
            human.diet = document.getElementById("diet").value;
            human.image = "human";
        }
        return {
            human: getHuman
        }
    }());
	


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
	function compareWeight(dinoWeight){
        let weightResult;
        if(dinoWeight>parseFloat(human.weight)){
            weightResult = "This dino is heavier than " + human.species
        }else{
            weightResult = human.species +" is heavier than this dino"
        }
        return weightResult
    }
    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
	function compareHeight(dinoHeight){
        let heightResult;
        if(dinoHeight>parseFloat(human.height)){
            heightResult = "This dino is taller than " + human.species
        }else{
            heightResult = human.species +" is taller than this dino"
        }
        return heightResult
    }
    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
	function compareDiet(dinoDiet){
        let dietResult;
        if(dinoDiet == "herbavor" &&  human.diet != "herbavor"){
            dietResult = "This dino eat more grass than " + human.species
        }else if(dinoDiet != "herbavor" &&  human.diet == "herbavor"){
            dietResult = human.species +" eat more grass than this dino"
        }else{
            dietResult = human.species +" and this dino eats both grass"
        }
        return dietResult
    }


    // Generate Tiles for each Dino in Array
	function generateTiles(someDinos){
		someDinos.splice(4, 0, human);
        if(!human.species ||!human.height || !human.weight  ){
            alert('You must fill all the fields')
        } else {
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
                div.innerHTML += '<h3>'+dino.species+'</h3>';
                div.innerHTML += '<p>Height : '+dino.height+' inches</p>';
                div.innerHTML += '<p>Weight : '+dino.weight+' lbs</p>';
                div.innerHTML += '<p>Diet : '+dino.diet+'</p>';

                if(dino.fact && dino.species!="Pigeon"){
                    const items = ['weight', 'height', 'diet',''];
                    const expr = items[Math.floor(Math.random() * items.length)];
                    switch (expr) {
                        case "weight":
                            div.innerHTML += '<p>'+compareWeight(dino.weight)+'</p>';
                            break;
                        case "height":
                            div.innerHTML += '<p>'+compareHeight(dino.height)+'</p>';
                            break;
                        case "diet":
                            div.innerHTML += '<p>'+compareDiet(dino.diet)+'</p>';
                            break;
                        default:
                            div.innerHTML += '<p>'+dino.fact+'</p>';
                        } 
                } else if (dino.fact && dino.species=="Pigeon") {
                    div.innerHTML += '<p>'+dino.fact+'</p>';
                }
                grid.appendChild(div);

            });
            
            // Remove form from screen
            document.getElementById("dino-compare").style.display = "none";
            document.getElementById("restartbtn").style.display = "inline-block";
        }
	}

function compareDinos() {	
	createDinos();
    myHuman.human();
    generateTiles(dinos);
}
 // On button click, prepare and display infographic
const compareButton = document.querySelector("#btn");
compareButton.addEventListener("click", compareDinos); 

const restartbtn = document.getElementById("restartbtn")
restartbtn.style.display = "none"; 