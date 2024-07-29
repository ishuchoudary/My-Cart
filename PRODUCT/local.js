/*let product = document.getElementById("product");
let description = document.getElementById("description");
let price = document.getElementById("price");
let btn = document.getElementById("btn");
let outdiv = document.getElementById("outdiv");
let tasks = [];

btn.addEventListener("click", function() {
    if (product.value.trim() == '' || description.value.trim() == '' || price.value.trim() == '') {
        alert("input box is empty");
        return;
    }
    let count = chance.guid();
    let obj = {
        id: count,
        product: product.value,
        description: description.value,
        price: price.value
    };
    tasks.push(obj);

    addToUI(obj);
    product.value = '';
    description.value = '';
    price.value = '';
    storeLocalStorage();
})

function addToUI(obj) {

    let div = document.createElement("div");
    div.setAttribute("id", "divStyle");
    let productspan = document.createElement("span");
    productspan.setAttribute("id", "productspan");
    productspan.innerHTML = obj.product;
    let descriptionspan = document.createElement("span");
    descriptionspan.setAttribute("id", "descriptionspan");
    descriptionspan.innerHTML = obj.description;
    let pricespan = document.createElement("span");
    pricespan.setAttribute("id", "pricespan");
    pricespan.innerHTML = obj.price;


    let delbtn = document.createElement("button");
    delbtn.setAttribute("id", "delbtn");
    delbtn.innerHTML = "DELETE";
    delbtn.addEventListener("click", function() {
        tasks = tasks.filter(function(item) {
            return item.id != obj.id;
        });
        div.remove();
        storeLocalStorage();
    })

    let updbtn = document.createElement("button");
    updbtn.setAttribute("id", "updbtn");
    updbtn.innerHTML = "UPDATE";
    updbtn.addEventListener("click", function() {
        let upddiv = document.createElement("div");
        let updproduct = document.createElement("input");
        updproduct.setAttribute("type", "text");
        updproduct.value = obj.product;
        upddiv.appendChild(updproduct);
        outdiv.appendChild(upddiv);

        let upddescription = document.createElement("input");
        upddescription.setAttribute("type", "text");
        upddescription.value = obj.description;
        upddiv.appendChild(upddescription);
        outdiv.appendChild(upddiv);

        let updprice = document.createElement("input");
        updprice.setAttribute("type", "number");
        updprice.value = obj.price;
        upddiv.appendChild(updprice);
        outdiv.appendChild(upddiv);

        let newupdbtn = document.createElement("button");
        newupdbtn.setAttribute("id", "newupdbtn");
        newupdbtn.textContent = "UPDATE";
        upddiv.appendChild(newupdbtn);
        newupdbtn.addEventListener("click", function() {
            obj.price = updprice.value;
            obj.product = updproduct.value;
            obj.description = upddescription.value;
            upddiv.remove();
            addToUI(obj);
            div.remove();

            storeLocalStorage();
        })
    })



    outdiv.appendChild(div);
    div.appendChild(productspan);
    div.appendChild(descriptionspan);
    div.appendChild(pricespan);
    div.appendChild(delbtn);
    div.appendChild(updbtn);


}

function storeLocalStorage() {
    localStorage.setItem("mytasks", JSON.stringify(tasks));
}

function getLocalStorage() {
    if (localStorage.getItem("mytasks")) {
        tasks = JSON.parse(localStorage.getItem("mytasks"));
    }
    tasks.forEach(function(item) {
        addToUI(item);
    });
}
getLocalStorage();*/