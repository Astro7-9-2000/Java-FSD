function cal_income(salary)
{
    let tax = salary * 0.1;
    salary = salary - tax;
    console.log(salary);
}

cal_income(2000);
cal_income(5000);
cal_income(25000);
cal_income(15000);
cal_income(30000);
cal_income(20000);