import React, {Component} from 'react';

class Item extends Component {
    render() {
        return (
            <div>
                <p>{this.props.item.volumeInfo.title}</p>
                <p>{this.props.item.volumeInfo.authors}</p>
                <img src={this.props.item.volumeInfo.imageLinks.smallThumbnail} />
                <p>{this.props.item.volumeInfo.description}</p>

                </ div>
        );
    }
}

export default Item;