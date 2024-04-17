import { LitElement, html, css } from 'lit';
import PokemonDataManager from './src/components/DataManagers/pokemons-dm.js';
import './src/components/UI/pokemons-cards.js';
import './src/components/UI/pokemons-evolutions-cards.js';
import './src/components/UI/pokemons-modal.js';
import styles from './app-styles.js'



class PokedexApp extends LitElement {

  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      pokemons: { type: Array },
      selectedPokemon: { type: Object },
      editingEvolution: { type: Object}
    };
  }

  constructor() {
    super();
    this.pokemons = [];
    this.selectedPokemon = null;
    this.dataManager = new PokemonDataManager();
    this.editingEvolution = null;
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
                <evolution-card
                  .evolution="${evolution}"
                ></evolution-card>
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
          <div class="edit-form">
            <h2>Editar Evolución</h2>
            <form @submit="${this.handleSaveEvolution}">
              <div class="form-group">
                <label for="edit-name">Nombre:</label>
                <input type="text" id="edit-name" .value="${this.editingEvolution.name}">
              </div>  
              <div class="form-group">  
                <label for="edit-type">Type:</label>
                <input type="text" id="edit-type" .value="${this.editingEvolution.type}">
              </div> 
              <div class="form-group">  
                <label for="edit-image">Imagen:</label>
                <input type="text" id="edit-image" .value="${this.editingEvolution.image}">
              </div> 
              <div class="form-group">
                <label for="is-repeated">¿Está repetido?</label>
                <input type="checkbox" id="is-repeated" name="isRepeated" @checked="${this.showModal}">
              </div>
              <div class="botton-group">
                <button type="submit" class="primary">Guardar</button>
                <button class="secondary" @click="${this.handleCancelEdit}">Cancelar</button>
              </div>  
            </form>
          </div>
          <modal-component"></modal-component>
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

  showModal(){
    const modal = this.shadowRoot.querySelector('modal-component');
    modal.removeAttribute('style');
    modal.toggleModal();
    console.log('abierto');
    return;
  }
}
customElements.define('pokedex-app', PokedexApp);
