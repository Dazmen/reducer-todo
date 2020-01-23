import React, { useReducer } from 'react';
// import { todoState, todoReducer } from '../reducers/reducer';
import Todo from './todo';

const TodoList = ({state, dispatch}) => {
    // const [state, dispatch] = useReducer(todoReducer, todoState);

    const renderTaskList = () => {
        if(state.length < 1){
            return <h2>All Tasks Completed!</h2>
            } else {
                state.map(task => {
                    return <Todo 
                        task={task} 
                        dispatch={dispatch}
                        key={task.id}/>
                })
            }
        };
    
    return(
        <div>
            {renderTaskList()}
            
            {state.map(task => {
                    return <Todo task={task} dispatch={dispatch} />
                })}
        </div>
    )
};

export default TodoList;