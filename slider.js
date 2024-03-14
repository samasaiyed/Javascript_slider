const images = document.querySelectorAll('img');
console.log(images.length);

var slideIndex = 0;

const slideShow = () => {
   images.forEach((image, index) => {
        if(index === slideIndex){
            image.style.display = 'block';
        }
        else{
            image.style.display = 'none';
        }
   });
}

const prevBtn = () => {
    /*if(slideIndex === 0){
        return;
    }    slideIndex = (slideIndex - 1 + images.length) % images.length;*/
    
    if(slideIndex === 0){
        return;
    }
    else{
        slideIndex--;
    }
    slideShow();
}
const nextBtn = () => {
    const lastIndex = images.length - 1;
    if(slideIndex === lastIndex){
        return;
    }
    else{
        slideIndex++;
    }
    slideShow();
}
// Initial call to display first slide;
slideShow();
