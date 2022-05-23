
     function append(){
        let productsData  = JSON.parse(localStorage.getItem("products"));
       let all_products =  document.getElementById("all_products")
       all_products.innerHTML = null
    //    <!-- The Remove Product button will have id as "remove_product" -->

    
         productsData.forEach(function(el,index) {

            let product = document.createElement("div")

            let image = document.createElement("img")
            image.src= el.image

            let type = document.createElement("p")
            type.innerText = el.type

            let desc = document.createElement("p")
            desc.innerText = el.desc;

            let price = document.createElement("p")
            price.innerText = el.type

            let button = document.createElement("button")
            button.setAttribute("id","remove_product")
            button.innerText ="Remove Product"

            button.addEventListener("click",function(){
                   remove(el,index);
            })

            product.append(image,type,desc,price,button);

            all_products.append(product)

         });

     }

     

     append()

function remove(el,index){
    let data = JSON.parse(localStorage.getItem("products"));

    let newData = data.filter(function(e,i){
  
         if(i == index){
             let trash = JSON.parse(localStorage.getItem("trash"))||[];
             trash.push(e)
             localStorage.setItem("trash",JSON.stringify(trash))
         }
         else{
             return i != index
         }

    })

    localStorage.setItem("products",JSON.stringify(newData))
    append();

}