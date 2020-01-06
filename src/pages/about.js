import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'



const AboutPage = () => {
    return (
        <div>
            <Layout>
                <Head title="Sobre Mí"/>
                <h1>Sobre mí</h1>
                <p>Actualmente me encuentro estudiando en la Universidad tecnológica de Panamá y desarrollando proyectos creativos.</p>
                <p>¿Necesitas un desarrollador? <Link to= "/contact">Contáctame</Link></p>
            </Layout>
        </div>
    )
}

export default AboutPage