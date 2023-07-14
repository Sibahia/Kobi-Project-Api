const http = 'http://localhost:5500';

function saveDates () {

    var nameReg = document.getElementById('regName').value;
    var lastNameReg = document.getElementById('regLastName').value;
    var usernameReg = document.getElementById('regUsername').value;
    var passwordReg = document.getElementById('regPassword').value;

    const data = {
      name: nameReg,
      lastName: lastNameReg,
      username: usernameReg,
      password: passwordReg,
    };

    var init = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
 //http://localhost:5500
    fetch('http://localhost:5500/register', init)
    .catch(error => console.log(error))
    .then(res => res.json())
    .then(resJson =>  {
      if (resJson.status) {
        window.location.replace('/auth')
      }
    });

    // console.log(`Name: ${nameReg} | LastName: ${lastNameReg} | Username: ${usernameReg} | Password: ${passwordReg}`);


   /* dbUser.get(`SELECT * FROM userDates WHERE username = ${usernameReg}`, function(err, newUserDatabase) {
      if (err) { return console.log(err.stack) };
      if (newUserDatabase) { return console.log(`You're registered`)}
    }) */

   //  if (nameReg.length <= 2) { 
   //      document.getElementById('regName').setCustomValidity("Mínimo 3 carcteres");
   //      return console.log(`Mínimo 3 caracteres`);
   //   } else if (lastNameReg.length <= 3) { 
   //      document.getElementById('regLastName').setCustomValidity("Mínimo 4 carcteres");
   //      return console.log(`Mínimo 4 caracteres`);
   //   } else if (usernameReg.length <= 3) {
   //      document.getElementById("regUsername").setCustomValidity('Mínimo 4 caracteres');
   //      return console.log(`Mínimo 4 caracteres`);
   //   } else if (passwordReg.length <= 4) {
   //      document.getElementById("regPassword").setCustomValidity('Mínimo 5 caracteres');
   //      return console.log(`Mínimo 5 caracteres`);
   //   };

    /*let dbUserDates = `INSERT INTO userDates (name, lastName, username, password) VALUES(${nameReg}, ${lastNameReg}, ${usernameReg}, ${passwordReg})`;
    dbUser.run(dbUserDates, function(err) {
      if (err) { return console.log(err.stack) };
    }); */

}

function sendDates() {
  const data = {
    username: document.getElementById('lgnUsername').value,
    password: document.getElementById('lgnPassword').value
  }

  const init = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic <token>',
    },
    body: JSON.stringify(data)
  }

  fetch('http://localhost:5500/login', init)
  .catch( error => console.log(error))
  .then(res => res.json()) 
  .then(resJson => {
    if (resJson.status) {
      window.localStorage.setItem('token', resJson.content);
      window.location.replace(`/auth/${resJson.content}`);
    } else {
      document.getElementById('box-alert').classList.toggle('box-alert');
      document.getElementById('alert-p').innerHTML = resJson.msg

      setTimeout( function() {
      document.getElementById('box-alert').classList.toggle('box-alert');
      }, 10 * 1000);

    //  window.location.reload();
    }
  })
};

// let tkn = window.localStorage.getItem('token')

// fetch(`http://localhost:5500/auth/${tkn}`, {
//   method: 'GET',
//   mode: 'cors',
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: 'bearer' + localStorage.getItem('token')
//   }
// })
// .then(res => {
//   if (res.status) {
//     window.location.replace('/home')
//   }
// })

// fetch ('http://localhost:5550/home', {
//   method: 'GET',
//   mode: 'cors',
//   header: {
//     'content-type': 'application/json',
//     Authorization: 'bearer' + localStorage.getItem('token')
//   }
// });
