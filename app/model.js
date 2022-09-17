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
var designersContent = `<div class="hero">
<h1>our featured designers this month</h1>
</div>
<div class="designer-feature">
<div class="designer-image">
  <img src="images/BlackBridalGownDesigners.jpg" alt="" />
</div>
<div class="designer-info">
  <h3>Jane Doe</h3>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
    iusto quo assumenda ipsa consectetur magni sunt excepturi
    reiciendis, suscipit tempora, maxime, asperiores unde harum
    distinctio ratione temporibus? Repellendus, sit labore.
  </p>
</div>
</div>
<div class="designer-feature">
<div class="designer-image-tall">
  <img src="images/Galia-Lahav.jpeg" alt="" />
</div>
<div class="designer-info">
  <h3>Stella Smith</h3>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
    iusto quo assumenda ipsa consectetur magni sunt excepturi
    reiciendis, suscipit tempora, maxime, asperiores unde harum
    distinctio ratione temporibus? Repellendus, sit labore.
  </p>
</div>
</div>
<div class="designer-feature">
<div class="designer-image-wide">
  <img src="images/israeli-designer.jpg" alt="" />
</div>
<div class="designer-info">
  <h3>Mary Lamb</h3>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
    iusto quo assumenda ipsa consectetur magni sunt excepturi
    reiciendis, suscipit tempora, maxime, asperiores unde harum
    distinctio ratione temporibus? Repellendus, sit labore.
  </p>
</div>
</div>
<div class="designer-feature">
<div class="designer-image-tall">
  <img src="images/mwl-riley.jpg" alt="" />
</div>
<div class="designer-info">
  <h3>Brita Filten</h3>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
    iusto quo assumenda ipsa consectetur magni sunt excepturi
    reiciendis, suscipit tempora, maxime, asperiores unde harum
    distinctio ratione temporibus? Repellendus, sit labore.
  </p>
</div>
</div>`;
var visitContent = `<div class="hero">
<h1>schedule an appointment with us</h1>
</div>

<div class="appointment-scheduler">
<h3>fill out this form and we'll be in contact soon</h3>
<div class="name">
  <input type="text" placeholder="first name" />
  <input type="text" placeholder="last name" />
</div>
<input type="tel" name="phone" placeholder="phone number" />
<input type="text" placeholder="home zip code" />

<div class="wedding-info">
  <h3>tell us a bit about your special day</h3>
  <input type="date" placeholder="wedding date" />
  <input type="text" placeholder="wedding zip code" />
  <div class="name">
    <input type="text" placeholder="partner's first name" />
    <input type="text" placeholder="partner's last name" />
  </div>
</div>

<div class="dress-choices">
  <h3>let us know if you have any preferences for dresses already</h3>
  <textarea
    name=""
    id=""
    cols="30"
    rows="10"
    placeholder="wedding dress preferences"
  ></textarea>

  <h3>let us know what size range to get ready for you</h3>
  <select>
    <option>0-6</option>
    <option>8-14</option>
    <option>16-20</option>
    <option>22+</option>
  </select>
</div>

<div class="guests">
  <h3>you may bring up to three guests with you to your appointment</h3>
  <div class="name">
    <input type="text" placeholder="first name" />
    <input type="text" placeholder="last name" />
  </div>
  <div class="name">
    <input type="text" placeholder="first name" />
    <input type="text" placeholder="last name" />
  </div>
  <div class="name">
    <input type="text" placeholder="first name" />
    <input type="text" placeholder="last name" />
  </div>
</div>

<button id="appointment">Submit your information</button>
</div>`;
var appointmentContent = `<div class="hero">
<h1>your information is submitted!</h1>
</div>
<div class="confirm">
<h3>
  we're so excited to help you find the dress of your dreams. we'll be
  in contact very soon to schedule your appointment. look out for a call
  from us!
</h3>
</div>`;
export function setCurrentPageContent(pageId) {
  let contentName = pageId + "Content";
  $("#app").html(eval(contentName));
}

export function getLastName(lastName) {
  console.log(lastName);
}

//export {getName, getLastName};
