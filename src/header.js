import { select } from "d3-selection";

select("body").append("div").attr("id", "titreImage");

var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf("/") + 1);
let nomPage = filename.split(".");

console.log(nomPage[0]);

select("#titreImage")
	.append("svg")
	.attr("id", "groupeTitre")
	.attr("width", "700px")
	.attr("height", "235px");

if (nomPage[0] == "Nintendo") {
	select(`#groupeTitre`)
		.append("image")
		.attr("xlink:href", `../images/logoEntreprise/${nomPage[0]}.svg`)
		.attr("width", "700px");
} else if (nomPage[0] == "ElectronicArts") {
	select(`#groupeTitre`)
		.append("circle")
		.attr("r", "105")
		.attr("cx", "350")
		.attr("cy", "110")
		.attr("fill", "white");

	select(`#groupeTitre`)
		.append("image")
		.attr("xlink:href", `../images/logoEntreprise/${nomPage[0]}.svg`)
		.attr("width", "200px")
		.attr("x", "250")
		.attr("y", "10");
} else if (nomPage[0] == "SquareSoft") {
	select(`#groupeTitre`)
		.append("image")
		.attr("xlink:href", `../images/logoEntreprise/${nomPage[0]}.svg`)
		.attr("width", "700px");
} else if (nomPage[0] == "Ubisoft" || nomPage[0] == "Take-TwoInteractive") {
	select(`#groupeTitre`)
		.append("rect")
		.attr("width", "220")
		.attr("height", "200")
		.attr("fill", "white")
		.attr("x", "250");

	select(`#groupeTitre`)
		.append("image")
		.attr("xlink:href", `../images/logoEntreprise/${nomPage[0]}.svg`)
		.attr("width", "200px")
		.attr("x", "260")
		.attr("y", "10");
} else if (nomPage[0] == "Activision") {
	select(`#groupeTitre`)
		.append("rect")
		.attr("width", "620")
		.attr("height", "170")
		.attr("fill", "white");

	select(`#groupeTitre`)
		.append("image")
		.attr("xlink:href", `../images/logoEntreprise/${nomPage[0]}.svg`)
		.attr("width", "600px")
		.attr("x", "10")
		.attr("y", "10");
} else if (nomPage[0] == "BethesdaSoftworks") {
	select(`#groupeTitre`)
		.append("rect")
		.attr("width", "620")
		.attr("height", "110")
		.attr("fill", "white");

	select(`#groupeTitre`)
		.append("image")
		.attr("xlink:href", `../images/logoEntreprise/${nomPage[0]}.svg`)
		.attr("width", "600px")
		.attr("x", "10")
		.attr("y", "10");
} else {
	select(`#groupeTitre`)
		.append("rect")
		.attr("width", "620")
		.attr("height", "235")
		.attr("fill", "white");

	select(`#groupeTitre`)
		.append("image")
		.attr("xlink:href", `../images/logoEntreprise/${nomPage[0]}.svg`)
		.attr("width", "600px")
		.attr("x", "10")
		.attr("y", "10");
}
