let cityNames = ["Chennai","Bangalore","Coimbatore"];
// for(let i=0;i<cityNames.length;i++){
//     let city = cityNames[i];
//     console.log(city);
// }
//foreach
// for(let city of cityNames){
//     console.log(city);
// }
//search concept
let inputCity = "chennai";
let exists = false;
for(let city of cityNames){
    if(inputCity.toLowerCase() == city.toLowerCase()){
        exists = true;
        break;// important
    }
}
console.log("Matched:" + exists);
let exists1 = cityNames.includes("Chennai");


let departments = [];

//how to add items in an array
departments.push("CSE");
departments.push("EEE");
departments.push("MECH");
//EEE check
let index = departments.indexOf("EEE");
if(index != -1){
//-1 - not exists
departments.splice(index, 1);
console.log(departments);
}

let age = 20;
let depName = "CSE";
try{
    //basic validation
    if(age<0 || age>100){
        throw new Error("Invalid");
    }
    if(depName == null || depName.trim()==""){
        throw new Error("Invalid departmentName");
    }
    console.log("Validation passed");
    let userObj = { "age" : age, "departmentName": depName};
    console.log(userObj);
    let users = [];
    users.push(userObj);
    //convert array object to String => JSON.stringify
    localStorage.setItem("USERS", JSON.stringify(users));
    // convert String to array object => JSON.parse
    let usersArray = JSON.parse(localStorage.getItem("USERS"));
    console.log("UsersArray:" + usersArray);


}catch(e){
    console.error("Error:" + e.message);
}


