let submitButton=document.querySelector(".submitButton")
let feedbackContainer=document.querySelector(".feedbackContainer")
let thankContainer=document.querySelector(".thankContainer")
let ratingInfo = document.querySelector('.ratingInfo');


let btnList= Array.from(document.querySelectorAll('#btn'));

for (let i = 0; i < btnList.length; i++) {
    btnList[i].addEventListener('click', function (eventInfo) {
       
        btnList.forEach(btn => {
            btn.style.backgroundColor = "#333a46"; 
            btn.style.color = "#bec2c6"; 
        });

  
        let btn = eventInfo.target;
        btn.style.backgroundColor = "white";
        btn.style.color = "black";

     
        ratingInfo.innerHTML = `You selected ${i + 1} out of 5`; 
    });
}

submitButton.addEventListener('click',function(){
    feedbackContainer.style.display="none"
    thankContainer.style.display="flex"
});





