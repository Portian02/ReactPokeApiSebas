import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const Barsearch = ({ handlePokename, handleName }) => {
  return (
    <div>
      <form className="form" onSubmit={handleName}>
        <div className="container">
          <div className="buscador">
            <input
              type="text"
              onChange={handlePokename}
              className="form-control"
              id="input"
              placeholder="Buscar..."
            />

            <button type="submit" variant="warning" className="btn">
              <p>🔍</p>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Barsearch;
