import React, { Suspense, useContext, useState } from 'react'
import Counter from './components/Counter'
import './styles/index.scss'
import { Link, Route, Routes } from 'react-router-dom'
import {AboutPageAsync} from './pages/AboutPage/AboutPage.async'
import {MainPageAsync} from './pages/MainPage/MainPage.async'
import Loading from './components/Loading'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames'



export const App = () => {
  const {theme, toggleTheme} = useTheme()
  const bool = true
  return (
    <div>
        <div className={classNames('app', {}, [theme])}>
          <button onClick={toggleTheme}>Theme</button>
          <Link to={'/'}>Main</Link>
          <Link to={'/about'}>About</Link>
          
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path={'/about'} element={<AboutPageAsync/>}> </Route>
                <Route path={'/'} element={<MainPageAsync/>}> </Route>
              </ Routes>
            </ Suspense>
          </div>
        <Counter />
    </div>
  )
}
