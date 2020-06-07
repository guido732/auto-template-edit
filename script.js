const fs = require("fs");
const csv = require("csv-parser");
const prompt = require("prompt-sync")();
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// Gets initial file routes
const dbRoute = getFileRoute("Write database route: ");
const templateRoute = getFileRoute("Write template html file route: ");
// Start Program
init();

function init() {
	parseCsv(dbRoute, onRow, onEnd);
}
function getFileRoute(message) {
	return prompt(message);
}
function parseCsv(route, onRow, onEnd) {
	fs.createReadStream(route)
		.pipe(csv())
		.on("data", (row) => {
			onRow(row);
		})
		.on("end", () => {
			onEnd();
		});
}
async function onRow(row) {
	const newSignature = await createSignature(templateRoute, row);
	writeOutputFile(newSignature, row);
}
function onEnd() {
	console.log("Done. Check /export folder");
}
async function createSignature(route, rowData) {
	try {
		const myTemplate = fs.readFileSync(route);
		const myTemplateDom = new JSDOM(myTemplate);
		myTemplateDom.window.document.querySelector("#first-name").innerHTML = rowData.Nombre;
		myTemplateDom.window.document.querySelector("#last-name").innerHTML = rowData.Apellido;
		myTemplateDom.window.document.querySelector("#area-role").innerHTML = `${rowData.Area} | ${rowData.Puesto}`;
		const snippet = myTemplateDom.window.document.querySelector("body").innerHTML;
		return snippet;
	} catch (error) {
		throw error;
	}
}
function writeOutputFile(fileData, rowData) {
	const date = new Date();
	const formattedDate = `${date.getFullYear()}_${date.getMonth() + 1}_${date.getDate()}`;
	const outputRoute = `export/${formattedDate}_${rowData.Nombre}_${rowData.Apellido}.txt`;
	fs.appendFile(outputRoute, fileData, (err) => {
		if (err) throw err;
		console.log("File saved...");
	});
}
