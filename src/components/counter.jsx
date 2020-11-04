import React, {Component} from "react";

class Counter extends Component{
    state = {
        count: 1,
        tags: ['tag1', 'tag2', 'tag3']
    };

    styles = {
        fontSize: 10,
        fontWeight: 'bold'
    };

    renderTags(){
        if (this.state.tags.length === 0 ) return <p>There are no tags</p>
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>

    }

    render() {
        return (
            <React.Fragment>
                {this.state.tags.length === 0 && "Please crate a list"}
                {this.renderTags()}
            </React.Fragment>
        );
    }
}

export default Counter;