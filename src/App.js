import React from 'react';
import './App.css';
import FilterRemover from './FilterRemove';
import Input from './Components/Input';
import Table from './Components/Table';
import StarWarsProvider from './Context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <Table />
      <Input />
      <FilterRemover />
    </StarWarsProvider>
  );
}

export default App;
