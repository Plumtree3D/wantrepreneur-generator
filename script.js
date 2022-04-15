function random(max) {
    return Math.floor(Math.random()*max)
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

const fonts = ["Graduate", "Bebas Neue"]

const images = [
    {"name" : "joker", "author":"Pia Kafanke" },
    {"name" : "jet", "author":"Janiere Fernandez" },
    {"name" : "coin", "author":"David McBee" },
    {"name" : "car", "author":"Harrison Haines" },
    {"name" : "car2", "author":"Charles Kettor" },
    {"name" : "lion", "author":"Ralph" },
    {"name" : "stock", "author":"Pixabay" },
    {"name" : "champagne", "author":"Julie Aagaard" }]
    
let image = images[random(images.length)]

const element = document.createElement("p");
element.innerHTML = templates[random(templates.length)];
element.style.cssText = "font-family: "+ fonts[random(fonts.length)] +", cursive;"
document.getElementById("container").style.cssText = "background-image: url('"+ image.name +".jpg');"
document.getElementById("container").appendChild(element);
document.getElementById("credits").innerHTML = "Image by " + image.author +"on <a href='https://www.pexels.com/'>Pexels</a>"
