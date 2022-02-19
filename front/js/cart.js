// Initialisation du localstorage
let itemsInLocalStorage = JSON.parse(localStorage.getItem('cartItems'));

// Affichage du contenu du panier
async function displayCart() {
  const parser = new DOMParser();
  const positionEmptyCart = document.getElementById("cart__items");
  let cartArray = [];