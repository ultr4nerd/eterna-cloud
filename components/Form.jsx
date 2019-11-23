import { useState, useRef } from 'react';

import { uploadImage } from '../firebase';

const Form = () => {
  const imageRef = useRef(null);
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
      } else {
        alert('No se ha podido subir tu imagen');
      }
    } catch {
      alert('Ha ocurrido un error y no se ha podido subir tu imagen');
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
      <button type="submit" className="button is-link"
        style={{
          marginTop: 15
        }}>
        Enviar
      </button>
    </form>
  );
};

export default Form;