import "./TitleInput.scss";

const TitleInput = ({ id, type, label, value, setChange }) => {
  return (
    <>
      <div className="input-title">
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => setChange(e.target.value)}
        />
      </div>
    </>
  );
};

export default TitleInput;
