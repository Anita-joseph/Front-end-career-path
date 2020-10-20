/* 
	1. 
		Use fetch() to load data from photos.json
	    
		Display the photos inside of a FlexBox container
			The src will be https://picsum.photos/id/${photo.id}/100/100
			The alt text will be the photo.title from the json

		Use Flexbox to display the photos in a Row 
			The Row should Wrap to a new line on overflow
			Give each photo a white 0.1rem solid border
			Rounded corners at 0.7rem border-radius
			Each photo should be at least 1rem away from the photos around it
*/

/* 
	2. 
	   Write a function to create the my-photos Component
	   
	   Create a Column Flexbox container around my-photos
	   
	   Create a new img and place it, centered, above my-photos
		-This should be hidden initially
		-Also give it the my-photo class
    
	   Create a "click" event for each photo in my-photos
		-When clicked, load the clicked photo into the new img tag
*/
/* 
	2. 
	   Write a function to create the my-photos Component
	   
	   Create a Column Flexbox container around my-photos
	   
	   Create a new img and place it, centered, above my-photos
		-This should be hidden initially
		-Also give it the my-photo class
    
	   Create a "click" event for each photo in my-photos
		-When clicked, load the clicked photo into the new img tag
*/

async function getPhotos() {
    let response = await fetch("https://jsonplaceholder.typicode.com/photos/?_limit=10")
    let photos = await response.json()
    return photos
}

function getMyPhotosHtml(photos) {
    let myPhotosHtml = photos.map(photo => {
        return `<img class="my-photo" src="https://picsum.photos/id/${photo.id}/100/100" alt="${photo.title}"/>`
    }).join('')
    return `<div class="my-photos">${myPhotosHtml}</div>`
}

getPhotos().then(photos => {
    let myPhotosHtml = getMyPhotosHtml(photos)
    document.body.innerHTML = `<div class="my-gallery">
        <img id="my-selected-photo" class="my-photo"
        src="https://picsum.photos/id/${photos[2].id}/300/300" />
        ${myPhotosHtml}
    </div>`

    let myPhotoImgs = Array.from(document.getElementsByClassName("my-photo"))
    myPhotoImgs.forEach(photoImg => {
        photoImg.addEventListener("click", e => {
            let selectedPhotoSrc = photoImg.src.substr(0, photoImg.src.length - 7) + `300/300`
            let selectedPhoto = document.getElementById("my-selected-photo")
            selectedPhoto.src = selectedPhotoSrc
            selectedPhoto.style.display = "inline"
        })
    })
})