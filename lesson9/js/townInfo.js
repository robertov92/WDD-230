// set the JSON URL
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

// use fetch to obtain a promise for
fetch(requestURL)

.then(function(response) {

        return response.json();

    })
    .then(function(jsonObject) {
        // save the json object into a constant 'towns'
        const towns = jsonObject['towns'];
        // select the document element where the output will be displayed
        const specificTowns = document.querySelector('.specificTowns');
        // filter
        const specificTownsFilter = towns.filter(town => town.name == "Preston" || town.name == "Fish Haven" || town.name == "Soda Springs");

        // what to do for each filtered element 
        specificTownsFilter.forEach(town => {
            // create section and other elements
            let card = document.createElement('section');
            let div = document.createElement('div');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let image = document.createElement('img');

            // add atributes to the html elements
            h2.innerHTML = `${town.name}`;
            h3.innerHTML = `${town.motto}`;
            p1.innerHTML = `Year Founded: ${town.yearFounded}`;
            p2.innerHTML = `Population: ${town.currentPopulation}`;
            p3.innerHTML = `Annual Rain Fall: ${town.averageRainfall}`;
            image.setAttribute('src', `images/` + town.photo);
            image.setAttribute('alt', `${town.name} image`);

            // append all to output element
            div.append(h2, h3, p1, p2, p3);
            card.append(div, image);
            specificTowns.append(card);
        });
    });