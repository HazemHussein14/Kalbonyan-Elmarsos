import { Database, MongoClient } from "https://deno.land/x/mongo@v0.8.0/mod.ts";

let db: Database;

export function connect() {
  const client = new MongoClient();
  client.connectWithUri(
    "mongodb+srv://hazimhussein159:F7Zrrj3STjUUvMNt@cluster0.2kdgxpd.mongodb.net/?retryWrites=true&w=majority",
  );
  db = client.database("deno-todo-app");
}

export function getDb() {
  return db;
}
