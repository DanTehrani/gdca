/* eslint-disable import/first */

import React, { Suspense, lazy } from 'react';
const GDADemand = lazy(() => import('./Articles/GDADemand'))
const GDAParticipantInfo = lazy(() => import('./Articles/GDAParticipantInfo'))
const GDAOrganizeInfo = lazy(() => import('./Articles/GDAOrganizeInfo'))
const GDAOrganizeInfoSchool = lazy(() => import('./Articles/GDAOrganizeInfoSchool'))
const GDAOrganizeInfoSchool2 = lazy(() => import('./Articles/GDAOrganizeInfoSchool2'))
const GDAApplicationForm = lazy(() => import('./GDAApplicationForm'));
const GDACrisisManagement = lazy(() => import('./Articles/GDACrisisManagement'))
const GDCAProfileFrame = lazy(() => import('./GDCAProfileFrame'))
const GDCAJoin = lazy(() => import('./GDCAJoin'))
const GDCAJoinOnline = lazy(() => import('./GDCAJoinOnline'))
const GDCAEndorsements = lazy(() => import('./GDCAEndorsements'))
const GDCASharePack = lazy(() => import('./GDCASharePack'))
const GDCARecap = lazy(() => import('./GDCARecap'))

import { ThemeProvider } from 'styled-components'
import './App.css'
import '../i18n'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import ScrollTop from '../components/ScrollTop'

const theme = {
  textColor: '#007850',
  fontFamily: 'Noto Sans JP Regular, sans-serif',
  fontFamilyLight: 'Noto Sans JP Light, sans-serif',
  fontFamilyBold: 'Noto Sans JP Bold, sans-serif',
  green: '#007850',
  yellow: '#FFE664',
  red: '#C80032',
  blue: '#0032c8',
  beige: '#FAF5C8',
  ocher: '#c8a050',
  gdaPrimaryColor: '#007850',
  gdaSecondaryColor: '#FFE564',
  black: '#3C3C3C',
  lime: '#96F564'
}

function App () {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Suspense fallback={<></>}>
          <ScrollTop>
            <Switch>
              <Route path='/' exact>
                <GDCARecap />
              </Route>
              <Route path='/gdca-recap'>
                <GDCARecap />
              </Route>
              <Route path='/gda-application-form'>
                <GDAApplicationForm />
              </Route>
              <Route path='/gdca-demand'>
                <GDADemand />
              </Route>
              <Route path='/gdca-participants-info'>
                <GDAParticipantInfo />
              </Route>
              <Route path='/gdca-action-guide'>
                <GDAOrganizeInfo />
              </Route>
              <Route path='/gdca-action-guide-school'>
                <GDAOrganizeInfoSchool />
              </Route>
              <Route path='/gdca-action-guide-university'>
                <GDAOrganizeInfoSchool2 />
              </Route>
              <Route path='/gdca-crisis-management'>
                <GDACrisisManagement />
              </Route>
              <Route path='/gdca-join'>
                <GDCAJoin />
              </Route>
              <Route path='/gdca-profile-frame'>
                <GDCAProfileFrame />
              </Route>
              <Route path='/gdca-join-online'>
                <GDCAJoinOnline />
              </Route>  
              <Route path='/gdca-endorsements'>
                <GDCAEndorsements />
              </Route>  
              <Route path='/gdca-sharepack'>
                <GDCASharePack />
              </Route>  
            </Switch>
          </ScrollTop>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
