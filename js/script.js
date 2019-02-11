/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var song_titles = ["voice in my head", 
             "shot clock",
             "thank you next",
             "come through and chill"];
             
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var image_urls = [
    "https://images.genius.com/557f4ca436aaabc4210bd3850f96b954.1000x1000x1.jpg",
    "https://i.ytimg.com/vi/XgH93HlqtQE/maxresdefault.jpg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Ariana_Grande_Thank_U_Next.png/220px-Ariana_Grande_Thank_U_Next.png",
    "https://images-na.ssl-images-amazon.com/images/I/61hK6c6xl9L._SS500.jpg"
]

var artists = ["Aboogie","Ella Mai", "Ariana Grande","Miguel ft J. Cole"]

var lengths = ["2:23","3:09", "3:28", "4:38"]

var links = [
    "https://www.youtube.com/watch?v=X8mNBrFhCtQ", 
    "https://www.youtube.com/watch?v=T4kAYIC5Xzo",
    "https://www.youtube.com/watch?v=5OeR5XBEahU", 
    "https://www.youtube.com/watch?v=u_C4onVrr8U"
]


function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
        song_titles.forEach(function(song) { 
            $("#songs").append(song)
        });
        
        image_urls.forEach(function(image_url) {
            $("#images").append("<img src=" + image_url + ">");
        });
            
        artists.forEach(function(artist) {
           $("#artists").append(artist)
        });
        
        lengths.forEach(function(length) {
          $("#lengths").append(length)
        });
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
