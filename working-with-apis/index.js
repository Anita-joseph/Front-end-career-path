// async function getPost() {
//     const postPromise = await fetch('https://jsonplaceholder.typicode.com/post/1');
//     const post = await postPromise.json();

//     console.log(post);

//     const html = `<h3>${post.title}</h3>
// 	<p>${post.body}</p>`;

//     document.body.innerHTML = html;
// }

// getPost();

/*fetch from a form the input details */
const userForm = document.getElementById('userForm');

userForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const options = {
        method: 'POST',
        body: formData
    };

    fetch('https://httpbin.org/post', options)
        .then(resp => resp.json())
        .then(json => console.log(json))
        .catch(err => console.error(err));
});


/*Fetch a file or multiple files form a Form */

const uploadForm = document.getElementById('uploadForm');

uploadForm.addEventListener('submit', function(e) {
    e.preventDefault();


    // fetch('https://httpbin.org/post', options)
    //     .then(resp => resp.json())
    //     .then(json => console.log(json.files))
    //     .catch(err => console.error(err));

    uploadFile(this);
});

async function uploadFile(data) {
    const fileData = new FormData();
    const files = data.querySelector('input[type="file"]').files;

    for (let i = 0; i < files.length; i++) {
        fileData.append(`fileInput_${i}`, files[i]);
    }

    const options = {
        method: 'POST',
        body: fileData
    };

    const uploadPromise = await fetch('https://httpbin.org/post', options);
    if (uploadPromise.ok) {
        const uploadResp = await uploadPromise.json();
        console.log(uploadResp.files);
    } else {
        console.error(uploadPromise.status);
    }

}