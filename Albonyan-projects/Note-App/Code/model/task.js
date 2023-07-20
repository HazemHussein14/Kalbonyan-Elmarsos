  import mongoose from "mongoose";

  const Schema = mongoose.Schema;

  const TaskSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  });

  export default mongoose.model("Task", TaskSchema);
