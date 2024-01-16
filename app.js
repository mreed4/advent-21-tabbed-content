import { episodes } from "./data.js";

(function init() {
  console.log("init");
  renderEpisodes();
})();

function renderEpisodes() {
  /* */
  const episodesUl = document.querySelector("#episodes");

  episodes.forEach((episode, i) => {
    /* */
    const episodeLi = buildEpisode(episode, i);
    episodesUl.appendChild(episodeLi);
  });
}

function buildEpisode(episode, i) {
  const episodeLi = document.createElement("li");

  if (i === 0) {
    episodeLi.classList.add("selected");
  }

  episodeLi.innerHTML = `
    <a href="#">
      <div class="episode">Episode ${episode.id}</div>
      <div class="title">${episode.title}</div>
    </a>`;

  return episodeLi;
}
