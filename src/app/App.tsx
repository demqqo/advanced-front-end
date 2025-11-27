import React, { Suspense, useContext, useState } from 'react'
import './styles/index.scss'
import { Link, Route, Routes } from 'react-router-dom'
import {classNames} from 'shared/lib'
import { useTheme } from './providers'
import {AboutPage} from 'pages/AboutPage'
import {MainPage} from 'pages/MainPage'




export const App = () => {
  const {theme, toggleTheme} = useTheme()
  const bool = true
  return (
    <div>
        <div className={classNames('app', {}, [theme])}>
          <button onClick={toggleTheme}>Theme</button>
          <Link to={'/'}>Main</Link>
          <Link to={'/about'}>About</Link>
          
            <Suspense fallback={"123"}>
              <Routes>
                <Route path={'/about'} element={<AboutPage/>}> </Route>
                <Route path={'/'} element={<MainPage/>}> </Route>
              </ Routes>
            </ Suspense>
          </div>
    </div>
  )
}
