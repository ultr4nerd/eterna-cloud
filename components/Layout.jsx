import Head from 'next/head';

const Layout = props => (
  <>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css" />
      <title>Eterna Digital</title>
    </Head>
    <style jsx global>{`
      html, body {
        font-family: 'Nunito', sans-serif;
      }  
    `}</style>
    <section className="section">
      <main className="container">
        <h1 className="title">Eterna Digital</h1>
        <p className="subtitle">Clasificador de Imagenes</p>
        {props.children}
      </main>
    </section>
  </>
);

export default Layout;