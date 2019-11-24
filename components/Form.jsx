import { useState, useRef } from 'react';
import { useToasts } from 'react-toast-notifications';
import Link from 'next/link';

import { uploadImage } from '../utils/firebase';

const Form = () => {
  const imageRef = useRef(null);
  const { addToast } = useToasts()
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const getImageInfo = event => {
    const image = event.target.files[0];
    setImage(image);
    setImageUrl(image.name);
  };

  const sendImageToCloud = async event => {
    event.preventDefault();
    try {
      const snapshot = await uploadImage(image);
      if (snapshot.state === 'success') {
        setImage(null);
        setImageUrl(null);
        imageRef.current.value = null;
        addToast('La imagen ha sido enviada con éxito.', {
          appearance: 'success'
        });
      } else {
        addToast('No se ha podido subir tu imagen.', {
          appearance: 'error'
        });
      }
    } catch {
      addToast(
        'Ha ocurrido un error y no se ha podido subir tu imagen', {
        appearance: 'error'
      });
    }

  };

  return (
    <form onSubmit={sendImageToCloud} >
      <div className={imageUrl ? "file has-name" : "file"}>
        <label className="file-label">
          <input
            className="file-input" type="file" name="image"
            accept="image/*" required={true}
            ref={imageRef} onChange={getImageInfo}
          />
          <span className="file-cta">
            <span className="file-label">
              Selecciona una imagen…
            </span>
          </span>
          {imageUrl ?
            <span className="file-name">
              {imageUrl}
            </span> : null
          }

        </label>
      </div>
      <p className="help is-muted">Envía una imagen a la vez :)</p>
      <nav className="buttons" style={{
        marginTop: 25
      }}>
        <Link href="/">
          <a role="button" className="button is-dark">
            Volver al inicio
          </a>
        </Link>
        <button type="submit" className="button is-black">
          Enviar
        </button>
      </nav>
    </form>
  );
};

export default Form;