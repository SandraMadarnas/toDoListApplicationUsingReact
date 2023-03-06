import React, { useState } from "react";


function App() {
    const [inputText, setInputText] = useState("");  //String vacío que contiene el texto del campo de entrada de la app.
    const [items, setItems] = useState([]);          //Array vacío que contendrá los elementos de la lista de tareas.

    const updateText = (e) => {
        setInputText(e.target.value);                //Actualiza el estado de inpuntText.
    }

    const handleSubmit = (e) => {
        e.preventDefault();                         //Compruebo si inputText está vacío o no y si no lo está, 
        if (inputText.trim() == "") return;         //agrego el valor de inputText al array items usando el método setItems y
        setItems([...items, inputText]);            //si es una cadena vacía no añado nada.
        setInputText("");
        console.log(items);
    };

    const handleDelete = (index) => {
        const newArr = [...items];                  //Creo un nuevo array q es una copia del array original. 
        newArr.splice(index, 1);                    //Luego, elimino el elemento correspondiente utilizando el método splice.
        setItems(newArr);                           //Actualizo el estado de items con el nuevo array.
    };

    return (
        <div className="app">
            <header className="app-header">
                <h1>To Do List</h1>
                <form onSubmit={handleSubmit}>
                    <input className="app-input" onChange={updateText} value={inputText} placeholder="I Need To..." />
                    <button className="app-submit" title="Add task"><i className="fas fa-plus"></i></button>
                </form>
                <div className="app-li-wrapper">
                    {items.length === 0 ? (
                        <p>No pending tasks</p>
                    ) : (
                        <TodoList todoItems={items} onDelete={handleDelete} />
                    )}
                </div>
                <footer className="app-foot">
                    <p>Made with ❤️ by Sandra </p>
                </footer>
            </header>
        </div>
    );
}

const TodoList = (props) => {
    const todoItems = props.todoItems.map((todoItem, index) => {  //index se va
        return (
            <TodoItem
                content={todoItem}
                key={index}   //Vamos a usar id no index  key={todoItems.id}
                onDelete={props.onDelete}
            />
        );
    });

    return <ul>{todoItems}</ul>;
};

const TodoItem = (props) => {
    return (
        <div className="app-li">
            {props.content}
            <button className="app-li-delete" onClick={() => props.onDelete(props.key)}>
                &#10006;
            </button>
        </div>
    );
};


export default App;