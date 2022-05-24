let libraryArray = [];

let Book = function (bTitle, bYear, bLastName, bFirstName, bISBN, bGenre, bReviewer, bDate, bRating){
    this.title = bTitle;
    this.year = bYear;
    this.lastName = bLastName;
    this.firstName = bFirstName;
    this.libraryCount = libraryArray.length + 1;
    this.ISBN = bISBN;
    this.genre = bGenre;
    this.reviewer = bReviewer;
    this.date = bDate;
    this.rating = bRating;

    //Rating Catalog
    this.newReview = [new Review(bDate, bTitle, bGenre, bReviewer, bRating)];
}

let Review = function(bDate, bTitle, bGenre, bReviewer, bRating){
    this.date = bDate;
    this.title = bTitle;
    this.genre = bGenre;
    this.reviewer = bReviewer;
    this.rating = bRating;
}

libraryArray.push(new Book("book1", 2012, "floop", "droop", 1925320, 'adventure', 'John Dempsey', '04/13/2015', '5'));

let currentGenre = "noneSelected";

document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("addtoList").addEventListener("click", function(){
        document.getElementById("ulBookList").innerHTML = libraryArray;
        let tempGenre = document.getElementById("select-genre");
        let tempGenre2 = tempGenre.options[tempGenre.selectedIndex].text;
        let tempRating = document.getElementById("rating");
        let tempRating2 = tempRating.options[tempRating.selectedIndex].text;
        libraryArray.push(new Book  (   document.getElementById("title").value,
                                        document.getElementById("year").value,
                                        document.getElementById("lastName").value,
                                        document.getElementById("firstName").value,
                                        document.getElementById("ISBN").value,
                                        tempGenre2,
                                        document.getElementById("reviewer").value,
                                        document.getElementById("date").value,
                                        tempRating2,

                                    ));
    console.log("add Book");
    console.log(libraryArray);
    updateList();
    clearForm();
    });

    function clearForm(){
        document.getElementById("title").value = "";
        document.getElementById("year").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("firstName").value = "";
        document.getElementById("ISBN").value = "";
        document.getElementById("select-genre").selectedIndex = 0;
        document.getElementById("reviewer").value = "";
        document.getElementById("date").value = "";
        document.getElementById("rating").selectedIndex = 0;

    }

    document.getElementById("clearLibrary").addEventListener("click", function(){
        libraryArray = [];
    });

    //new method of for-loop known as the for-of loop
    function updateList(){
        let tempulList = document.getElementById("ulBookList");
        let fullList = "";
        for (let element of libraryArray) {
            fullList += `   
                            <li><strong><u>Book #${element.libraryCount}</u></strong>:</li>
                            <li>title: ${element.title}</li>
                            <li>year: ${element.year}</li>
                            <li>last name: ${element.lastName}</li>
                            <li>first name: ${element.firstName}</li>
                            <li>isbn: ${element.ISBN}</li>
                            <li>genre: ${element.genre}</li>
                            <li>reviewer: ${element.reviewer}</li>
                            <li>date: ${element.date}</li>
                            <li>rating: ${element.rating}</li>
                            <br>
                        `;
        }
        tempulList.innerHTML = fullList;
    }

    document.getElementById("sortTitle").addEventListener("click", function(){
        console.log("sort Title");
        libraryArray.sort(dynamicSort("title"));
        document.location.href = "index2.html#listAll";
    });

    document.getElementById("sortGenre").addEventListener("click", function(){
        console.log("sort Genre");
        libraryArray.sort(dynamicSort("select-genre"));
        document.location.href = "index2.html#listAll";
    });

    document.getElementById("sortRating").addEventListener("click", function(){
        console.log("sort by rating");
        libraryArray.sort(dynamicSort("rating"));
        document.location.href = "index2.html#listAll";
    });

});