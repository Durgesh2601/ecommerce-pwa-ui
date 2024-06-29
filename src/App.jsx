import Footer from './components/Footer/Footer';
import NavigationMenu from './components/NavigationMenu/NavigationMenu';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationMenu />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
