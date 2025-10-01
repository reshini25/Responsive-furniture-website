
const products = [
    {index:0,imgSrc: "productImages/Picture1.jpg",title: "Green Sofa",price: "$50",stars: 3.5},
    {index:1,imgSrc: "productImages/Picture2.jpg",title: "Beige Table",price: "",stars: 4.5},
    {index:2,imgSrc: "productImages/Picture3.jpg",title: "Mahogany Dinning Set",price: "",stars: 4.5},
    {index:3,imgSrc: "productImages/Picture4.jpg",title: "Natural Finish Chairs",price: "",stars: 4.5},
    {index:4,imgSrc: "productImages/Picture5.jpg",title: "Kids Wardrobe",price: "",stars: 4.5},
    {index:5,imgSrc: "productImages/Picture6.jpg",title: "Grey Sofa",price: "",stars: 4.5},
    {index:6,imgSrc: "productImages/Picture7.jpg",title: "Wenge Table",price: "",stars: 4.5},
    {index:7,imgSrc: "productImages/Picture8.jpg",title: "Ivory Sofa",price: "",stars: 4.5},
    {index:8,imgSrc: "productImages/Picture9.jpg",title: "Duke Dusk Blue Sofa",price: "",stars: 4.5},
    {index:9,imgSrc: "productImages/Picture10.jpg",title: "Center Table",price: "",stars: 4.5},
    {index:10,imgSrc: "productImages/Picture11.jpg",title: "Cream Sofa",price: "",stars: 4.5},
    {index:11,imgSrc: "productImages/Picture12.jpg",title: "Green Seater Sofa",price: "",stars: 4.5},
    {index:12,imgSrc: "productImages/Picture13.jpg",title: "Glossy Dinning Table",price: "",stars: 4.5},
    {index:13,imgSrc: "productImages/Picture14.jpg",title: "Brown Dinning Chairs",price: "",stars: 4.5},
    {index:14,imgSrc: "productImages/Picture15.jpg",title: "Multicolour Storage SideBoard",price: "",stars: 4.5},
    {index:15,imgSrc: "productImages/Picture16.jpg",title: "Walnut Dinning Bench",price: "",stars: 4.5},
    {index:16,imgSrc: "productImages/Picture17.jpg",title: "Kids Green Wardrobe",price: "",stars: 4.5},
    {index:17,imgSrc: "productImages/Picture18.jpg",title: "Kids White Bed",price: "",stars: 4.5},
    {index:18,imgSrc: "productImages/Picture19.jpg",title: "White Dinning Bench",price: "",stars: 4.5},
    {index:19,imgSrc: "productImages/Picture20.jpg",title: "Black Bed Study Table",price: "",stars: 4.5},
    {index:20,imgSrc: "productImages/Picture21.jpg",title: "Venge Black Dressing Table",price: "",stars: 4.5},
    {index:21,imgSrc: "productImages/Picture22.jpg",title: "Brown Beside Table",price: "",stars: 4.5},
    {index:22,imgSrc: "productImages/Picture23.jpg",title: "Wenge Storage Cabinet",price: "",stars: 4.5},
    {index:23,imgSrc: "productImages/Picture24.jpg",title: "Blue Foldable Bed",price: "",stars: 4.5},
    {index:24,imgSrc: "productImages/Picture25.jpg",title: "Black Round Table",price: "",stars: 4.5},
    {index:25,imgSrc: "productImages/Picture26.jpg",title: "White Storage SideBoard",price: "",stars: 4.5},
    {index:26,imgSrc: "productImages/Picture27.jpg",title: "White Double Cot Bed",price: "",stars: 4.5},
    {index:27,imgSrc: "productImages/Picture28.jpg",title: "Kids Dinning Table",price: "",stars: 4.5},
    {index:28,imgSrc: "productImages/Picture29.jpg",title: "Black Study Table",price: "",stars: 4.5},
    {index:29,imgSrc: "productImages/Picture30.jpg",title: "Kids Book Shelf",price: "",stars: 4.5},
    {index:30,imgSrc: "productImages/Picture31.jpg",title: "Grey Sofa",price: "",stars: 4.5},
    {index:31,imgSrc: "productImages/Picture32.jpg",title: "Wood Dinning Table",price: "",stars: 4.5},
    {index:32,imgSrc: "productImages/Picture33.jpg",title: "Walnut Colour TV",price: "",stars: 4.5},
    {index:33,imgSrc: "productImages/Picture34.jpg",title: "Small Brown Table",price: "",stars: 4.5},
    {index:34,imgSrc: "productImages/Picture35.jpg",title: "Kids Pink Sofa",price: "",stars: 4.5},
    {index:35,imgSrc: "productImages/Picture36.jpg",title: "Red Sofa",price: "",stars: 4.5},
    {index:36,imgSrc: "productImages/Picture37.jpg",title: "Brown Storage SideBoard",price: "",stars: 4.5},
    {index:37,imgSrc: "productImages/Picture38.jpg",title: "White Single Cot Bed",price: "",stars: 4.5},
    {index:38,imgSrc: "productImages/Picture39.jpg",title: "Honey Finish Chair",price: "",stars: 4.5},
    {index:39,imgSrc: "productImages/Picture40.jpg",title: "White Storage Cabinet",price: "",stars: 4.5},
];

