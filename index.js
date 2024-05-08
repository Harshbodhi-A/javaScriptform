// document.getElementById("myForm").addEventListener("submit", function(event) {
//     event.preventDefault(); 
    

//     var email = document.getElementById("exampleInputEmail1").value;
//     var password = document.getElementById("exampleInputPassword1").value;
//     var isChecked = document.getElementById("exampleCheck1").checked;

   
//     var displayDiv = document.getElementById("displayData");
//     displayDiv.innerHTML = "<h2>Form Data</h2>" +
//                             "<p>Email: " + email + "</p>" +
//                             "<p>Password: " + password + "</p>" +
//                             "<p>Checkbox Checked: " + isChecked + "</p>";

    
//     console.log("Email:", email);
//     console.log("Password:", password);
//     console.log("Checkbox Checked:", isChecked);
// });
function openPopup() {
    var email = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value;
    var isChecked = document.getElementById("exampleCheck1").checked;

    var popupWindow = window.open("", "_blank", "width=400,height=300");
    popupWindow.document.write("<h2>Login Details</h2>" +
                                "<p>Email: " + email + "</p>" +
                                "<p>Password: " + password + "</p>" +
                                "<p>Checkbox Checked: " + isChecked + "</p>");
}