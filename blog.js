// initialize empty array to store blog 
let blogs = []

// get all input element
let titleInput = document.getElementById('input-blog-title');
let imageInput = document.getElementById('input-blog-image');
let contentInput = document.getElementById('input-blog-content');

function addBlog(e) {
  e.preventDefault()

  let title = titleInput.value
  let content = contentInput.value;
  let image = imageInput.value;
  
  if (!title || !image || !content) {
    return alert('All input fields must be not empty');
  }
  image = URL.createObjectURL(imageInput.files[0]);

  // create blog item and push to blogs array-----------------------------------------------------------------------------------
  let blog = {
    author: 'Rhoma Irama',
    title,
    image,
    content,
    postedAt: new Date()
  }

  // invoke function to display updated blogs to HTML---------------------------------------------------
  renderBlog()
}

function renderBlog() {
  //display blogs array to console
  console.table(blogs)

  // get blog content container element
  let blogContainer = document.getElementById("contents")
  // looping through blogs array to access elements
  for(let i = 0; i < blogs.length; i++) {
    // display every blog to console
    console.log(blogs[i])

    // store data to HTML using DOM innerHTML
    blogContainer.innerHTML += `
    <div id="${i}" class="blog-list-item">
      <div class="blog-image">
        <img src="${blogs[i].image}" alt="" />
      </div>
      <div class="blog-content">
        <div class="btn-group">
          <button class="btn-edit">Edit Post</button>
          <button class="btn-post">Post Blog</button>
        </div>
        <h1>
          <a href="blog-detail.html" target="_blank"
            >${blogs[i].title}</a
          >
        </h1>
        <div class="detail-blog-content">
          12 Jul 2021 22:30 WIB | ${blogs[i].author}
        </div>
        <p>${blogs[i].content}</p>
      </div>
    </div>
    `
  }
}
