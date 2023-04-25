const phone = document.querySelector(".red-phone");
const personalInfo = document.querySelector(".personalInfo");

phone.addEventListener("click", () => {
  const urls = [
    "https://swapi.dev/api/people/1/",
    "https://swapi.dev/api/planets/1/",
    "https://swapi.dev/api/starships/12/",
    "https://swapi.dev/api/vehicles/14/",
    "https://swapi.dev/api/films/1/",
  ];

  const requests = urls.map((url) =>
    fetch(url).then((response) => response.json())
  );

  return Promise.all(requests).then((data) => {
    const [personData, planetData, starshipData, vehiclesData, filmData] = data;

    const html = `
    <div>
          <p>Имя: ${personData.name}</p>
      <p>Рост: ${personData.height}</p>
      <p>Масса: ${personData.mass} </p>
      <p>Цвет волос :${personData.hair_color} </p>
       <p>Цвет глаз :${personData.eye_color} </p>
    </div>

    <div>
      <p>Пол: ${personData.gender} </p>
      <p>Дата рождения: ${personData.birth_year}</p>
      <p>Родная планета: ${planetData.name}</p>
      <p>Корабль: ${starshipData.name}</p>
      <p>Транспортное средство: ${vehiclesData.name}</p>
      <p>Фильм: ${filmData.title}</p></div>


    `;

    personalInfo.innerHTML = html;
  });
});
