// Product tabs start
$(document).ready(function () {
  const tabIngredients = $(`#ingredients-tab`);
  const contentIngredients = $(`#ingredients-content`);
  const tabFeedbacks = $(`#feedbacks-tab`);
  const contentFeedbacks = $(`#feedbacks-content`);

  tabIngredients.click(() => {
    tabIngredients.addClass('description-tabs__item--active');
    tabFeedbacks.removeClass('description-tabs__item--active');
    contentIngredients.addClass('product__extended-info--active');
    contentFeedbacks.removeClass('product__extended-info--active');
  });
  tabFeedbacks.click(() => {
    tabFeedbacks.addClass('description-tabs__item--active');
    tabIngredients.removeClass('description-tabs__item--active');
    contentFeedbacks.addClass('product__extended-info--active');
    contentIngredients.removeClass('product__extended-info--active');
  });
});
// Product tabs end
