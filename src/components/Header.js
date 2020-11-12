import "./Header.css";
import loader from "../img/loader.gif";

const Header = (props) => {
  const handleClickAdd = props.clickAdd;
  const handleClickReset = props.clickReset;
  const isArrEmpty = props.isArrEmpty;
  const isFetchRunning = props.isFetchRunning;

  const btnAddUser = (
    <div className="btnWraper">
      {isFetchRunning ? (
        <div className="btnLoader">
          <img src={loader} alt="loader" />
        </div>
      ) : null}

      <button className="btn" onClick={handleClickAdd}>
        Add
      </button>
    </div>
  );

  const btnResetList = (
    <button
      className={"btn " + (isArrEmpty ? "hide" : "")}
      onClick={handleClickReset}
    >
      Reset
    </button>
  );

  return (
    <div className="wraper">
      {btnAddUser}
      {btnResetList}
    </div>
  );
};

export default Header;
