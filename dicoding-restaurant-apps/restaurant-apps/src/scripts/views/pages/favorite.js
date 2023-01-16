import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
  <div class="main__title">
    <h2>Favorite Movie</h2>
  </div>
  <section class="main__section">

  </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getRestaurants();
    console.log(restaurants);
    const restaurantsContainer = document.querySelector('.main__section');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantTemplate(restaurant);
    });
  },

};

export default Favorite;
