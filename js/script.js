var Counter = React.createClass({

  getInitialState: function () {

    return {
      counter: 0
    };
  },

  increment: function () {
    this.setState({
      counter: this.state.counter + 1
    });
  },

  decrement: function () {
    this.setState({
      counter: this.state.counter - 1
    });
  },

  componentWillMount: function () {
    console.log('ComponentWillMount jest wywoływana zaraz przed wykonaniem metody render.')
  },

  componentDidMount() {
    console.log('ComponentDidMount jest wywoływana, jak tylko metoda render zostanie wywołana.')
  },

  componentWillReceiveProps() {
    console.log('ComponentWillReceiveProps zostanie wywołana, gdy komponent otrzyma nowe właściwości i nie jest to faza pierwszego renderowania (montowanie komponentu).')
  },

  shouldComponentUpdate() {
    return true;
    console.log('ShouldComponentUpdate jest wywoływana tuż przed wywołaniem metody render i pozwala sprawdzić, czy faktycznie trzeba jeszcze raz przerysować komponent.')
  },

  componentWillUpdate() {
    console.log('ComponentWillUpdate zostanie wywołana jeśli metoda shouldComponentUpdate zwróci wartość true.')
  },

  componentDidUpdate() {
    console.log('ComponentDidUpdate w niej możemy wykonać manipulacje DOM.')
  },

  componentWillUnmount() {
    console.log('ComponentWillUnmount metoda, w której możemy wykonywać wszystkie rzeczy związane z odpinaniem timerów czy nasłuchiwania zdarzeń na elementach DOM.')
  },

  render: function () {
    return (
      React.createElement('div', {},
        React.createElement('div', {
            className: 'counter'
          },
          React.createElement('button', {
            className: 'btn',
            onClick: this.decrement
          }, '-'),

          React.createElement('div', {}, 'Counter: ' + this.state.counter),
          React.createElement('button', {
            className: 'btn',
            onClick: this.increment
          }, '+'),
        )
      )
    );
  }
});

var element = React.createElement('div', {},
  React.createElement(Counter, {}),
  React.createElement(Counter, {}),
  React.createElement(Counter, {}),
  React.createElement(Counter, {})
);

ReactDOM.render(element, document.getElementById('app'));
