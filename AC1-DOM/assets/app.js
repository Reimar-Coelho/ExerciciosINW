const body = document.body



const banner = () => {
    let div = document.createElement('div')
    div.setAttribute('id','banner')

    var bannerText = document.createElement('h1') 
    bannerText.innerText='Portfólio'

    div.appendChild(bannerText)
    body.append(div)

    div.style.display = 'flex';
    div.style.alignItems = 'center';
    div.style.justifyContent = 'center';
}
banner()

const main = () => {
    let main = document.createElement('main')
    main.setAttribute('id','main')

    let divParticles = document.createElement('div')
    divParticles.setAttribute('id', 'particles')

    main.appendChild(divParticles)
    body.append(main)

}
main()

const form = () => {

}
form()

const footer = () => {

}
footer()

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
  

