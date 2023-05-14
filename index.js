function userData(arr) {
    let output = ""
    arr.forEach((data) => {
         output += `
        <div class="details-">
        <p>First Name: ${data.Firstname} </p>
        <p>Last Name:${data.Lastname} </p>
        <p>Age: ${data.Age}</p>
        <p>Gender: ${data.Gender}</p>
    </div> 
        `;
        document.getElementById('details').innerHTML += output
    });

    localStorage.setItem(userOutput, output)
}

function validation(callback) {
    let info = document.querySelectorAll('.info')
    for (let i = 0; i < info.length; i++) {
        if (info[i].value == "" || info[i].value == null) {
            info[i].nextElementSibling.innerHTML = info[i].previousElementSibling.innerHTML + " is required"
        } else { info[i].nextElementSibling == "" }
    }

    dataArr = []

    let firstname = document.getElementById('firstname')
    let lastname = document.getElementById('lastname')
    let age = document.getElementById('age')
    let gender = document.getElementById('gender')
    let obj = {
        Firstname: firstname.value,
        Lastname: lastname.value,
        Age: age.value,
        Gender: gender.value,
    }
    dataArr.push(obj)
    callback(dataArr)
}


// validation()
document.getElementById('btn').onclick = () => {
    validation(userData)

    // alert('working')
}