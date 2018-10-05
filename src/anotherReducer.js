const initState = {
    age: 10
};
export default function(state = initState, action) {
    switch(action.type) {
        case 'CHANGE_AGE':
        return state;
        default:
        return state;
    }
};