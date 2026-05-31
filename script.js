function addPost() {

    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;

    if(title === "" || content === "") {
        alert("Enter Title and Content");
        return;
    }

    let post = document.createElement("div");
    post.className = "post";

    post.innerHTML = `
        <h2>${title}</h2>
        <p>${content}</p>

        <input type="text" placeholder="Write Comment" class="commentInput">

        <button onclick="addComment(this)">
            Comment
        </button>

        <ul class="commentList"></ul>

        <button onclick="deletePost(this)">
            Delete Post
        </button>
    `;

    document.getElementById("posts").appendChild(post);

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
}

function addComment(button){

    let commentInput =
        button.parentElement.querySelector(".commentInput");

    let commentList =
        button.parentElement.querySelector(".commentList");

    let li = document.createElement("li");

    li.innerText = commentInput.value;

    commentList.appendChild(li);

    commentInput.value = "";
}

function deletePost(button){
    button.parentElement.remove();
}