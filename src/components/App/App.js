import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import Home from 'pages/Home';
import Tranding from 'pages/Tranding';
import Library from 'pages/Library';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Tranding />} />
        <Route path="library" element={<Library />} />
      </Route>
    </Routes>
  );
};

export default App;
