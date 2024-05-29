import './Main.css';
import Layout from './components/layout/Layout';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <>
      <RecoilRoot>
        <Layout />
      </RecoilRoot>
    </>
  );
}

export default App;
