import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Shop");
    }

    async getHtml() {
        return `
              <section class="home-page">
                <div class="left">
                  <h1 style="font-size: 55px;">Popular Items
                  </h1>
                  <ul style="font-size: 20px">
                    <li>Coffee

                      <ul>
                        <li>Ice Coffee</li>
                        <li>Americano</li>
                        <li>Cappucino</li>
                      </ul>
                    </li>

                    <li>Cheese Cake</li>
                    <li>Cookies</li>
                  </ul>
                </div>
                <div class="right">
                  <img style="height: 450px;" src="./static/images/shop/Shop.svg" alt="">
                </div>
              </section>

              <section class="table">
                <table>
                  <caption>Menu</caption>

                  <thead>
                    <tr>
                      <th>Items</th>
                      <th>price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Hot Coffee</td>
                      <td>$5</td>
                    </tr>
                    <tr>
                      <td>Americano</td>
                      <td>$5</td>
                    </tr>
                    <tr>
                      <td>Cappucino</td>
                      <td>$5</td>
                    </tr>
                    <tr>
                      <td>Hot Tea</td>
                      <td>$5</td>
                    </tr>
                    <tr>
                      <td>Ice Latte</td>
                      <td>$5</td>
                    </tr>
                    <tr>
                      <td>Cookies</td>
                      <td>$5</td>
                    </tr>
                    <tr>
                      <td>Cheese Cake</td>
                      <td>$5</td>
                    </tr>
                  </tbody>
                  <tfoot></tfoot>
                </table>
              </section>
        `;
    }
}