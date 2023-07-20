import { ObjectId } from "https://deno.land/x/mongo@v0.8.0/mod.ts";
import { Router } from "https://deno.land/x/oak/mod.ts";
import { getDb } from "../helpers/db_client.ts";

const router = new Router();

interface Todo {
  id?: string;
  text: string;
}

// let todos: Todo[] = [];

router.get("/todos", async (ctx) => {
  const todos = await getDb().collection("todos").find();
  const transformedTodos = todos.map(
    (todo: { _id: ObjectId; text: string }) => {
      return {
        id: todo._id.$oid,
        text: todo.text,
      };
    },
  );
  ctx.response.body = {
    todos: transformedTodos,
  };
});

router.post("/todos", async (ctx) => {
  const result = ctx.request.body();
  const data = await result.value;
  const newTodo: Todo = {
    // id: new Date().toISOString(),
    text: data.text,
  };
  const id = await getDb().collection("todos").insertOne(newTodo);

  newTodo.id = id.$oid;

  ctx.response.body = { message: "Created todo!", todo: newTodo };
});

router.put("/todos/:todoId", async (ctx) => {
  const tid = ctx.params.todoId;
  const result = ctx.request.body();
  const data = await result.value;

  getDb().collection("todos").updateOne({ _id: ObjectId(tid) }, {
    $set: { text: data.text },
  });
  ctx.response.body = { message: "Updated todo!" };
});

router.delete("/todos/:todoId", async (ctx) => {
  const tid = ctx.params.todoId!;
  await getDb().collection("todos").deleteOne({ _id: ObjectId(tid) });
  ctx.response.body = { message: "Deleted todo!" };
});

export default router;
