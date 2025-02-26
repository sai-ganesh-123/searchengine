const accesskey = "1HaaecOWTrLzmEjJh-KEGGQhJi5jgHl1Sgsdv13NJS4";

const searchform = document.getElementById("search-form");
const searchbox = document.getElementById("search-box");
const searchresult = document.getElementById("searchresult");
const showmorebtn = document.getElementById("show-more-btn");

let keyword = "";
let page =1;

async function searchimages(){
    keyword = searchbox.value;
    const url= `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

if(page === 1){
    searchresult.innerHTML = "";
}

  const results = data.results;

  results.map((result) =>{
    
    const image = document.createElement("img");
    image.src= result.urls.small;
    const imagelink = document.createElement("a");
    imagelink.href = result.links.html;
    imagelink.target = '_blank';

    imagelink.appendChild(image);
    searchresult.appendChild(imagelink);

  })
  showmorebtn.style.display = "block";

}
searchform.addEventListener("submit",(e) =>{
    e.preventDefault();
    page =1;
    searchimages();
});

showmorebtn.addEventListener("click",()=>{
    page++;
    searchimages();
});
