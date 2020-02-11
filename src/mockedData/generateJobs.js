const position = ['barista', 'kierownik zmiany', 'kierownik kawiarni'];

const city = ['Warszawa', 'Kraków', 'Wrocław', 'Poznań', 'Sosnowiec'];

const arr = Array.from({length: 100});

const random = limit => Math.floor(Math.random() * limit);

const generatedData = arr.map(() => {
  const randomPosition = position[random(position.length - 1)];
  const randomCity = city[random(city.length - 1)];
  const date = new Date();
  const formattedDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;

  return {
    position: randomPosition,
    city: randomCity,
    date: formattedDate
  }
});


console.log(JSON.stringify(generatedData));