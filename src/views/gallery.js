/* eslint-disable no-unused-vars */
let arr = [{
        name: "img01",
        caption: "En voiture",
        description: "Il a pour lui l'éternité, montre en main.<br> — Jules Renard"
    },
    {
        name: "img02",
        caption: "Amis",
        description: "Le temps confirme l'amitié.<br> — Henri Lacordaire"
    },
    {
        name: "img03",
        caption: "Au travail",
        description: "Dans le temps, même le futur était mieux.<br> — Karl Valentin"
    },
    {
        name: "img04",
        caption: "Au garage",
        description: "Il faut inventer en même temps que l'on apprend.<br> — Plutarque"
    },
    {
        name: "img05",
        caption: "Photo de groupe",
        description: "Les doctrines passent - les anecdotes demeurent.<br> — Emil Michel Cioran"
    },
    {
        name: "img06",
        caption: "Mère et Fille",
        description: "Il faut profiter du temps. Il ne passe pas deux fois.<br> — Melvin Gallant"
    },
    {
        name: "img07",
        caption: "Grand-père",
        description: "Je m'amuse à vieillir. C'est une occupation de tous les instants.<br> — Paul Léautaud"
    },
    {
        name: "img08",
        caption: "Par la fenêtre",
        description: "Le temps passe. Nous aussi.<br> — Félix Leclerc"
    },
    {
        name: "img09",
        caption: "Une des soeurs",
        description: "Le temps met tout en lumière.<br> — Thalès"
    },
    {
        name: "img10",
        caption: "Les soeurs",
        description: "Le temps n'a pas la même allure pour tout le monde !<br> — William Shakespeare"
    },
    {
        name: "img11",
        caption: "Partie de pêche",
        description: "On ne possède rien, jamais, - Qu'un peu de temps.<br> — Eugène Guillevic"
    },
    {
        name: "img12",
        caption: "Famille",
        description: "Vienne la nuit sonne l'heure ; les jours s'en vont je demeure.<br> — Guillaume Apollinaire"
    },
    {
        name: "img13",
        caption: "Ami",
        description: "L'amitié peut se passer longtemps de preuves.<br> — Jules Renard"
    },
    {
        name: "img14",
        caption: "Une des Soeurs",
        description: "Nous n'avons à nous que le jour d'aujourd'hui.<br> — Alphonse de Lamartine"
    },
    {
        name: "img15",
        caption: "Nounou",
        description: "C'est le temps qui mûrit l'amour.<br> — Simone Piuze"
    },

    {
        name: "img16",
        caption: "Nounou",
        description: "C'est le temps qui mûrit l'amour.<br> — Simone Piuze"
    },
    {
        name: "img17",
        caption: "Nounou",
        description: "C'est le temps qui mûrit l'amour.<br> — Simone Piuze"
    },
    {
        name: "img18",
        caption: "Nounou",
        description: "C'est le temps qui mûrit l'amour.<br> — Simone Piuze"
    },
    {
        name: "img19",
        caption: "Nounou",
        description: "C'est le temps qui mûrit l'amour.<br> — Simone Piuze"
    },
    {
        name: "img20",
        caption: "Nounou",
        description: "C'est le temps qui mûrit l'amour.<br> — Simone Piuze"
    },
    {
        name: "img21",
        caption: "Nounou",
        description: "C'est le temps qui mûrit l'amour.<br> — Simone Piuze"
    },
    {
        name: "img22",
        caption: "Nounou",
        description: "C'est le temps qui mûrit l'amour.<br> — Simone Piuze"
    },
    {
        name: "img23",
        caption: "Nounou",
        description: "C'est le temps qui mûrit l'amour.<br> — Simone Piuze"
    },
    {
        name: "img24",
        caption: "Nounou",
        description: "C'est le temps qui mûrit l'amour.<br> — Simone Piuze"
    },
    {
        name: "img25",
        caption: "Nounou",
        description: "C'est le temps qui mûrit l'amour.<br> — Simone Piuze"
    },
    {
        name: "img26",
        caption: "Nounou",
        description: "C'est le temps qui mûrit l'amour.<br> — Simone Piuze"
    },
    {
        name: "img27",
        caption: "Nounou",
        description: "C'est le temps qui mûrit l'amour.<br> — Simone Piuze"
    },
    {
        name: "img28",
        caption: "Nounou",
        description: "C'est le temps qui mûrit l'amour.<br> — Simone Piuze"
    },
    {
        name: "img29",
        caption: "Nounou",
        description: "C'est le temps qui mûrit l'amour.<br> — Simone Piuze"
    },
    {
        name: "img30",
        caption: "Nounou",
        description: "C'est le temps qui mûrit l'amour.<br> — Simone Piuze"
    },
    {
        name: "img31",
        caption: "Nounou",
        description: "C'est le temps qui mûrit l'amour.<br> — Simone Piuze"
    },
    {
        name: "img32",
        caption: "Nounou",
        description: "C'est le temps qui mûrit l'amour.<br> — Simone Piuze"
    },
    {
        name: "img33",
        caption: "Nounou",
        description: "C'est le temps qui mûrit l'amour.<br> — Simone Piuze"
    },
    {
        name: "img34",
        caption: "Nounou",
        description: "C'est le temps qui mûrit l'amour.<br> — Simone Piuze"
    }
];

