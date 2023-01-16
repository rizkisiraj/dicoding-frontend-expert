import RestaurantAPISource from '../../data/restaurant-api-source';
import { createRestaurantTemplate } from '../templates/template-creator';

const RestaurantList = {
  async render() {
    return `
    <div class="hero">
      <img src="./images/heros/hero-image_1.jpg" alt="chef memasak" />
    </div>
    <div class="main__title">
      <h2>Catalog</h2>
    </div>
    <section class="main__section">
  
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantAPISource.getAllRestaurants();
    const restaurantsContainer = document.querySelector('.main__section');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantTemplate(restaurant);
    });
  },

};

export default RestaurantList;
