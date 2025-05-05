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
    // This function will take the fetched grade data and populate the table
    console.log("Populating gradebook with data", data);
    let tableElm = document.getElementById("gradebook"); //get the gradebook table element
        data.forEach(function(assignment){ //for each row of data that we're passing in
            let row = document.createElement("tr"); //create a table row element
            let columns = []; //handy place to sticket the columns of information
            columns.name = document.createElement('td');//the first column's table data will be the table name
            columns.name.appendChild(
                //concatenate the full name: "last_name","first_name"
                document.createTextNode(assignment.last_name + ", " + assignment.first_name)
                );
            columns.grade = document.createElement('td'); //second column will be the grade
            columns.grade.appendChild(
                //just put the name in text, you could be fancy and figure out the letter grade here
                //with either a bunch of conditions, or a JavaScript "switch" statement
                document.createTextNode(assignment.total_grade)
                ):
            //add the table data columns to the table row
            row.appendChild(columns.name);
            row.appendChild(columns.grade);
            //add the row to the table itself to make the table visible
            tableElm.appendChild(row);
        });
}

// TODO REMOVE THIS
//Call the stubs to demonstrate workflow
const gradeData = fetchGradeData();
populateGradebook(gradeData);
// END REMOVE
