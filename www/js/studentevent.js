
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
if ( month == 5 && date >= 5 && date <= 17)  {
   // if ( month == 4 && date >= 1 && date <= 31)  {
        
        if ( day == 1 || day == 4)  { //Monday - Thursday filter i.e. day 1
    
  if(hour >= 20.75 && hour < 23.99 ) { //disp 8:45 - 12:00am
   sign.innerHTML = "<strong> 9:00 - 11:59pm </strong><br>Fun Social time @ Ford Complex and Gym";
  }
            else if (hour >= 20.25 && hour < 20.75 ){//disp 8:15 - 8:45pm
    sign.innerHTML = "<strong> 8:30 - 9:00pm </strong><br>Meet with SOAR Leaders @ Various Locations";
  }    
            else if (hour >= 19.11 && hour < 20.25 ){//disp 7:07 - 8:15pm
    sign.innerHTML = "<strong> 8:00 - 8:30pm </strong><br>Student Panel @ Ford Auditorium";
  }
            else if (hour >= 17.86 && hour < 19.11 ){//disp 5:52 - 7:07pm
    sign.innerHTML = "<strong> 6:30 - 7:45pm </strong><br>Dinner @ Krannert Ballroom";
  }            
            else if (hour >= 17.00 && hour < 17.86 ){//disp 5:00 - 5:52pm
    sign.innerHTML = "<strong> 5:30 - 6:15pm </strong><br>Follow up with SOAR Leaders @ Various Locations";
  }            
            else if (hour >= 16.36 && hour < 17.00 ){//disp 4:22 - 5:00pm
    sign.innerHTML = "<strong> 4:30 - 5:30 pm </strong><br><strong>Group A:</strong>Student activities then Res Life @ Krannert Underground<br><strong>Group B:</strong>Res Life then Student Activities @ Krannert 324";
  }            
            else if (hour >= 15.61 && hour < 16.36 ){//disp 3:37 - 4:22pm
    sign.innerHTML = "<strong> 4:15 - 4:30pm </strong><br>Meet new friends";
  }           
              else if (hour >= 15.11 && hour < 15.61 ){//disp 3:07 - 3:37pm
    sign.innerHTML = "<strong> 3:15 - 4:15pm </strong><br>Meet SOAR leaders";
  }          
            else if (hour >= 14.75 && hour < 15.11 ){//disp 2:45 - 3:07pm
    sign.innerHTML = "<strong> 3:00 - 3:15pm </strong><br>relocate with leaders";
  }          
            else if (hour >= 13.00 && hour < 14.75 ){//disp 1:00pm - 2:45pm
    sign.innerHTML = "<strong> 2:30 - 3:00pm </strong><br>Opening Session @ Krannert Ballroom";
  }
          else if (hour >= 1.00 && hour < 13.00 ){//disp 1:00am - 1:00pm
    sign.innerHTML = "<strong> 12:00 - 2:00pm </strong><br>Student Room Move-in @ Ford Dining Hall";
  }            
            else { 
                sign.innerHTML = "No events";
            }
    
} 
else if ( day == 2 || day == 5)  { //Tuesday - Friday filter
    
  if(hour >= 13.75 && hour < 16.00 ) { //disp 1:45 - 4:00 pm 
   sign.innerHTML = "<strong> 2:00pm </strong><br>Checkout @ Ford Complex: West Mary";
  }
    else if (hour >= 13.11 && hour < 13.75 ){ //disp 1:07 - 1:45pm
    sign.innerHTML = "<strong> 1:30 - 2:00pm </strong><br>Meet with SOAR Leaders @ Various Locations";
  }
            else if (hour >= 12.61 && hour < 13.11 ){ //disp 12:37 - 1:07pm
    sign.innerHTML = "<strong> 12:45 - 1:30pm </strong><br>Meet with Work supervisors @ Spruill Ballroom";
  }
            else if (hour >= 11.00 && hour < 12.61 ){ //disp 11:00 - 12:37pm
    sign.innerHTML = "<strong> 12:00 - 12:45pm </strong><br>Lunch and Whats Next @ Spruill Ballroom";
  }
            else if (hour >= 9.75 && hour < 11.00 ){ //disp 9:45 - 11:00pm
    sign.innerHTML = "<strong> 10:00 - 12:00pm </strong><br>Academic Advising @ Various Locations";
  }
            else if (hour >= 9.00 && hour < 9.75 ){ //disp 9:00 - 9:45am 
    sign.innerHTML = "<strong> 9:30 - 10:00am </strong><br>Meet with SOAR Leaders @ Various Locations";
  }
            else if (hour >= 0.01 && hour < 9.00 ){ //disp 12:01am - 9:00am 
    sign.innerHTML = "<strong> 8:30 - 9:30am </strong><br>Academic Affairs Breakfast @ Krannert Ballroom";
  }
            
            else {
                sign.innerHTML = "No events";
            }
    
}
    else{
        sign.innerHTML = "No events today!";
    }
}
   else{
        sign.innerHTML = 'No SOAR this week. <p style="margin-bottom: 0px; font-size:22">SOAR dates are:</p> <p style="font-size: 20px;">June&nbsp;5-6 &#8226; June&nbsp;8-9 &#8226; June&nbsp;12-13<br>June&nbsp;15-16 &#8226; Aug&nbsp;15-16 </p><p style="font-size: 13px;">(this will update during each SOAR session)</p>';
    } 
}
    