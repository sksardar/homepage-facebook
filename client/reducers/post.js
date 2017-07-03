function posts(state = [], action) {
    console.log('Post reducer =====================');
    console.log('posts state=====', state);
    console.log('posts action=====', action);
    switch (action.type) {
        case 'INCREMENT_LIKES':
            break;
    }
    return state;
}
export default posts;
