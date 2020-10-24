/* 
    Jeopardy (Challenge)
    
    Update getCategories to take 
        count/offset arguments
    Fetch 5 Categories (Update the display as necessary)
    
    Write a getClueHtml() function
        calculate grid-row-start based on the input value
        which will always be a multiple of 100 
*/

async function getCategories() {
    let response = await fetch("https://jservice.io/api/categories?count=4&offset=30")
    let data = await response.json()
    return data
}

function getCategoryHtml(category) {
    return `
        <div class="my-category-title">${category.title}</div>
        <div class="my-category-clue" style="grid-row-start: 2">$100</div>
        <div class="my-category-clue" style="grid-row-start: 3">$200</div>
        <div class="my-category-clue" style="grid-row-start: 4">$300</div>
        <div class="my-category-clue" style="grid-row-start: 5">$400</div>
    `
}

getCategories().then(categories => {
    console.log(categories)
    document.body.innerHTML = `<div class="board">
        ${categories.map(getCategoryHtml).join('')}
    </div>`
})