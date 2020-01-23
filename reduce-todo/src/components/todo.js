import React, { useState } from 'react';

const Todo = ({task, dispatch}) => {
    const [editTaskTitle, setEditTaskTitle] = useState(task.taskTitle)

    const editSubmitHandler = (e) => {
        e.preventDefault();
        task.taskTitle = editTaskTitle;
        task.isEditing = false;
        dispatch({ type: "UPDATE_TODO", payload: task});
    };

    const editChangeHandler = (e) => {
        setEditTaskTitle(e.target.value)
    };
  
    return(
    <div>
        {task.isEditing ? (
            <form onSubmit={editSubmitHandler}>
                <input 
                type='text'
                name='taskEdit'
                value={editTaskTitle}
                onChange={editChangeHandler}
                />           
            </form>
        ) : (
            <div className={task.completed ? "completed" : ""}>
                <p>{task.taskTitle}</p>
                <button onClick={() => dispatch({
                    type: 'TOGGLE_COMPLETE',
                    payload: task.id
                    })}>
                    Completed
                </button>
                <button onClick={() => dispatch({
                    type: 'DELETE_TASK', 
                    payload: task.id
                    })}>
                    Delete
                </button>
                <button onClick={() => dispatch({
                    type: 'EDIT_TASK',
                    payload: task.id
                    })}>
                    Edit
                </button>
        </div>
        )}
    </div>
    )
};

export default Todo;