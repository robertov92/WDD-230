const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"


fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const town = jsonObject['towns'];

        const sodafilter = town.filter(x => x.name == "Soda Springs");
        let sodaEvents = sodafilter[0].events;
        let ul = document.createElement('ul');

        sodaEvents.forEach(event => {
            let listItem = document.createElement('li');
            listItem.innerHTML = event;
            ul.append(listItem);
        });

        document.getElementById("eventSoda").appendChild(ul);
    });