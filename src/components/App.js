
import React, { useState } from 'react';
import '../styles/App.css';
function App() {
  const [selectedShape, setSelectedShape] = useState('square');
  const [shapes, setShapes] = useState([]);

  const handleAddShape = () => {
    const newShape = selectedShape === 'square' ? (
      <div className="square" key={shapes.length}></div>
    ) : (
      <div className="circle" key={shapes.length}></div>
    );
    setShapes([...shapes, newShape]);
  }

  return (
    <div>
      <div id="shape-creator">
        <select value={selectedShape} onChange={e => setSelectedShape(e.target.value)}>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
        </select>
        <button onClick={handleAddShape}>Add shape</button>
      </div>
      <div id="shapes-holder">
        {shapes}
      </div>
    </div>
  );
}

export default App;
