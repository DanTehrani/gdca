import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Top from './Top';
import AboutUs from './AboutUs';
import FAQ from './FAQ';
import ToOrganizeForm from './ToOrganizeForm';
import PrivacyPolicy from './PrivacyPolicy';
import ApproachToGovernments from './ApproachToGovernments';

const theme = {
  textColor: '#007850',
  fontFamily: 'Noto Sans CJK JP',
  yellow: '#FFE664',
  red: '#C80032'
}

function App () {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Top />
          </Route>
          <Route path='/about-us'>
            <AboutUs />
          </Route>
          <Route path='/faq'>
            <FAQ />
          </Route>
          <Route path='/to-organize-form'>
            <ToOrganizeForm />
          </Route>
          <Route path='/privacy-policy'>
            <PrivacyPolicy />
          </Route>
          <Route path='/approach-to-governments'>
            <ApproachToGovernments />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
