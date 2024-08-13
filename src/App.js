import './assets/styles/source.scss';
import { Fragment } from 'react';
import Header from './components/Header/Header';
import Brands from './components/Brands/Brands';

function App() {
  return (
    <Fragment>
      <Header />
      <Brands />
    </Fragment>
  );
}

export default App;
