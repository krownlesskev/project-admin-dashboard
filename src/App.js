import './app.styles.scss';
import Drawer from './components/drawer/Drawer';
import Main from './components/main/Main';

function App() {
  return (
    <div className='app-container'>
      <Drawer />
      <Main />
    </div>
  );
}

export default App;
