import { React } from 'react'
import Header from './components/header';
import Banner from './components/banner';
import Aplications from './components/Aplications';
import Wallet from './components/Wallet';
import Trade from './components/Trade';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header />
      <Banner />
      <Aplications />
      <Wallet />
      <Trade />
      <Footer />
    </>
  )
}

export default App
