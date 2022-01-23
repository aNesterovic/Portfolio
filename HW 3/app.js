//Get information from user - not icludes white spaces and email information converted to lower case
userName = prompt('Please enter you name:');
userName = userName ? userName.trim() : '';
userSurname = prompt('Please enter you surname:');
userSurname = userSurname ? userSurname.trim() : '';
userEmail = prompt('Enter your email:')
userEmail = userEmail ? userEmail.replaceAll(' ', '').toLowerCase() : '';
userBirth = +prompt('Please enter your year of birth:');
// userBirth = userBirth ? userBirth.replaceAll(' ', '') : '';
age = 0;

//Logical part:

//Check if email include and which part '@' sign
if (!userEmail.includes('@')) {
    userEmail = `not valid email <b>${userEmail}</b> (symbol @ not exist)`;
} else if (userEmail.startsWith('@')) {
    userEmail = `not vaild email <b>${userEmail}</b> (symbol @ find in first place)`;
} else if (userEmail.endsWith('@')) {
    userEmail = `not valid email <b>${userEmail}</b> (symbol @ find in last place)`;
};

//Check if user input validate date of birth
if (userBirth && userBirth > 0 && !isNaN(userBirth)) {
    age = new Date().getFullYear() - userBirth;
};


//Return information from user
document.write(`
<style>
    li {list-style-type: none;}
</style>
<ul>
    <li>Full name: <b>${userName} ${userSurname}</b></li>
    <li>Email: ${userEmail}</li>
    <li>Age: <b>${age}</b></li>
</ul>
`);