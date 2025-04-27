// TODO: fetch data from the PostgreSQL database (to be implemented later)
function fetchGradeData() {
    //this function will query the PostgreSQL database and return grade data
    HTMLFormControlsCollection.log("Fetch grade data...");
}

//TODO: Populate the table with grade data
function populateGradebook(data) {
    // This function will take the fteched grade data and populate the table
    console.log("Populating gradebook with data", data);
}

// TODO REMOVE THIS
//Call the stubs to demonstrate workflow
const gradeData = fetchGradeData();
populateGradebook(gradeData);
// END REMOVE