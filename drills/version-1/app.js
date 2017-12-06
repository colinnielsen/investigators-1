const platteCoordinates = [39.7576566,-105.00695310000003];
const map = L.map("map").setView(platteCoordinates, 17);

L.marker(platteCoordinates)
    .bindPopup("Galvanize Platte")
    .openPopup()
    .addTo(map);
L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    attribution: "&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors"
}).addTo(map);
