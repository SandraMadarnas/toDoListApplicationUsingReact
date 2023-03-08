import React from "react";

const ItemsList = ({ listaDeTareas, onDelete }) => {
    return (
        <div className="app-li-wrapper d-block">
            {listaDeTareas.length === 0 ? (
                <p>No pending tasks</p>
            ) : (
                listaDeTareas.map((task, i) => (
                    <div className="app-li mx-auto" key={i}>
                        {task.text}
                        <button id={task.id} className="app-li-delete" onClick={() => onDelete(task.id)}>
                            &#10006;
                        </button>
                    </div>
                ))
            )}
        </div>
    )
}

export default ItemsList;