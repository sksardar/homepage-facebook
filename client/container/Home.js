import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actoionCreators from '../actions';

const Home = React.createClass({
    render() {
        console.log('Home children', this.props.children);
        console.log('Home props', this.props);
        return (
            <div>
                <h1>
                    <Link to="/">Reduxstagram</Link>
                </h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        );
    }
});
function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    };
}
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(actoionCreators, dispatch);
// }
//const App = connect(mapStateToProps, mapDispatchToProps)(Main);
export default connect(mapStateToProps)(Home);
