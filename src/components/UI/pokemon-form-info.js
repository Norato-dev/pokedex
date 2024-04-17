import { LitElement, css, html } from 'lit';
import styles from './pokemons-form-info-styles.js';

class PokemonForm extends LitElement {

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
        <div class="edit-form">
            <h2>Editar Evolución</h2>
            <form @submit="${this.handleSaveEvolution}">
              <div class="form-group">
                <label for="edit-name">Nombre:</label>
                <input type="text" id="edit-name" .value="${this.pokemon.name}">
              </div>  
              <div class="form-group">  
                <label for="edit-type">Type:</label>
                <input type="text" id="edit-type" .value="${this.pokemon.type}">
              </div> 
              <div class="form-group">  
                <label for="edit-image">Imagen:</label>
                <input type="text" id="edit-image" .value="${this.pokemon.image}">
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
      `;
    }
  
  }
  customElements.define('form-pokemon', PokemonForm);
  