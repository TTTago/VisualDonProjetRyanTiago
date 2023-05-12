import { select } from "d3-selection";
import { csv } from "d3-fetch";

var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf("/") + 1);
let nomPage = filename.split(".");
//console.log(nomPage[0]);
let tableauConsoles = [];

if (nomPage[0] == "SonyComputerEntertainment") {
	csv("../dataset/consoles.csv").then(function (data) {
		//console.log(data.some((d) => d.Company === "Sony"));
		//console.table(data);
		if (data.some((d) => d.Company === "Sony")) {
			select("body")
				.append("div")
				.attr("id", "listeConsoles")
				.attr("width", "1200px");

			select("#listeConsoles")
				.append("h1")
				.text("Les consoles les plus vendues de l'entreprise");

			data.forEach((uneConsole) => {
				if (uneConsole.Company == "Sony") {
					tableauConsoles.push(uneConsole);
				}
			});
			//console.log(tableauConsoles);
			tableauConsoles.sort(function (a, b) {
				return a["Units sold (million)"] - b["Units sold (million)"];
			});
			tableauConsoles.reverse();
			//console.log(tableauConsoles);

			select("#listeConsoles")
				.append("svg")
				.attr("id", "Console1")
				.attr("width", "400px")
				.attr("height", "400px");

			select("#Console1")
				.append("text")
				.text(`#1 ${tableauConsoles[0]["Console Name"]}`)
				.attr("fill", "white")
				.attr("class", "titreConsole")
				.attr("y", "25px");

			select("#Console1")
				.append("image")
				.attr(
					"xlink:href",
					`../images/consoles/${tableauConsoles[0]["Console Name"]}.svg`
				)
				.attr("width", "300px");

			select("#Console1")
				.append("text")
				.text(
					`${tableauConsoles[0]["Units sold (million)"]} millions d'unités vendues`
				)
				.attr("fill", "white")
				.attr("class", "uniteVendue")
				.attr("y", "305px");

			select("#listeConsoles")
				.append("svg")
				.attr("id", "Console2")
				.attr("width", "400px")
				.attr("height", "400px");

			select("#Console2")
				.append("text")
				.text(`#2 ${tableauConsoles[1]["Console Name"]}`)
				.attr("fill", "white")
				.attr("class", "titreConsole")
				.attr("y", "25px");

			select("#Console2")
				.append("image")
				.attr(
					"xlink:href",
					`../images/consoles/${tableauConsoles[1]["Console Name"]}.svg`
				)
				.attr("width", "300px");

			select("#Console2")
				.append("text")
				.text(
					`${tableauConsoles[1]["Units sold (million)"]} millions d'unités vendues`
				)
				.attr("fill", "white")
				.attr("class", "uniteVendue")
				.attr("y", "305px");

			select("#listeConsoles")
				.append("svg")
				.attr("id", "Console3")
				.attr("width", "400px")
				.attr("height", "400px");

			select("#Console3")
				.append("text")
				.text(`#3 ${tableauConsoles[2]["Console Name"]}`)
				.attr("fill", "white")
				.attr("class", "titreConsole")
				.attr("y", "25px");

			select("#Console3")
				.append("image")
				.attr(
					"xlink:href",
					`../images/consoles/${tableauConsoles[2]["Console Name"]}.svg`
				)
				.attr("width", "300px");

			select("#Console3")
				.append("text")
				.text(
					`${tableauConsoles[2]["Units sold (million)"]} millions d'unités vendues`
				)
				.attr("fill", "white")
				.attr("class", "uniteVendue")
				.attr("y", "300px");
		}
	});
} else if (nomPage[0] == "MicrosoftGameStudios") {
	csv("../dataset/consoles.csv").then(function (data) {
		//console.table(data);
		if (data.some((d) => d.Company === "Microsoft")) {
			select("body")
				.append("div")
				.attr("id", "listeConsoles")
				.attr("width", "1200px");

			select("#listeConsoles").append("h1").text("Les consoles les plus vendues");

			select("#Groupe2")
				.append("svg")
				.attr("id", "Console2")
				.attr("width", "400px")
				.attr("height", "400px");

			select("#Groupe3")
				.append("svg")
				.attr("id", "Console3")
				.attr("width", "400px")
				.attr("height", "400px");

			data.forEach((uneConsole) => {
				if (uneConsole.Company == "Microsoft") {
					tableauConsoles.push(uneConsole);
				}
			});
			//console.log(tableauConsoles);
			tableauConsoles.sort(function (a, b) {
				return a["Units sold (million)"] - b["Units sold (million)"];
			});
			tableauConsoles.reverse();
			console.log(tableauConsoles);

			select("#listeConsoles")
				.append("svg")
				.attr("id", "Console1")
				.attr("width", "400px")
				.attr("height", "400px");

			select("#Console1")
				.append("text")
				.text(`#1 ${tableauConsoles[0]["Console Name"]}`)
				.attr("fill", "white")
				.attr("class", "titreConsole")
				.attr("y", "25px");

			select("#Console1")
				.append("image")
				.attr(
					"xlink:href",
					`../images/consoles/${tableauConsoles[0]["Console Name"]}.svg`
				)
				.attr("width", "300px");

			select("#Console1")
				.append("text")
				.text(
					`${tableauConsoles[0]["Units sold (million)"]} millions d'unités vendues`
				)
				.attr("fill", "white")
				.attr("class", "uniteVendue")
				.attr("y", "305px");

			select("#listeConsoles")
				.append("svg")
				.attr("id", "Console2")
				.attr("width", "400px")
				.attr("height", "400px");

			select("#Console2")
				.append("text")
				.text(`#2 ${tableauConsoles[1]["Console Name"]}`)
				.attr("fill", "white")
				.attr("class", "titreConsole")
				.attr("y", "25px");

			select("#Console2")
				.append("image")
				.attr(
					"xlink:href",
					`../images/consoles/${tableauConsoles[1]["Console Name"]}.svg`
				)
				.attr("width", "300px");

			select("#Console2")
				.append("text")
				.text(
					`${tableauConsoles[1]["Units sold (million)"]} millions d'unités vendues`
				)
				.attr("fill", "white")
				.attr("class", "uniteVendue")
				.attr("y", "305px");

			select("#listeConsoles")
				.append("svg")
				.attr("id", "Console3")
				.attr("width", "400px")
				.attr("height", "400px");

			select("#Console3")
				.append("text")
				.text(`#3 ${tableauConsoles[2]["Console Name"]}`)
				.attr("fill", "white")
				.attr("class", "titreConsole")
				.attr("y", "25px");

			select("#Console3")
				.append("image")
				.attr(
					"xlink:href",
					`../images/consoles/${tableauConsoles[2]["Console Name"]}.svg`
				)
				.attr("width", "300px");

			select("#Console3")
				.append("text")
				.text(
					`${tableauConsoles[2]["Units sold (million)"]} millions d'unités vendues`
				)
				.attr("fill", "white")
				.attr("class", "uniteVendue")
				.attr("y", "300px");
		}
	});
} else {
	csv("../dataset/consoles.csv").then(function (data) {
		if (data.some((d) => d.Company === nomPage[0])) {
			select("body")
				.append("div")
				.attr("id", "listeConsoles")
				.attr("width", "1200px");

			select("#listeConsoles").append("h1").text("Les consoles les plus vendues");

			select("#Groupe2")
				.append("svg")
				.attr("id", "Console2")
				.attr("width", "400px")
				.attr("height", "400px");

			select("#Groupe3")
				.append("svg")
				.attr("id", "Console3")
				.attr("width", "400px")
				.attr("height", "400px");

			data.forEach((uneConsole) => {
				if (uneConsole.Company == nomPage[0]) {
					tableauConsoles.push(uneConsole);
				}
			});
			//console.log(tableauConsoles);
			tableauConsoles.sort(function (a, b) {
				return a["Units sold (million)"] - b["Units sold (million)"];
			});
			tableauConsoles.reverse();
			//console.log(tableauConsoles);

			select("#listeConsoles")
				.append("svg")
				.attr("id", "Console1")
				.attr("width", "400px")
				.attr("height", "400px");

			select("#Console1")
				.append("text")
				.text(`#1 ${tableauConsoles[0]["Console Name"]}`)
				.attr("fill", "white")
				.attr("class", "titreConsole")
				.attr("y", "25px");

			select("#Console1")
				.append("image")
				.attr(
					"xlink:href",
					`../images/consoles/${tableauConsoles[0]["Console Name"]}.svg`
				)
				.attr("width", "300px");

			select("#Console1")
				.append("text")
				.text(
					`${tableauConsoles[0]["Units sold (million)"]} millions d'unités vendues`
				)
				.attr("fill", "white")
				.attr("class", "uniteVendue")
				.attr("y", "305px");

			select("#listeConsoles")
				.append("svg")
				.attr("id", "Console2")
				.attr("width", "400px")
				.attr("height", "400px");

			select("#Console2")
				.append("text")
				.text(`#2 ${tableauConsoles[1]["Console Name"]}`)
				.attr("fill", "white")
				.attr("class", "titreConsole")
				.attr("y", "25px");

			select("#Console2")
				.append("image")
				.attr(
					"xlink:href",
					`../images/consoles/${tableauConsoles[1]["Console Name"]}.svg`
				)
				.attr("width", "300px");

			select("#Console2")
				.append("text")
				.text(
					`${tableauConsoles[1]["Units sold (million)"]} millions d'unités vendues`
				)
				.attr("fill", "white")
				.attr("class", "uniteVendue")
				.attr("y", "305px");

			select("#listeConsoles")
				.append("svg")
				.attr("id", "Console3")
				.attr("width", "400px")
				.attr("height", "400px");

			select("#Console3")
				.append("text")
				.text(`#3 ${tableauConsoles[2]["Console Name"]}`)
				.attr("fill", "white")
				.attr("class", "titreConsole")
				.attr("y", "25px");

			select("#Console3")
				.append("image")
				.attr(
					"xlink:href",
					`../images/consoles/${tableauConsoles[2]["Console Name"]}.svg`
				)
				.attr("width", "300px");

			select("#Console3")
				.append("text")
				.text(
					`${tableauConsoles[2]["Units sold (million)"]} millions d'unités vendues`
				)
				.attr("fill", "white")
				.attr("class", "uniteVendue")
				.attr("y", "300px");
		}
	});
}
