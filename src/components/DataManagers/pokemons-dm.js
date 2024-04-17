class PokemonDataManager {
    async fetchPokemonData() {
        const response = await fetch('http://localhost:3002/pokemon');
        const data = await response.json();
        return data;
    }
}

export default PokemonDataManager;

