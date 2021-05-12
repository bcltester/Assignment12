// DOM HELPER
const $ = (selector) => {
    return document.querySelector(selector);
}

class Jukebox {
    constructor(albums) {
        this.albums = [];
    }
    addAlbum = function(album) {
        this.albums.push(album);
    }
    favoriteAlbum = function() {
        let max = -1, fav;
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played;
                fav = this.albums[i];
            }
        }
        return fav.display();
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist;
        this.title = title;
        this.played = 0;
    }
    play = function() {
        this.played += 1;
        console.log(`You played ${this.title} by ${this.artist}`);
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`;
    }
}

arrAlbums = [
    ['Operation Ivy', 'Energy'],
    ['Blink 182', 'Dude Ranch'],
    ['New Found Glory', 'Sticks and Stones']
    ];


for(let album of arrAlbums) {
    let elem = document.createElement("option");
    elem.setAttribute("value", album[0]);
    elem.innerText = `${album[1]} by ${album[0]}`;
    $("#song").appendChild(elem);
}


$("#play").addEventListener('click', (e) => {
    e.preventDefault();
    if ($("#song").value === 'Operation Ivy') {
        jbox.albums[0].play();
    } else if ($("#song").value === 'Blink 182') {
        jbox.albums[1].play();
    } else if ($("#song").value === 'New Found Glory') {
        jbox.albums[2].play();
    }
});

$("#showFavorite").addEventListener('click', (e) => {
    e.preventDefault();
    $("#favoriteAlbum").innerText = jbox.favoriteAlbum();
});

var jbox = new Jukebox();
for (let i=0; i<arrAlbums.length; i++) {
    jbox.albums[i] = new Album(arrAlbums[i][0],arrAlbums[i][1]);
}

// jbox.addAlbum(album1);
// jbox.addAlbum(album2);
// jbox.addAlbum(album3);

// album1.play();
// album2.play();
// album2.play();
// album2.play();
// album2.play();
// album2.play();
// album3.play();

// console.log(`Your favorite album is: ${jbox.favoriteAlbum()}`);