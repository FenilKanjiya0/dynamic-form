import { useState } from "react";

const Element = ({ field }) => {
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
    setFormErrors({
      ...formErrors,
      [id]: value ? "" : "This field is required.",
    });
  };

  const handleSubmit = () => {
    let hasErrors = false;
    const newFormErrors = {};

    field.forEach((field) => {
      if (field.required && !formData[field.id]) {
        newFormErrors[field.id] = "This field is required.";
        hasErrors = true;
      }
    });

    setFormErrors(newFormErrors);

    if (!hasErrors) {
      // Handle form submission, e.g., display an alert or send data to the server
      alert(JSON.stringify(formData, null, 2));
    }
  };

  const handleReset = () => {
    setFormData({});
    setFormErrors({});
  };
  console.log(field);
  return (
    <>
      <form>
        {field?.map((field, index) => (
          <div key={index}>
            {field?.type === "text" && (
              <div className="mb-3">
                <label className="form-label">{field?.label}</label>
                <input
                  type={field?.type}
                  className="form-control"
                  id={field?.id}
                  value={formData[field?.id] || ""}
                  onChange={handleInputChange}
                  aria-describedby="emailHelp"
                  placeholder={`Enter ${field?.label}`}
                />
              </div>
            )}
            {field?.type === "radio" &&
              field?.options?.map((val, index) => (
                <div className="form-check mb-3" key={index}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id={field?.id}
                    value={val?.inputOption}
                    checked={formData[field?.id] === val?.inputOption}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    {val?.inputOption}
                  </label>
                </div>
              ))}
            {field?.type === "select" && (
              <select
                className="form-select mb-3"
                aria-label="Default select example"
                id={field?.id}
                value={formData[field?.id] || ""}
                onChange={handleInputChange}
              >
                <option selected>select an options</option>
                {field?.options?.map((val, index) => (
                  <option value={val?.inputOption} key={index}>
                    {val?.inputOption}
                  </option>
                ))}
              </select>
            )}
            {field?.type === "checkbox" && (
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={formData[field?.id] || false}
                  onChange={handleInputChange}
                  id={field?.id}
                />
                <label className="form-check-label" for="flexCheckDefault">
                  {field?.label}
                </label>
              </div>
            )}
          </div>
        ))}
        <div style={{ color: "red" }}>{formErrors[field?.id]}</div>

        {field.length >= 1 && (
          <>
            <button className="btn btn-primary me-3" onClick={handleSubmit}>
              Submit
            </button>
            <button className="btn btn-warning" onClick={handleReset}>
              Reset
            </button>
          </>
        )}
      </form>
    </>
  );
};

export default Element;
