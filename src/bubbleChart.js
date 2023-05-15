import { select } from "d3-selection";
import { csv } from "d3-fetch";
import * as d3 from "d3";

let largeur = window.innerWidth - 100;

let tableauJeuxVideos = [
	{
		name: "Wii Sports",
		company: "Nintendo",
		amount: "",
		genre: "",
	},
	{
		name: "Mario",
		company: "Nintendo",
		amount: "",
		genre: "",
	},
	{
		name: "Pokemon",
		company: "Nintendo",
		amount: "",
		genre: "",
	},
	{
		name: "Tetris",
		company: "Nintendo",
		amount: "",
		genre: "",
	},
	{
		name: "Wii Play",
		company: "Nintendo",
		amount: "",
		genre: "",
	},
	{
		name: "Duck Hunt",
		company: "Nintendo",
		amount: "",
		genre: "",
	},
	{
		name: "Nintendogs",
		company: "Nintendo",
		amount: "",
		genre: "",
	},
	{
		name: "Wii Fit",
		company: "Nintendo",
		amount: "",
		genre: "",
	},
	{
		name: "Kinect",
		company: "MicrosoftGameStudios",
		amount: "",
		genre: "",
	},
	{
		name: "Grand Theft Auto",
		company: "Take-TwoInteractive",
		amount: "",
		genre: "",
	},
	{
		name: "Brain Age",
		company: "Nintendo",
		amount: "",
		genre: "",
	},
	{
		name: "Gran Turismo",
		company: "SonyComputerEntertainment",
		amount: "",
		genre: "",
	},
	{
		name: "Call of Duty",
		company: "Activision",
		amount: "",
		genre: "",
	},
	{
		name: "Super Smash Bros.",
		company: "Nintendo",
		amount: "",
		genre: "",
	},
	{
		name: "Animal Crossing",
		company: "Nintendo",
		amount: "",
		genre: "",
	},
	{
		name: "Halo",
		company: "MicrosoftGameStudios",
		amount: "",
		genre: "",
	},
	{
		name: "Just Dance",
		company: "Ubisoft",
		amount: "",
		genre: "",
	},
	{
		name: "Final Fantasy",
		company: "SquareSoft",
		amount: "",
		genre: "",
	},
	{
		name: "Minecraft",
		company: "MicrosoftGameStudios",
		amount: "",
		genre: "",
	},
	{
		name: "The Elder Scrolls",
		company: "BethesdaSoftworks",
		amount: "",
		genre: "",
	},
	{
		name: "FIFA",
		company: "ElectronicArts",
		amount: "",
		genre: "",
	},
	{
		name: "The Sims",
		company: "ElectronicArts",
		amount: "",
		genre: "",
	},
	{
		name: "GoldenEye",
		company: "Nintendo",
		amount: "",
		genre: "",
	},
	{
		name: "Pac-Man",
		company: "Atari",
		amount: "",
		genre: "",
	},
	{
		name: "Star Wars",
		company: "ElectronicArts",
		amount: "",
		genre: "",
	},
	{
		name: "Zelda",
		company: "Nintendo",
		amount: "",
		genre: "",
	},
	{
		name: "Crash Bandicoot",
		company: "SonyComputerEntertainment",
		amount: "",
		genre: "",
	},
	{
		name: "Battlefield",
		company: "ElectronicArts",
		amount: "",
		genre: "",
	},
	{
		name: "Sonic",
		company: "SEGA",
		amount: "",
		genre: "",
	},
	{
		name: "Red Dead Redemption",
		company: "Take-TwoInteractive",
		amount: "",
		genre: "",
	},
	{
		name: "Borderlands",
		company: "Take-TwoInteractive",
		amount: "",
		genre: "",
	},
	{
		name: "Tekken",
		company: "SonyComputerEntertainment",
		amount: "",
		genre: "",
	},
	{
		name: "World of Warcraft",
		company: "Activision",
		amount: "",
		genre: "",
	},
	{
		name: "Destiny",
		company: "Activision",
		amount: "",
		genre: "",
	},
	{
		name: "Creed",
		company: "Ubisoft",
		amount: "",
		genre: "",
	},
	{
		name: "Watch Dogs",
		company: "Ubisoft",
		amount: "",
		genre: "",
	},
	{
		name: "Fallout",
		company: "BethesdaSoftworks",
		amount: "",
		genre: "",
	},
	{
		name: "Dragon Quest",
		company: "SquareSoft",
		amount: "",
		genre: "",
	},
	{
		name: "Kingdom Hearts",
		company: "SquareSoft",
		amount: "",
		genre: "",
	},
];

