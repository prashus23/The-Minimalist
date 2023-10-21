let view_button = document.getElementById('view-button');
let modalCLose = document.getElementById('modalClose-button');
let modal = document.getElementById('modalView');
    view_button.addEventListener("click",()=>{
        modal.style.display="flex"
    });

    modalCLose.addEventListener("click",()=>{
        modal.style.display="none"
    });

let images = document.getElementsByClassName('option-image');
// let currentImager= document.getElementById('xd');

// currentImager.addEventListener('click',()=>{
//     console.log('>>>>>>');
// })

for(let i =0; i<images.length; i++){
    images[i].oncLick = (e) =>{
        console.log(e);
    }
}