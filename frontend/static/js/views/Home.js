import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
        return `
                  <section class="home-page">
                    <div class="left">
                      <h1 style="font-size: 55px;">Enjoy Freshly Brewed
                        Coffee Everytime !
                      </h1>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum facilis architecto sunt blanditiis ad
                        asperiores quasi recusandae nihil necessitatibus a qui unde quos amet dolorum, reprehenderit enim odio ullam
                        minima ut! Nesciunt, hic esse possimus deleniti maxime sint? Quia, laboriosam!</p>
                    </div>
                    <div class="right">
                      <img style="height: 450px;" src="./static/images/home/img-1.svg" alt="">
                    </div>
                  </section>
                  <section class="testimonials">
                    <h1 class="testimonial-title">testimonials</h1>

                    <div class="profile">
                      <div class="profile-1">
                        <img style="height: 220px;" src="./static/images/home/person-1.png" alt="">
                        <h3>Miya</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure, exercitationem ipsum porro quibusdam
                          maiores pariatur culpa architecto? Dignissimos, quibusdam.</p>
                      </div>
                      <div class="profile-2">
                        <img style="height: 220px;" src="./static/images/home/person-2.png" alt="">
                        <h3>Ruma</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure, exercitationem ipsum porro quibusdam
                          maiores pariatur culpa architecto? Dignissimos, quibusdam.</p>
                      </div>
                      <div class="profile-3">
                        <img style="height: 220px;" src="./static/images/home/person-3.png" alt="">
                        <h3>Sarah</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure, exercitationem ipsum porro quibusdam
                          maiores pariatur culpa architecto? Dignissimos, quibusdam.</p>
                      </div>
                    </div>
                  </section>
                 
        `;
    }
}