// Function to generate stars
function generateStars(stars) {
    let starHTML = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(stars)) {
            starHTML += "<i class='bx bxs-star'></i>";
        } else if (i === Math.ceil(stars) && stars % 1 !== 0) {
            starHTML += "<i class='bx bxs-star-half'></i>";
        } else {
            starHTML += "<i class='bx bx-star'></i>";
        }
    }
    return starHTML;
}

// Get the shop container
const shopContainer = document.getElementsByClassName('shop-container');

function filterProduct(){
    let filteredProducts;
    const type=new URLSearchParams(window.location.search).get('search')
    shopContainer[0].innerHTML = "";
    if(type == null || type == ''){
        filteredProducts = products;
    }else{
        filteredProducts = products.filter(product => product.title.toLowerCase().includes(type.toLowerCase()));
    }

    if(filteredProducts.length>0){
// Generate HTML for each product
filteredProducts.forEach((product) => {
    const productHTML = `
    <div class="product-box" data-index="${product.index}">
        <div class="product-img">
            <img src="${product.imgSrc}" alt="">
        </div>
        <div class="title-price">
            <h3>${product.title}</h3>
            <div class="product-stars">
            ${generateStars(product.stars)}
            </div>
        </div>
        <span>${product.price}</span>
        <i class='bx bx-cart' ></i>
    </div>
    `;

    // Insert the product HTML into the shop container
    shopContainer[0].innerHTML += productHTML;
});
    }else{
        shopContainer[0].innerHTML = `<p>No Products found</p>`
    }

}

window.onload=function(){
    filterProduct();
}

//Get popUp
const openPopUp = document.getElementsByClassName('popup');
//Open Popup when product is clicked
document.addEventListener('click', function(event) {
    if (event.target.closest('.product-box')) {
        const productIndex = event.target.closest('.product-box').getAttribute('data-index');
        const productPopUpHTML = `
        <span class="close-btn" onclick="closePopup()">×</span>
        <div class="popupdisplay">
    <div class="product-box">
        <div class="product-img">
            <img src="${products[productIndex].imgSrc}" alt="">
        </div>
        <div class="title-price">
            <h3>${products[productIndex].title}</h3>
            <div class="product-stars">
            ${generateStars(products[productIndex].stars)}
            </div>
        </div>
        <span>${products[productIndex].price}</span>
        <i class='bx bx-cart' ></i>
    </div>
    </div>
    `;
        openPopUp[0].innerHTML = productPopUpHTML;
        document.querySelector('.popup').style.display = 'block';
        document.querySelector('.overlay').style.display = 'block';
    }
})
//close popup
function closePopup(){
    document.querySelector('.popup').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
}