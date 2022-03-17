const fetchPokemon = () => {
  const pokeNameInput = document.getElementById("pokeName");
  let pokeName = pokeNameInput.value;
  pokeName = pokeName.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
  fetch(url)
    .then((res) => {
      if (res.status != "200") {
        console.log(res);
        alert("no se encuentra el pokemon!");
      } else {
        return res.json();
      }
    })
    .then((data) => {
      if (data) {
        console.log(data);
        let poketype = data.types[0].type.name;
        pokeType(poketype)

        let pokemon = data.name;
        pokemonName(pokemon);

        let pokeImg = data.sprites.front_default;
        pokeImage(pokeImg);

        let statHP = data.stats[0].base_stat;
        pokeStatHP(statHP);

        let statAttack = data.stats[1].base_stat;
        pokeStatAttack(statAttack);

        let statDefense = data.stats[2].base_stat;
        pokeStatDefense(statDefense);

        let statSpecialAttack = data.stats[3].base_stat;
        pokeStatSpecialAttack(statSpecialAttack);

        let statSpecialDefense = data.stats[4].base_stat;
        pokeStatSpecialDefense(statSpecialDefense);

        let statSpeed = data.stats[5].base_stat;
        pokeStatSpeed(statSpeed);
      }
    });
};
const pokemonName = (url) => {
  const pokeType = document.getElementById("pokemonName");
  pokeType.innerHTML = "Name: " + url;
};

const pokeType = (url) => {
  const pokeType = document.getElementById("poketype");
  pokeType.innerHTML = "Pokemon type: " + url;
};

const pokeImage = (url) => {
  const pokePhoto = document.getElementById("pokeImg");
  pokePhoto.src = url;
};
const pokeStatHP = (url) => {
  const pokeStatHP = document.getElementById("statHP");
  pokeStatHP.innerHTML = url;
};
const pokeStatAttack = (url) => {
  const pokeStatAttack = document.getElementById("statAttack");
  pokeStatAttack.innerHTML = url;
};
const pokeStatDefense = (url) => {
  const pokeStatDefense = document.getElementById("statDefense");
  pokeStatDefense.innerHTML = url;
};
const pokeStatSpecialAttack = (url) => {
  const pokeStatSpecialAttack = document.getElementById("statSpecialAttack");
  pokeStatSpecialAttack.innerHTML = url;
};
const pokeStatSpecialDefense = (url) => {
  const pokeStatSpecialDefense = document.getElementById("statSpecialDefense");
  pokeStatSpecialDefense.innerHTML = url;
};
const pokeStatSpeed = (url) => {
  const pokeStatSpeed = document.getElementById("statSpeed");
  pokeStatSpeed.innerHTML = url;
};
