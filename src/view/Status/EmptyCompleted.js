const EmptyCompleted = () => {
  return (
    <div className={`done todo-card`}>
      <div className="todo-card-wrapper">
        <div className="todo-card-check">
          <h4>Your haven't finished anything yet!😕</h4>
        </div>
        <p className="item-description">why don't you start now?</p>
      </div>
    </div>
  );
};

export default EmptyCompleted;
