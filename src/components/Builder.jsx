import { useEffect, useState } from "react";
import Element from "./Element";

const Builder = ({ fieldData }) => {
  const [label, setLabel] = useState("");
  const [id, setId] = useState("");
  const [selectType, setSelectType] = useState("");
  const [isRequire, setIsRequire] = useState(false);
  const [inputOption, setInputOption] = useState([{ options: "" }]);
  const [dataJson, setDataJson] = useState([]);

  const [labelError, setLabelError] = useState("");
  const [idError, setIdError] = useState("");
  const [selectTypeError, setSelectTypeError] = useState("");
  const [inputOptionErrors, setInputOptionErrors] = useState([""]);
  const [isOpenDrawer, setOpenDrawer] = useState(false);

  let isValid;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpenDrawer(false)

    setLabelError("");
    setIdError("");
    setSelectTypeError("");
    setInputOptionErrors([""]);

    isValid = true;

    if (label.trim() === "") {
      setLabelError("Label is required");
      isValid = false;
    }

    if (id.trim() === "") {
      setIdError("Enter ID is required");
      isValid = false;
    }

    if (selectType === "") {
      setSelectTypeError("Select Type is required");
      isValid = false;
    }

    const inputOptionErrorsArray = inputOption.map((input) => {
      if (selectType === "radio" || selectType === "select") {
        return "Options are required";
      }
      return "";
    });

    setInputOptionErrors(inputOptionErrorsArray);

    if (isValid) {
      setDataJson([
        ...dataJson,
        {
          label: label,
          id: id,
          type: selectType,
          options: inputOption,
          isRequire: isRequire,
        },
      ]);

      setLabel("");
      setId("");
      setSelectType("");
      setIsRequire(false);
      setInputOption([{ options: "" }]);
      setOpenDrawer(true);
    }
  };

  const handleClose = () => {
    setLabel("");
    setId("");
    setSelectType("");
    setIsRequire(false);
    setInputOption([{ options: "" }]);

    setLabelError("");
    setIdError("");
    setSelectTypeError("");
    setInputOptionErrors([""]);
  };

  const handleAddInput = (e) => {
    e.preventDefault();
    setInputOption([...inputOption, { options: "" }]);
  };

  const handleChange = (event, index) => {
    let { name, value } = event.target;
    let onChangeValue = [...inputOption];
    onChangeValue[index][name] = value;
    setInputOption(onChangeValue);
  };

  const handleLabel = (e) => {
    setLabel(e.target.value);
    setLabelError("");
  };
  const handleSelect = (e) => {
    setSelectType(e.target.value);
    setSelectTypeError("");
  };
  const handleId = (e) => {
    setId(e.target.value);
    setIdError("");
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary mt-3"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Add New Fields
      </button>

      <div
        className='modal fade'
        tabIndex="-1"
        style={{ display: isOpenDrawer ? 'block' : 'none' }}
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        aria-modal = { isOpenDrawer ? 'true' : 'false' }
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Add Fields
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="labelFields" className="form-label">
                    Label Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="labelFields"
                    value={label}
                    onChange={(e) => handleLabel(e)}
                  />
                  <div style={{ color: "red" }}>{labelError}</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="labelFields" className="form-label">
                    Enter ID
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="labelFields"
                    value={id}
                    onChange={(e) => handleId(e)}
                  />
                  <div style={{ color: "red" }}>{idError}</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="labelFields" className="form-label">
                    Select Type
                  </label>
                  <select
                    className="form-select"
                    name="options"
                    aria-label="Default select example"
                    value={selectType}
                    onChange={(e) => handleSelect(e)}
                    required
                  >
                    <option value="">Select any type</option>
                    <option value="text">Text</option>
                    <option value="checkbox">Checkbox</option>
                    <option value="radio">Radio</option>
                    <option value="select">Select</option>
                    <option value="textarea">Textarea</option>
                    <option value="heading">H2</option>
                    <option value="paragraph">P</option>
                    <option value="button">Button</option>
                  </select>
                  <div style={{ color: "red" }}>{selectTypeError}</div>
                </div>
                {inputOption.map((d, i) => {
                  return (
                    <div key={i}>
                      {(selectType === "radio" || selectType === "select") && (
                        <div className="mb-3">
                          <label htmlFor="labelFields" className="form-label">
                            Options
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="inputOption"
                            id="labelFields"
                            value={inputOption.options}
                            onChange={(event) => handleChange(event, i)}
                            required
                          />
                          <div style={{ color: "red" }}>
                            {inputOptionErrors[i]}
                          </div>
                          {i === inputOption.length - 1 && (
                            <button
                              className="btn btn-success mt-3"
                              onClick={handleAddInput}
                            >
                              add
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    checked={isRequire}
                    onChange={(e) => setIsRequire(e.target.checked)}
                  />
                  <label className="form-check-label">Is Require ?</label>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={handleClose}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss={isOpenDrawer ? "modal" : ""}
                  onClick={handleSubmit}
                >
                  Add Fields
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Element
        field={dataJson}
        setDataJson={setDataJson}
        fieldData={fieldData}
      />
    </>
  );
};

export default Builder;