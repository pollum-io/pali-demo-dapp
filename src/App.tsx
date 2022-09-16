import React, { useEffect } from 'react';

import { Body } from './components/Body';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

declare global {
  interface Window {
    pali: Readonly<any>;
    ethereum: Readonly<any>;
    provider: Readonly<any>;
  }
}

const App = () => (
  <div>
    <div className="bg-bkg-6 text-white md:px-8 xl:px-40 2xl:px-56 h-max">
      <Header />
      <Body />
    </div>

    <Footer />
  </div>
)

export default App;
