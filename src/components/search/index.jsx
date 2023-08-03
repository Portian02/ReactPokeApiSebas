import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const Barsearch = ({ handleName, handlePokename }) => {
  return (
    <div>
      <form className="form" onSubmit={handleName}>
        <div className="container">
          <div>
            <input
              type="text"
              onChange={handlePokename}
              className="form-control"
              placeholder="Buscar..."
            />
            <div>
              <button type="submit" variant="warning" className="btn">
                <h2>🔍</h2>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Barsearch;
