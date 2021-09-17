import "./DescriptionInput.scss";

const DescriptionInput = ({ id, type, label, value, setChange }) => {
  return (
    <>
      <div className="input-desc">
        <textarea
          id={id}
          type={type}
          value={value}
          onChange={(e) => setChange(e.target.value)}
        />
      </div>
    </>
  );
};

export default DescriptionInput;
