import React, { Component } from 'react';

const Logger = (WrappedComponent) => {
  return class extends Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} is mounted`);
    }

    componentDidUpdate() {
      console.log(`Component ${WrappedComponent.name} is updated`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name} is unmounted`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

class SimpleComponent extends Component {
  render() {
    return <div>This is a simple component.</div>;
  }
}

const ComponentWithLogger = Logger(SimpleComponent);


class App extends Component {
  render() {
    return (
      <div>
        <h1>Higher-Order Component Example</h1>
        <ComponentWithLogger />
      </div>
    );
  }
}

export default App;