csv("dataset/vgsales.csv").then(function (data) {
	const chercheMot = (mot) => {
		let count = 0;
		data.forEach((jeu) => {
			if (jeu.Name.includes(mot)) {
				count++;
			}
		});
		return count;
	};

	const chercheGenre = (mot) => {
		let tableauALEnvers = data.reverse();

		let genre = "";
		tableauALEnvers.forEach((jeu) => {
			if (jeu.Name.includes(mot)) {
				genre = jeu.Genre;
			}
		});
		return genre;
	};

	tableauJeuxVideos.forEach((jeu) => {
		let motAChercher = jeu.name;
		jeu.amount = chercheMot(motAChercher);
		jeu.genre = chercheGenre(motAChercher);
	});
	console.table(tableauJeuxVideos);

	select("body").append("div").attr("id", "chart");

	select("#chart")
		.append("h2")
		.text("Les licences les plus présents dans le top 5000")
		.attr("width", largeur)
		.attr("height", "1200px")
		.append("g")
		.attr("transform", "translate(0,0)");

	select("#chart")
		.append("button")
		.attr("id", "normal")
		.attr("class", "button-6")
		.text("Pas de tri");

	select("#chart")
		.append("button")
		.attr("id", "editeur")
		.attr("class", "button-6")
		.text("Trier par éditeur");

	select("#chart")
		.append("button")
		.attr("id", "genre")
		.attr("class", "button-6")
		.text("Trier par genre");

	var svg = select("#chart")
		.append("svg")
		.attr("id", "bulle")
		.attr("width", largeur)
		.attr("height", "1000px")
		.append("g")
		.attr("transform", "translate(0,0)");

	select("#bulle").append("defs");

	tableauJeuxVideos.forEach((jeu) => {
		let jeuSansEspace = jeu.name.replaceAll(" ", "");

		select("defs")
			.append("pattern")
			.attr("id", `${jeuSansEspace}`)
			.attr("height", "100%")
			.attr("width", "100%")
			.attr("patternContentUnits", "objectBoundingBox")
			.append("image")
			.attr("height", "1")
			.attr("width", "1")
			.attr("preserveAspectRatio", "none")
			.attr("xmlns:xlink", "http://www.w3.org/1999/xlink")
			.attr("xlink:href", `../images/licencepng/${jeuSansEspace}.png`);
	});

	for (let i = 1; i < 12; i++) {
		select("#bulle")
			.append("text")
			.attr("id", `texte${i}`)
			.attr("fill", "black")
			.attr("class", "motBubbleChart");
	}

	(function () {
		var etat = "normal";

		var width = largeur;
		var height = 1000;

		var radiusScale = d3.scaleSqrt().domain([1, 102]).range([20, 121]);

		var forceX = d3.forceX(function (d) {
			if (etat == "editeur") {
				select("#texte11").text("");

				select("#texte1").attr("x", "100").attr("y", "60").text("Nintendo");
				if (d.company == "Nintendo") {
					return 250;
				}
				select("#texte6").attr("x", "700").attr("y", "350").text("SEGA");
				if (d.company == "SEGA") {
					return 700;
				}
				select("#texte4").attr("x", "100").attr("y", "500").text("Microsoft");
				if (d.company == "MicrosoftGameStudios") {
					return 200;
				}
				select("#texte10").attr("x", "100").attr("y", "750").text("Ubisoft");
				if (d.company == "Ubisoft") {
					return 250;
				}
				select("#texte2").attr("x", "500").attr("y", "30").text("Activision");
				if (d.company == "Activision") {
					return 700;
				}
				select("#texte5").attr("x", "400").attr("y", "500").text("Sony");
				if (d.company == "SonyComputerEntertainment") {
					return 500;
				}
				select("#texte9").attr("x", "600").attr("y", "800").text("Bethesda");
				if (d.company == "BethesdaSoftworks") {
					return 700;
				}
				select("#texte3").attr("x", "1150").attr("y", "30").text("SquareSoft");
				if (d.company == "SquareSoft") {
					return largeur - 200;
				}
				select("#texte7")
					.attr("x", "1000")
					.attr("y", "350")
					.text("Take-Two Interactive");
				if (d.company == "Take-TwoInteractive") {
					return largeur - 200;
				}
				select("#texte8")
					.attr("x", "1100")
					.attr("y", "600")
					.text("Electronic Arts");
				if (d.company == "ElectronicArts") {
					return largeur - 250;
				} else {
					return -100;
				}
			}
			if (etat == "genre") {
				select("#texte1").attr("x", "50").attr("y", "60").text("Action");
				if (d.genre == "Action") {
					return 200;
				}
				select("#texte2").attr("x", "50").attr("y", "600").text("Sports");
				if (d.genre == "Sports") {
					return 200;
				}
				select("#texte3").attr("x", "100").attr("y", "850").text("Platforme");
				if (d.genre == "Platform") {
					return 200;
				}
				select("#texte4").attr("x", "400").attr("y", "40").text("Course");
				if (d.genre == "Racing") {
					return 500;
				}
				select("#texte5").attr("x", "400").attr("y", "270").text("Jeux de rôles");
				if (d.genre == "Role-Playing") {
					return 600;
				}
				select("#texte6").attr("x", "550").attr("y", "650").text("Puzzle");
				if (d.genre == "Puzzle") {
					return 520;
				}
				select("#texte7").attr("x", "700").attr("y", "40").text("Divers");
				if (d.genre == "Misc") {
					return 750;
				}
				select("#texte8").attr("x", "1000").attr("y", "600").text("Jeux de tir");
				if (d.genre == "Shooter") {
					return 1000;
				}
				select("#texte9").attr("x", "1100").attr("y", "400").text("Simulation");
				if (d.genre == "Simulation") {
					return 1000;
				}
				select("#texte10").attr("x", "950").attr("y", "40").text("Combat");
				if (d.genre == "Fighting") {
					return 1000;
				}
				select("#texte11").attr("x", "1150").attr("y", "100").text("Aventure");
				if (d.genre == "Adventure") {
					return 1200;
				} else {
					return -100;
				}
			}
		});

		var forceY = d3.forceY(function (d) {
			if (etat == "editeur") {
				if (d.company == "Nintendo") {
					return 250;
				}
				if (d.company == "SEGA") {
					return 450;
				}
				if (d.company == "MicrosoftGameStudios") {
					return 600;
				}
				if (d.company == "Ubisoft") {
					return 875;
				}
				if (d.company == "Activision") {
					return 150;
				}
				if (d.company == "SonyComputerEntertainment") {
					return 625;
				}
				if (d.company == "BethesdaSoftworks") {
					return 900;
				}
				if (d.company == "SquareSoft") {
					return 150;
				}
				if (d.company == "Take-TwoInteractive") {
					return 450;
				}
				if (d.company == "ElectronicArts") {
					return 780;
				} else {
					return -100;
				}
			}
			if (etat == "genre") {
				if (d.genre == "Action") {
					return 180;
				}
				if (d.genre == "Sports") {
					return 550;
				}
				if (d.genre == "Platform") {
					return 900;
				}
				if (d.genre == "Racing") {
					return 100;
				}
				if (d.genre == "Role-Playing") {
					return 400;
				}
				if (d.genre == "Puzzle") {
					return 820;
				}
				if (d.genre == "Misc") {
					return 150;
				}
				if (d.genre == "Shooter") {
					return 800;
				}
				if (d.genre == "Simulation") {
					return 400;
				}
				if (d.genre == "Fighting") {
					return 150;
				}
				if (d.genre == "Adventure") {
					return 200;
				}
				if (d.genre == "Strategy") {
					return 600;
				} else {
					return -100;
				}
			}
		});

		var simulation = d3
			.forceSimulation()
			.force("x", d3.forceX(width / 2).strength(0.05))
			.force("y", d3.forceY(height / 2).strength(0.05))
			.force(
				"collide",
				d3.forceCollide(function (d) {
					return radiusScale(d.amount);
				})
			);

		var circles = svg
			.selectAll(".licence")
			.data(tableauJeuxVideos)
			.enter()
			.append("circle")
			.attr("class", "licence")
			.attr("r", function (d) {
				//console.log(d);
				return radiusScale(d.amount);
			})
			.attr("fill", function (d) {
				let jeuSansEspace = d.name.replaceAll(" ", "");
				return `url(#${jeuSansEspace})`;
			})
			.on("click", function (e, d) {
				//console.log(e);
				console.log(d);
			});

		function ticked() {
			circles
				.attr("cx", function (d) {
					return d.x;
				})
				.attr("cy", function (d) {
					return d.y;
				});
		}

		select("#editeur").on("click", function (d) {
			etat = "editeur";
			simulation
				.force("x", forceX)
				.alphaTarget(0.5)
				.force("y", forceY)
				.alphaTarget(0.5)
				.restart();
		});

		select("#genre").on("click", function (d) {
			etat = "genre";
			simulation
				.force("x", forceX)
				.alphaTarget(0.5)
				.restart()
				.force("y", forceY)
				.alphaTarget(0.5)
				.restart();
		});

		select("#normal").on("click", function () {
			etat = "normal";

			simulation
				.force("x", d3.forceX(width / 2).strength(0.05))
				.force("y", d3.forceY(height / 2).strength(0.05))
				.alphaTarget(0.15)
				.restart();

			d3.selectAll(".motBubbleChart").text("");
		});

		simulation.nodes(tableauJeuxVideos).on("tick", ticked);
	})();
});
