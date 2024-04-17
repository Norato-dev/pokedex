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
    
    constructor() {
      super();
      this.evolution = null;
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
        ${this.evolution ? html`
          <div class="card" @click="${this._handleEvolutionClick}">
            <img src="${this.evolution.image}" alt="Imágen de ${this.evolution.name}">
            <p>${this.evolution.name}</p>
            <p>Type: ${this.evolution.type}</p>
          </div>
        `: html`
          <div class="card">
            <img src="/pokemons/no-evolution.webp" alt="No hay evolución">
            <p>No se hay evoluciones de este pokémon en nuestra base de datos</p>
            <p>Type: ${this.evolution.type}</p>
          </div>
        `}
        
        
      `;
    }

  }
  customElements.define('evolution-card', EvolutionCard);