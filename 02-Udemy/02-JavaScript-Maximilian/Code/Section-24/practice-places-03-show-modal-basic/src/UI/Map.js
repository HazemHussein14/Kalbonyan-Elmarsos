import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { fromLonLat } from "ol/proj";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import Geocoder from "ol-geocoder";
import Control from "ol/control/Control";


export class MyMap {
  constructor(coords, searchInput) {
    this.rendered = false;
    this.searchInput = searchInput;
    this.renderMap(coords);
  }

  renderMap(coordinates) {
    if (!this.rendered) {
      document.getElementById("map").innerHTML = "";

      const markerSource = new VectorSource();

      const markerLayer = new VectorLayer({
        source: markerSource,
      });

      const marker = new Feature({
        geometry: new Point(fromLonLat([coordinates.lng, coordinates.lat])),
      });

      markerSource.addFeature(marker);

      this.map = new Map({
        target: "map",
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          markerLayer,
        ],
        view: new View({
          center: fromLonLat([coordinates.lng, coordinates.lat]),
          zoom: 14,
        }),
      });

      this.addSearchControl();

      this.rendered = true;
    } else {
      const center = fromLonLat([coordinates.lng, coordinates.lat]);
      this.map.getView().animate({ center: center, zoom: 14 });
    }
  }

  addSearchControl() {
    const geocoder = new Geocoder("nominatim", {
      provider: "osm",
      lang: "en-US",
      placeholder: "Search for an address",
      limit: 5,
      keepOpen: true,
      autoComplete: true,
      autoCompleteMinLength: 3,
      preventDefault: true,
      targetType: "text-input",
      featureStyle: function (feature) {
        return [
          new Style({
            image: new Icon({
              anchor: [0.5, 1],
              src: "https://cdn.mapmarker.io/api/v1/pin?size=50&background=%23A0522D&text=%20&color=%23fff&voffset=0&hoffset=0",
            }),
            text: new Text({
              text: feature.get("label"),
              offsetY: -20,
              textAlign: "center",
            }),
          }),
        ];
      },
    });
    
    const geocoderControl = new Control({ element: geocoder.getSearchButton() });
    this.map.addControl(geocoderControl);
  
    geocoder.on("addresschosen", (evt) => {
      const coordinates = evt.coordinate;
      const center = coordinates;
      this.map.getView().animate({ center: center, zoom: 14 });
    });
  }
  

  searchAddressHandler(event) {
    if (event.key !== "Enter") {
      return;
    }
    event.preventDefault();
    const address = this.searchInput.value;
    Geocoder(address).then((result) => {
      const coordinates = fromLonLat(result[0].coordinate);
      const center = coordinates;
      this.map.getView().animate({ center: center, zoom: 14 });
    });
  }
}

export default MyMap;
