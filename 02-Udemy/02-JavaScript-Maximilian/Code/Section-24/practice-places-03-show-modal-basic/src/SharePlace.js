import { Modal } from "./UI/Modal";
import MyMap from "./UI/Map";
import { geocode } from "ol-geocoder";

class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");
    const searchInput = document.getElementById("address");

    locateUserBtn.addEventListener("click", this.locateUserHandler.bind(this));
    addressForm.addEventListener("submit", this.findAddressHandler.bind(this));
    this.searchInput = searchInput;
  }

  selectPlace(coordinates) {
    if (this.myMap) {
      this.myMap.renderMap(coordinates);
    } else {
      this.myMap = new MyMap(coordinates, this.searchInput);
    }
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert(
        "Location feature is not available in your browser - please use a more modern browser or manually enter an address."
      );
      return;
    }
    const modal = new Modal(
      "loading-modal-content",
      "Loading location - please wait!"
    );
    modal.show();
    navigator.geolocation.getCurrentPosition(
      (successResult) => {
        modal.hide();
        const coordinates = {
          lat: successResult.coords.latitude,
          lng: successResult.coords.longitude,
        };
        this.selectPlace(coordinates);
      },
      (error) => {
        modal.hide();
        alert(
          "Could not locate you unfortunately. Please enter an address manually!"
        );
      }
    );
  }

  findAddressHandler(e) {
    e.preventDefault();
    const address = e.target.querySelector("input").value;
    if (!address || address.trim().length === 0) {
      alert("Invalid address entered - Please try again!");
      return;
    }
    const modal = new Modal(
      "loading-modal-content",
      "Loading location - please wait!"
    );
    modal.show();

    geocode(address)
      .then((results) => {
        modal.hide();
        const coordinates = results[0].coordinate;
        this.selectPlace(coordinates);
      })
      .catch((error) => {
        modal.hide();
        alert("Could not find location - Please try again!");
      });
  }
}

const placeFinder = new PlaceFinder();
