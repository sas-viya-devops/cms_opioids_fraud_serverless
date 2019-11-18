// Event handler - call api when submit button is pressed

$("#modelSubmit").click(function(){

        
    // Preventing the buttons default behavior when clicked (which is submitting a form)

    event.preventDefault();


    // makeCall("SSRACDECISION"+"/steps/execute",requestJSON);
      console.log($("#phyDays").val());
    requestJSON['scenario']['SDOH_Physically_Unhealthy_Days_'] = $("#phyud").val()*1; 
    requestJSON['scenario']['SDOH_Per_Adults_Bachelors'] = $("#perbac").val()*1; 
    requestJSON['scenario']['SDOH_Unemployment_Rate'] = $("#unemp").val()*1;
    requestJSON['scenario']['SDOH_Median_Household_Income'] = $("#medhh").val()*1;
    

    //6 calls to 6 models are made now - this can be changed to just one (the most relevant model) once done.
    console.log(requestJSON);
    makeCall("sshldtree"+"/steps/score",requestJSON);
   

});