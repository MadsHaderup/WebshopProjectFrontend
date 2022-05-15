const divContainer = document.getElementById("con");


async function loadProducts() {
  const productlist = await fetch("http://localhost:8080/api/product").then(response => response.json());
  const productlistLngth = productlist.length;

  const row = document.createElement("div");
  row.setAttribute("class", "row");
  divContainer.appendChild(row);

  for(let i = 0; i < productlistLngth; i++){
    const product = productlist[i];
    const elm = document.createElement("div");
    elm.setAttribute("class", "elm1");
    row.appendChild(elm);
    createImg(elm);

    const productName = document.createElement("div");
    productName.setAttribute("class", "productName");
    productName.innerText = product.productName;
    elm.appendChild(productName);

    const price = document.createElement("div");
    price.setAttribute("class", "price");
    price.innerText = product.price + ".00 kr";
    elm.appendChild(price);

  }


}







function createImg(elm){
  const img = document.createElement("img");
  img.setAttribute("class","productImage");
  img.setAttribute("src", "img/Bottle - Bornholm gin.jpg");
  img.setAttribute("alt", "image");





  const imgContainer = document.createElement("div");
  imgContainer.setAttribute("class", "imageContainer");
  imgContainer.appendChild(img);


  elm.appendChild(imgContainer);

}

document.addEventListener('DOMContentLoaded', () => {

  loadProducts();

});
