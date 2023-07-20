exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: "first post", content: "This is the first post" }],
  });
};

exports.createPost = (req, res, next) => {
  const { title, content } = req.body;
  console.log(title, content);
  // create post in db
  res.status(201).json({
    message: "Post created successfully!",
    post: { id: new Date().toISOString(), title: title, content: content },
  });
};
