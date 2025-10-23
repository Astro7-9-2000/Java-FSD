function checkage(age)
{
    if (age > 18)
    {
        console.log("You are eligible to vote");
    }
    else {
        console.log("You are not eligible for registration");
    }
}

checkage(12);
checkage(21);
checkage(41);