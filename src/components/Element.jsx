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

  const handleCheckboxChange = (id, isChecked) => {
    setFormData({
      ...formData,
      [id]: {
        ...formData[id],
        isChecked: isChecked,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // let hasErrors = false;
    // const newFormErrors = {};
    console.log(field);

    // field.forEach((field) => {
    //   if (field.isRequire && !formData[field.id]) {
    //     newFormErrors[field.id] = "This field is required.";
    //     hasErrors = true;
    //   }
    // });

    // setFormErrors(newFormErrors);

    // if (!hasErrors) {
    //   // Handle form submission, e.g., display an alert or send data to the server
    //   console.log(JSON.stringify(formData, null, 2));
    // }
  };

  const handleReset = () => {
    setFormData({});
    setFormErrors({});
  };
  // console.log(field);
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
                <div style={{ color: "red" }}>{formErrors[field?.id]}</div>
              </div>
            )}
            {field?.type === "radio" && (
              <>
                <label className="form-label">{field?.label}</label>
                {field?.options?.map((val, index) => (
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
                <div style={{ color: "red" }}>{formErrors[field?.id]}</div>
              </>
            )}
            {field?.type === "select" && (
              <>
                <label className="form-label">{field?.label}</label>
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
                <div style={{ color: "red" }}>{formErrors[field?.id]}</div>
              </>
            )}
            {field?.type === "checkbox" && (
              <div className="form-check mb-3">
                <label className="form-label">{field?.label}</label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={formData[field?.id]?.isChecked || false}
                  onChange={(e) =>
                    handleCheckboxChange(field?.id, e.target.checked)
                  }
                  id={field?.id}
                />
                <label className="form-check-label" for="flexCheckDefault">
                  {field?.label}
                </label>
                <div style={{ color: "red" }}>{formErrors[field?.id]}</div>
              </div>
            )}
            {field?.type === "textaria" && (
              <div className="mb-3">
                <label className="exampleFormControlTextarea1">
                  {field?.label}
                </label>
                <textarea
                  class="form-control"
                  id={field?.id}
                  rows="3"
                  placeholder={`Enter ${field.label}`}
                ></textarea>
                <div style={{ color: "red" }}>{formErrors[field?.id]}</div>
              </div>
            )}
            {field?.type === "heading" && (
              <div className="form-check mb-3">
                <h2 className="form-label" id={field?.id}>
                  {field?.label}
                </h2>
                <div style={{ color: "red" }}>{formErrors[field?.id]}</div>
              </div>
            )}
            {field?.type === "paragraph" && (
              <div className="form-check mb-3">
                <p className="form-label" id={field?.id}>
                  {field?.label}
                </p>
                <div style={{ color: "red" }}>{formErrors[field?.id]}</div>
              </div>
            )}
            {field?.type === "button" && (
              <div className="form-check mb-3">
                <button
                  type={field?.type}
                  class="btn btn-primary"
                  id={field?.id}
                >
                  {field?.label}
                </button>
                <div style={{ color: "red" }}>{formErrors[field?.id]}</div>
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
