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
var aboutContent = ` <div class="hero">
<h1>what makes the ultimate bride special?</h1>
</div>
<div class="our-owner">
<div class="owner-name">
  <h3>Our Founder and CEO: Jane Smith</h3>
</div>
<div class="owner-img">
  <img src="images/owner.png" alt="" />
</div>
<div class="owner-bio">
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
    voluptas id molestias cumque neque adipisci sequi atque magni non,
    iusto vitae illum corporis enim fugit molestiae facere accusantium
    suscipit beatae earum consequatur aspernatur ab provident ipsum!
    Aperiam blanditiis corrupti recusandae rem quae, porro quia alias
    necessitatibus maxime saepe numquam exercitationem neque possimus
    placeat fuga, commodi veritatis incidunt est quo. Magni esse quidem
    tenetur necessitatibus cum consectetur, inventore ut eos, quod
    voluptatum beatae exercitationem, laborum eveniet assumenda mollitia
    porro cumque adipisci omnis asperiores minima! Non a recusandae in.
    Repudiandae porro, aperiam, eos voluptates deleniti, commodi rem
    omnis officiis eum pariatur quos.
  </p>
</div>
</div>
<div class="our-testimonials">
<h3 id="our-customers">our customers</h3>
<div class="testimonials">
  <div class="card">
    <p>
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
      nostrum repellendus suscipit aspernatur quas, dolores sunt eaque
      fugiat omnis quae molestiae quod eos unde aut commodi perferendis
      deserunt, quia neque. Lorem ipsum dolor sit amet."
    </p>
    <h3>-Alyssa, 2020 bride</h3>
  </div>
  <div class="card">
    <p>
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
      nostrum repellendus suscipit aspernatur quas, dolores sunt eaque
      fugiat omnis quae molestiae quod eos unde aut commodi perferendis
      deserunt, quia neque Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Debitis, quae!"
    </p>
    <h3>-Sarah, 2015 bride</h3>
  </div>
  <div class="card">
    <p>
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
      nostrum repellendus suscipit aspernatur quas, dolores sunt eaque
      fugiat omnis quae molestiae quod eos unde aut commodi perferendis
      deserunt, quia neque."
    </p>
    <h3>-Ebony, 2021 bride</h3>
  </div>
</div>
</div>`;
var designersContent = ``;
var visitContent = `<p>howdy</p>`;
export function setCurrentPageContent(pageId) {
  let contentName = pageId + "Content";
  $("#app").html(eval(contentName));
}

export function getLastName(lastName) {
  console.log(lastName);
}

//export {getName, getLastName};
