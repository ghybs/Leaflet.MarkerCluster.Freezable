var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 12,
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}),
	latlng = L.latLng(48.86, 2.34);


var map = L.map('map', {center: latlng, zoom: 11, layers: [tiles]});

var mcg = L.markerClusterGroup();

for (var i = 0; i < 50; i += 1) {
	L.marker(getRandomLatLng()).addTo(mcg).bindPopup("Marker " + i);
}

mcg.freezeAtZoom();

mcg.addTo(map);

function getRandomLatLng() {
	return [
		48.86 + 0.1 * Math.random() - 0.05,
		2.34 + 0.16 * Math.random() - 0.08
	];
}



///////////////////////
// Set-up buttons.
///////////////////////

onButtonClick("freezeAtCurrentZoomButton", function () {
	mcg.freezeAtZoom();
	updateCurrentFrozenZoom();
});

onButtonClick("freezeAtZoomButton", function () {
	mcg.freezeAtZoom(parseInt(frozenZoomInput.value, 10));
	updateCurrentFrozenZoom();
});

onButtonClick("freezeMaxKeepSpiderfyButton", function () {
	mcg.freezeAtZoom("maxKeepSpiderfy");
	updateCurrentFrozenZoom();
});

onButtonClick("freezeMaxButton", function () {
	mcg.freezeAtZoom("max");
	updateCurrentFrozenZoom();
});

onButtonClick("unfreezeButton", function () {
	mcg.unfreeze();
	updateCurrentFrozenZoom();
});

onButtonClick("disableKeepSpiderfyButton", function () {
	mcg.disableClusteringKeepSpiderfy();
	updateCurrentFrozenZoom();
});

onButtonClick("disableButton", function () {
	mcg.disableClustering();
	updateCurrentFrozenZoom();
});

onButtonClick("enableButton", function () {
	mcg.enableClustering();
	updateCurrentFrozenZoom();
});

onButtonClick("addMCGtoMap", function () {
	map.addLayer(mcg);
	updateCurrentFrozenZoom();
});

onButtonClick("removeMCGfromMap", function () {
	map.removeLayer(mcg);
});

onButtonClick("addMarker", function () {
	i += 1;
	L.marker(getRandomLatLng()).addTo(mcg).bindPopup("Marker " + i);
	console.log('Added marker ' + i);
});

function onButtonClick(buttonId, callback) {
	getById(buttonId).addEventListener("click", callback);
}

function getById(id) {
	return document.getElementById(id);
}

// Range slider frozenZoomInput
var frozenZoomInput = getById("frozenZoomInput"),
	frozenZoomInputValue = getById("frozenZoomInputValue"),
	currentFrozenZoom = getById("currentFrozenZoom");

getById("frozenZoomInput").addEventListener("input", updateFrozenInputValue);

updateFrozenInputValue();

updateCurrentFrozenZoom();

function updateFrozenInputValue() {
	frozenZoomInputValue.innerHTML = frozenZoomInput.value;
}

function updateCurrentFrozenZoom() {
	currentFrozenZoom.innerHTML = mcg._frozen
		? mcg._zoom
		: "<span class='italic'>(not frozen)</span>";
}



///////////////////////
// Show map zoom
///////////////////////

var currentMapZoom = getById("currentMapZoom");

map.on("zoomend", showMapCurrentZoom);

showMapCurrentZoom();

function showMapCurrentZoom() {
	currentMapZoom.innerHTML = map.getZoom();
}



///////////////////////
// Patch MCG from CDN
///////////////////////

// No longer need to patch, now that PR Leaflet/Leaflet.markercluster#607 has been merged
// into v0.5.0 and v1.0.0+
// See https://github.com/Leaflet/Leaflet.markercluster/pull/607
