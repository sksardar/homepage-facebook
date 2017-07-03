function comments(state = [], action) {
    if (typeof action.postId !== 'undefined') {
        return {
            ...state,
            [action.postId]: postComments(state[action.postId], action)
        };
    }
    return state;
}
function postComments(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [
                ...state,
                {
                    user: action.author,
                    text: action.comment
                }
            ];

        case 'REMOVE_COMMENT':
            return [
                ...state.splice(0, action.i),
                ...state.splice(action.i + 1)
            ];
            return state;
        default:
            return state;
    }
    return state;
}
export default comments;
