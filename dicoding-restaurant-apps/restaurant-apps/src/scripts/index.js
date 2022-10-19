import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../DATA.json'


const mainSection = document.querySelector(".main__section");
const restaurants = data.restaurants;
const menu = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

menu.addEventListener("click", function(e){
    nav.classList.toggle("open");
    e.stopPropagation();
})

const generateTemplate = ({id, name, pictureId, city, rating}) => {
    return (
        `<article id="${id}" class="card">
            <div class="card__img">
                <img src="${pictureId}" alt="${name}, ${city}">
            </div>
            <div class="card__content">
                <span tabindex="0" class="rating">${rating}</span>
                <h3 tabindex="0" class="card__title">${name}</h3>
            </div>
            <div class="city-tag">
                <span tabindex="0">${city}</span>
            </div>
        </article>
        `
    )
}


const renderData = (data) => {
    data = data.map((content) => generateTemplate(content))
    mainSection.innerHTML = data.join("");
}

renderData(restaurants)