import { LitElement, css, html } from 'lit';
import styles from './pokemons-ui-styles.js';

class EvolutionCard extends LitElement {

    static get styles() {
      return [styles];
    }
  
    static get properties() {
      return {
        evolution: { type: Object }
      };
    }
  
    _handleEvolutionClick(){
        const editInfo = new CustomEvent('edit-info',{
            detail: { evolution: this.evolution },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(editInfo);
    }

    render() {
      return html`
        <div class="card" @click="${this._handleEvolutionClick}">
          <img src="${this.evolution.image}" alt="Imágen de ${this.evolution.name}">
          <p>${this.evolution.name}</p>
          <p>Type: ${this.evolution.type}</p>
        </div>
        
      `;
    }

  }
  customElements.define('evolution-card', EvolutionCard);