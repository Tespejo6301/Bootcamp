
firstname = prompt("Hello and Welcome. Please enter your first name:")
lastname = prompt("Please enter your Last Name:")
age = prompt("How old are you?")
height = prompt("How tall are you in centimeters?")
petname = prompt("What is the name of your pet?")

c1 = false
c2 = false
c3 = false 
c4 = false
if(firstname[0] == lastname[0])
    c1 = true

if ( age >= 20 && age <= 30)  
    c2 = true

if (height >= 170)
    c3 = true

if (petname[petname.length - 1] === "y")    
    c4 = true

if (c1 == true && c2 == true  && c3 == true && c4 == true)
    console.log("Welcome Comrade! You've passed the Spy Test")
