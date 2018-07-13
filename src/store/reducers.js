const initialState = {
    note: [
        {
            id: '27812b',
            title: 'An example note',
            details: 'This is an example of a note'
        },
        {
            id: '278992',
            title: 'Another example note',
            details: 'This is an example of a note... again'
        }
    ],
    name: 'Manny'
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [...state.notes, action.note]
            }
        case 'GET_NOTES':
            return {
                ...state
            }
        case 'REMOVE_NOTE' :
            return {
                ...state,
                notes: state.notes.filter(note => note !== action.note)
            }
        default:
            return state;
    }
}