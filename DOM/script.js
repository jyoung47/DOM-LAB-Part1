// Menu data structure
var menuLinks = [
    {text: 'Canvas', href: 'https://perscholas.instructure.com/'},
    {text: 'Resources', href: 'https://www.w3schools.com/jsref/'},
    {text: 'Replit', href: 'https://replit.com/~'},
    {text: 'Zoom', href: 'https://applications.zoom.us/lti/rich/j/94994432129?oauth_consumer_key=RlNGPeekRPi7WbE9imZ7Yg&x_zm_session_id_token=eyJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsInR5cCI6IkpXVCIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJpbnRlZ3JhdGlvbiIsImlzcyI6ImludGVncmF0aW9uIiwiZXhwIjoxNjkwNzMxNTkwLCJpYXQiOjE2OTA3Mjk3OTAsImp0aSI6ImU3NjYzNGQwLTM5Y2YtNDZiZS04YjI1LTY5NWIzNGJkZmEwMiJ9.KjWDZfxVpTQJZz5WS-duC8QEIleSAMjguH7u-g4qgeo&lti_scid=5c8605cdcd8ccdca3da83712d5b900936fc19fae8095baa045f9ad9adfe79e9e'},
  ];
  
  //Select and cache the <main>element in a variable named mainEl.
  const mainEl = document.querySelector('main')
  //Set the background color of mainEl to the value stored in the --main-bgCSS custom property.
  mainEl.style.backgroundColor = 'var(--main-bg)';
  //Set the content of mainElto <h1>SEI Rocks!</h1>.
  mainEl.innerHTML = '<h1>Home page with Helpful links</h1>';
  //Add a class of flex-ctrto mainEl.
  mainEl.classList.add('flex-ctr');
  //Select and cache the <nav id="top-menu">element in a variable named topMenuEl.
  const topMenuEl = document.getElementById('top-menu')
  //Set the height topMenuElelement to be 100%.
  topMenuEl.style.height = '100%';
  //Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
  //Add a class of flex-around to topMenuEl.
  topMenuEl.classList.add('flex-around');
  
   menuLinks.forEach(link => {
            const newLink = document.createElement('a');
            newLink.setAttribute('href', link.href);
            newLink.textContent = link.text;
            topMenuEl.appendChild(newLink);
          });