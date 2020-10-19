/* 
	Create a variable to store the count of colors to be loaded
    
	Update the getColors() function to take that count as a parameter
    
	Set the count to 100 colors, update the .my-color class to maintain the grid structure
*/

function displayColors(colors) {
    let myColorsHtml = colors.map(color => {
        return `<div class="my-color" style="background-color: ${color.value}"></div>`
    }).join('')

    console.log(myColorsHtml)

    document.body.innerHTML = `<div class="my-colors">
        ${myColorsHtml}
    </div>`
}
let Colcount = 100
async function getColors(Colcount) {
    let response = await fetch(`https://api.noopschallenge.com/hexbot?count=${Colcount}`)
    let data = await response.json()
    let colors = data.colors

    displayColors(colors)
}

getColors(Colcount)