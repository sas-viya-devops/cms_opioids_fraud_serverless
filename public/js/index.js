
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

function makeCall(endpoint,inputO){

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
    	
                                              }).error(function(err){ console.log("Error");
                                                                      console.log(err);
                                                                    });
      };
  
  
// Event handler - call api when submit button is pressed

      $("#modelSubmit").click(function(){

        
              // Preventing the buttons default behavior when clicked (which is submitting a form)
      
              event.preventDefault();


              // makeCall("SSRACDECISION"+"/steps/execute",requestJSON);
                console.log($("#phyDays").val());
              requestJSON['scenario']['SDOH_Physically_Unhealthy_Days_'] = $("#phyDays").val()*1; 
              requestJSON['scenario']['SDOH_Per_Adults_Bachelors'] = $("#perBach").val()*1; 
              requestJSON['scenario']['SDOH_Unemployment_Rate'] = $("#unEmpRate").val()*1;
              requestJSON['scenario']['SDOH_Median_Household_Income'] = $("#medHHIncome").val()*1;
              

              //6 calls to 6 models are made now - this can be changed to just one (the most relevant model) once done.
              console.log(requestJSON);
              makeCall("sshldtree"+"/steps/score",requestJSON);
        
        });
  