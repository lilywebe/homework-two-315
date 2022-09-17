//This is my model and it handles all the service calls
var homeContent = `      <div class="home-hero">
<h1>The Ultimate Bride</h1>
<h3>One stop shop for all your bridal needs</h3>
</div>
<div class="home-intro">
<h2>who is the ultimate bride?</h2>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nulla
  voluptatum architecto doloremque incidunt quaerat recusandae esse
  suscipit aliquid nam expedita doloribus et asperiores adipisci odit
  atque, amet alias accusantium similique nihil autem perferendis
  reiciendis minus. Cupiditate earum adipisci esse non architecto quas
  labore perspiciatis tempore ducimus a, perferendis atque.
</p>
</div>
<div class="products">
<div class="list">
  <h3>we carry these products</h3>
  <li>product one</li>
  <li>product two</li>
  <li>product three</li>
  <li>product four</li>
</div>
<div class="products-image">
  <img src="images/home-products.jpg" alt="" />
</div>
</div>
<div class="home-visit">
<div class="visit-img">
  <img src="images/home-visit.jpg" alt="" />
</div>
<div class="visit-text">
  <h3>come see us in person or call to schedule an appointment</h3>
  <p>address: 123 Main Street</p>
  <p>Indianapolis, IN 46217</p>
  <p>phone: 317-555-5555</p>
</div>
</div>`;
var aboutContent = "<p>hi</p>";
var designersContent = `<p>sup</p>`;
var visitContent = `<p>howdy</p>`;
export function setCurrentPageContent(pageId) {
  let contentName = pageId + "Content";
  $("#app").html(eval(contentName));
}

export function getLastName(lastName) {
  console.log(lastName);
}

//export {getName, getLastName};
