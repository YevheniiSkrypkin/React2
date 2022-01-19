// import logo from './logo.svg';
import './App.css';
import Card from './components/Card'

function App() {
  return (<>
    <Card title="This is a title without text render" />
    <Card text="This is a text without title render" />
    <Card title="This is title + text render" text="This is second text + title render" />
  </>

  );
}

export default App;
