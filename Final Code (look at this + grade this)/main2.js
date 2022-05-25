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
    this.ID = Math.random().toString(16).slice(5);

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

libraryArray.push(new Book("book1", 2012, "floop", "droop", 1925320, 'adventure', 'John Dempsey', '2022-05-04', '5'));

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
                            <li>${element.date} : ${element.title} by ${element.lastName},${element.firstName} rated by ${element.reviewer} with a rating of ${element.rating}</li>
                            <br>
                        `;

            // fullList += `   
            //                 <li><strong><u>Book #${element.libraryCount}</u></strong>:</li>
            //                 <li>title: ${element.title}</li>
            //                 <li>year: ${element.year}</li>
            //                 <li>last name: ${element.lastName}</li>
            //                 <li>first name: ${element.firstName}</li>
            //                 <li>isbn: ${element.ISBN}</li>
            //                 <li>genre: ${element.genre}</li>
            //                 <li>reviewer: ${element.reviewer}</li>
            //                 <li>date: ${element.date}</li>
            //                 <li>rating: ${element.rating}</li>
            //                 <br>
            //             `;
        }
        tempulList.innerHTML = fullList;
    }

        // page before show code *************************************************************************
        $(document).on("pagebeforeshow", "#listAll", function (event) {   // have to use jQuery 
            createList();
        });
    
    
        // need one for our details page to fill in the info based on the passed in ID
        $(document).on("pagebeforeshow", "#details", function (event) {   
            let BookID = localStorage.getItem('parm');  // get the unique key back from the storage dictionairy
            let book;
            for (let i = 0; i < libraryArray.length; i++){
                if(libraryArray[i].ID == BookID){
                    book = libraryArray[i];
                    document.getElementById("specificBookID").innerHTML = BookID;
                    document.getElementById("specificBookRating").innerHTML = book.rating;
                    document.getElementById("specificBookTitle").innerHTML = book.title;
                }
            }
            // document.getElementById("specificBookID").innerHTML = "Title: " + title;
            // document.getElementById("specificBookID").innerHTML = "Year Published: " + year;
            // document.getElementById("specificBookID").innerHTML = "Author's Last Name: " + lastName;
            // document.getElementById("specificBookID").innerHTML = "Author's First Name: " + firstName;
            // document.getElementById("specificBookID").innerHTML = "ISBN: " + ISBN;
            // document.getElementById("specificBookID").innerHTML = "Genre: " + genre;
            // document.getElementById("specificBookID").innerHTML = "Reviewer: " + reviewer;
            // document.getElementById("specificBookID").innerHTML = "Date: " + date;
            // document.getElementById("specificBookID").innerHTML = "Rating: " + rating;

            // document.getElementById("title").innerHTML = "Title: " + title;
            // document.getElementById("year").innerHTML = "Year Published: " + year;
            // document.getElementById("lastName").innerHTML = "Author's Last Name: " + lastName;
            // document.getElementById("firstName").innerHTML = "Author's First Name: " + firstName;
            // document.getElementById("ISBN").innerHTML = "ISBN: " + ISBN;
            // document.getElementById("select-genre").innerHTML = "Genre: " + genre;
            // document.getElementById("reviewer").innerHTML = "Reviewer: " + reviewer;
            // document.getElementById("date").innerHTML = "Date: " + date;
            // document.getElementById("rating").innerHTML = "Rating: " + rating;
        });

    function createList() {
        // clear prior data
        var theList = document.getElementById("ulBookList");
        theList.innerHTML = "";
    
     
    
        libraryArray.forEach(function (element, i) {   // use handy array forEach method
            var myLi = document.createElement('li');
            myLi.classList.add('oneBook');
            myLi.innerHTML =  element.date + ":  " + element.title + " rated by " + element.reviewer + " with rating of " + element.rating;
    
            // use the html5 "data-parm" to store the ID of this particular movie object 
            // that we are currently building an li for so that I can later know which movie this li came from
            myLi.setAttribute("data-parm", element.ID);
    
            theList.appendChild(myLi);
        });
    
        var liList = document.getElementsByClassName("oneBook");
        let newLibraryArray = Array.from(liList);
    
        newLibraryArray.forEach(function (element,i) {     
            element.addEventListener('click', function () {     
                
                var parm = this.getAttribute("data-parm");  // data-parm has this movie object's ID value
                // now save THIS ID value in the localStorage "dictionairy"
                localStorage.setItem('parm', parm);
                document.location.href = "index2.html#details";
            });
        });
      
    };



    // $(document).on("pagebeforeshow", "#details", function(event){
        // document.getElementById("title").innerHTML = "Title: " + title;
        // document.getElementById("year").innerHTML = "Year Published: " + year;
        // document.getElementById("lastName").innerHTML = "Author's Last Name: " + lastName;
        // document.getElementById("firstName").innerHTML = "Author's First Name: " + firstName;
        // document.getElementById("ISBN").innerHTML = "ISBN: " + ISBN;
        // document.getElementById("select-genre").innerHTML = "Genre: " + genre;
        // document.getElementById("reviewer").innerHTML = "Reviewer: " + reviewer;
        // document.getElementById("date").innerHTML = "Date: " + date;
        // document.getElementById("rating").innerHTML = "Rating: " + rating;
    //     })

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

    // document.getElementById("sortRating").addEventListener("click", function(){
    //     console.log("sort by rating");
    //     libraryArray.sort(dynamicSort("rating"));
    //     document.location.href = "index2.html#listAll";
    // });

});