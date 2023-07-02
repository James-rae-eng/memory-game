const Card = (props) => {

  return (
    <div className="card">
      <img className="motorbike" src={props.image} alt="motorbike"/>
    </div>
  );
}

export default Card;