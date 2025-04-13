import React from 'react';
import Gallery from './components/Gallery'; // імпортуємо компонент Gallery

function App() {
  return (
    <div className="App">
      <h1>Галерея</h1>
      <Gallery /> {/* Вставляємо компонент галереї */}
    </div>
  );
}

export default App;
