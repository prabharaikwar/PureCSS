import './App.css';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import Container from './components/container/Container';

function App() {
  return (
    <div className="app-Container">
      <Header/>
      <Dashboard/>
      <Container/>
    </div>
  );
}

export default App;
