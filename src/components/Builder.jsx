import { useEffect, useState } from "react";

const Builder = ({ sentData }) => {
  const [label, setLabel] = useState("");
  const [id, setId] = useState("");
  const [selectType, setSelectType] = useState("");
  const [isRequire, setIsRequire] = useState(false);
  const [inputOption, setInputOption] = useState([{}]);
  //   const [options, setOptions] = useState([])
  const [dataJson, setDataJson] = useState([]);

  useEffect(() => {
    sentData(dataJson);
  }, [dataJson]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const convertedData = Object.values(inputOption);
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
    setInputOption([{}]);
  };

  const handleAddInput = (e) => {
    e.preventDefault();
    setInputOption([...inputOption, {}]);
  };
  // const handleDeleteInput = (index) => {
  //   const newArray = [...inputOption];
  //   newArray.splice(index, 1);
  //   setInputOption(newArray);
  // };

  const handleChange = (event, index) => {
    let { name, value } = event.target;
    let onChangeValue = [...inputOption];
    onChangeValue[index][name] = value;
    setInputOption(onChangeValue);
  };

  // const isFormValid = () => {
  //   return label && id && selectType && inputOption
  // }

  return (
    <>
      <button
        type="button"
        className="btn btn-primary mt-3"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        style={{ position: "fixed", top: "0", right: "46%" }}
      >
        Add New Fields
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
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
                    onChange={(e) => setLabel(e.target.value)}
                  />
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
                    onChange={(e) => setId(e.target.value)}
                  />
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
                    onChange={(e) => setSelectType(e.target.value)}
                    required
                  >
                    <option value="">Select any type</option>
                    <option value="text">Text</option>
                    <option value="checkbox">Checkbox</option>
                    <option value="radio">Radio</option>
                    <option value="select">Select</option>
                    <option value="textaria">Text Aria</option>
                    <option value="heading">H2</option>
                    <option value="paragraph">P</option>
                    <option value="button">Button</option>
                  </select>
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
                          {/* {inputOption.length > 1 && (
                            <button
                              className="btn btn-danger mt-3 me-3"
                              onClick={() => handleDeleteInput(i)}
                            >
                              Delete
                            </button>
                          )} */}
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
                  <label className="form-check-label">Is Require</label>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={handleSubmit}
                  disabled={
                    label === "" ||
                    selectType === "" ||
                    id === "" ||
                    inputOption === null
                  }
                >
                  Add Fields
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Builder;
