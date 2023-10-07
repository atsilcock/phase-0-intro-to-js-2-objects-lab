// Task 1
// Create a function called updateEmployeeWithKeyAndValue with three parameters (employee, key, value)

const employee = {name:"Sam", streetAddress:"12 Broadway"}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObject = { ...employee};
    newObject[key] = value;
    return newObject;
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee [key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newObj = { ...employee};
    delete newObj[key];
    return newObj;

}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee [key];
        return employee;
}
