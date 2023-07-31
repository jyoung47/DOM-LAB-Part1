# DOM-LAB-Part1
Tasks
Task 1.0
Select and cache the <main>element in a variable named mainEl.

Task 1.1
Set the background color of mainElto the value stored in the --main-bgCSS custom property.

Hint: Assign a string that uses the CSS var()function like this:
'var(--main-bg)'

Task 1.2
Set the content of mainElto <h1>SEI Rocks!</h1>.

Task 1.3
Add a class of flex-ctrto mainEl.

Hint: Element.classList API

Progress Check:

Task 2.0
Select and cache the <nav id="top-menu">element in a variable named topMenuEl.

Task 2.1
Set the height topMenuElelement to be 100%.

Task 2.2
Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.

Task 2.3
Add a class of flex-aroundto topMenuEl.

Progress Check:

Task 3.0
Copy the following data structure to the top of script.js:

// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];
Task 3.1
Iterate over the entire menuLinksarray and for each "link" object:

Create an <a>element.
On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
Set the new element's content to the value of the textproperty of the "link" object.
Append the new element to the topMenuElelement.
Congrats!
