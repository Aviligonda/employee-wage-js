console.log("Welcome to Employee Wage Program")
//UC1--> Employee is Present or not
{
    const IS_PRESENT=1;
    let empCheck=Math.floor(Math.random()*2);
    if(empCheck==IS_PRESENT){
        console.log("UC1-->Employee is Present");
    }else{
        console.log("UC1-->Employee is Absent");
    }
}
//UC2-->Calculating Employee Wage
{
    const IS_PART_TIME=1;
    const IS_FULL_TIME=2;
    const PART_TIME_HOURS=4;
    const FULL_TIME_HOURS=8;
    const WAGE_PER_HOUR=20;
    let empHr=0;
    empCheck=Math.floor(Math.random()*3);
    switch (empCheck) {
        case IS_PART_TIME:
            empHr=PART_TIME_HOURS;            
            break;
        case IS_FULL_TIME:
            empHr=FULL_TIME_HOURS;
            break
        default:
            empHr=0;
            break;
    }
    let empWage=empHr*WAGE_PER_HOUR;
    console.log(" UC2-->Employee Wage is :"+empWage);
}
//UC3-->To Write Function For Daily Working Hours
{
    const IS_PART_TIME=1;
    const IS_FULL_TIME=2;
    const PART_TIME_HOURS=4;
    const FULL_TIME_HOURS=8;
    const WAGE_PER_HOUR=20;
    function getWorkingHours(empCheck){
        switch(empCheck){
            case IS_PART_TIME:
                return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
            default:
                return 0;
        }
    }
    let empHr=0;
    let empCheck=Math.floor(Math.random()*3);
    empHr=getWorkingHours(empCheck);
    let empWage=empHr*WAGE_PER_HOUR;
    console.log("UC3--> Employee Daily wage :"+empWage);
}
//UC4-->Calculating Wages for Month
{
    const NUM_OF_WORKING_DAYS=20;
    const IS_PART_TIME=1;
    const IS_FULL_TIME=2;
    const PART_TIME_HOURS=4;
    const FULL_TIME_HOURS=8;
    const WAGE_PER_HOUR=20;
    function getWorkingHours(empCheck){
        switch(empCheck){
            case IS_PART_TIME:
                return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
            default:
                return 0;
        }
    }
    let empHr=0;
    for(let day =0;day<NUM_OF_WORKING_DAYS;day++){
        let empCheck=Math.floor(Math.random()*3);
        empHr+=getWorkingHours(empCheck);
    }
    let empWage=empHr*WAGE_PER_HOUR;
    console.log("UC4-->Total Hours "+empHr+" Employee Wage is :"+empWage);
}
//UC5-->Calculating Wages Still condition Reached
{
    const MAXIMUM_WORKING_DAYS=20;
    const IS_PART_TIME=1;
    const IS_FULL_TIME=2;
    const PART_TIME_HOURS=4;
    const FULL_TIME_HOURS=8;
    const WAGE_PER_HOUR=20;
    const MAX_HOURS_IN_MONTH=100;
    function getWorkingHours(empCheck){
        switch(empCheck){
            case IS_PART_TIME:
                return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
            default:
                return 0;
        }
    }
    let totalEmpHr=0;
    let totalWorkingDays=0;
    while(totalEmpHr<=MAX_HOURS_IN_MONTH && totalWorkingDays<MAXIMUM_WORKING_DAYS){
        totalWorkingDays++;
        let empCheck=Math.floor(Math.random()*3);
        totalEmpHr+=getWorkingHours(empCheck);
    }
    let empWage=totalEmpHr * WAGE_PER_HOUR;
    console.log("UC5--> Total Days :"+totalWorkingDays+" Total Hours :"+totalEmpHr+" EmployeeWage is : "+empWage);
}