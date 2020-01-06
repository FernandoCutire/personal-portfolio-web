import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'


const IndexPage = () => {
    return (
        <div>
           <Layout>
               <Head title="Inicio" />
               <h1>Hola.</h1>
               <h2>Soy Fernando, un desarrollador que vive en la hermosa ciudad de Panamá</h2>
               <p>¿Necesita un desarrollador? <Link to = "/contact"> Contáctame </Link></p>
           </Layout>
        </div>
    )
}

export default IndexPage