import Link from 'next/link';
import {  } from 'next/router';
import Layout from '../components/Layout';

const Index = () => (
  <Layout>
    <nav className="buttons">
      <Link href="/sender">
        <a role="button" className="button is-dark">Enviar Imagen</a>
      </Link>
      <Link href="/list">
        <a role="button" className="button is-black">Ver Imagenes</a>
      </Link>
    </nav>
  </Layout>
);

export default Index;