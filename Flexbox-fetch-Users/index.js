async function getUsers() {
    // let response = await fetch("https://api.themoviedb.org/3/movie/0?api_key={api_key}&callback=test")
    let response = await fetch("https://jsonplaceholder.typicode.com/users/?_limit=10")
    let users = await response.json()
    return users
}

function getUserDiv(user) {
    return `<div class="my-online-user">
        <div class="user-username">${user.username}</div>
        <div class="user-online"></div>
    </div>`
}

getUsers().then(users => {
    let sampleUser = users[0]
    document.body.innerHTML = `
	<div class="header">Header</div>

	<div class = "my-online-users">
					${users.map(user => getUserDiv(user)).join('')} 
					</div> 
					<div class = "main-content"><a href="profile.html">Profile</a></div> 
					<div class = "footer"> Footer </div>
                `
})