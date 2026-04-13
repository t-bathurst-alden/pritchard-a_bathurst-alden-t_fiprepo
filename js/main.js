console.log("fired");

//variables
const button = document.querySelector("#button");
const burgerCon = document.querySelector("#burger-con");

const lightBox = document.querySelector("#lightbox");
const links = document.querySelectorAll("#products button");
const content = document.querySelector("#lightbox article");

console.log(lightBox);
console.log(links);
console.log(content);

let products = [
    {
        name: "Lime Zima 6-Pack",
        desc: "Can't go wrong with the original Zima favour."
    },
    {
        name: "Lemon Zima 6-Pack",
        desc: "A fan favourite amongst Zima fans for cocktails!"
    },
    {
        name: "Orange Zima 6-Pack",
        desc: "A classic Zima flavour for summers by the pool."
    },
    {
        name: "Grapefruit Zima 6-Pack",
        desc: "A classic Zima flavour with a tangy twist for the bold."
    },
	{
        name: "New! Lemon-Raspbery Zima 6-Pack",
        desc: "An all new fusion flavour for double the Zima goodness!"
    },
	{
        name: "New! Peach-Orange Zima 6-Pack",
        desc: "An all new fusion flavour for double the Zima goodness!"
    },
	{
        name: "Zima Casual T-Shirt",
        desc: "A comfortable t-shirt for Zima fans to wear this summer."
    },
	{
        name: "Zima Casual Hoodie",
        desc: "A comfortable hoodie to keep Zima fans warm and cozy."
    },
	{
        name: "New! Zima Trendy Baseball Hat",
        desc: "A trendy cap for die-hard Zima fans to show off their style!"
    },
	{
        name: "New! Zima Cozy Scarf",
        desc: "A cozy sweater for Zima fans to keep warm in cold weather."
    },
	{
        name: "New! Zima Trendy Tote Bag",
        desc: "For our loyal fans to carry your Zima supply, obviously."
    },
	{
        name: "New! Zima Keychain",
        desc: "A convenient keychain for our Zima family to show off their love!"
    }
];

//functions
function hamburgerMenu() {
	burgerCon.classList.toggle("slide-toggle");
	button.classList.toggle("expanded");
}

function fillContent() {
    console.log(products[this.dataset.productIndex].name);
    console.log(products[this.dataset.productIndex].desc);

    let productName = document.createElement("h3");
    productName.textContent = products[this.dataset.productIndex].name;
    productName.classList = "lb_heading";

    let productDesc = document.createElement("p");
    productDesc.textContent = products[this.dataset.productIndex].desc;
    productDesc.classlist = "lb_text";

}

//Event Listeners
button.addEventListener("click", hamburgerMenu);
links.forEach(link => link.addEventListener("click", fillContent));