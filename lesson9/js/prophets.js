// set the JSON URL
const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

// use fetch to obtain a promise for
fetch(requestURL)

.then(function(response) {

        return response.json();

    })
    .then(function(jsonObject) {

        const prophets = jsonObject['prophets'];
        const cards = document.querySelector('.card');

        prophets.forEach(prophet => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let image = document.createElement('img');

            h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
            p1.innerHTML = `Date of Birth: ${prophet.birthdate}`;
            p2.innerHTML = `Place of Birth: ${prophet.birthplace}`
            image.setAttribute('src', prophet.imageurl);
            image.setAttribute('alt', `${prophet.name} ${prophet.lastname} - ${prophet.order}`);

            card.append(h2, p1, p2, image);
            cards.append(card);

        });
    });