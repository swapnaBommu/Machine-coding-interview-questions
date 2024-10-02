const boxConfig = [
    {color:"red", width:"33.33%"},
    {color:"blue", width:"33.33%"},
    {color:"green", width:"33.33%"},
    {color:"yellow", width:"70%"},
    {color:"orange", width:"30%"},
    {color:"purple", width:"50%"},
    {color:"black", width:"40%"},
    {color:"pink", width:"10%"}
];
document.addEventListener("DOMContentLoaded",function(){
    
    const container = document.createElement("div");
    container.className = "container";
    document.body.appendChild(container);
    
    function renderBoxes(){
        container.innerHTML="";
        boxConfig.forEach((config, index) => {
            const box = document.createElement("div");
            box.className = "box";
            box.style.backgroundColor = config.color;
            box.style.width = config.width;
            
            container.appendChild(box);
        });
        
    }
    container.addEventListener("click",(event)=>{
        const clickedElement = event.target;
        if(clickedElement.classList.contains("box")){
            const index = Array.from(container.children).indexOf(clickedElement);
            const config = boxConfig[index];
            alert(`Color of box ${index + 1} is ${config.color} `);
        }
    })
    
    
    const form = document.querySelector('.form');
    const inputColor = document.querySelector('.color');
    const inputWidth = document.querySelector('.width');
    const button = document.querySelector('.button');
    
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        
        const color = inputColor.value.trim();
        let width = inputWidth.value;
        width = width ? `${width}%` : "100%";
        boxConfig.push({color, width});
        renderBoxes();

        inputColor.value = "";
        inputWidth.value = "";
    });
    
})
