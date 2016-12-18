import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyA1zjtE8DuqwjysYaNvcfIGS_x-Mk9VItk';

/* State is a JavaScript object.
   Each React Component has its own state.
   Any time the state is changed, the render() function is called.
   Before we use state, we have to initialize it in the
     Component's constructor(props) function. */

// Create a new component. This component should product some HTML.
const App = () => {
  /* The 'fat-arrow' syntax (() => {...}) is almost identical to
     function() {...}, except that the value of 'this' inside
     the function scope has a different value. */
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it on the page (in
// the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));
