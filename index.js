function userData(arr) {
    let userOutputs = JSON.parse(localStorage.getItem('useOutputs') || '[]')
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
        userOutputs.push(output)
        document.getElementById('details').innerHTML += output

    });
    localStorage.setItem('userOutputs',JSON.stringify(userOutputs))
    // localStorage.setItem('userOutput', JSON.stringify(output))
    // localStorage.setItem("userOutput", output)

}

// JSON.parse(localStorage.getItem("userOutput"))
window.addEventListener('load', () => {
 let userOutputs =  JSON.parse(localStorage.getItem('userOutputs') || '[]')
    userOutputs.forEach((output) => {
        document.getElementById('details').innerHTML += output
    });
})

function validation(callback) {
    let info = document.querySelectorAll('.info')

    let firstname = document.getElementById('firstname')
    let lastname = document.getElementById('lastname')
    let age = document.getElementById('age')
    let gender = document.getElementById('gender')
    for (let i = 0; i < info.length; i++) {
        if (info[i].value == "" || info[i].value == null) {
            info[i].nextElementSibling.innerHTML = info[i].previousElementSibling.innerHTML + " is required"
        } else { info[i].nextElementSibling == "" }

    }
    if (!firstname.value && !lastname.value && !age.value && !gender.value) {
        return;
    }


    dataArr = []
    let obj = {
        Firstname: firstname.value,
        Lastname: lastname.value,
        Age: age.value,
        Gender: gender.value,
    }
    dataArr.push(obj)
    callback(dataArr)
}

document.getElementById('btn').onclick = () => {
    validation(userData)
}