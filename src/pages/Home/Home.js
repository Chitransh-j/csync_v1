import React from 'react';
import Events from './Events/Events'
import Heroimg from './Heroimg/Heroimg';

function Home() {

  return (
    <div className="App">
      <Heroimg/>
      <Events/>
    </div>
  );
}

export default Home;