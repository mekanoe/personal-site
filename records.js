const recordStyle = document.createElement('template');
recordStyle.innerHTML = `<style>
  .record {
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
  }
  
  .title {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .artist {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  
  .cover {
    width: 300px;
    height: 300px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    max-width: 90vw;
    transition: all 0.2s ease-in-out;
    position: relative;
    display: block;
  }
  
  .cover.no-image {
    background-image: linear-gradient(-45deg, #835, #538);
    background-size: 240%;
    box-shadow: inset 0 0 0 2px #555;
  }

  .cover.no-image::after {
    content: "(No image)";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 0.75rem;
    box-shadow: 0 0 30px transparent;
  }

  .cover[censored] {
    filter: blur(4px);
    overflow: none;
  }

  .cover[censored]:hover {
    filter: blur(0px);
  }

  .cover:hover {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
    transform: scale(1.05);
  }
</style>`;

class Record extends HTMLElement {
  constructor() {
    super();

    const title = this.getAttribute('title');
    const artist = this.getAttribute('artist');
    const image = this.getAttribute('image');
    const url = this.getAttribute('url');
    const noImage = this.getAttribute('no-image') === 'true';
    const censored = this.getAttribute('censored') === 'true';

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(recordStyle.content.cloneNode(true));

    const wrapper = document.createElement('div');
    wrapper.classList.add('record');

    const cover = document.createElement('a');
    if (url) cover.href = url;
    cover.classList.add('cover');

    if (!noImage) {
      cover.style.backgroundImage = `url(${image})`;
    } else {
      cover.classList.add('no-image');
    }

    if (censored) {
      cover.setAttribute('censored', censored);
    }

    const titleElement = document.createElement('p');
    titleElement.classList.add('title');
    titleElement.textContent = title;

    const artistElement = document.createElement('p');
    artistElement.classList.add('artist');
    artistElement.textContent = artist;


    wrapper.appendChild(cover);
    wrapper.appendChild(titleElement);
    wrapper.appendChild(artistElement);

    shadow.appendChild(wrapper);
  }
}

(() => {

  window.customElements.define('record-card', Record);

})();