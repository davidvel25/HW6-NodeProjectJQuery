// Once the webpage fully loads (made possible by DOMContentLoaded), the following functions inside it are executed
document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOMContentLoaded ran!");
    //an event listener runs a function once the "addMovie" button is clicked
    document.getElementById("addMovie").addEventListener("click", function() {
        console.log("addMovie Button clicked!");
        //submits the movie + rating which appends the movie to the movieArray[]
        submitForm(); //this function also validates the function, defined in movie.js but called in main.js
        //once the "addMovie" button has been clicked, and the movie has been appended to the movieArray[], clear both the text + dropdown fields
        clearFields();
    });

    //an event listener runs a function once the "showMovies" button is clicked
    document.getElementById("showMovies").addEventListener("click", function() {
        console.log("showMovies Button clicked!");
        console.log(movieArray);
        //traveses through the movieArray[] in order to display all the movies + ratings in the output field
        traverseArray();
    });

    
});