
        let carts = document.querySelectorAll('.al');
    
        let products =[
        {name: 'chicken 65',tag: 'chicken65',price: 250 ,inCart: 0},
        {name: 'chilli chicken',tag:'chicken_chilli',price: 275 ,inCart: 0},
        {name: 'chicken lollipop',tag:'chicken lollipop',price: 275 ,inCart: 0},
        {name: 'chicken tikka',tag:'CHICKEN TIKKA',price: 250 ,inCart: 0},
        {name: 'chicken majestic',tag:'chicken majestic',price: 250 ,inCart: 0},
        {name: 'veg manchurian',tag:'vegmanchurian',price: 165,inCart:0},
        {name: 'spring rolls',tag:'spring rolls',price: 150,inCart:0},
        {name:'Paneer 65',tag:'paneer 65',price:250,inCart:0},
        {name:'Paneeer Tikka',tag:'paneer tikka',price:250,inCart:0},
        {name:'Mushroom manchuria',tag:'mushroom manchuria',price:200,inCart:0},
        {name:'Tomato soup',tag:'tomato-soup-7',price:149,inCart:0},  
        {name:'Mojito',tag:'mojito',price:149,inCart:0}, 
        {name:'Lassi',tag:'lassi',price:99,inCart:0}, 
        {name:'Ferroro automatic',tag:'ferroro automatic',price:149,inCart:0},      
        {name:'Pista',tag:'pista',price:199,inCart:0}, 
        {name:'strawbeery',tag:'strawberry-milkshake',price:79,inCart:0}, 
        {name:'chicken soup',tag:'chicken soup',price:149,inCart:0}, 
        {name:'mushroom soup',tag:'mushroom soup',price:149,inCart:0}, 
        {name:'mochi',tag:'mochi',price:149,inCart:0}, 
        {name:'Rose milk',tag:'rose-milk',price:99,inCart:0}, 
        {name:'Falooda icecream',tag:'falooda',price:110,inCart:0}, 
        {name:'CHHOLE BHATURE',tag:'chhole bhature',price:105,inCart:0}, 
        {name:'MASALA CHAI',tag:'masala chai',price:50,inCart:0}, 
        {name:'PANI PURI',tag:'panipuri',price:50,inCart:0}, 
        {name: 'PINDI CHANNA', tag:'Chole Pindi', price:50,inCart:0},
        {name:'PIZZA',tag:'pizza',price:399,inCart:0},
        {name:'BIRYANI',tag:'Biryani',price:599,inCart:0},
        {name:'PANEER BUTTER MASALA',tag:'paneerr',price:125,inCart:0},
        {name:'BUTTER PASTA',tag:'pasta',price:140,inCart:0},
        {name:'BUTTER NAAN',tag:'butter naun',price:135,inCart:0},
        {name:'BRULEE',tag:'brulee',price:599,inCart:0},
        {name:'MOCHI',tag:'mochii',price:135,inCart:0},
        {name:'NANAIMO BAR',tag:'nanaimo bar',price:99,inCart:0},
        {name:'GULAB JAMUN',tag:'gulab jamuns',price:210,inCart:0},
        {name:'PAKHALAVA',tag:'pakhlava',price:159,inCart:0},
        {name:'BROWNNIE',tag:'Brownie',price:699,inCart:0},
        {name:'CHARLOTTE CAKE',tag:'Charlotte Cake',price:799,inCart:0},
        {name:'HOT MILK',tag:'hot mik',price:249,inCart:0},
        {name:'ROSE COOKIES',tag:'rose cookies',price:140,inCart:0},
        {name:'JALEBIS',tag:'JILABEI',price:50,inCart:0},
                     ]

        for(let i=0; i< carts.length;i++){
            carts[i].addEventListener('click',() =>{
                cartNumbers(products[i]);
                totalCost(products[i]);

            })
        }
        function onLoadCartNumbers(){
            let productNumbers = localStorage.getItem('cartNumbers');

            if(productNumbers){
                document.querySelector('.cart span').textContent = productNumbers;
            }
        }
 
        function cartNumbers(product){
            let productNumbers = localStorage.getItem('cartNumbers');
            productNumbers = parseInt(productNumbers);
            if(productNumbers)
            {
                localStorage.setItem('cartNumbers',productNumbers+1);
                document.querySelector('.cart span').textContent =productNumbers+1 ;
            }
            else{
                localStorage.setItem('cartNumbers',1);
                document.querySelector('.cart span').textContent = 1;
            }
            setItems(product);
        }
        function setItems(product) {
           let cartItems = localStorage.getItem('productsInCart');
           cartItems = JSON.parse(cartItems);
          
            if(cartItems != null){
                if(cartItems[product.tag]== undefined) {
                    cartItems = {
                        ...cartItems,
                        [product.tag]: product
                    }
                }
                cartItems[product.tag].inCart += 1;
            }
            else{
                product.inCart = 1;
                cartItems= {
                [product.tag]: product
              }
            }
            localStorage.setItem("productsInCart", JSON.stringify
            (cartItems));
        }
        function totalCost(product){
           
           let cartCost = localStorage.getItem('totalCost');
           
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }else{
        localStorage.setItem("totalCost", product.price);
    }
        }
      function displayCart()
      {
        let cartItems = localStorage.getItem("productsInCart");
        cartItems = JSON.parse(cartItems);
        let productContainer = document.querySelector(".products");
        let cartCost = localStorage.getItem('totalCost');

        console.log(cartItems);
        if( cartItems && productContainer){
            productContainer.innerHTML ='';
            Object.values(cartItems).map(item => {
                productContainer.innerHTML += `
                <div class="product">
              <table cellspacing="0px" cellpadding="0"  width="700px">
              <tr>
              <td><img src="${item.tag}.jpg"></td>
              <td> <span>${item.name}</span></td>
                <td>${item.price}</td>
                <td><span>${item.inCart}</span></td>
                <td><div>₹${item.inCart * item.price}</div></td>
                </tr>
                </table>
                <hr>
                </div>
                `;
            });
            productContainer.innerHTML += `
            <div class="basketTotalContainer">
            <h4 class="basketTotalTitle"> Total Cost</h4>
            <h4 class="basketTotal">₹${cartCost}</h4>    `
        }
      }
      function deleteItems() {
        localStorage.clear();
      }
      function undisplayCart()
      {
        let cartItems = localStorage.getItem("productsInCart");
        cartItems = JSON.parse(cartItems);
        let productContainer = document.querySelector(".products");

        console.log(cartItems);
        if( cartItems && productContainer){
            productContainer.innerHTML ='';
            Object.values(cartItems).map(item => {
                productContainer.innerHTML += ` `;
            })   
            let productNumbers = localStorage.getItem('cartNumbers');

            if(productNumbers){
                document.querySelector('.cart span').textContent = 0;
            }
      }}
      function delete1(){alert("your cart items will be deleted by clicking on 'OK'....click on the menu button to select food items.")}

     

        onLoadCartNumbers();
        displayCart();

        