/* 
	Create a User Profile using data from
		https://jsonplaceholder.typicode.com/users/3
    
	The User Profile must be a Flexbox container with 4 components 
		1. Profile Header
			- With the User's name and username
		2. Company
			- Displaying information about their company
		3. Contact Details
			- Contains Email/Phone/Website
		4. User Address
*/

// getemoji.com

async function getUser() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/3")
    let user = await response.json()
    return user
}

getUser().then(user => {
    console.log(user)
    document.body.innerHTML = `<div class="user-profile">
        <div class="user-profile-header">
            <div>${user.name}</div>
            <div>@${user.username}</div>
        </div>
        <div class="user-profile-company">
            <div>👩🏽‍💼${user.company.name}</div>
            <div>${user.company.catchPhrase}</div>
            <div>${user.company.bs}</div>
        </div>
        <div class="user-profile-contact">
            <div>📧${user.email}</div>
            <div>📞${user.phone}</div>
            <div>💻${user.website}</div>
        </div>
        <div class="user-profile-address">
            <div>${user.address.street}, ${user.address.suite}</div>
            <div>${user.address.city} ${user.address.zipcode}</div>
        </div>
    </div>`
})