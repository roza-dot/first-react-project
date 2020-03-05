import React from 'react';
import './App.css';
import MyNewComponent from './components/MyNewComponent'
import Person from './person/person'
import NewComponent from './components/StatefulComponent'

function App() {
  return (
    <div className="App">
      <MyNewComponent someText={"Hello World"} />
      <Person lastName="Doe" firstName="Jane" age="90" hairColor= "black" />
      <Person lastName="Smith" firstName="John" age="80" hairColor= "black" />
      <Person lastName="Fillmore" firstName="Millard" age="90" hairColor= "brown" />
      <Person lastName="Smith" firstName="Maria" age="90" hairColor= "brown" />
      
    </div>
  );
}

export default App;
