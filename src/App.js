import './App.css';
import ContentContainer from './EditorContainer';

function App() {
  return (
    <div className="App" style={{maxWidth: "100%", overflowX: "hidden"}}>
      <ContentContainer />
    </div>
  );
}

export default App;
