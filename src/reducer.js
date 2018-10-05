const initState = {
    theme: 'red',
    name: 'liubeijing'
};
export default function(state = initState, action) {
    switch (action.type) {
        case 'CHANGE_THEME':
        state.theme = action.theme;
        return state;
        default:
        return state;
    }
};