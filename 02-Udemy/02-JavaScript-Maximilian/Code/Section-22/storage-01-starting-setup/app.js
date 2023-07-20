const storeBtn = document.getElementById("store-btn");
const retBtn = document.getElementById("retrieve-btn");

let db;

const dbRequest = indexedDB.open("Shop", 1);

dbRequest.onsuccess = function (event) {
  db = event.target.result;
};

dbRequest.onupgradeneeded = function (event) {
  db = event.target.result;
  const objStore = db.createObjectStore("products", { keyPath: "id" });

  objStore.transaction.oncomplete = () => {
    const productStore = db
      .transaction("products", "readwrite")
      .objectStore("products");
    productStore.add({
      id: "p1",
      title: "First Product",
      price: 12,
      tags: ["Expensive", "Luxury"],
    });
  };
};

dbRequest.onerror = () => {
  console.log("Error");
};

storeBtn.addEventListener("click", () => {
  const productStore = db
    .transaction("products", "readwrite")
    .objectStore("products");
  productStore.add({
    id: "p2",
    title: "Second Product",
    price: 15,
    tags: ["Expensive", "Luxury"],
  });
});

retBtn.addEventListener("click", () => {
  const productStore = db
  .transaction("products", "readwrite")
  .objectStore("products");
  const request = productStore.get('p2')

  request.onsuccess = () => {
    console.log(request.result)
  }
});
