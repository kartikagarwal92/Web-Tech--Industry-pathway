const studentBody = document.getElementById("studentBody");

const topStudent = document.getElementById("topStudent");

const toggleButton = document.getElementById("toggleButton");

const tableContainer = document.getElementById("tableContainer");

const changeHeading = document.getElementById("changeHeading");

const heading = document.getElementById("heading");

const lightMode = document.getElementById("lightMode");

const darkMode = document.getElementById("darkMode");

const body = document.getElementById("body");


fetch("students.xml")

    .then(function (response) {

        return response.text();

    })

    .then(function (data) {


        const parser = new DOMParser();

        const xml = parser.parseFromString(data, "text/xml");


        // Get all student elements

        const students = xml.getElementsByTagName("student");


        let highestMarks = 0;

        let bestStudent = "";



        for (let i = 0; i < students.length; i++) {



            const name =
                students[i].getElementsByTagName("name")[0].textContent;

            const course =
                students[i].getElementsByTagName("course")[0].textContent;

            const semester =
                students[i].getElementsByTagName("semester")[0].textContent;

            const marks =
                students[i].getElementsByTagName("marks")[0].textContent;



            const row = document.createElement("tr");



            const serialNumber = document.createElement("td");

            serialNumber.innerHTML = i + 1;



            const nameCell = document.createElement("td");

            nameCell.innerHTML = name;



            const courseCell = document.createElement("td");

            courseCell.innerHTML = course;



            const semesterCell = document.createElement("td");

            semesterCell.innerHTML = semester;



            const marksCell = document.createElement("td");

            marksCell.innerHTML = marks;



            row.appendChild(serialNumber);

            row.appendChild(nameCell);

            row.appendChild(courseCell);

            row.appendChild(semesterCell);

            row.appendChild(marksCell);



            studentBody.appendChild(row);



            if (Number(marks) > highestMarks) {

                highestMarks = Number(marks);

                bestStudent = name;

            }

        }



        topStudent.innerHTML =

            "<h3>" + bestStudent + "</h3>" +

            "<p>Marks: " + highestMarks + "</p>";

    })


    .catch(function (error) {

        console.log(error);

        studentBody.innerHTML =
            "<tr><td colspan='5'>Error loading student data.</td></tr>";

        topStudent.innerHTML =
            "Unable to load student data.";

    });






toggleButton.addEventListener("click", function () {


    if (tableContainer.style.display === "none") {

        tableContainer.style.display = "block";

        toggleButton.innerHTML = "Hide Student Table";

    }

    else {

        tableContainer.style.display = "none";

        toggleButton.innerHTML = "Show Student Table";

    }

});






changeHeading.addEventListener("click", function () {

    heading.innerHTML = "Welcome, Student!";

});






lightMode.addEventListener("click", function () {

    body.classList.remove("dark");

});






darkMode.addEventListener("click", function () {

    body.classList.add("dark");

});