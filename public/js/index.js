
// Placeholder request JSON 

var requestJSON= {
              
    "model" : { "caslib": "models", "name"  : "CLUSTER_SDOH6_PHYSICALLY_UNHEALTHY_DAYS_1" },
    "scenario": {
           "SDOH_Physically_Unhealthy_Days_": 4.3,
           "SDOH_Per_Adults_Bachelors": 19.6,
           "SDOH_Unemployment_Rate" : 9.6,
           "SDOH_Median_Household_Income": 45493
          }
    }
  ;



// this block identifies the access token
var regex = /[?&]([^=#]+)=([^&#]*)/g,
urlstring = $(location).attr('hash'),
searchstr = $(location).attr('search'),
params = {},
match;

while(match = regex.exec(urlstring)) {
    params[match[1]] = match[2];
};

while(match = regex.exec(searchstr)) {
    params[match[1]] = match[2];
};



console.log("Access Token details");
console.log(params);

function makeCall(inputO){

    var inputData = JSON.stringify(inputO);

    console.log(inputO);

    var urlAWS = "https://fjop9wri2b.execute-api.us-east-1.amazonaws.com/dev/score"
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://fjop9wri2b.execute-api.us-east-1.amazonaws.com/dev/score",
        "method": "POST",
        "headers": {
          "Content-Type": "application/json",

          "Accept": "*/*"
        },
        "processData": false,
        "data": inputData
      }


  
  $.ajax(settings).done(function (response) {
                                          console.log("response");
                                          console.log(response);
                                          $("#answerRow").append($("<div>",{class:"card mb-4 p-4 text-dark" ,id:"answer"}));
                                          $("#answer").append($("<h2>",{class:"card-title", text:"Here are the results"}));
                                          $("#answer").append(
                                            $("<table>",{class:"table-dark",style:"text-align:left;", id:"ansTable"}));
                                          for(var a = 0; a < response.casResults.length; a++){
                                              for(var key in response.casResults[a]){
                                                $("#ansTable").append($("<tr>").append(($("<td>",{text:key}))).append($("<td>",{text:response.casResults[a][key]})));
                                              };
                                          };


                                                      
                                              }).error(function(err){ console.log("Error");
                                                                      console.log(err);
                                                                    });
      };
  
  

  $(".nav-link").click(function(){
      $("#answerRow").empty();
      $(".nav-link").attr({class:"nav-link"});
      $(this).attr({class:"nav-link active"});
      console.log($(this).text().substr(0,$(this).text().indexOf(' '))+".html");
      $("#targetRow").load($(this).text().substr(0,$(this).text().indexOf(' '))+".html");


  });


$("#scenarios").click(function(){
  console.log("modal");
  $("#modelBox").attr({class:"row"});
});