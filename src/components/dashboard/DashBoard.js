import { useState } from "react";
import Navbar from "../navbar/Navbar";
import SidenavBar from "../sidenavbar/SidenavBar";
import Notification from "../controls/Notification";
import ConfirmDialog from "../controls/ConfirmDialog";
import Modal from "../sidenavbar/Modal";
import axios from "axios";

function DashBoard() {
  const [modal, setmodal] = useState(false);
  const [setmodalInput] = useState("");
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });
  let userId = localStorage.getItem("userId");
  const data = {
    userId: `${userId}`,
    workspaceName: "",
    workspaceDescription: "",
  };

  const [values, setValues] = useState(data);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
      values: data,
    });
    console.log("this is values", values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/addworkspace", values)
      .then((response) => {
        console.log("Status: ", response.status);
        console.log("this is axios", response.data);
        setNotify({
          isOpen: true,
          message: `Workspace Added Successfully`,
          type: "success",
        });
      })
      .catch((error) => {
        console.error("Something went wrong!", error);
      });
  };

  return (
    <div>
      {/* NavBar imported */}
      <Navbar />
      {/* Header imported */}
      <SidenavBar />
      {/* Header imported */}

      {/* Modal for new Button */}
      <Modal show={modal}>
        <div className="card col-sm-6 " id="modal">
          <div className="card-body">
            <h5 className="h5">Create New Workspace</h5>
            <form onSubmit={handleSubmit}>
              <div className="form-group offset-1">
                <label htmlFor="workspaceName">Enter The Workspace Name</label>
                <input
                  type="text"
                  name="workspaceName"
                  value={values.workspaceName}
                  onChange={handleInputChange}
                  className="form-control"
                  id="project-name"
                />
              </div>
              <div className="form-group offset-1">
                <label htmlFor="workspaceDescription">
                  Enter the Workspace Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  name="workspaceDescription"
                  value={values.workspaceDescription}
                  onChange={handleInputChange}
                />
              </div>

              <span>
                <button
                  type="submit"
                  className="btn btn-primary button"
                  // onClick={(e) => {
                  //   setmodalInput(e.target.value);
                  // }}
                >
                  Create
                </button>

                <button
                  type="button"
                  className="btn btn-primary offset-1 button"
                  onClick={() => {
                    setmodal(false);
                  }}
                >
                  Close
                </button>
              </span>
            </form>
            <div>
              <Notification notify={notify} setNotify={setNotify} />
              <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
              />
            </div>
          </div>
        </div>
      </Modal>

      {/* DashBoard_Body */}
      <div className="background  ">
        <div className="col-md-4 cards ">
          <h3 className="h3">Create New Workspace</h3>
          <button
            className="btn mt-3 col-md-3"
            id="newbtn"
            onClick={() => {
              setmodal(true);
            }}
          >
            New <i className="fas fa-chevron-down"></i>{" "}
          </button>
        </div>

        <div className=" cards mr-5 mt-5  pb-5 ">
          <div className="row">
            <div className="col-md-3 ">
              <div className="card p-1  shadow">
                <div className="row m-0">
                  <div className="col-md-4 p-3 ">
                    <img
                      alt="Data Inject"
                      id="image_datainject"
                      src="https://icon-library.com/images/data-ingestion-icon/data-ingestion-icon-25.jpg"
                      className="imgFluid cardimage"
                    />
                  </div>
                  <div className="col-md-8 ">
                    <div className=" cardTitle font-weight-bold ">
                      Data Inject
                    </div>
                    <div className=" cardSUbtitle">
                      Use the data tool to import data from different datasource
                      via DPS{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-1 shadow">
                <div className="row m-0">
                  <div className="col-md-4 p-2">
                    <img
                      alt=" Data Explore"
                      src="https://cdn3.iconfinder.com/data/icons/databases-3/512/search_data-512.png"
                      className="imgFluid cardimage"
                    />
                  </div>

                  <div className="col-md-8 p-2">
                    <div className=" cardTitle font-weight-bold head_DS_card">
                      Data Explore
                    </div>
                    <div className=" cardSUbtitle ">
                      Learn how to navigate and interact with your data
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card shadow ">
                <div className="row m-0">
                  <div className="col-md-4 p-3  justify-content-center align-items-center">
                    <img
                      alt="Data Analyze"
                      src="https://www.itrsgroup.com/sites/default/files/styles/paragraph_media/public/2020-06/market-data-monitoring-icon.png?itok=jyioTxtb"
                      className="imgFluid cardimage"
                    />
                  </div>
                  <div className="col-md-8 p-2 ">
                    <div className="cardTitle font-weight-bold ">
                      Data Analyze
                    </div>
                    <div className="cardSUbtitle ">
                      Learn how to use SQL or Spark to get insights from your
                      data
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card  shadow">
                <div className="row m-0">
                  <div className="col-md-4 p-3  ">
                    <img
                      alt=" Data Visualize"
                      src="https://ubiq.co/static/images/marketing/tour/advanced_charts.png"
                      className="imgFluid cardimage"
                    />
                  </div>
                  <div className="col-md-8 p-2">
                    <div className=" cardTitle font-weight-bold head_DS_card ">
                      Data Visualize
                    </div>
                    <div className=" cardSUbtitle ">
                      Build Data intercation with mutliple BI tools.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12 secondHalf">
          <div className="row">
            <div className="col-md-5 cards  ">
              <h5 className="font-weight-bold mt-3 ">Recent Workspace's</h5>

              <div className="row d-flex" id="head_workSpace">
                <div className=" col-md-6">
                  <p className="font-weight-bold mt-3  ml-5">Workspace Name</p>
                </div>
                <div className="col-md-6 head_lastmodify ">
                  <p className="font-weight-bold mt-3 ">Last Modified On</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ml-3 ">
              <h5 className="font-weight-bold mt-3 ">Resources & FAQ's</h5>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
