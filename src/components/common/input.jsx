const Input = ({ name, type, label, errors, ...rest }) => {
  return (
    <div className="form_field_container">
      <h3 className="input_label">
        <label htmlFor={name}>{label}</label>
      </h3>
      <input
        {...rest}
        id={name}
        name={name}
        type={type}
        className="input_field"
      />
      {errors[name] && <div className="input_error">{errors[name]}</div>}
    </div>
  );
};

export default Input;
