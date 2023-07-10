function findTotal(){
    var arrayHours = document.getElementsByClassName('inputNumberHours');
    var totalActivities = 0;
    for(var i=0;i<arrayHours.length;i++){
        if(parseInt(arrayHours[i].value) >= 0 && parseInt(arrayHours[i].value) <= parseInt(arrayHours[i].max))
        totalActivities += parseInt(arrayHours[i].value);
    }
    document.getElementById('sumActivities').innerHTML = totalActivities;
}