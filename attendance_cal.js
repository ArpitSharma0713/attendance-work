function calculateAttendance() {
    var totalClasses= parseInt(document.getElementById("totalClasses").value);
    var attendedClasses= parseInt(document.getElementById("attendedClasses").value);
    if (isNaN(totalClasses)||isNaN(attendedClasses)||totalClasses<=0 || attendedClasses<0 || attendedClasses>totalClasses) {
        document.getElementById("result").innerHTML="Please enter valid numbers for total and attended classes.";
        return;
    }
    var attendance = (attendedClasses / totalClasses) * 100;
    var requiredAttendance = parseFloat(document.getElementById("requiredAttendance").value);
    var result = document.getElementById("result");
     result.style.color = "";
    if (!isNaN(requiredAttendance) && requiredAttendance > 0 && requiredAttendance <= 100) {
        if (attendance < requiredAttendance) {
            result.style.color = "#cc0000"; 
            var classesNeeded = Math.ceil(((requiredAttendance / 100) * totalClasses - attendedClasses) / (1 - (requiredAttendance / 100)));
            document.getElementById("result").innerHTML="Attendance: " + attendance.toFixed(2) + "%<br>Classes needed to reach requirement: " + classesNeeded;
        } 
        else if (attendance > requiredAttendance) {
            result.style.color = "#006600";

            var classesCanMiss = Math.floor((attendedClasses - (requiredAttendance / 100) * totalClasses) / (requiredAttendance / 100));
            document.getElementById("result").innerHTML="Attendance: " + attendance.toFixed(2) + "%<br>Classes can miss while maintaining requirement: " + classesCanMiss;
        }
        else {
            document.getElementById("result").innerHTML="Attendance: " + attendance.toFixed(2) + "%";
        }
    } else {
        document.getElementById("result").innerHTML="Attendance: " + attendance.toFixed(2) + "%";
    }
}