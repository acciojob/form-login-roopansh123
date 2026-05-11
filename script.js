function getFormvalue() {
    // Prevent form from refreshing the page
    event.preventDefault();

    // Get input values
    let firstName = document.forms["form1"]["fname"].value.trim();
    let lastName = document.forms["form1"]["lname"].value.trim();

    // Show alert with full name
    alert(firstName + " " + lastName);
}