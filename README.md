first of all we have to create an empty array called todos because this array will store all the to-do items entered by the user.
then we create the input field, add button, and the unordered list from the html document.
after that we create a function called render because this function will take the data from the array and display the complete list inside the <ul>.
then we create the add event handler for the button.
when the user clicks the Add button, first we get the current value from the input using .value.
after getting the value, we push that value into the todos array.
then we call the render function so the updated array can be displayed inside the list.
finally we clear the input field by setting its value to an empty string.

in the first method we use innerHTML to render the list.
first we clear the existing innerHTML of the <ul> because we have to rebuild the complete list from the array.
then we use forEach to go through every item inside the todos array.
for every item we create an <li> using a string and add it to the innerHTML of the list.
this means that every time the render function runs, the complete <ul> is rebuilt from the array.

in the second method we use document.createElement() instead of building HTML strings.
first we clear the existing list.
then we use forEach to go through every item in the array.
for every item we create a new <li> element using document.createElement("li").
then we use textContent to put the current todo text inside the <li>.
after that we use appendChild to add the created <li> to the <ul>.
this method creates actual dom elements instead of rebuilding the list using an html string.

in the third method we use an html template as a blueprint for every to-do item.
first we create a template in the html and place an empty <li> inside it.
then inside the render function we clear the existing <ul>.
after that we use forEach to go through every item in the todos array.
for every item we use template.content.cloneNode(true) to create a copy of the template.
then we select the <li> inside the copied template and set its textContent to the current todo item.
after that we append the copied template to the <ul> using appendChild.
the template acts as a reusable structure for every item in the list.

the innerHTML method is the simplest because we can rebuild the entire list using an HTML string.
the createElement method gives more direct control over the DOM because every <li> is created as a real DOM element.
the template method is useful when every item has a fixed HTML structure because we create the structure once and clone it for every item.
the innerHTML method is simple and convenient for small lists, createElement provides more dom control, and the template method is useful for reusable and more complex html structures
