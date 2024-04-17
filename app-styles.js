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

    .edit-form {
        border: 1px solid #ccc;
        max-width: 400px;
        margin: auto;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    
    .edit-form h2 {
        margin-bottom: 20px;
        text-align: center;
    }
    
    .form-group {
        margin-bottom: 20px;
        display: flex;
        align-items: center; 
    }
    
    .form-group label {
        font-weight: bold;
        margin-right: 10px;
    }
    
    .form-group input[type="text"],
    .form-group input[type="checkbox"] {
        padding: 10px;
        border-radius: 4px;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }

    .form-group input[type="checkbox"] {
        width: auto; 
        margin-right: 5px; 
        transform: translateY(2px); 
    }
    
    .button-group {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .button-group button {
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    
    .button-group button.primary {
        background-color: #007bff;
        color: #fff;
    }
    
    .button-group button.secondary {
        background-color: #6c757d;
        color: #fff;
    }

    .modal {
        display: none;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0,0.4);
    }

    .modal-content {
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
        border-radius: 5px;
    }

    .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }



`