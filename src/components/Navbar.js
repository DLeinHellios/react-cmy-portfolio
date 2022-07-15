import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className='Nav'>
                <button className={this.props.page === 0 ? "navButtonActive-0" : "navButton"} onClick={() => this.props.setPage(0)}>About Me</button>
                <button className={this.props.page === 1 ? "navButtonActive-1" : "navButton"} onClick={() => this.props.setPage(1)}>Projects</button>
                <button className={this.props.page === 2 ? "navButtonActive-2" : "navButton"} onClick={() => this.props.setPage(2)}>Contact</button>     
            </div>
          )
    }
}

export default Navbar;
