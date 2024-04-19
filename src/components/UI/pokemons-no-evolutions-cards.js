import { LitElement, css, html } from 'lit';
import styles from './pokemons-ui-styles.js';

class NoEvolutionCard extends LitElement {

    static get styles() {
      return [styles];
    }
  
    static get properties() {
      return {
        evolution: { type: Object }
      };
    }
    
    constructor() {
      super();
      this.evolution = null;
  }
  
   

    render() {
      return html`
        
          <div class="card" >
            <img src="/pokemons/no-evolution.webp" alt="Este pokémon no tiene evolución">
            <p>No evolution</p>
          </div>
      `;
    }

  }
  customElements.define('noevolution-card', NoEvolutionCard);