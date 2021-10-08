"use strict";
/**
 * classList.add()
 * classList.remove()
 * forEach()
 * addEventListener()
 */
const clearAll=()=>{
    document.querySelectorAll('.tab-item,.about-target>div')
    .forEach(item=>{
        item.classList.remove("active");
    });
    
}
const tabSelect = id =>{
    clearAll();
    document.getElementById(id).classList.add('active');
    document.querySelector(`[data-id=${id}]`).classList.add('active');
}

document.querySelector(".tabs-container")
    .addEventListener(
        "click",
        e=>{
            switch(e.target.dataset.id){
                case 'b1':
                case 'b2':
                case 'b3':
                    tabSelect(e.target.dataset.id);
                    break;
            }
        }
    );
