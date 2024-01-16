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

    episodeLi.addEventListener("click", () => {
      markEpisodeAsSelected(episodeLi);
      renderEpisodeDetails(episode);
    });
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

function markEpisodeAsSelected(episodeLi) {
  const selectedEpisode = document.querySelector(".selected");
  selectedEpisode.classList.remove("selected");

  episodeLi.classList.add("selected");
}

function renderEpisodeDetails(episode) {
  const episodeDetails = document.querySelector("main");
  const cover = episodeDetails.querySelector(".cover img");
  const h1 = episodeDetails.querySelector("h1");
  const p = episodeDetails.querySelector("p");

  cover.src = `./images/cover__episode-${episode.id}.png`;
  h1.innerText = episode.title;
  p.innerText = episode.description;
}
