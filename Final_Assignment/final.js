/** Problem -01 ( Divide the Asset ) */
var area = 2060;
//write your code here
var get_area = area / 2;
console.log(get_area);


/** Problem -02 ( Cycle or Laptop ) */
var money = 9999;
//write your code here

if(money >= 25000) {
    console.log("Buying a Laptop");
}else if(money >= 10000){
    console.log("Buying a Cycle");
}else {
    console.log("Will buy chocolates");
}


/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here

var day;

for (day = 1; day <= lastDay; day++) {
    if(day % 3 ==0 ){
        console.log(day +' - medicine');
    }else {
        console.log(day + ' - rest');
    }
}  

/** Problem 04 - (Delete / Store) */
var fileName= "#report.pdf";
//write your code here
if (fileName.startsWith('#')){
    console.log("Store");

}else if(fileName.endsWith('.pdf') || fileName.endsWith('.docx')){
    console.log('Store');

}else{
    console.log('Delete');
}

/** Problem 05 - ( PH Email Generator )  */
var student= { name: "moin" , roll: 223899,department: "cse" };
//write your code here
var email = student.name + student.roll + '.' + student.department + '@ph.ac.bd';
console.log(email);

/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

for(var i = 0; i < experience; i++) {
    startingSalary += startingSalary * 0.05;
}
console.log(startingSalary.toFixed(2));