const body = document.body;

const banner = () => {
  let div = document.createElement("div");
  div.setAttribute("id", "banner");

  let bannerText = document.createElement("h1");
  bannerText.innerText = "Portfólio";

  div.appendChild(bannerText);
  body.append(div);

  div.style.display = "flex";
  div.style.alignItems = "center";
  div.style.justifyContent = "center";
};
banner();

const main = () => {
  let main = document.createElement("main");
  main.setAttribute("id", "main");

  let nome1 = document.createElement('div')
  nome1.setAttribute('id', 'nome-box')

  let nome2 = document.createElement('div')
  nome2.setAttribute('id', 'nome-box')

  let nome1Text = document.createElement('h1')
  nome1Text.setAttribute('id', 'nome')
  nome1Text.innerText = "Reimar Coelho"

  let nome2Text = document.createElement('h1')
  nome2Text.setAttribute('id', 'nome')
  nome2Text.innerText = "Victor Tadashi"

  let cards1 = document.createElement("div");
  cards1.setAttribute("id", "card-box1");

  let cards2 = document.createElement("div");
  cards2.setAttribute("id", "card-box2");

  let cards3 = document.createElement("div");
  cards3.setAttribute("id", "card-box3");
  
  let card1 = document.createElement("div");
  card1.setAttribute("id", "card");

  let card2 = document.createElement("div");
  card2.setAttribute("id", "card");

  let card3 = document.createElement("div");
  card3.setAttribute("id", "card");

  let card4 = document.createElement("div");
  card4.setAttribute("id", "card");


  let card1Content = document.createElement("div")
  card1Content.setAttribute("id", "card1Content")
  let randDiv = document.createElement("div")
  randDiv.setAttribute("id", "randDiv")
  let card1Text1 = document.createElement('p')
  card1Text1.setAttribute("id", "texto")
  card1Text1.innerText = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  let card1Text2 = document.createElement('div')
  card1Text2.setAttribute("id", "imagem2")
  let randDiv2 = document.createElement("div")
  randDiv2.setAttribute("id", "randDiv2")
  let card1Title = document.createElement('h1')
  card1Title.innerText = "Sobre"
  card1Title.style.marginTop = "20px"
  card1.appendChild(card1Title)
  card1.appendChild(card1Content)
  randDiv.appendChild(card1Text1)
  randDiv2.appendChild(card1Text2)
  card1Content.appendChild(randDiv)
  card1Content.appendChild(randDiv2)

  let card2Content = document.createElement("div")
  card2Content.setAttribute("id", "card1Content")
  let randDiv3 = document.createElement("div")
  randDiv3.setAttribute("id", "randDiv")
  let card2Text1 = document.createElement('p')
  card2Text1.setAttribute("id", "texto")
  card2Text1.innerText = "Sou Victor Tadashi Saito Barra nascido em São Paulo e atualmente moro na região sul da cidade atualmente estudo na Fiap School e faço estagio na Skillplace."
  let card2Text2 = document.createElement('div')
  card2Text2.setAttribute("id", "imagem1")
  let randDiv4 = document.createElement("div")
  randDiv4.setAttribute("id", "randDiv2")
  let card2Title = document.createElement('h1')
  card2Title.innerText = "Sobre"
  card2Title.style.marginTop = "20px"
  card2.appendChild(card2Title)
  card2.appendChild(card2Content)
  randDiv3.appendChild(card2Text1)
  randDiv4.appendChild(card2Text2)
  card2Content.appendChild(randDiv3)
  card2Content.appendChild(randDiv4)

  let divParticles = document.createElement("div");
  divParticles.setAttribute("id", "particles");

  nome1.appendChild(nome1Text)
  nome2.appendChild(nome2Text)
  cards1.appendChild(nome1)
  cards1.appendChild(nome2)
  cards2.appendChild(card1)
  cards2.appendChild(card2)
  cards3.appendChild(card3)
  cards3.appendChild(card4)
  main.appendChild(cards1)
  main.appendChild(cards2)
  main.appendChild(cards3)
  main.appendChild(divParticles);
  body.append(main);
};
main();

const form = () => {};
form();

const footer = () => {};
footer();

particlesJS("particles", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 700,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.8,
      random: true,
      animation: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "push",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
});
