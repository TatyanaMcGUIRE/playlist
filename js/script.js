/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["voice in my head", 
             "shot clock",
             "thank you next",
             "come through and chill"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var store images_urls = ["https://images.genius.com/557f4ca436aaabc4210bd3850f96b954.1000x1000x1.jpg",
"https://i.ytimg.com/vi/XgH93HlqtQE/maxresdefault.jpg",
"https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Ariana_Grande_Thank_U_Next.png/220px-Ariana_Grande_Thank_U_Next.png",
"https://images-na.ssl-images-amazon.com/images/I/61hK6c6xl9L._SS500.jpg"]



var artists = ["Aboogie","Ella Mai", "Ariana Grande","Miguel ft J. Cole"]



var song length =["2:23",]




var links =[]


function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
