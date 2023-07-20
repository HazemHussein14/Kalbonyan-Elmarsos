const getDb = require("../util/database").getDb;
const { ObjectId } = require("mongodb");

class User {
  constructor(username, email, cart, id) {
    this.name = username;
    this.email = email;
    this.cart = cart; // {items: []}
    this._id = id;
  }

  save() {
    const db = getDb();
    return db.collection("users").insertOne(this);
  }

  addToCart(product) {
    const cartItems = [...(this.cart?.items || [])];

    const existingProductIndex = this.cart?.items.findIndex(
      (cp) => cp.productId.toString() === product._id.toString()
    );

    if (existingProductIndex >= 0) {
      const newQuantity = this.cart.items[existingProductIndex].quantity + 1;
      cartItems[existingProductIndex].quantity = newQuantity;
    } else {
      cartItems.push({
        productId: new ObjectId(product._id),
        quantity: 1,
      });
    }

    const db = getDb();
    return db
      .collection("users")
      .updateOne(
        { _id: new ObjectId(this._id) },
        { $set: { cart: { items: cartItems } } }
      );
  }

  getCart() {
    const db = getDb();
    const productIds = this.cart.items.map((i) => i.productId);
    return db
      .collection("products")
      .find({ _id: { $in: productIds } })
      .toArray()
      .then((products) => {
        return products.map((p) => {
          const cartItem = this.cart.items.find(
            (i) => i.productId.toString() === p._id.toString()
          );
          return {
            ...p,
            quantity: cartItem.quantity,
          };
        });
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }

  deleteItemFromCart(productId) {
    const updatedCartItems = this.cart.items.filter(
      (item) => item.productId.toString() !== productId.toString()
    );
    const db = getDb();
    return db
      .collection("users")
      .updateOne(
        { _id: new ObjectId(this._id) },
        { $set: { cart: { items: updatedCartItems } } }
      );
  }

  addOrder() {
    const db = getDb();
    return this.getCart()
      .then((products) => {
        const order = {
          items: products,
          user: {
            _id: new ObjectId(this._id),
            name: this.name,
          },
        };
        return db.collection("orders").insertOne(order);
      })
      .then((result) => {
        this.cart = { items: [] };
        return db
          .collection("users")
          .updateOne(
            { _id: new ObjectId(this._id) },
            { $set: { cart: { items: [] } } }
          );
      });
  }

  getOrders() {
    const db = getDb();
    return db.collection("orders").find({ "user._id": new ObjectId(this._id) }).toArray();
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection("users")
      .findOne({ _id: new ObjectId(userId) })
      .then((user) => {
        console.log(user);
        return user;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = User;
