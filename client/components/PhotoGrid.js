import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({
    render() {
        console.log('photo grid=====');
        console.log(this.props);
        return (
            <div className="photo-grid">
                {this.props.posts.map((post, i) =>
                    <Photo {...this.props} key={i} index={i} post={post} />
                )}

            </div>
        );
    }
});

export default PhotoGrid;
