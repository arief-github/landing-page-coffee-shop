import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Contact");
    }

    async getHtml() {
        return `
              <section class="home-page">
                <div class="left">
                  <h1 style="font-size: 55px;">
                    Let’s Get In Touch !
                  </h1>

                  <form action="">
                    <label for="name">Name :</label>
                    <input type="text" name="name" placeholder="Write your name here">

                    <br><br>

                    <label for="email">Email :</label>
                    <input name="email" type="email" placeholder="Write your Email here">

                    <br><br>

                    <label for="message">Message :</label>
                    <br><br>
                    <textarea name="message" id="" cols="30" rows="10"></textarea>

                    <br><br>
                    <button>Submit</button>

                  </form>
                </div>
                <div class="right">
                  <img style="height: 450px;" src="./static/images/contact/contact.svg" alt="">
                </div>
              </section>     
   `;
    }
}