$(document).ready(ready);

function ready()
{
    getInstructorOfTheMonth();
    getInstructors();
}

function getNumberOfInstructors(){
    var total_number;
     $.ajax({
        url:"http://biggymjll.altervista.org/getfromdb_instructors.php",
        cache: false,
        method:"POST", //metodo per ricevere i dati 
        //crossDomain: setBrowserCrossDomain(),
        data:{/* query: "SELECT COUNT(*) AS counted FROM instructors;"*/
            query:"getnumberofInstructors="
        },
        success: function(response){
           total_number=(JSON.parse(response));
           //console.log(total_number);
        },
        error: function(request, error) {
            console.log(error);
        }
    }).done(function(){
     
         
     });  
}

function getInstructorOfTheMonth()
{
    var instructorOfTheMonth;
    $.ajax({
        url:"http://biggymjll.altervista.org/getfromdb_instructors.php",
        cache: false,
        method:"POST", //metodo per ricevere i dati 
        //crossDomain: setBrowserCrossDomain(),
        data:{/* query: "SELECT instructors.firstname, instructors.surname, instructors.description, instructors.smallimage, awards.iconurl FROM instructors ,instructors_awards ,awards WHERE instructors.personid=instructors_awards.personid AND awards.award = 'InstructorOfTheMonth' AND instructors_awards.award = awards.award ";"*/
            query:"getInstructorOfTheMonth="
        },
        success: function(response){
           instructorOfTheMonth=(JSON.parse(response));
           console.log("succes");
        },
        error: function(request, error) {
            console.log("error");
        }
    }).done(function(){
         displayInstructorOfTheMonth(instructorOfTheMonth);
     });  
}

function displayInstructorOfTheMonth(instructorOfTheMonth)
{
    var content="<li class='instructorContainer list-group-item'><div><img src="+instructorOfTheMonth[0]['smallimage']+" class='instructorImg'></div><div class='instructorDesc'><p>"+instructorOfTheMonth[0]['firstname']+"</p><p>"+instructorOfTheMonth[0]['surname']+"</p><p>"+instructorOfTheMonth[0]['description']+"</p><p><a href='InstructorPersonalPage.html?code="+instructorOfTheMonth[0]['personid']+"'>See My Page!</a></p></br></div></li>";
    $("#instructorOfTheMonth").append(content);
}
function getInstructors()
{
    var instructors;
    $.ajax({
        url:"http://biggymjll.altervista.org/getfromdb_instructors.php",
        cache: false,
        method:"POST", //metodo per ricevere i dati 
        //crossDomain: setBrowserCrossDomain(),
        data:{/* query: "SELECT instructors.firstname, instructors.surname, instructors.description, instructors.smallimage FROM instructors"*/
            query:"getAllInstructors="
        },
        success: function(response){
           instructors=(JSON.parse(response));
           console.log("succes");
        },
        error: function(request, error) {
            console.log("error");
        }
    }).done(function(){
         displayInstructors(instructors);
     });  
}

function displayInstructors(instructors)
{
    for(var i = 0 ; i < instructors.length ; i++)
    {
    var content="<li class='instructorContainer list-group-item'><div><img src="+instructors[i]['smallimage']+" class='instructorImg'></div><div class='instructorDesc'><p>"+instructors[i]['firstname']+"</p><p>"+instructors[i]['surname']+"</p><p>"+instructors[i]['description']+"</p><p><a href='InstructorPersonalPage.html?code="+instructors[i]['personid']+"'>See My Page!</a></p></div></li></br></br>";
    $("#instructrsList").append(content);
    
    }
}