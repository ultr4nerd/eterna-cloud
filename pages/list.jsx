import React, { Component } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import Image from '../components/Image';
import { getImages } from '../utils/firebase';

class List extends Component {

  state = {
    images: null
  }

  async componentDidMount() {
    const images = await getImages();
    this.setState({ images });
  }

  render() {
    let imagesComponent;
    if (!this.state.images) {
      imagesComponent = <p>Cargando...</p>;
    } else {
      imagesComponent = (
        <>
          <div className="columns is-multiline">
            {this.state.images.map(image => {
              return <Image key={image.id} objects={image.objects} url={image.url} />
            })}
          </div>
          <style jsx>{`
          .columns.is-multiline {
            margin-top: 10px
          }
        `}</style>
        </>
      );
    }
    return (
      <Layout>
        <Link href="/">
          <a role="button" className="button is-black">Volver al inicio</a>
        </Link>
        {imagesComponent}
      </Layout>
    );
  }
}

// List.getInitialProps = async function () {
//   const images = await getImages();
//   return { images };
// };

export default List;
