import {FC} from 'react';
import {Route, Routes} from 'react-router-dom';
//routes
import {routes} from './core/routes';
//pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App: FC = () => {
  return (
    <Routes>
      <Route path={routes.main} element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
