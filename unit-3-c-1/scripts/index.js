//store the products array in localstorage as "products"

function storeData(event){
    event.preventDefault();
  
    function  data(type,desc,price,image){
        this.type = type;
        this.desc = desc;
        this.price = price;
        this.image = image;
    }

     let form = document.getElementById("products")


     let type = form.type.value;
     let desc  = form.desc.value;
     let price = form.price.value;
     let image = form.image.value;

     
     let newData = new data(type,desc,price,image)
     
// if( document.getElementById("type").value == null ||
// document.getElementById("desc").value == null ||
// document.getElementById("price").value == null ||
// document.getElementById("image").value == null){
//     alert("Please fill all details")
// }
    
      let productsData  = JSON.parse(localStorage.getItem("products"))  || []
      productsData.push(newData)
      localStorage.setItem("products",JSON.stringify(productsData));

      document.getElementById("type").value = null
      document.getElementById("desc").value = null
      document.getElementById("price").value = null
      document.getElementById("image").value = null



      


}