import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should product some HTML.
const App = () => {
  /* The 'fat-arrow' syntax (() => {...}) is almost identical to
     function() {...}, except that the value of 'this' inside
     the function scope has a different value. */
  return <div>Hi!</div>;
}

// Take this component's generated HTML and put it on the page (in
// the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));
