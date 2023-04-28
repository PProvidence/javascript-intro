function submitForm(){
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phoneNo").value;
    const email = document.getElementById("email").value;

    console.log(name);
    console.log(phone);
    console.log(email);

const students ={
    name: name,
    phone: phone,
    email: email,

    getStudentDetails: function ( ) {
        return `The name of the student is ${this.name} and his phone no. is ${phone}`
    }
}
console.log(students);
console.log(students.getStudentDetails());
}

// read getters and setters
