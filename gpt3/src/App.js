import React from "react";
import './app.css'
import {Footer, Blog, Features, Header, Possibility, WhatGPT3} from './containers';
import {Cta, NavBar, Brand} from './components';

const App=()=>{
    return <div className="App">
        <div className="gradient__bg">
            <NavBar />
            <Header />

        </div>
        <Brand>
        </Brand>
        <WhatGPT3>
        </WhatGPT3>
        <Features></Features>
        <Possibility></Possibility>
        <Cta></Cta>
        <Blog></Blog>
        <Footer></Footer>
      
    </div>
}

export default App;
