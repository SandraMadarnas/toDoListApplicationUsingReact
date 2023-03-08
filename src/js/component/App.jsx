import React, { useEffect, useState } from "react";
import ItemsList from "./ItemsList.jsx";


function App() {
    const [inputText, setInputText] = useState("");  //String vacío que contiene el texto del campo de entrada de la app.
    const [items, setItems] = useState([]);          //Array vacío que contendrá los elementos de la lista de tareas.
    const [erase, setErase] = useState();

    useEffect(() => {
        if (erase) {
            let newArray = items.filter((element) => element.id != erase);
            setItems(newArray);
        }
    }, [erase]);


    const updateText = (e) => {
        setInputText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();                         //Compruebo si inputText está vacío o no y si no lo está, 
        if (inputText.trim() == "") return;
        const newItem = {
            id: Math.random(),
            text: `${inputText}`
        }

        setItems([...items, newItem]);
        setInputText("");
        // console.log(items);
    };
 

    return (
        <div className="app">
            <header className="app-header">
                <h1>To Do List</h1>
                <form onSubmit={handleSubmit}>
                    <input className="app-input" onChange={updateText} value={inputText} placeholder="I Need To..." />
                    <button className="app-submit" title="Add task"><i className="fas fa-plus"></i></button>
                </form>
                <ItemsList listaDeTareas={items} onDelete={setErase} />
                <footer className="app-foot">
                    <p>Made with ❤️ by Dani & Sandra </p>
                </footer>
            </header>
        </div>
    );
}



export default App;