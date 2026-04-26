const users = [
    { username: 'saacid', pass: 123 },
    { username: 'c/risaaq', pass: 123 }
];

function login(username, pass) {
    const user = users.find(u => u.username === username);

    if (user) {
        if (user.pass === pass) {
            alert('logged in successfully');
        } else {
            alert('incorrect password');
        }
    } else {
        alert('user name not found');
    }
}

login('saacid', 12);