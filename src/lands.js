import { select, selectAll } from "d3-selection";
import { csv } from "d3-fetch";
import * as d3 from "d3";

let largeur = window.innerWidth - 100;

select("body").append("div").attr("id", "titreCarte");

select("#titreCarte")
	.append("h2")
	.text("Les types les plus achetés par Régions");

select("body").append("div").attr("id", "legende");

select("#legende")
	.append("svg")
	.attr("id", "legendesvg")
	.attr("width", largeur)
	.attr("height", "50px");

select("#legendesvg")
	.append("circle")
	.attr("r", "6")
	.attr("cx", "100")
	.attr("cy", "12")
	.attr("fill", "#f23224");

select("#legendesvg")
	.append("text")
	.attr("x", "110")
	.attr("y", "12")
	.text("Action")
	.style("font-size", "15px")
	.attr("alignment-baseline", "middle");

select("#legendesvg")
	.append("circle")
	.attr("r", "6")
	.attr("cx", "320")
	.attr("cy", "12")
	.attr("fill", "#476df5");

select("#legendesvg")
	.append("text")
	.attr("x", "330")
	.attr("y", "12")
	.text("Sports")
	.style("font-size", "15px")
	.attr("alignment-baseline", "middle");

select("#legendesvg")
	.append("circle")
	.attr("r", "6")
	.attr("cx", "540")
	.attr("cy", "12")
	.attr("fill", "#fffa73");

select("#legendesvg")
	.append("text")
	.attr("x", "550")
	.attr("y", "12")
	.text("Platforme")
	.style("font-size", "15px")
	.attr("alignment-baseline", "middle");

select("#legendesvg")
	.append("circle")
	.attr("r", "6")
	.attr("cx", "760")
	.attr("cy", "12")
	.attr("fill", "#ffb759");

select("#legendesvg")
	.append("text")
	.attr("x", "770")
	.attr("y", "12")
	.text("Course")
	.style("font-size", "15px")
	.attr("alignment-baseline", "middle");

select("#legendesvg")
	.append("circle")
	.attr("r", "6")
	.attr("cx", "980")
	.attr("cy", "12")
	.attr("fill", "#045e11");

select("#legendesvg")
	.append("text")
	.attr("x", "990")
	.attr("y", "12")
	.text("Jeux de rôles")
	.style("font-size", "15px")
	.attr("alignment-baseline", "middle");

select("#legendesvg")
	.append("circle")
	.attr("r", "6")
	.attr("cx", "1200")
	.attr("cy", "12")
	.attr("fill", "#27f244");

select("#legendesvg")
	.append("text")
	.attr("x", "1210")
	.attr("y", "12")
	.text("Puzzle")
	.style("font-size", "15px")
	.attr("alignment-baseline", "middle");

select("#legendesvg")
	.append("circle")
	.attr("r", "6")
	.attr("cx", "100")
	.attr("cy", "38")
	.attr("fill", "#000000");

select("#legendesvg")
	.append("text")
	.attr("x", "110")
	.attr("y", "38")
	.text("Divers")
	.style("font-size", "15px")
	.attr("alignment-baseline", "middle");

select("#legendesvg")
	.append("circle")
	.attr("r", "6")
	.attr("cx", "320")
	.attr("cy", "38")
	.attr("fill", "#828282");

select("#legendesvg")
	.append("text")
	.attr("x", "330")
	.attr("y", "38")
	.text("Jeux de tir")
	.style("font-size", "15px")
	.attr("alignment-baseline", "middle");

select("#legendesvg")
	.append("circle")
	.attr("r", "6")
	.attr("cx", "540")
	.attr("cy", "38")
	.attr("fill", "#ff8af5");

select("#legendesvg")
	.append("text")
	.attr("x", "550")
	.attr("y", "38")
	.text("Simulation")
	.style("font-size", "15px")
	.attr("alignment-baseline", "middle");

select("#legendesvg")
	.append("circle")
	.attr("r", "6")
	.attr("cx", "760")
	.attr("cy", "38")
	.attr("fill", "#701b26");

select("#legendesvg")
	.append("text")
	.attr("x", "770")
	.attr("y", "38")
	.text("Combat")
	.style("font-size", "15px")
	.attr("alignment-baseline", "middle");

select("#legendesvg")
	.append("circle")
	.attr("r", "6")
	.attr("cx", "980")
	.attr("cy", "38")
	.attr("fill", "#68f5f7");

select("#legendesvg")
	.append("text")
	.attr("x", "990")
	.attr("y", "38")
	.text("Aventure")
	.style("font-size", "15px")
	.attr("alignment-baseline", "middle");

select("#legendesvg")
	.append("circle")
	.attr("r", "6")
	.attr("cx", "1200")
	.attr("cy", "38")
	.attr("fill", "#b5af09");

select("#legendesvg")
	.append("text")
	.attr("x", "1210")
	.attr("y", "38")
	.text("Stratégie")
	.style("font-size", "15px")
	.attr("alignment-baseline", "middle");

