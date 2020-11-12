import "./Main.css";

const Main = (props) => {
  let arr = [...props.usersArr];
  const isArrEmpty = props.isArrEmpty;

  return isArrEmpty ? (
    <div className="mainWrapper">
      <h2>there is nothing to show, click ADD button</h2>
    </div>
  ) : (
    <div className="mainUserWrapper">
      <User userArr={arr} />
    </div>
  );
};

const User = (props) => {
  let arr = props.userArr.map((el) => {
    return (
      <div key={el.login.uuid} className="eachUser">
        <img src={el.picture.large} alt="" />
        <div className="eachUserNames">
          {el.name.first + " " + el.name.last}
        </div>
      </div>
    );
  });

  return <>{arr}</>;
};

export default Main;
