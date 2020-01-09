import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

import PDF from './curriculum.pdf'

const ContactPage = () => {
    return (
       <div>
           <Layout>
               <Head title="Contacto"/>
                <h1>Contáctame</h1>
                <p>La mejor manera de contactarme es vía  <a href = "https://twitter.com/FerC1217" rel="noopener noreferrer" target="_blank" > @FerC1217</a> Twitter.</p>
                <p>O también puedes buscarme en <a href = "https://www.linkedin.com/in/fernando-cutire-044357182/" rel="noopener noreferrer" target="_blank" > Linkedin</a> .</p>
                <a href = {PDF}  rel="noopener noreferrer" target="_blank"> Descargar Curriculum</a>

           </Layout>
       </div>
    )
}

export default ContactPage