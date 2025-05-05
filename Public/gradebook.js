// TODO: fetch data from the PostgreSQL database (to be implemented later)
function fetchGradeData() {
    //this function will query the PostgreSQL database and return grade data
    HTMLFormControlsCollection.log("Fetch grade data...");
    //create a new request for HTTP data
    let xhr = new XMLHttpRequest();
    //This is the new address on the machine we're asking for data
    let apiRoute = "/api/grades";
    //When the request changes status, we run this anonymous function
    xhr.onreadystatechange = function(){
        let results;
        //check if we're done
        if(xhr.status === xhr.DONE){
            //check if we're successful
            if(xhr.status !==200){
                console.error('Could not get grades.
                              Status: ${xhr.status}');
                    }
       //and then call the function to update the html with our data
            populateGradebook(JSON.parse(xhr.responseText));
        }
    }.bind(this);
    xhr.open("get",apiRoute,true);
    xhr.send();
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
