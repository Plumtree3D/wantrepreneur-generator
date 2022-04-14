function random(max) {
    return Math.floor(Math.random()*max)
}

const verbs = ["work","grind","get rich","eat spaghettis","get laid","fight","struggle", "get to the top", "piss", "think","commit war crimes","hope"]
const adverbs = ["harder","better", "faster", "more", "easier", "smarter"]
const nouns = ["fight", "struggle","point","objective","goal", "worth"]

const templates = ["The "+adverbs[random(adverbs.length)]+" you "+verbs[random(verbs.length)]+", <br> the "+adverbs[random(adverbs.length)]+" you "+verbs[random(verbs.length)]+".", 
"The "+nouns[random(nouns.length)]+" is not to "+verbs[random(verbs.length)]+", <br> it's to "+verbs[random(verbs.length)]+".", 
"If you keep your "+nouns[random(nouns.length)]+" in mind,<br> you'll "+verbs[random(verbs.length)]+" "+adverbs[random(adverbs.length)]+" than you "+verbs[random(verbs.length)]+".",
verbs[random(verbs.length)]+ " " +adverbs[random(adverbs.length)]+ ", <br> "+ verbs[random(verbs.length)]+ " "+ adverbs[random(adverbs.length)]+"." ]
const fonts = ["Graduate", "Bebas Neue"]
const images = ["joker","car","coin","jet"]

const element = document.createElement("p");
element.innerHTML = templates[random(templates.length)];
element.style.cssText = "font-family: "+ fonts[random(fonts.length)] +", cursive; color: white; text-shadow: 1px 1px 2px black, 0 0 0.2em black;"
document.getElementById("container").style.cssText = "background-image: url('"+ images[random(images.length)] +".jpg');background-size: cover;"
document.getElementById("container").appendChild(element);