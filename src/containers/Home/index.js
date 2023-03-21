import React from 'react';
import Layout from '../../components/Layout/index';
import Container from 'react-bootstrap/Container';
import './index.css'
const Home = (props) => {
    return (
        <>
            <Layout>
                <div class="jumbotron m-3 text-center">
                    <h1 class="display-4">Hello, world!</h1>
                    <p class="">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>

                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    
                </div>
            </Layout>
        </>
    )
}

export default Home