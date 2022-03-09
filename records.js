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
    transition: filter 0.2s ease-in-out;
  }

  .cover[censored] {
    filter: blur(4px);
    overflow: none;
  }

  .cover[censored]:hover {
    filter: blur(0px);
  }
</style>`;

class Record extends HTMLElement {
    constructor() {
        super();

        const title = this.getAttribute('title');
        const artist = this.getAttribute('artist');
        const image = this.getAttribute('image');
        const censored = this.getAttribute('censored') === 'true';

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(recordStyle.content.cloneNode(true));

        const wrapper = document.createElement('div');
        wrapper.classList.add('record');

        const cover = document.createElement('div');
        cover.classList.add('cover');
        cover.style.backgroundImage = `url(${image})`;
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