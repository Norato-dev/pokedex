import { LitElement, css, html } from 'lit';
import styles from './pokemons-ui-styles.js';

class PokemonCard extends LitElement {

    static get styles() {
        return [styles];
    }
  
    static get properties() {
        return {
            pokemon: { type: Object }
        };
    }

    constructor() {
        super();
        this.pokemon = null;
    }
  
    render() {
      return html`
        <div class="card" @click="${this.handleCardClick}">
          <img src="${this.pokemon.image}" alt="Imagén de ${this.pokemon.name}">
          <h3>${this.pokemon.name}</h3>
          <p>Type: ${this.pokemon.type}</p>
        </div>
      `;
    }
  
    handleCardClick() {
      this.dispatchEvent(new CustomEvent('pokemon-selected', {
        detail: { pokemon: this.pokemon },
        bubbles: true,
        composed: true
      }));
    }
  }
  customElements.define('pokemon-card', PokemonCard);
  