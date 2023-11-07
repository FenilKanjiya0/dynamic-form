import { useState, useEffect } from "react";

const Element = ({ field, fieldData, setDataJson }) => {
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});

  // const renderField = [...fields];
  // const [field, setField] = useState(fields);

  // console.log(renderField);
  // console.log(field);

  // useEffect(() => {
  //   if (fields !== field) {
  //     setField(fields);
  //   }
  // }, [fields]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fieldData(field);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setDataJson([]);
    // setField([]);
  };

  return (
    <>
      <div className="container my-5">
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
                    aria-describedby="emailHelp"
                    placeholder={`Enter ${field?.label}`}
                    readOnly
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
                        readOnly
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                      >
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
                    readOnly
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
                    id={field?.id}
                    readOnly
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    {field?.label}
                  </label>
                  <div style={{ color: "red" }}>{formErrors[field?.id]}</div>
                </div>
              )}
              {field?.type === "textarea" && (
                <div className="mb-3">
                  <label className="exampleFormControlTextarea1">
                    {field?.label}
                  </label>
                  <textarea
                    class="form-control"
                    id={field?.id}
                    rows="3"
                    placeholder={`Enter ${field.label}`}
                    readOnly
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
                Create Form
              </button>
              <button className="btn btn-warning" onClick={handleReset}>
                Reset
              </button>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default Element;
