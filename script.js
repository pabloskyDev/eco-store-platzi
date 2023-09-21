let icon = false;
let health = [];
let furniture = [];
let gallery = [];

(() => {
  getHealthSection();
})();

function getHealthSection() {
  health = [
    {
      title: `Cepillo de bambú`,
      description: `Paquete de 2 unidades hecho 100% de materiales ecológicos.`,
      //   img: `./assets/img/products/toothbrush.jpg`,
      img: ``,
    },
    {
      title: `Cepillo de bambú`,
      description: `Paquete de 2 unidades hecho 100% de materiales ecológicos.`,
      img: ``,
    },
    {
      title: `Cepillo de bambú`,
      description: `Paquete de 2 unidades hecho 100% de materiales ecológicos.`,
      img: ``,
    },
  ];
}

function printHealthSection() {
  health.map((heal) => {
    const healthSection = document.getElementById("health-grid");
    healthSection.innerHTML += `<div class="card">`;
    healthSection.innerHTML += `<div class="card__img">`;
    healthSection.innerHTML += `<img src="${heal.img}" alt="health img" />`;
    healthSection.innerHTML += `</div>`;
    healthSection.innerHTML += `<div class="card__info">`;
    healthSection.innerHTML += `<h3 class="card__info-title">${heal.title}</h3>`;
    healthSection.innerHTML += `<p class="card__info-description">${heal.description}</p>`;
    healthSection.innerHTML += `</div>`;
    healthSection.innerHTML += `<button class="card__button">`;
    healthSection.innerHTML += `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#3F3F46" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
    healthSection.innerHTML += `</button>`;
    healthSection.innerHTML += `</div>`;
  });
}

function switchable() {
  icon = !icon;
}
