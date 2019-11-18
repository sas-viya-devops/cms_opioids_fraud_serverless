// Event handler - call api when submit button is pressed

$("#modelSubmit").click(function(){

        
    // Preventing the buttons default behavior when clicked (which is submitting a form)

    event.preventDefault();
    $("#answerRow").empty();
    requestJSON['model'] = { "caslib": "models", "name"  : "neuralnetwork_high_med_1" }

    // makeCall("SSRACDECISION"+"/steps/execute",requestJSON);
      console.log($("#phyDays").val());
    requestJSON['scenario']['doctorshop_med'] = $("#doctorshopmed").val()*1; 
    requestJSON['scenario']['opioid_days'] = $("#opioiddays").val()*1; 
    requestJSON['scenario']['PRESCRIBER_COUNT'] = $("#prescriberCount").val()*1;
    requestJSON['scenario']['all_avg_med'] = $("#maxmmeperday").val()*1;
    requestJSON['scenario']['max_avg_med_90'] = $("#maxavgmed90").val()*1;
    

    console.log(requestJSON);
    makeCall(requestJSON);
   

});