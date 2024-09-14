const tabsData = [
    {id:"tab1", name:"Tab 1", content:"Tab 1 content"},
    {id:"tab2", name:"Tab 2", content:"Tab 2 content"},
    {id:"tab3", name:"Tab 3", content:"Tab 3 content"},

]
document.addEventListener("DOMContentLoaded",function(){
    let activeTab = tabsData[0].id;

    function renderTabs(){
        const tabContainer = document.getElementById("tabContainer");
        const tabContentContainer = document.getElementById("tabContentContainer");

        tabsData.forEach((tab)=>{
            const tabButton = document.createElement("button");
            tabButton.className = "tabLinks";
            tabButton.textContent =`${tab.name}`;
            tabButton.setAttribute("data-tab", tab.id);
            tabContainer.appendChild(tabButton);

            const tabContent = document.createElement("div");
            tabContent.id = tab.id;
            tabContent.className = "tabContent";
            tabContent.innerHTML = `<h3>${tab.name}</h3><p>${tab.content}</p>`;
            tabContentContainer.appendChild(tabContent);
        });

        tabContainer.addEventListener("click",function(event){
            if(event.target.matches(".tabLinks")){
                const tabId = event.target.getAttribute("data-tab");
                if(tabId !== activeTab){
                    openTab(tabId);
                    activeTab = tabId;
                }
            }
        });
    }
    function openTab(tabId){
        const tabButtons = document.querySelectorAll(".tabLinks");
        const tabContents = document.querySelectorAll(".tabContent");

        tabButtons.forEach((tab)=>tab.classList.remove('active'));
        tabContents.forEach((tab)=>tab.classList.remove("active"));

        document.querySelector(`button[data-tab="${tabId}"]`).classList.add("active");
        document.getElementById(tabId).classList.add("active");
    }
    renderTabs();
    document.querySelector(`button[data-tab="${activeTab}"]`).classList.add("active");
    document.getElementById(activeTab).classList.add("active");
})