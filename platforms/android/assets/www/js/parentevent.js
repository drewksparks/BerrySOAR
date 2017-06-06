
var OPENAT = 7.5; // 7:30 AM ... change as appropriate - can be fractions of an hour e.g. 7.5 = 7:30am
var CLOSEAT = 21; // 9:00 PM ... change as appropriate

function nextEvent( ) {
var sign = document.getElementById("nextEvent");
var month = new Date().getMonth();
var date = new Date().getDate();
var day = new Date().getDay();
var hour = new Date().getHours();
var mins = new Date().getMinutes();
hour = hour + mins/60;
    //filter with dates for SOAR, as to not give event schedules in May/July
//if ( month == 5 && date >= 5 && date <= 16)  {
    if ( month == 3 && date >= 5 && date <= 31)  {
        
        if ( day == 1 || day == 4)  { //Monday - Thursday filter i.e. day 1
    
  if(hour >= 20.75 && hour < 24.00 ) { //disp 9:00 - 12:00am
   sign.innerHTML = "<strong> 9:00 - 11:59pm </strong><br>Fun Social time @ Ford Complex and Gym";
  }
            else if (hour >= 20.25 && hour < 20.75 ){//disp 8:30 - 9:00pm
    sign.innerHTML = "<strong> 8:30 - 9:00pm </strong><br>Meet with SOAR Leaders @ Vrious Locations";
  }    
            else if (hour >= 19.75 && hour < 20.25 ){//disp 8:00 - 8:30pm
    sign.innerHTML = "<strong> 8:00 - 8:30pm </strong><br>Student Panel @ Ford Auditorium";
  }
            else if (hour >= 18.25 && hour < 19.75 ){//disp 6:30 - 7:45pm
    sign.innerHTML = "<strong> 6:30 - 7:45pm </strong><br>Dinner @ Krannert Ballroom";
  }            
            else if (hour >= 17.25 && hour < 18.25 ){//disp 5:30 - 6:15pm
    sign.innerHTML = "<strong> 5:30 - 6:15pm </strong><br>Follow up with SOAR Leaders @ Various Locations";
  }            
            else if (hour >= 16.25 && hour < 17.25 ){//disp 4:30 - 5:30pm
    sign.innerHTML = "<strong> 4:30 - 5:30 pm </strong><br><strong>Group A:</strong>Student activities then Res Life @ Krannert Underground<br><strong>Group B:</strong>Res Life then Student Activities @ Krannert 324";
  }            
            else if (hour >= 16.00 && hour < 16.25 ){//disp 4:15 - 4:30pm
    sign.innerHTML = "<strong> 4:15 - 4:30pm </strong><br>Meet new friends";
  }           
              else if (hour >= 15.00 && hour < 16.00 ){//disp 3:15 - 4:15pm
    sign.innerHTML = "<strong> 3:15 - 4:15pm </strong><br>Meet SOAR leaders";
  }          
            else if (hour >= 14.75 && hour < 15.00 ){//disp 3:00 - 3:15pm
    sign.innerHTML = "<strong> 3:00 - 3:15pm </strong><br>relocate with leaders";
  }          
            else if (hour >= 14.25 && hour < 14.75 ){//disp 2:30 - 3:00pm
    sign.innerHTML = "<strong> 2:30 - 3:00pm </strong><br>Opening Session @ Krannert Ballroom";
  }
          else if (hour >= 11.75 && hour < 14.25 ){//disp 12:00 - 2:00pm
    sign.innerHTML = "<strong> 12:00 - 1:00pm </strong><br>Student Room Move-in @ Ford Dining Hall";
  }            
            else { 
                sign.innerHTML = "No event";
            }
    
} 
else if ( day == 2 || day == 5)  { //Tuesday - Friday filter
    
  if(hour >= 13.75 && hour < 14.25 ) { //disp 2:00 pm 
   sign.innerHTML = "<strong> 2:00pm </strong><br>Checkout @ Ford Complex: West Mary";
  }
    else if (hour >= 13.25 && hour < 13.75 ){ //disp 1:30 - 2:00pm
    sign.innerHTML = "<strong> 1:30 - 2:00pm </strong><br>Meet with SOAR Leaders @ Various Locations";
  }
            else if (hour >= 12.50 && hour < 13.25 ){ //disp 12:45 - 1:30pm
    sign.innerHTML = "<strong> 12:45 - 1:30pm </strong><br>Meet with Work supervisors @ Spruill Ballroom";
  }
            else if (hour >= 11.75 && hour < 12.50 ){ //disp 12:00 - 12:45pm
    sign.innerHTML = "<strong> 12:00 - 12:45pm </strong><br>Lunch and Whats Next @ Spruill Ballroom";
  }
            else if (hour >= 9.75 && hour < 11.75 ){ //disp 10:00 - 12:00pm
    sign.innerHTML = "<strong> 10:00 - 12:00pm </strong><br>Academic Advising @ Various Locations";
  }
            else if (hour >= 9.25 && hour < 9.75 ){ //disp 9:30 - 10:00am 
    sign.innerHTML = "<strong> 9:30 - 10:00am </strong><br>Meet with SOAR Leaders @ Various Locations";
  }
            else if (hour >= 8.25 && hour < 9.25 ){ //disp 8:30 - 9:30am 
    sign.innerHTML = "<strong> 8:30 - 9:30am </strong><br>Academic Affairs Breakfast @ Krannert Ballroom";
  }
            
            else {
                sign.innerHTML = "No events";
            }
    
}
    else{
        sign.innerHTML = "No events today";
    }
}
   else{
        sign.innerHTML = "No events today";
    } 
}
    