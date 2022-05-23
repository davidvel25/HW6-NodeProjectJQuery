let libraryArray = [];

let Book = function (bTitle, bYear, bLastName, bFirstName, bISBN, bGenre){
    this.title = bTitle;
    this.year = bYear;
    this.lastName = bLastName;
    this.firstName = bFirstName;
    this.libraryCount = libraryArray.length + 1;
    this.ISBN = bISBN;
    this.genre = bGenre;
}

libraryArray.push(new Book("book1", 2012, "floop", "droop", 1925320, 'adventure'));

let currentGenre = "noneSelected";

document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("addtoList").addEventListener("click", function(){
        let tempGenre = document.getElementById("select-genre");
        let tempGenre2 = tempGenre.options[tempGenre.selectedIndex].text;
        libraryArray.push(new Book  (   document.getElementById("title").value,
                                        document.getElementById("year").value,
                                        document.getElementById("lastName").value,
                                        document.getElementById("firstName").value,
                                        document.getElementById("ISBN").value,
                                        tempGenre2
                                    ));
    console.log("add Book");
    console.log(libraryArray);
    });

    document.getElementById("clearLibrary").addEventListener("click", function(){
        document.getElementById("title").value = "";
        document.getElementById("year").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("firstName").value = "";
        document.getElementById("ISBN").value = "";
        document.getElementById("genre").selectedIndex = "";    
    });

    //new method of for-loop known as the for-of loop
    document.getElementById("listAll").addEventListener("click", function(){
        let tempulList = document.getElementById("ulBookList");
        let fullList = "";
        for (let element of libraryArray) {
            fullList += `   <li>title: ${element.title}</li>
                            <li>year: ${element.year}</li>

                        `;
        }
        tempulList.innerHTML = fullList;
    });


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

});
