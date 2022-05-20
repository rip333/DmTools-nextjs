import type { NextPage } from 'next'
import Header from '../components/Header';
import Gandalf from '../components/Gandalf/index';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Gandalf />
    </div>
  );
}

export default Home
