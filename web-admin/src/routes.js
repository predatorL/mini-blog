import React from 'react';
import {
    Route,
  } from "react-router-dom";
// pages
import Page_Channel from './pages/channel';
import Page_Config from './pages/config';
import Page_Post from './pages/post';
import Page_Home from './pages/home';


export default () => {
    return [
        [Page_Channel, '/channel'], 
        [Page_Config, '/config'], 
        [Page_Post, '/post'],
        [Page_Home, {path: '/', exact: true}]
    ].map(([View, pathParam], i) => {
        let _prop = typeof pathParam === 'string' ? {
            path: pathParam
        } : pathParam;
        return (
            <Route key={i} {..._prop}>
                <View />
            </Route>
        )
    })
}