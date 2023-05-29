let tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
let tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
<<<<<<< Updated upstream
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";
=======
        node.style.borderBottom="solid 2px black";
        node.style.borderTop="solid 2px black";
        node.style.borderRight="solid 2px black";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";
    tabButtons[panelIndex].style.borderBottom="none";
>>>>>>> Stashed changes
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
<<<<<<< Updated upstream
=======
    tabPanels[panelIndex].style.borderBottom="solid 2px black";
    tabPanels[panelIndex].style.borderLeft="solid 2px black";
    tabPanels[panelIndex].style.borderRight="solid 2px black";
>>>>>>> Stashed changes
}
showPanel(0,'#f44336');