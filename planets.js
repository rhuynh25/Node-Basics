const planet = require('fs');

planet.readFile('planets.txt', 'utf8', (err, data) => { 
  // utf8 used to encode all possible characters
    if (err) {
      console.error(err);
      return;
    }

    const planets = data.split(',').map(planet => planet.trim());

    planets.forEach(planet => console.log(planet));
});
