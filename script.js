/********** LANGUAGE / TRANSLATION [start] **********/
const l_pt = document.querySelectorAll('.l_pt');
const l_en = document.querySelectorAll('.l_en');

l_pt.forEach(function(item){item.style.display="none"});
l_en.forEach(function(item){item.style.display="none"});

const userLanguage = navigator.language;

function translatePage() {
    if((userLanguage == 'pt-BR') || (userLanguage == 'pt-PT')) {
        l_pt.forEach(function(item){item.style.display="inline-block"});
    } else {
        l_en.forEach(function(item){item.style.display="inline-block"});
    }; // else
}; translatePage();
/********** LANGUAGE / TRANSLATION [end] **********/


/******************** POSTS LOAD ********************/
let postsDiv = document.querySelector("#posts");
let postsQuantity = 2;
var postsOrder = "newest"; // options: newest, oldest

/** define posts order **/
if(postsOrder == "oldest"){
    postsOrder = "beforeend";
} else if(postsOrder == "newest") {
    postsOrder = "afterbegin";
}; // if

/** if it's running locally or not (for local preview): **/
if(location.protocol == "file:") {
    for(let x = 1; x <= postsQuantity; x++) {
        postsDiv.insertAdjacentHTML(postsOrder, "<div class='post'> <iframe src='./posts/post" + x + ".html'></iframe> <div class='pmlink'><a href='#post" + x + "'>Permanent Link</a></div> </div>");
    }; // for
} else {
    for(let x = 1; x <= postsQuantity; x++) {
        let postCode = document.createElement("div");
        postCode.setAttribute("class", "post");
        postCode.setAttribute("id", "post" + x);
        postsDiv.insertAdjacentElement(postsOrder, postCode);
        postCode.load("post" + x + ".html");
    }; // for
}; // else



/******************** PAGES ********************/

/***** permalink pages *****/
function pmlinkPages() {
    if(location.hash.startsWith("#post")) {
        alert(location.hash);
    }; // if
}; pmlinkPages();

