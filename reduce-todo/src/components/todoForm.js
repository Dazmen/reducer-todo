import React, { useState } from 'react';

const TodoForm = ({state, dispatch}) => {
    const [task, setTask] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch({ type: "NEW_TODO", payload: task});
        setTask('');
        console.log(task);
    };

    const changeHandler = (e) => {
        setTask(e.target.value)
    };

    return(
        <form onSubmit={submitHandler}>
            <input 
            type='text'
            name='task'
            value={task}
            onChange={changeHandler}
            />
            <button>Add Task!</button>
        </form>
    )
};

export default TodoForm;