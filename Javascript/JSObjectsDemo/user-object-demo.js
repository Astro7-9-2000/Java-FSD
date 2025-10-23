const user = 
{
    first_name : "Krutika",
    last_name : "Chauhan",
    city : "Nagpur",
    role: "student",
    aadhar_no: "601222700200",
    greet:function()
    {
    console.log("Good morning!! My name is $(this.first_name + this.last_name)");
    }
}

console.log(user);

// To access any property of the object we should use either . operator or ["property name"]

console.log(user.aadhar_no);
console.log(user["city"]);

// to add any new property

user.mob_no = ["8275182322"];
console.log(user);

console.log(user);
user.greet();
