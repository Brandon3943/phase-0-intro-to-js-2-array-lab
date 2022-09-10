const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.splice(2)
}

function destructivelyRemoveFirstCat() {
    cats.splice(0,1)
}


function appendCat(name) {
    return [...cats, "Broom"]
}

function prependCat(name) {
    return ["Arnold", ...cats]
}

function removeLastCat() {
    return cats.slice(0, cats.length -1)
}

function removeFirstCat() {
    return cats.slice(1)
}

console.log(removeFirstCat())