import React from 'react';
import Row from './Row';
import './App.css';
import requests from './requests';

//a082dac20168021cd77111be28f02352
function App() {
  return (
    <div className="app">
      <h1>This is a Netflix Clone</h1>
      <Row 
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row 
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
      />
      <Row 
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
      />
    </div>
  );
}

export default App;
