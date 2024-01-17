import { episodes } from "./data.js";

(function init() {
  renderEpisodes();
  enableEpisodeSelection();
  initEventListeners();
})();

function initEventListeners() {
  document.addEventListener("keyup", handleKeyboardEvents);
}

function renderEpisodes() {
  /* */
  const episodesUl = document.querySelector("#episodes");

  episodes.forEach((episode, i) => {
    const episodeLi = buildEpisode(episode, i);
    episodesUl.appendChild(episodeLi);
  });
}

function enableEpisodeSelection() {
  /* */
  const allEpisodes = document.querySelectorAll("#episodes li");

  allEpisodes.forEach((episodeLi, i) => {
    episodeLi.addEventListener("click", () => {
      /* */
      markEpisodeAsSelected(episodeLi);
      renderEpisodeDetails(episodes[i]);
    });
  });
}

function handleKeyboardEvents(event) {
  /* */
  navigateEpisodes(event);
}

function buildEpisode(episode, i) {
  /* */
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
  /* */
  const selectedEpisode = document.querySelector(".selected");
  selectedEpisode.classList.remove("selected");

  episodeLi.classList.add("selected");
}

function renderEpisodeDetails(episode) {
  /* */
  const episodeDetails = document.querySelector("main");
  const cover = episodeDetails.querySelector(".cover img");
  const h1 = episodeDetails.querySelector("h1");
  const p = episodeDetails.querySelector("p");

  cover.src = `./images/cover__episode-${episode.id}.png`;
  h1.innerText = episode.title;
  p.innerText = episode.description;
}

function navigateEpisodes(event) {
  /* */
  const selectedEpisode = document.querySelector(".selected");
  const allEpisodes = Array.from(selectedEpisode.parentNode.children);
  const selectedEpisodeIndex = allEpisodes.indexOf(selectedEpisode);

  if (event.ctrlKey && event.key === "ArrowUp") {
    if (selectedEpisodeIndex === 0) {
      const lastEpisode = selectedEpisode.parentNode.lastElementChild;
      markEpisodeAsSelected(lastEpisode);
      renderEpisodeDetails(episodes[episodes.length - 1]);
    }

    if (selectedEpisodeIndex > 0) {
      const previousEpisode = selectedEpisode.previousElementSibling;
      markEpisodeAsSelected(previousEpisode);
      renderEpisodeDetails(episodes[selectedEpisodeIndex - 1]);
    }
  }

  if (event.ctrlKey && event.key === "ArrowDown") {
    if (selectedEpisodeIndex === episodes.length - 1) {
      const firstEpisode = selectedEpisode.parentNode.firstElementChild;
      markEpisodeAsSelected(firstEpisode);
      renderEpisodeDetails(episodes[0]);
    }

    if (selectedEpisodeIndex < episodes.length - 1) {
      const nextEpisode = selectedEpisode.nextElementSibling;
      markEpisodeAsSelected(nextEpisode);
      renderEpisodeDetails(episodes[selectedEpisodeIndex + 1]);
    }
  }
}
