document.addEventListener("DOMContentLoaded",function(){
    let products = [];
    let page = 1;
    const app = document.querySelector(".app");
    const fetchProducts = async () =>{
        try{
            const response = await fetch("https://dummyjson.com/products?limit=100");
            const data =await response.json();

            if(data &&  data?.products){
                products = data.products;
                renderProducts();
            }
        }catch(error){
            console.log("Error in fetching the products");
        }
    }
    const renderProducts = () =>{
        //create container inside of which we want to render the products
        const productsContainer = document.createElement("div");
        //adding css class
        productsContainer.classList.add("products");
        
        const pagination = document.createElement("div");
        pagination.classList.add("pagination");
        
        if(products.length > 0){
            products.slice(page * 10 -10, page * 10)
            .forEach((product) => {
                //creating div to render product
                const productElement = document.createElement("div");
                productElement.classList.add("products__single");
                productElement.innerHTML = `
                <img src="${product.thumbnail}" alt="${product.title}" />
                <span>${product.title}</span>
                `;
                //adding each product to the product container div
                productsContainer.appendChild(productElement);
            });

            //if page > 1 then we create a prev page button and render
            if(page > 1){
                //calling the function to create a pagination button
                const prevButton = createPaginationButton("◀",() => {
                    selectPageHandler(page - 1);
                });
                pagination.appendChild(prevButton);
            }
            //numbered buttons
            for(let i = 0;i < products.length / 10; i++){
                const pageButton = createPaginationButton(i+1,() => {
                    selectPageHandler(i + 1);
                }, page === i + 1);
                pagination.appendChild(pageButton);
            }

            //next button
            if(page < products.length / 10){
                //calling the function to create a pagination button
                const nextButton = createPaginationButton("▶",() => {
                    selectPageHandler(page + 1);
                });
                pagination.appendChild(nextButton);
            }  
        }
        app.innerHTML = "";
        //appending product container to the main div
        app.appendChild(productsContainer);
        app.appendChild(pagination);
    }

    const createPaginationButton = (text, clickHandler, isSelected = false) => {
        const button = document.createElement("button");
        button.textContent = text;
        button.addEventListener("click", clickHandler);
        if(isSelected){
            button.classList.add("pagination__selected")
        }
        return button;
    }

    const selectPageHandler = (selectedPage) =>{
        if(selectedPage >= 1 && selectedPage <= products.length / 10 && selectedPage !== page){
            page = selectedPage;
            renderProducts();
        }
    }

    fetchProducts();
    
});