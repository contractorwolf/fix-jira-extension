console.log('--------------------content script started--------------');

RemoveDivById('announcement-banner');

console.log('--------------------content script ended--------------');
function RemoveDivById(divId){
    // hide login section on category pages
    const element = document.getElementById(divId);
    if (typeof(element) != undefined && element != null)
    {
        console.log(`-----------element by id exists: ${divId}-----------`);
        // remove element
        element.parentNode.removeChild(element);
    }else {
        console.log(`-----------element by id DOES NOT exist: ${divId}-----------`);
    }    
}


function HideDivById(divId){
    // hide login section on category pages
    const element = document.getElementById(divId);
    if (typeof(element) != undefined && element != null)
    {
        console.log(`-----------element exists: ${divId}-----------`);
        // hide div
        element.style.visibility = 'hidden';
    }else {
        console.log(`-----------element DOES NOT exist: ${divId}-----------`);
    }    
}
