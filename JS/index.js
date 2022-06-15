async function getData(){
    try {
        let movie = document.getElementById("movie").value;
        let res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=596b5ce0&s=${movie}`);
        let data = await res.json();
        let movieArr = data.Search;
       
        console.log(data);
        showData(movieArr);
        
    } catch (error) {
        getError()
        console.log("err:",error);
        
    }
}


function showData(movieArr){
 document.getElementById("movieContainer").innerHTML="";

 movieArr.map(function(elem){
     let div = document.createElement("div");
     div.id="movieBox";

     let div2 = document.createElement("div");
     div2.id = "imageBox";

     let image = document.createElement("img");
     image.src=elem.Poster;

     let name = document.createElement("h3");
     name.textContent= elem.Title;

     let year = document.createElement("p");
     year.textContent= `Released in:- ${elem.Year}`;

     let random = getInt(7, 8.9);
     let ratings = document.createElement("p");
     ratings.textContent=`Ratings:- ${random.toFixed(1)}`;

     let recom =""

     if(random>=8.5){
        recom = document.createElement("p");
         recom.textContent=`"Recommended"`;
     }

     div2.append(image);
     div.append(div2, name, year, ratings, recom);

    document.getElementById("movieContainer").append(div);

 })
}

function getInt(min, max) {
return (Math.random() * (max - min + 1) ) + min;
}

function getError(){
document.getElementById("err").innerHTML="";

let div = document.createElement("div");
div.id = "error";

let image = document.createElement("img");
image.src = "https://freefrontend.com/assets/img/html-funny-404-pages/HTML-404-Error-Page.gif"

div.append(image);
document.getElementById("err").append(div);
}

// 596b5ce0
// 

// https://omdbapi.com/?t=${movie}&apikey=596b5ce0