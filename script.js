import videos from "./videos.js";

function loadVideos() {
  const playlist_area = document.querySelector(".playlist");

  videos.forEach((video, index) => {
    const div = document.createElement("div");

    div.innerHTML = `
      <div class="playlist-video ${index + 1 === 1 && "active"}">
        <video src=${video.src} muted></video>
        <label class="playlist-video-info">${video.title}</label>
      </div>
    `;

    playlist_area.appendChild(div);
  });

  addOnClick();
}
