  document.addEventListener('DOMContentLoaded', function () {
    const homeLink = document.getElementById('home');
    if (homeLink) {
      homeLink.addEventListener('click', function (e) {
        e.preventDefault();
        for (let i = 0; i < 20; i++) {
          createFallingPsyduck();
        }
        // Scroll para o topo (home)
        //document.getElementById("home").scrollIntoView({ behavior: "instant" });
      });
    }
  });

  function createFallingPsyduck() {
    const img = document.createElement('img');
    img.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png';
    img.classList.add('falling-psyduck');
    img.style.left = Math.random() * 100 + 'vw';
    img.style.animationDuration = (2 + Math.random() * 3) + 's';
    document.body.appendChild(img);

    setTimeout(() => {
      img.remove()
      
    }, 5000);

  }