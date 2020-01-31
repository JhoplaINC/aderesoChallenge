// D A T O S
// D E L
// U S U A R I O

axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(function(user) {
        let name = user.data['name'];
        uname = document.getElementById('userNameu');
        uname.innerHTML = name;
    })
    .catch(function(error) {
        console.log(error);
    })

axios.get('https://jsonplaceholder.typicode.com/users/2')
    .then(function(user) {
        let name = user.data['name'];
        uname = document.getElementById('userNamed');
        uname.innerHTML = name;
    })
    .catch(function(error) {
        console.log(error);
    })

axios.get('https://jsonplaceholder.typicode.com/users/3')
    .then(function(user) {
        let name = user.data['name'];
        uname = document.getElementById('userNamet');
        uname.innerHTML = name;
    })
    .catch(function(error) {
        console.log(error);
    })

axios.get('https://jsonplaceholder.typicode.com/users/4')
    .then(function(user) {
        let name = user.data['name'];
        uname = document.getElementById('userNamec');
        uname.innerHTML = name;
    })
    .catch(function(error) {
        console.log(error);
    })




// D A T O S
// D E  L A
// P U B L I C A C I Ó N

axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(function(post) {
        let bodyp = post.data['body'];
        body = document.getElementById('bodyPostu');
        body.innerHTML = bodyp;
    })
    .catch(function(error) {
        console.log(error);
    })

axios.get('https://jsonplaceholder.typicode.com/posts/11')
    .then(function(post) {
        let bodyp = post.data['body'];
        body = document.getElementById('bodyPostd');
        body.innerHTML = bodyp;
    })
    .catch(function(error) {
        console.log(error);
    })

axios.get('https://jsonplaceholder.typicode.com/posts/21')
    .then(function(post) {
        let bodyp = post.data['body'];
        body = document.getElementById('bodyPostt');
        body.innerHTML = bodyp;
    })
    .catch(function(error) {
        console.log(error);
    })

axios.get('https://jsonplaceholder.typicode.com/posts/31')
    .then(function(post) {
        let bodyp = post.data['body'];
        body = document.getElementById('bodyPostc');
        body.innerHTML = bodyp;
    })
    .catch(function(error) {
        console.log(error);
    })

    