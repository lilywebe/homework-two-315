//This is my model and it handles all the service calls
var homeContent=`<p>hey</p>`;
var aboutContent = '<p>hi</p>';
var productsContent = `<p>sup</p>`;
var contactContent = `<p>howdy</p>`;
export function setCurrentPageContent(pageId){
    let contentName = pageId + 'Content';
    $('#app').html(eval(contentName));
}

export function getLastName(lastName){
    console.log(lastName);
}

//export {getName, getLastName};