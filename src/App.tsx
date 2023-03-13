import React from 'react';
import Layout from '~/layout'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import loadable from '~/components/loadable'

const Register = loadable(() => import(/* webpackChunkName: 'default' */ '@/register'))
const Error404 = loadable(() => import(/* webpackChunkName: '404' */ '@/error'))
const Home = loadable(() => import(/* webpackChunkName: 'Home' */ '@/Home'))

const App = () => (
    <Layout><Home />
        <Routes>
            <Route path="/" Component={Register} />
            <Route path="/404" Component={Error404} />
            <Route path="home" Component={Home} />
            <Route path="register" Component={Register} />
        </Routes>
    </Layout>
) 

export default App