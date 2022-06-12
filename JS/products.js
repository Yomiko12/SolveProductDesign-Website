let products = document.querySelectorAll('.addtocart');
if (localStorage.getItem('itemsInCart')){
	document.querySelector('span').textContent = "("+ JSON.parse(localStorage.getItem('itemsInCart')).length +")";
}

let allProducts = [
	{
		name: "Honda CRF250L Windshield",
		tag: "windshield",
		price: 85,
	},
	{
		name: "Improv Wallet",
		tag: "improv",
		price: 40,
	},
]

for (let i=0; i<products.length; i++){
	products[i].addEventListener('click', () => {
		if (products[i].classList.contains("windshield")){
			addItemToCart(allProducts[0]);
		}
		else if (products[i].classList.contains("improv")){
			addItemToCart(allProducts[1]);
		}
		products[i].textContent = "Item Added to Cart";
	})
}

function addItemToCart(product){
	let cartArray = [];
	if (localStorage.getItem('itemsInCart')){
		cartArray = JSON.parse(localStorage.getItem('itemsInCart'));
	}

	cartArray.push(product);
	localStorage.setItem('itemsInCart', JSON.stringify(cartArray));
	document.querySelector('span').textContent = "("+ cartArray.length +")";
}