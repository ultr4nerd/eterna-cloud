const Image = props => {
  return (
    <div className="column is-3">
      <style jsx>{`
        .tags {
          justify-content: center;
        }
        .column.is-3 {
          display: flex;
          align-items: center;
        }
      `}</style>
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={props.url} alt="Object" />
          </figure>
        </div>
        <div className="card-content has-text-centered">
          <p className="heading">Objetos:</p>
          <div className="tags">
            {props.objects.map((object, index) => (
              <span key={index} className="tag is-primary is-light">{object}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Image;