// creates a "movie" constructor class to construct a movie Object
var movie = function(mName, mRating) {
    //assigns the movie Name to the movie Name that the user inputted
    this.name = mName;
    //assigns the movie rating number that the user selected from the dropdown and converts it (parses it) into an integer that will be useful for sorting all the movies from highest to lowest rating (descending)
    this.rating = parseInt(mRating);

    // function to check if the both fields are not empty
    this.isValidData = function(){
        console.log("isValidData function ran!");
        console.log(this.rating);
        //checks to see if the text field is NOT empty AND the integer dropdown field is NOT the default dropdown.... if so, the boolean is set to true
        if ((this.name != "") && !(isNaN(this.rating)) ) return true;
        //... otherwise the boolean is set to false
        else return false;
    }

    //the getAll() fucnction attaches to the current movie Object and returns the movie as a string in the form of "{movieName} with a rating of: {integerRating}"
    this.getAll = function(){
        console.log("getAll 1 was called!");
        return this.name + " with a rating of: " + this.rating;
    }
};


// Creates an array to store all the movies called movieArray[]
movieArray = [];

//function that is run once the "addMovies" button is clicked
function submitForm(){
    console.log("submit form was called!");
    //assigns the value inside the "movieName" text field to the "tName" variable
    let tName = document.getElementById("movieName").value;
    //assigns the value inside the "movieRating" text field to the "tRating" variable (both lines are needed: tRating & tValue)
    let tRating = document.getElementById("movieRating");
    let tValue = tRating.options[tRating.selectedIndex].value;
    // the variable "tMovie" passes the tName variable & tValue variable with its corresponding values in as a movie object into the constructor
    let tMovie = new movie(tName, tValue);
    // checks to see if the current movie that is being checked is valid (assuming that both fields are filled in), and if not, an error message will be displayed 
    if (tMovie.isValidData()){
        console.log("isValidData for specific movie called");
        //push the current Movie into the movieArray[] array if fields are valid
        movieArray.push(tMovie);
        // document.getElementById("errorMessage").textContent = ("");
    }    else alert("Can't leave blank fields!"); //if fields are not valid, display an alert field which says "Can't leave blank fields"
    // else document.getElementById("errorMessage").textContent = ("Can't leave blank fields!");
    console.log(movieArray);
}

//Clear both input fields (this will run after the "addMovie" button is clicked)
function clearFields(){
    // Clears the "movieName" text input field
    document.getElementById("movieName").value = "";
    // Clears the "movieRating" integer dropdown field
    document.getElementById("movieRating").value = "";
}

//Traverse through each value of the array so that each value in movieArray[] is displayed
function traverseArray(){
    console.log("traverseArray got called!");
    //the .sort(function(a, b){return b - a}) is a predetermined function in the js library to sort functions either by ascending or descending
    //I modified this .sort() function slightly so that it is descending (b-a) rather than (a-b) and so that it sorts by movie rating so I added
    // .rating properties to the proper fields
    movieArray.sort(function(a, b){return b.rating - a.rating});

    //this is a varible that stores the data for the movies
    let output = "";

    //traverse through the movieArray[] array for every element in the array using a for-loop
    for (i = 0; i < movieArray.length; i++) {
        //adds the movieArray at the current index with all its properties to the unordered list using a hack by using "<li" as string tags in js so that it becomes proper code in the html code
        output +=  "<li>" + movieArray[i].getAll() + "</li>";
        console.log("getAll2 was called!");
    }
    //displays all the movies to the "listMovies" div tag section by converting it to html text using the "innerHTML" property
    document.getElementById("listMovies").innerHTML = output;
}