import { css } from 'lit-element';

export default css`

    .pokedex {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .evolution-list {
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        align-items: center;
    }
    
    .container-card{
        display: flex;
        flex-wrap: wrap;
    }


    button {
        margin-top: 20px;
        font-weight: 800;
        padding: 10px 20px;
        background-color: #ffcb05;
        font-size: 20px; 
        color: #5c330a ;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    button:hover {
        background-color: #2a75bb;
        color: white;
    }


`