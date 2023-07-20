const listEl = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchBtn = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");

function sendHttpRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: data,
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        return response.json().then((errData) => {
          console.log(errData);
          throw new Error("Something went wrong - sever-side.");
        });
      }
    })
    .catch((error) => {
      console.log(error);
      throw new Error("Something went wrong!");
    });
}

async function fetchPosts() {
  try {
    const responseData = await sendHttpRequest(
      "Get",
      "https://jsonplaceholder.typicode.com/posts"
    );
    const postList = responseData;
    const listEl = document.querySelector(".posts");

    // If there are existing posts, remove them
    if (listEl.children.length > 0) {
      listEl.querySelectorAll("li").forEach((postEl) => {
        postEl.remove();
      });
    }

    // Add new posts
    for (const post of postList) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector("h2").textContent = post.title.toUpperCase();
      postEl.querySelector("p").textContent = post.body;
      postEl.querySelector("button").addEventListener("click", deletePost);
      postEl.querySelector("li").id = post.id;
      listEl.append(postEl);
    }
    
  } catch (error) {
    alert(error.message);
  }
}




async function createpost(title, content, userId) {
  const post = {
    title: title,
    body: content,
  };
  
  // Add userId to the post object if it exists
  if (userId) {
    post.userId = userId;
  }

  const fd = new FormData(form);
  fd.append('title', title);
  fd.append('body', content);

  sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", fd);
}

fetchBtn.addEventListener("click", fetchPosts);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector("#title").value;
  const enteredContent = event.currentTarget.querySelector("#content").value;
  const enteredUserId = event.currentTarget.querySelector("#userId").value;
  createpost(enteredTitle, enteredContent, enteredUserId);
});

createpost("DUMMY", "A dummy post");

function deletePost(event) {
  const postId = event.target.closest("li").id;
  sendHttpRequest(
    "DELETE",
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  ).then(() => {
    event.target.closest("li").remove();
  });
}


postList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const postId = e.target.closest("li").id;
    sendHttpRequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
});
