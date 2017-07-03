import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actoionCreators from '../actions';

const Comments = React.createClass({
    renderComment(comment, i) {
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button
                        className="remove-comment"
                        onClick={this.props.removeComment.bind(
                            null,
                            this.props.params.postId,
                            1
                        )}
                    >
                        &times;
                    </button>
                </p>
            </div>
        );
    },
    handleSubmit(e) {
        e.preventDefault();
        console.log('comment form reference', this.refs);
        const { postId } = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        debugger;
        console.log(postId, author, comment);
        console.log(
            'DispatchDispatchDispatchDispatchDispatchDispatchDispatchDispatchDispatchDispatchDispatchDispatchDispatchDispatch'
        );
        console.log(this.props.dispatch);
        //this.props.dispatch();
        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();
    },
    render() {
        console.log('comments ', this);
        return (
            <div className="comment" onSubmit={this.handleSubmit}>
                {this.props.postComments.map(this.renderComment)}
                <form ref="commentForm" className="comment-form">
                    <input type="text" ref="author" placeholder="author" />
                    <input type="text" ref="comment" placeholder="comment" />
                    <input type="submit" hidden />
                </form>
            </div>
        );
    }
});
// function mapDispatchToProps(dispatch) {
//     // return bindActionCreators(actoionCreators.removeComment, dispatch);
//     console.log(
//         'pPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP'
//     );
//     console.log('dispatch', dispatch);
//     return {
//         removeComment: (a, b, c) =>
//             dispatch(actoionCreators.removeComment(a, b, c)),
//         addComment: (a, b, c) => actoionCreators.addComment(a, b, c)
//     };
// }

function mapDispatchToProps(dispatch) {
    return {
        removeComment: bindActionCreators(
            actoionCreators.removeComment,
            dispatch
        ),
        addComment: bindActionCreators(actoionCreators.addComment, dispatch)
    };
}
export default connect(null, mapDispatchToProps)(Comments);
