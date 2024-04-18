const url = "http://localhost:3002/pokemon"


export class PokemonDataManager {
    async fetchPokemonData() {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
}

export class PokemonUpdateDataManager {
    async updatePokemonData(data){

        await fetch(`${url}?name=${data.name}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            header: {
                'Content-Type': 'aplication/json'
            }
        });


    }
}
 