const form = document.getElementById("form");
const artist = document.getElementById("artist-name");
const songTitle = document.getElementById("song-title");
const result = document.getElementById("result");
const more = document.getElementById("more");

const apiUrl = "https://api.lyrics.ovh/v1";

// Search by song or artist
async function searchSongs(artistName, song) {
  const res = await fetch(`${apiUrl}/${artistName}/${song}`);
  const data = await res.json();

  showData(data);
}

// Show song and artist in Dom
function showData(data) {
  result.innerHTML = `
  <ul class="songs">
  ${output}
  </ul>
  `;

  result.innerHTML = `
  <ul class="songs">
    ${data.data
      .map(
        (song) => `<li>
    <span><strong>${song.artist.name}</strong> - ${song.title}</span>
    <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
  </li>`
      )
      .join("")}
  </ul>
  `;

  if (data.prev || data.next) {
    more.innerHTML = `
    ${
      data.prev
        ? `<button class="btn" onclick="getMoreSongs('${data.prev}')">Prev</button>`
        : ""
    }
    ${
      data.next
        ? `<button class="btn" onclick="getMoreSongs('${data.next}')">Next</button>`
        : ""
    }
    `;
  } else {
    more.innerHTML = ``;
  }
}

// get prev and next results
async function getMoreSongs(url) {
  const res = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
  const data = await res.json();

  showData(data);
}

// Get lyrics for song 
async function getLyrics(artist,songTitle) {
  const res = await fetch(`${apiUrl}/v1/${artist}/${songTitle}`);
  const data = await res.json();

  const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g,'<br>')

  result.innerHTML = `<h2><strong>${artist}</strong> - ${songTitle}</h2>
  <span>${lyrics}</span>
  `;

  more.innerHTML = '';
}

// Event Listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const artistName = artist.value.trim();
  const song = songTitle.value.trim();

  if (!artistName || !song) {
    alert("Please type in search term");
  } else {
    searchSongs(artistName, song);
  }
});

// get lyrics button click
result.addEventListener('click', e => {
  const clickedEl = e.target

  if(clickedEl.tagName === 'BUTTON') {
    const artist = clickedEl.getAttibute('data-artist')
    const songTitle = clickedEl.getAttibute('data-songtitel')

    getLyrics(artist,songTitle)
  }
})