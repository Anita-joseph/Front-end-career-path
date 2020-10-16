document.getElementById("action").addEventListener("click", async() => {

    // call user API
    // store random first name in a variable firstUser
    // call user API again, after you finish calling first one
    // store random first name in variable secondUser 
    // console log `${firstUser} and ${secondUser} are friends`

    const userApi = 'https://randomuser.me/api/';
    // fetch(userApi).then(response => response.json()).then(json => {
    //     const firstUser = json.results[0].name.first;
    //     fetch(userApi).then(response => response.json()).then(json => {
    //         const secondUser = json.results[0].name.first;
    //         console.log(`${firstUser} and ${secondUser} are friends`);
    //     })
    // })
    const firstResponse = await fetch(userApi)
    const firstUserJson = await firstResponse.json()
    const firstUser = firstUserJson.results[0].name.first
    const secondResponse = await fetch(userApi)
    const secondUserJson = await secondResponse.json()
    const secondUser = secondUserJson.results[0].name.first

    console.log(`${firstUser} and ${secondUser} are friends`)

})