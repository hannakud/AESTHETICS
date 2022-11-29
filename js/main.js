// Product tabs start
$(document).ready(function() {
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
    // Product tabs end

    // Cabinet tabs start
    const tabContacts = $(`#contacts-tab`);
    const contenContacts = $(`#contacts-content`);
    const tabAddressbook = $(`#addressbook-tab`);
    const contentAddressbook = $(`#addressbook-content`);
    const tabWishlist = $(`#wishlist-tab`);
    const contentWishlist = $(`#wishlist-content`);
    const tabHistory = $(`#history-tab`);
    const contentHistory = $(`#history-content`);

    function removeClasses() {
        [tabContacts, tabAddressbook, tabWishlist, tabHistory].forEach(tab => {
            tab.removeClass('cabinet__item--active');
        });
        [contenContacts, contentAddressbook, contentWishlist, contentHistory].forEach(content => {
            content.removeClass('cabinet__tab-content--active');
        });
    }

    tabContacts.click(() => {
        removeClasses();
        tabContacts.addClass('cabinet__item--active');
        contenContacts.addClass('cabinet__tab-content--active');
    });
    tabAddressbook.click(() => {
        removeClasses();
        tabAddressbook.addClass('cabinet__item--active');
        contentAddressbook.addClass('cabinet__tab-content--active');
    });
    tabWishlist.click(() => {
        removeClasses();
        tabWishlist.addClass('cabinet__item--active');
        contentWishlist.addClass('cabinet__tab-content--active');
    });
    tabHistory.click(() => {
        removeClasses();
        tabHistory.addClass('cabinet__item--active');
        contentHistory.addClass('cabinet__tab-content--active');
    });
});
// Cabinet tabs end
