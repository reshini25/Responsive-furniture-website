	 
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
menu.onclick = () => {
    navbar.classList.toggle('active');
}
 
window.onscroll = () => {
    navbar.classList.remove('active');
}

window.onload=function(){
    addProducts(0,6,shopContainer);
    addProducts(6,9,newContainer);
}

const products = [
    {index:0,imgSrc: "NewProducts/Picture1.png",title: "Study Table",price: "₹500",stars: 3.5},
    {index:1,imgSrc: "NewProducts/Picture2.png",title: "Kids Chair",price: "₹862",stars: 4.5},
    {index:2,imgSrc: "NewProducts/Picture3.jpg",title: "Double Cot Bed",price: "₹469",stars: 4.5},
    {index:3,imgSrc: "NewProducts/Picture4.jpg",title: "TV Unit",price: "₹1760",stars: 4.5},
    {index:4,imgSrc: "NewProducts/Picture5.jpg",title: "Single Seater Sofa",price: "₹756",stars: 4.5},
    {index:5,imgSrc: "NewProducts/Picture6.jpg",title: "Round Table",price: "₹249",stars: 4.5},
    {index:6,imgSrc: "NewProducts/Picture7.jpg",title: "Glass Storage Cabinet",price: "₹749",stars: 4.5},
    {index:7,imgSrc: "NewProducts/Picture8.jpg",title: "Purple Wardrobe",price: "₹649",stars: 4.5},
    {index:8,imgSrc: "NewProducts/Picture9.jpg",title: "Shoe Rack",price: "₹750",stars: 4.5},
];
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
const shopContainer = document.getElementsByClassName('shop-container');
const newContainer = document.getElementsByClassName('new-container');
function addProducts(i,j,divClass){
    const filteredProducts=products.slice(i,j);
    filteredProducts.forEach((product) => {
        const productHTML = `
        <div class="box" data-index="${product.index}">
            <div class="box-img">
                <img src="${product.imgSrc}" alt="">
            </div>
            <div class="title-price">
                <h3>${product.title}</h3>
                <div class="stars">
                ${generateStars(product.stars)}
                </div>
            </div>
            <span>${product.price}</span>
            <i class='bx bx-cart' ></i>
        </div>
        `;
        // Insert the product HTML into the shop container
        divClass[0].innerHTML += productHTML;
    });
}
//Get popUp
const openPopUp = document.getElementsByClassName('popup');
//Open Popup when product is clicked
document.addEventListener('click', function(event) {
    if (event.target.closest('.box')) {
        const productIndex = event.target.closest('.box').getAttribute('data-index');
        const productPopUpHTML = `
        <p>This product is not available at the moment. It will be available in stock soon!</p>
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