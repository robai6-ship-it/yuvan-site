/* applies a saved dark theme before the page paints (light is the default) */
try{if(localStorage.getItem("cg-theme")==="dark")document.documentElement.setAttribute("data-theme","dark")}catch(e){}
