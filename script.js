function random(max) {
    return Math.floor(Math.random()*max)
}

function shuffleTemplate() {
    return templates[random(templates.length)]
}

function shuffleFont() {
    return fonts[random(fonts.length)]
}

const verbs = [
    "work",
    "grind",
    "get rich",
    "eat spaghettis",
    "get laid",
    "fight",
    "struggle", 
    "get to the top", 
    "piss", 
    "think",
    "commit war crimes",
    "hope",
    "know"]

const adverbs = [
    "harder", 
    "faster", 
    "more", 
    "easier", 
    "smarter"]

const nouns = [
    "fight", 
    "struggle",
    "point",
    "objective",
    "goal", 
    "worth"]

const templates = [
    `The ${adverbs[random(adverbs.length)]} you ${verbs[random(verbs.length)]}, <br> the ${adverbs[random(adverbs.length)]} you ${verbs[random(verbs.length)]}.`, 
    `The ${nouns[random(nouns.length)]} is not to  ${verbs[random(verbs.length)]}, <br> it's to  ${verbs[random(verbs.length)]}.`, 
    `Keep your ${nouns[random(nouns.length)]} in mind,<br> you'll  ${verbs[random(verbs.length)]} ${adverbs[random(adverbs.length)]} than you  ${verbs[random(verbs.length)]}.`,
    `${verbs[random(verbs.length)]} ${adverbs[random(adverbs.length)]}, <br> ${verbs[random(verbs.length)]} ${adverbs[random(adverbs.length)]}.`,
    `${verbs[random(verbs.length)]}, <br> ${verbs[random(verbs.length)]}, <br> ${verbs[random(verbs.length)]}.` ]

const fonts = ["Graduate", "Bebas Neue", "Black Ops One"]

const backgrounds = [
    {"name" : "joker", "author" : "Pia Kafanke", "link" : "https://www.pexels.com/fr-fr/photo/femme-avec-de-la-peinture-blanche-pour-le-visage-3807654/" },
    {"name" : "jet", "author" : "Janiere Fernandez", "link" : "https://www.pexels.com/fr-fr/photo/fenetre-d-avion-blanc-2405101/" },
    {"name" : "coin", "author" : "David McBee", "link" : "https://www.pexels.com/fr-fr/photo/pieces-rondes-en-argent-et-or-730564/" },
    {"name" : "car", "author" : "Harrison Haines", "link" : "https://www.pexels.com/fr-fr/photo/interieur-de-voiture-de-luxe-2834653/" },
    {"name" : "car2", "author" : "Charles Kettor", "link" : "https://www.pexels.com/fr-fr/photo/coupe-cabriolet-rouge-sur-surface-noire-831475/" },
    {"name" : "lion", "author" : "Ralph", "link" : "https://www.pexels.com/fr-fr/photo/lion-2323411/" },
    {"name" : "stock", "author" : "Pixabay", "link" : "https://www.pexels.com/fr-fr/photo/conseil-de-la-bourse-210607/" },
    {"name" : "champagne", "author" : "Julie Aagaard", "link" : "https://www.pexels.com/fr-fr/photo/deux-bouteilles-de-vin-avec-de-la-glace-2454122/" }]

let image = backgrounds[random(backgrounds.length)]

const element = document.createElement("p");
element.innerHTML = shuffleTemplate();
element.style.cssText = `font-family: ${shuffleFont()}, cursive;`
document.getElementById("container").style.cssText = `background-image: url('img/${image.name}.jpg');`
document.getElementById("container").appendChild(element);
document.getElementById("credits").innerHTML = `Image by ${image.author} on <a href='${image.link}' target=_blank >Pexels</a>`
