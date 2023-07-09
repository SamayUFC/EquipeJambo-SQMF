function findTotal(){
    var arrayHours = document.getElementsByClassName('inputNumberHours');
    var totalActivities = 0;
    for(var i=0;i<arrayHours.length;i++){
        if(parseInt(arrayHours[i].value))
        totalActivities += parseInt(arrayHours[i].value);
    }
    document.getElementById('sumActivities').innerHTML = totalActivities;
}