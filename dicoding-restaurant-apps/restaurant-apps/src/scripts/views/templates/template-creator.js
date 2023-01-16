import CONFIG from '../../globals/config';

const createRestaurantTemplate = (restaurant) => `<article id="${restaurant.id}" class="card">
  <div class="card__img">
      <img src="${restaurant.pictureId ? `${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}` : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}, ${restaurant.city}">
  </div>
  <div class="card__content">
      <span tabindex="0" class="rating">${restaurant.rating}</span>
      <h3 tabindex="0" class="card__title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
  </div>
  <div class="city-tag">
      <span tabindex="0">${restaurant.city}</span>
  </div>
</article>
`;

const createReviewTemplate = (review) => ` <div class="review-card">
    <h5 tabindex="0">${review.name}</h5>
    <p tabindex="0" class="review-desc">"${review.review}"</p>
    <span tabindex="0" class="review-date">${review.date}</span>
</div>
`;

const createRestaurantDetailTemplate = (restaurant) => `<article id="${restaurant.id}">
<div class="hero">
    <img src="${restaurant.pictureId ? `${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}` : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}, ${restaurant.city}" />
</div>
<div class="restaurant-title__container">
    <h3 tabindex="0" class="restaurant-title">${restaurant.name}</h3>
</div>
<div class="restaurant-content__container">
    <p tabindex="0" class="restaurant-address">${restaurant.address}</p>
    <div class="city-tag">
      <span tabindex="0">${restaurant.city}</span>
    </div>
    <p class="restaurant-description">
    ${restaurant.description}
    </p>
    <div class="restaurant-menu-container">
        <h4>Makanan</h4>
        <div class="restaurant-menu-list">
            ${restaurant.menus.foods.map((food) => `<span class="menu-item">${food.name}</span>`).join('')}
        </div>
    </div>
    <div class="restaurant-menu-container">
        <h4>Minuman</h4>
        <div class="restaurant-menu-list">
            ${restaurant.menus.drinks.map((drink) => `<span class="menu-item">${drink.name}</span>`).join('')}
        </div>
    </div>
    <div class="restaurant-customer-reviews">
        <h4>Reviews</h4>
        <div class="restaurant-customer-reviews-list">
        ${restaurant.customerReviews.map((review) => createReviewTemplate(review)).join('')}
        </div>
    </div>
</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
