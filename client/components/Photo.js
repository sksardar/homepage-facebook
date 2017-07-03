import React from 'react';
import { Link } from 'react-router';
import CSSTransitionsGroup from 'react-addons-css-transition-group';
const Photo = React.createClass({
    render() {
        const { post, index, comments } = this.props;

        return (
            <figure className="grid-figure" onClick={this.props.increment}>
                <div className="grid-figure">
                    <Link to={`/view/${post.code}`}>
                        <img
                            src={post.display_src}
                            alt={post.captions}
                            className="gris-photo"
                        />
                    </Link>
                    <CSSTransitionsGroup
                        transitionName="like"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}
                    >
                        <span key={post.likes} className="likes-heart">
                            {post.likes}
                        </span>
                    </CSSTransitionsGroup>
                </div>
                <figcaption>
                    <p>{post.caption}</p>
                    <div className="control-buttons">
                        <button className="likes">&hearts;{post.likes}</button>
                        <Link className="button" to={`/view/${post.code}`}>
                            <span className="comment-count">
                                <span className="speech-bubble" />
                                {comments[post.code]
                                    ? comments[post.code].length
                                    : 0}

                            </span>
                        </Link>
                    </div>
                </figcaption>

            </figure>
        );
    }
});
export default Photo;