select("#Regions")
	.append("div")
	.attr("id", "NA")
	.attr("height", "500px")
	.attr("width", largeur / 3 - 6);

select("body").append("div").attr("id", "Regions");

select("#Regions").append("div").attr("id", "NA");

select("#Regions").append("div").attr("id", "EU");

select("#Regions").append("div").attr("id", "JP");

var map1 = d3.select("#NA");

// Chargez le fichier SVG pour la France avec d3-fetch
d3.text("../images/lands/NA.svg").then(function (svgText) {
	var parser = new DOMParser();
	var svg = parser.parseFromString(svgText, "image/svg+xml").documentElement;
	map1.node().appendChild(svg);
});

var map2 = d3.select("#EU");

// Chargez le fichier SVG pour la France avec d3-fetch
d3.text("../images/lands/EU.svg").then(function (svgText) {
	var parser = new DOMParser();
	var svg = parser.parseFromString(svgText, "image/svg+xml").documentElement;
	map2.node().appendChild(svg);
});

var map3 = d3.select("#JP");

// Chargez le fichier SVG pour la France avec d3-fetch
d3.text("../images/lands/JP.svg").then(function (svgText) {
	var parser = new DOMParser();
	var svg = parser.parseFromString(svgText, "image/svg+xml").documentElement;
	map3.node().appendChild(svg);
});

select("#EU.svg").attr("id", "EU");

select("body").append("div").attr("id", "Input");

select("#Input").append("p").attr("id", "annee");

select("#annee")
	.append("span")
	.text("Quel type de jeu ont-ils le plus joué en ");

select("#annee").append("span").attr("id", "demo");

select("#Input")
	.append("input")
	.attr("type", "range")
	.attr("class", "slider")
	.attr("id", "myRange")
	.attr("min", "1980")
	.attr("max", "2016");

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
	output.innerHTML = this.value;
};

slider.addEventListener("input", function () {
	// This code will run whenever the slider value changes
	const value = slider.value;
	//console.log(value);
	let jeuAnnee = [];
	csv("../dataset/vgsales.csv").then(function (data) {
		const chercheAnnee = (annee) => {
			data.forEach((jeu) => {
				if (jeu.Year.includes(annee)) {
					jeuAnnee.push(jeu);
				}
			});
		};
		//console.log(tableauJeuxVideos);
		chercheAnnee(value);
		//console.log(jeuAnnee);

		let tableauGenre = [...new Set(data.map((d) => d.Genre))];

		console.log(tableauGenre);

		let tableauCarte = [
			{
				info: "JP",
				genre: "",
			},
			{
				info: "NA",
				genre: "",
			},
			{
				info: "EU",
				genre: "",
			},
		];

		let jeuJP = jeuAnnee.sort((a, b) => b.JP_Sales - a.JP_Sales);
		tableauCarte[0].genre = jeuJP[0].Genre;
		let jeuNA = jeuAnnee.sort((a, b) => b.NA_Sales - a.NA_Sales);
		tableauCarte[1].genre = jeuNA[0].Genre;
		let jeuEU = jeuAnnee.sort((a, b) => b.EU_Sales - a.EU_Sales);
		tableauCarte[2].genre = jeuEU[0].Genre;

		console.log(tableauCarte);

		const setColor = (genre, info) => {
			if (genre == "Action") {
				selectAll(`#${info} path`).attr("class", null).attr("fill", "#f23224");
			}
			if (genre == "Sports") {
				selectAll(`#${info} path`).attr("class", null).attr("fill", "#476df5");
			}
			if (genre == "Platform") {
				selectAll(`#${info} path`).attr("class", null).attr("fill", "#fffa73");
			}
			if (genre == "Racing") {
				selectAll(`#${info} path`).attr("class", null).attr("fill", "#ffb759");
			}
			if (genre == "Role-Playing") {
				selectAll(`#${info} path`).attr("class", null).attr("fill", "#045e11");
			}
			if (genre == "Puzzle") {
				selectAll(`#${info} path`).attr("class", null).attr("fill", "#27f244");
			}
			if (genre == "Misc") {
				selectAll(`#${info} path`).attr("class", null).attr("fill", "#000000");
			}
			if (genre == "Shooter") {
				selectAll(`#${info} path`).attr("class", null).attr("fill", "#828282");
			}
			if (genre == "Simulation") {
				selectAll(`#${info} path`).attr("class", null).attr("fill", "#ff8af5");
			}
			if (genre == "Fighting") {
				selectAll(`#${info} path`).attr("class", null).attr("fill", "#701b26");
			}
			if (genre == "Adventure") {
				selectAll(`#${info} path`).attr("class", null).attr("fill", "#68f5f7");
			}
			if (genre == "Strategy") {
				selectAll(`#${info} path`).attr("class", null).attr("fill", "#b5af09");
			}
		};

		setColor(tableauCarte[0].genre, tableauCarte[0].info);
		setColor(tableauCarte[1].genre, tableauCarte[1].info);
		setColor(tableauCarte[2].genre, tableauCarte[2].info);
	});
});
