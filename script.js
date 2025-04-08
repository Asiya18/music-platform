// Stop other music when one plays
const audios = document.querySelectorAll("audio");

audios.forEach(audio => {
  audio.addEventListener("play", () => {
    audios.forEach(other => {
      if (other !== audio) other.pause();
    });
  });
});

// Search functionality
const searchInput = document.getElementById("searchInput");
const albumGrid = document.getElementById("albumGrid");
const albums = albumGrid.querySelectorAll(".album");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  albums.forEach(album => {
    const text = album.querySelector("p").textContent.toLowerCase();
    album.style.display = text.includes(value) ? "flex" : "none";
  });
});
