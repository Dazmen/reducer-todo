export const todoState = []

export const todoReducer = (state, action) => {
    switch(action.type){
        case 'NEW_TODO':
            return [...state, 
                {
                    taskTitle: action.payload,
                    id: Date.now(),
                    completed: false,
                    isEditing: false
                }];
        case 'TOGGLE_COMPLETE':
            return state.map(task => {
                if(task.id === action.payload){
                    return {...task, completed: !task.completed}
                } else {
                    return task
                }
            });
        case 'DELETE_TASK':
            return state.filter(task => task.id !== action.payload);
        case 'EDIT_TASK':
            return state.map(task => {
                if(task.id === action.payload){
                    return {...task, isEditing: true}
                } else {
                    return task
                }
            });
        case 'UPDATE_TODO':
            return state.map(task => {
                if(task.id === action.payload.id){
                    return action.payload
                } else {
                    return task
                }
            });
        default: return state;
}
}