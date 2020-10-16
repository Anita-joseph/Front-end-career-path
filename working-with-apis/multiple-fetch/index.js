// Below the authors name, add a new paragraph to the HTML that contains the company that the user works for.

async function getPost() {
    const [postPromise, userPromise] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts"),
        fetch("https://jsonplaceholder.typicode.com/users")
    ]);

    const posts = await postPromise.json();
    const users = await userPromise.json();

    const html = `
		<h3>${posts[0].title}</h3>
        <h5>${users.filter(user => user.id === posts[0].userId)[0].name}</h5>
        <p>${users.filter(user => user.id === posts[0].userId)[0].company.name}</p>
		<p>${posts[0].body}</p>
	`;

    document.body.innerHTML = html;
}

getPost();