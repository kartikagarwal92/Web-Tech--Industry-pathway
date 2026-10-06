// Get HTML elements

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");
const message = document.getElementById("message");


// Login button

loginButton.addEventListener("click", function () {

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Check empty fields

    if (username === "" || password === "") {

        message.innerHTML = "Please enter username and password.";
        message.style.color = "red";

        return;
    }


    // Load users.xml

    fetch("users.xml")
        .then(function (response) {

            return response.text();

        })

        .then(function (data) {

            // Convert XML text into XML document

            const parser = new DOMParser();

            const xml = parser.parseFromString(data, "text/xml");


            // Get all users

            const users = xml.getElementsByTagName("user");

            let loginSuccess = false;


            // Check username and password

            for (let i = 0; i < users.length; i++) {

                const xmlUsername =
                    users[i].getElementsByTagName("username")[0].textContent;

                const xmlPassword =
                    users[i].getElementsByTagName("password")[0].textContent;


                if (username === xmlUsername && password === xmlPassword) {

                    loginSuccess = true;

                    break;
                }
            }


            // Login result

            if (loginSuccess) {

                message.innerHTML = "Login successful!";
                message.style.color = "green";

                // Open student portal

                setTimeout(function () {

                    window.location.href = "portal.html";

                }, 500);

            } else {

                message.innerHTML = "Incorrect username or password.";
                message.style.color = "red";

            }

        })

        .catch(function (error) {

            message.innerHTML = "Error loading users.xml";
            message.style.color = "red";

            console.log(error);

        });

});