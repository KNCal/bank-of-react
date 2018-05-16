import React, {Component} from 'react';

class Credits extends Component {
  render() {
    return (
        <div>
          Credits: {this.props.credit}
        </div>
    );
  }
}

export default Credits;