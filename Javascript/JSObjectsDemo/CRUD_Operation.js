const learner = {
    id: "1001", 
    user_name: "Krutika", 
    password: "pass@123",
    email_id: "krutikachauhan07@gmail.com",
    likeprogramming: true,
    isAdmin: false,
    technology_used: "Javascript",
    AssignMembership()
    {
        console.log(`Welcome Learner!! ${this.user_name}, You are a member of coding club!!`);
    } , 

    address: {
        area: "Pratap Nagar",
        city: "Nagpur",
        state: "Maharashtra",
        pincode: 441904,
    },

    course: {
        courseId: "C108",
        courseName: "Java FSD",
        fees: 80000,
        doj: "2025-10-09"
    }
}
console.log(learner);
console.log(typeof(learner.address.city));
console.log(learner.course.fees);
console.log(typeof (learner.address));

function LoginCheck()
{
    if (learner.user_name == "Krutika" && learner.password == "pass@123")
    {
        console.log("Login Successful!!");
        learner.AssignMembership();
    }
    else 
    {
        console.log("Login failed!");
    }
}

LoginCheck();

// Modify the learner course_name - UPDATE 

learner.course.courseName = "Data Science";
console.log(learner.course);       // READ 

// Add new property learner is working or not - CREATE 
learner.isEmployee = "true";
console.log(learner);

// To delete the property of the learner  - DELETE 
delete learner.isAdmin;
console.log(learner);

// delete learner address
delete learner.address;
console.log(learner);
