const employee = {name:"Sam", streetAddress:"12 Broadway"}


function updateEmployeeWithKeyAndValue(obj, key, value) {
    console.log(obj, key, value)
    const newObj = { ...obj};
    console.log(newObj)
    newObj[key] = value;
    console.log(newObj)
    return newObj;
    
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    console.log(employee, value, key)
    employee [key] = value;
    return employee

}

function deleteFromEmployeeByKey (obj, key, value) {
    const newEmployee = {...obj};
    newEmployee [key] = value;
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(obj, key, value){
    employee [key] = value;
    return employee
}