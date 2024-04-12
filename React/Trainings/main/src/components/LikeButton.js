import React, { Component } from 'react';

class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likeCount: this.props.initialLikeNumber,
        };
    }

    incrementLike = () => {
        this.setState({ likeCount: this.state.likeCount + 1 });
    };

    render() {
        return (
            <div>
                <button onClick={this.incrementLike}>❤️ {this.state.likeCount}</button>
            </div>
        );
    }
}

export default LikeButton;
