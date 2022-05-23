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
    // createList();

    document.getElementById("addBook").addEventListener("click", function(){
        libraryArray.push(new Book  (   document.getElementById("title").value,
                                        document.getElementById("year").value,
                                        document.getElementById("lastName").value,
                                        document.getElementById("firstName").value,
                                        document.getElementById("ISBN").value,
                                        document.getElementById("select-genre").selectedIndex
                                    ));
    document.location.href = "index.html#listAll";
    });

    document.getElementById("clearLibrary").addEventListener("click", function(){
        document.getElementById("title").value = "";
        document.getElementById("year").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("firstName").value = "";
        document.getElementById("ISBN").value = "";
        // document.getElementById("genre").value = "";    
    });

    $(document).bind("change", "select-genre", function(event, ui){
        selectedGenre = $('select-genre').val();
    });

    document.getElementById("select-genre").addEventListener("click", function(){
        movieArray.sort(dynamicSort("title"));
        createList();
        document.location.href = "index.html#listAll";
    });

    document.getElementById("sortGenre").addEventListener("click", function(){
        movieArray.sort(dynamicSort("genre"));
        createList();
        document.location.href = "index.html#listAll";
    });

});
