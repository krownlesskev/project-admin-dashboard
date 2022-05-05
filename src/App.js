import './app.styles.scss';
import Content from './components/content/Content';
import Drawer from './components/drawer/Drawer';

function App() {
  return (
    <div className='app-container'>
      <Drawer />
      <Content />
    </div>
  );
}

export default App;
