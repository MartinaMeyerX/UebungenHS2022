import React from 'react';
import "./App.css";
import "leaflet/dist/leaflet.css";


import { MapContainer, TileLayer, Marker, Popup, useMap, Circle} from 'react-leaflet'


function App() {

  React.useEffect(() => {
    const L = require("leaflet");

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png")
    });
  }, []);

  var openstreetmap = (<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />)


  var muehlefeld = [46.96887, 7.26804];
  var goesgen = [47.36608, 7.96675];
  var beznau = [47.55202, 8.22839];
  var leibstadt = [47.60146, 8.18282];

  const circlestyle = {color: "orange"}

return (
  <MapContainer center={[47.25, 7.75]} zoom={9} scrollWheelZoom={true}>

  {openstreetmap}

  <Circle pathOptions={circlestyle} center={muehlefeld} radius={50000}></Circle>
  <Circle pathOptions={circlestyle} center={goesgen} radius={50000}></Circle>
  <Circle pathOptions={circlestyle} center={beznau} radius={50000}></Circle>
  <Circle pathOptions={circlestyle} center={leibstadt} radius={50000}></Circle>

  <Marker position={muehlefeld}>
    <Popup>
      <b>Kernkraftwerk Mühlefeld</b><br/>
      Betriebsphase: 1972 - 2019<br/>
      Leistung: 373 MW
    </Popup>
  </Marker>

  <Marker position={goesgen}>
    <Popup>
      <b>Kernkraftwerk Gösgen</b><br/>
      Betriebsphase: 1979 - ...<br/>
      Leistung: 1010 MW
    </Popup>
  </Marker>

  <Marker position={beznau}>
    <Popup>
      <b>Kernkraftwerk Beznau</b><br/>
      Betriebsphase: 1969 - ...<br/>
      Leistung: 730 MW
    </Popup>
  </Marker>

  <Marker position={leibstadt}>
    <Popup>
      <b>Kernkraftwerk Leibstadt</b><br/>
      Betriebsphase: 1984 - ...<br/>
      Leistung: 1190 MW
    </Popup>
  </Marker>

</MapContainer>
  );
}

export default App;