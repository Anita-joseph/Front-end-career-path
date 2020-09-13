/*
    Grabbing all carousel items and attaching button event listeners
    
    1) Grab all 'carousel-item' - hint: elements...by...class name! Store this value in a const called 'slides'
	2) Set a slide position of 0 (as that's what the starting index position will be when we grab all the carousel items 
	 - remember that arrays start from 0 and not 1)
	  - we want the slide position to always start at 0. When a user goes to the next or previous slide,
	   we will update this--the reason it's 0 and not one is that we want to match the position in the 'slides'
		const that we stored above! As this is going to be changing, what seems more appropriate, a let statement or a const?
		

    3) Store a const value of 'totalSlides' that is equal to the length of the slides
	4) Add event listeners to both buttons 'carousel-button-next' and 'carousel-button-prev' 
	- seeing as though we expect the user to click to change slide position,
	 make sure we set the eventListener
	 to 'click' and the second arguments will be functions!
	5) Create two functions: moveToNextSlide and moveToPrevSlide
	 - use both of these in action 4 as the second argument on your 'addEventListener'
	 - don't worry about these functions being empty, we will add to them in the upcoming screencasts
    6) Use console.log to validate that you have 3 'carousel-item' in your 'slides' const
*/
/*
    Moving to the next slide!

	1) Check if (slidePosition === totalSlides -1)
	 (yes minus 1 because we start from 0 on 'slidePosition' - so if the slide is the last one 
	 (after a user has clicked through all the slides and then hits next again) 
	 we must reset the 'slidePosition' to 0, in turn taking them back to the first slide!
    1: Info) Why reset? well, if we try access 'slides[slidePosition]' as such 'slides[3]' or 'slides[4]' or 'slides[5]', these don't exist (we have 3 carousel items), so we will get an error! We have [slide0, slide1, slide2] <- remember our const 'slides'? That is has an array structure in that the items index start from 0! In a none programming world, we start from 1 when counting, but this is programming, so we start counting from 0 😄
    2) Once we've done our check for slidePosition against totalSlides -1 (if this conditional is true) we reset 'slidePosition' to 0, if this conditional is not true, we increment the 'slidePosition' by 1, so we go to the next slide
    3) Within our function 'moveToNextSlide' we have a conditional, after the conditional, we want to add the class name of 'carousel-item-visible' to our current slide! 'carousel-item-visible' is our CSS class that makes the 'carousel-item' a block element (and not hidden) and shows it!
	3.1) Use 'slidePosition' to access the current array element in 'slides',
	 and then add the class name 'carousel-item-visible', accessing an array element is as simple as 'slides[slidePosition]'
    4) Test out your next button by clicking on it, you'll see there's some clean up to do in the next Scrimba cast!
*/
const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('carousel-btn-prev').addEventListener('click', moveToPrevSlide);
document.getElementById('carousel-btn-next').addEventListener('click', moveToNextSlide);

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slides[slidePosition].classList.add("carousel-item-hidden");
    }
}

function moveToNextSlide() {
    hideAllSlides();
    if (slidePosition === totalSlides - 1) { slidePosition = 0; } else {
        slidePosition++;
    }
    slides[slidePosition].classList.add("carousel-item-visible");


}

function moveToPrevSlide() {
    hideAllSlides();
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    slides[slidePosition].classList.add("carousel-item-visible");

}
console.log(totalSlides)