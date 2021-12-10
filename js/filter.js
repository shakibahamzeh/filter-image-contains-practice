//buttons//
const btnWrapper=document.querySelectorAll('.btns div');
const allBtn=document.querySelector('.all-btn');


//images//

const imagesWrapper=document.querySelector('.images-wrapper');
const figure=document.querySelectorAll('figure');



btnWrapper.forEach(btn=>{
    btn.addEventListener('click',function(){
       figure.forEach(fig=>{
           
           if(fig.classList.contains(btn.dataset.filter)){
               fig.style.display="block";
           }else{
               fig.style.display="none";
           }
       })
    })
})

// show all images
allBtn.addEventListener('click' , function(){
    figure.forEach(fig=>{
        fig.style.display="block";
    })
})