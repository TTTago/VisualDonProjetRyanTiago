import { select } from "d3-selection";
import { csv } from "d3-fetch";
import * as d3 from "d3";

let largeur = window.innerWidth - 100;
let tableauPublisher10 = [];

console.log();

select("body").append("div").attr("id", "bulleEntreprise");

select("#bulleEntreprise").append("h1").text("Paysage des jeux-vidéos");

select("#bulleEntreprise")
	.append("h2")
	.text("Les entreprises ayant sorti les jeux les plus populaires");

select("#bulleEntreprise")
	.append("svg")
	.attr("height", "800px")
	.attr("width", largeur);

csv("../dataset/vgsales.csv").then(function (data) {
	let tableauPublisher = [...new Set(data.map((d) => d.Publisher))];
	//console.log(data);
	for (let i = 0; i < 10; i++) {
		let publisher = tableauPublisher[i];
		let publisherSansEspace = publisher.split(" ").join("");
		tableauPublisher10.push(publisherSansEspace);
	}
	//console.log(tableauPublisher10);

	var radiusScale = d3.scaleSqrt().domain([35, 774]).range([175, 300]);

	tableauPublisher10.forEach((publisher) => {
		let amount = 0;

		const chercheMot = (mot) => {
			data.forEach((jeu) => {
				let entreprise = jeu.Publisher.replaceAll(" ", "");
				if (entreprise.includes(mot)) {
					amount++;
					//console.log(amount);
				}
			});
			return radiusScale(amount);
		};

		select("svg")
			.append("a")
			.attr("href", `src/${publisher}.html`)
			.attr("id", `${publisher}`);

		select(`#${publisher}`)
			.append("image")
			.attr("xlink:href", `./images/logoEntreprise/${publisher}.svg`)
			.attr("width", chercheMot(publisher))
			.attr("x", Math.random() * (largeur - chercheMot(publisher)))
			.attr("y", Math.random() * (800 - 250));
	});
});

/*
var svg = select("#bulleEntreprise")
	.append("svg")
	.attr("id", "image")
	.attr("width", largeur)
	.attr("height", "800px")
	.append("g")
	.attr("transform", "translate(0,0)");

(function () {
	var width = largeur;
	var height = 800;

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

	var nomEntreprise = function (d) {
		return d;
	};

	var images = svg
		.selectAll(".entreprise")
		.data(tableauPublisher10)
		.enter()
		.append("image")
		.attr("xlink:href", `./images/logoEntreprise/${nomEntreprise}.svg`)
		.attr("width", chercheMot(nomEntreprise))
		.attr("class", "entreprise").attr;

	function ticked() {
		images
			.attr("cx", function (d) {
				return d.x;
			})
			.attr("cy", function (d) {
				return d.y;
			});
	}

	simulation.nodes(tableauPublisher10).on("tick", ticked);
})();
*/
