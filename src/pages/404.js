import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'


const NotFound = () => {
    return (
        <Layout>
            <Head title="404"/>
            <h1>Error 404: Página no encontrada</h1>
            <p><Link to="/">Volver a inicio </Link></p>
        </Layout>
    )
}

export default NotFound