let dataSize = {};
let dataLength = 0;
let currentData = null;
let navbarHeight = 60;

function polaroidGallery() {
    observe();
    setGallery(arr);
}

function setGallery(arr) {
    let out = "";
    let i;
    for (i = 0; i < arr.length; i++) {
        out +=
            '<div class="photo" id="' +
            i +
            '"><div class="side side-front"><figure>' +
            '<img src="' +
            getImage(arr[i].name) +
            '" alt="' +
            arr[i].name +
            '"/>' +
            "<figcaption>" +
            arr[i].caption +
            "</figcaption>" +
            '</figure></div><div class="side side-back"><div><p>' +
            arr[i].description +
            "</p></div></div></div>";
    }
    document.getElementById("gallery").innerHTML = out;
}

function getImage(name) {
    let images = require.context("../assets/images/culture", false, /\.jpg$/);
    return images("./" + name + ".jpg");
}

function observe() {
    let observeDOM = (function() {
        let MutationObserver =
            window.MutationObserver || window.WebKitMutationObserver,
            eventListenerSupported = window.addEventListener;
        return function(obj, callback) {
            if (MutationObserver) {
                // eslint-disable-next-line no-unused-vars
                let obs = new MutationObserver(function(mutations, observer) {
                    if (
                        mutations[0].addedNodes.length ||
                        mutations[0].removedNodes.length
                    )
                        callback(mutations);
                });
                obs.observe(obj, { childList: true, subtree: false });
            } else if (eventListenerSupported) {
                obj.addEventListener("DOMNodeInserted", callback, false);
            }
        };
    })();

    observeDOM(document.getElementById("gallery"), function(mutations) {
        let gallery = [].slice.call(mutations[0].addedNodes);
        gallery.forEach(function(item) {
            let img = item.getElementsByTagName("img")[0];
            let fig = item.getElementsByTagName("figure")[0];
            let first = true;
            item.style.height = fig.offsetHeight.toString() + "px";
            item.style.width = fig.offsetWidth.toString() + "px";
            dataSize[item.id] = {
                item: item,
                width: item.offsetWidth,
                height: img.offsetHeight
            };
            if (first) {
                currentData = dataSize[item.id];
                first = false;
            }
            dataLength++;
            item.addEventListener("click", function() {
                if (currentData != dataSize[item.id] || currentData == null) {
                    select(dataSize[item.id]);
                    shuffleAll();
                } else {
                    item.classList.contains("flipped") === true ?
                        item.classList.remove("flipped") :
                        item.classList.add("flipped");
                }
            });
            shuffle(dataSize[item.id]);
        });
    });
}

function select(data) {
    let scale = 1.8;
    let x = (window.innerWidth - data.item.offsetWidth) / 2;
    let y = (window.innerHeight - navbarHeight - data.item.offsetHeight) / 2;
    data.item.style.zIndex = 999;
    data.item.style.WebkitTransform =
        "translate(" + x + "px," + y + "px) scale(" + scale + "," + scale + ")";
    data.item.style.mozTransform =
        "translate(" + x + "px," + y + "px) scale(" + scale + "," + scale + ")";
    data.item.style.msTransform =
        "translate(" + x + "px," + y + "px) scale(" + scale + "," + scale + ")";
    data.item.style.transform =
        "translate(" + x + "px," + y + "px) scale(" + scale + "," + scale + ")";
    currentData = data;
}

function shuffle(data) {
    let randomX = Math.random();
    let randomY = Math.random();
    let maxR = 15;
    let minR = -15;
    let rotRandomD = Math.random() * (maxR - minR) + minR;
    let x = Math.floor((window.innerWidth - data.item.offsetWidth * 2) * randomX);
    let y = Math.floor(
        (window.innerHeight - data.item.offsetHeight * 2) * randomY
    );
    data.item.style.zIndex = 1;
    data.item.style.WebkitTransform =
        "translate(" + x + "px," + y + "px) rotate(" + rotRandomD + "deg)";
    data.item.style.mozTransform =
        "translate(" + x + "px," + y + "px) rotate(" + rotRandomD + "deg)";
    data.item.style.msTransform =
        "translate(" + x + "px," + y + "px) rotate(" + rotRandomD + "deg)";
    data.item.style.transform =
        "translate(" + x + "px," + y + "px) rotate(" + rotRandomD + "deg)";
}

function shuffleAll() {
    for (let id in dataSize) {
        if (id != currentData.item.id) {
            shuffle(dataSize[id]);
        }
    }
}

export default {
    polaroidGallery
};