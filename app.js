import { LitElement, html, css } from 'lit';
import PokemonDataManager from './src/components/DataManagers/pokemons-dm.js';
import './src/components/UI/pokemons-cards.js';
import './src/components/UI/pokemons-evolutions-cards.js';
import './src/components/UI/pokemons-modal.js';
import './src/components/UI/pokemon-form-info.js';

import styles from './app-styles.js'



class PokedexApp extends LitElement {

  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      pokemons: { type: Array },
      selectedPokemon: { type: Object },
      editingEvolution: { type: Object},
      isOpen: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.pokemons = [];
    this.selectedPokemon = null;
    this.dataManager = new PokemonDataManager();
    this.editingEvolution = null;
    this.isOpen = false;
  }

  async connectedCallback() {
    super.connectedCallback();
    this.pokemons = await this.dataManager.fetchPokemonData();
    this.addEventListener('edit-info', this.handleEditEvolution);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('edit-info', this.handleEditEvolution);
  }

  render() {
    return html`
      <div class="pokedex">
        ${this.selectedPokemon ? html`
          <div class="evolution-list">
            <div class="container-card">
                ${this.selectedPokemon.evolutions.map(evolution => html`
                  ${evolution ? html`
                    ${console.log(evolution)}
                    <evolution-card
                      .evolution="${evolution}"
                    ></evolution-card>
                  ` : html`
                    <evolution-card
                      .evolution="${evolution}"
                    ></evolution-card> `}
                  
                `)}       
            </div>
            <button @click="${this.handleBackButton}">Volver</button>
          </div>
        ` : html`
          ${this.pokemons.map(pokemon => html`
            <pokemon-card
              .pokemon="${pokemon}"
              @pokemon-selected="${this.handlePokemonSelected}"
            ></pokemon-card>
          `)}
        `}
        ${this.editingEvolution ? html`
          <form-pokemon
            .pokemon="${this.editingEvolution}"  
          ></form-pokemon>
          <modal-component"
            .isOpen="${this.isOpen}"
          ></modal-component>
        ` : html``}
      </div>
    `;
  }

  handlePokemonSelected(event) {
    this.selectedPokemon = event.detail.pokemon;
  }

  handleBackButton() {
    this.selectedPokemon = null;
    this.editingEvolution = null;
  }

  handleEditEvolution(event) {
    const evolution = event.detail.evolution;
    this.editingEvolution = evolution;
  }

  handleSaveEvolution(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.querySelector('#edit-name').value;
    const type = form.querySelector('#edit-type').value;
    const image = form.querySelector('#edit-image').value;

    console.log('Evolution data updated:', { name, type, image });

    form.reset();
    this.editingEvolution = null;
  }

  handleCancelEdit() {
    this.editingEvolution = null;
  }

  
}
customElements.define('pokedex-app', PokedexApp);
