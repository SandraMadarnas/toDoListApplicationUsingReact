import React, { useEffect, useState } from "react";


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

    // const handleDelete = (event) => {
    //     const newArray = [...items];
    //     newArray.filter((item) => {
    //         console.log(item.id != event.target.id);
    //         return item.id != Number(event.target.id);

    //     })
    //     setItems(newArray);
    //     // console.log(newArray);
    //     }

    return (
        <div className="app">
            <header className="app-header">
                <h1>To Do List</h1>
                <form onSubmit={handleSubmit}>
                    <input className="app-input" onChange={updateText} value={inputText} placeholder="I Need To..." />
                    <button className="app-submit" title="Add task"><i className="fas fa-plus"></i></button>
                </form>
                <div className="app-li-wrapper d-block">
                    {items.length === 0 ? (
                        <p>No pending tasks</p>
                    ) : (
                        items.map((task, i) => (
                            <div className="app-li mx-auto" key={i}>
                                {task.text}
                                <button id={task.id} className="app-li-delete" onClick={() => setErase(task.id)}>
                                    &#10006;
                                </button>
                            </div>
                        ))
                    )}
                </div>
                <footer className="app-foot">
                    <p>Made with ❤️ by Sandra </p>
                </footer>
            </header>
        </div>
    );
}



export default App;