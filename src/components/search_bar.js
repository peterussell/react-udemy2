import React, { Component } from 'react';

/* Note: the above line is the same as 'const Component = React.Component' */

// SearchBar is a 'class-based component'
// Functional components just return JSX, they don't have state, internal
// functions etc.

/* Every class that extends React.Component requires a render() method */
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  // The syntax for defining methods on a class is different than normal
  // eg: render() {...} instead of 'render: function() {...}')
  render() {
    // The onChange contents are equivalent to:
    // (e) => console.log(e.target.value)
    // or...
    // ={onInputChange}
    // ... with a function defined:
    // onInputChange(e) { console.log(e.target.value); }

    // This is a *controlled component*. The value is set by React, rather than
    // directly by the user input, ie. the state controls what's displayed
    // in the component.
    return (
      <div>
        <input
          value={this.state.term}
          onChange={e => this.setState({ term: e.target.value })} />
        Value of the input: {this.state.term}
      </div>
    );
  }

  // This is unused, but left here to see how it can be defined and
  // used as an event handler, rather than an inline one like we have
  // above.
  onInputChange(e) {
    console.log(e.target.value);
  }
}

/* We may have a lot of code in this file. To make sure we only export
   the piece we want, we export it explicitly. */
export default SearchBar;
