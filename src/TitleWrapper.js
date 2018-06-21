import React, { Component } from 'react';

class TitleWrapper extends Component {
  componentDidMount() {
    document.title = this.props.title;
  }
  
  render() {
    const {
      title,
      ...props
    } = this.props;

    return props.children;
  }
};

export default TitleWrapper;