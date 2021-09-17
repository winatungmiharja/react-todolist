import "./Card.scss";

export const Card = (props) => {
  return (
    <div class="card" style={props.style}>
      {props.children}
    </div>
  );
};
