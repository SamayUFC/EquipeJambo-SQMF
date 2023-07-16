function findTotal(){
    let arrayHours = document.getElementsByClassName('inputNumberHours');
    totalActivities = 0;
    for(var i=0;i<arrayHours.length;i++){
        if(parseInt(arrayHours[i].value) >= 0 && parseInt(arrayHours[i].value) <= parseInt(arrayHours[i].max))
        totalActivities += parseInt(arrayHours[i].value);
        if (totalActivities > 192) {
            // if (!arrayHours[i].value) {
            //     arrayHours[i].readOnly = true;
            // }
            totalActivities = 192;
        }
    }
    document.getElementById('sumActivities').innerHTML = totalActivities;
}