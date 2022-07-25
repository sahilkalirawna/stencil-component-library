import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'flip-card',
  styleUrl: 'flip-card.css',
  shadow: true,
})
export class MyComponent {
  /**
   * Card Title - Required
   */
  @Prop() cardtitle: string ='John Doe';

  /**
   * Card Description - Required
   */
  @Prop() desc: string = "Architect & Engineer";

  /**
   * Card Image source - Required
   */
  @Prop() imgSrc: string = 'https://www.w3schools.com/howto/img_avatar.png';

  render() {

    let flipCard = (
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src={this.imgSrc}
              alt={this.cardtitle}
              class='img'
            />
          </div>
          <div class="flip-card-back">
            <h1>{this.cardtitle}</h1>
            <p>{this.desc}</p>
          </div>
        </div>
      </div>
    );

    return flipCard;
  }
}
