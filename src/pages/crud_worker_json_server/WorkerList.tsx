import React, { useEffect, useMemo } from "react";
import { Table } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { useNavigate } from "react-router-dom";
import WorkerTable from "./components/WorkerTable";
import { WorkerModel } from "../../redux/models/workerModel";
import { deleteOneWorker, getAllWorker, getSingleWorker } from "../../redux/actions/workerAction";
// import UserTable from "./components/UserTable";
// import { UserModel } from "../../redux/models/userModel";

const WorkerList: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { allWorker } = useAppSelector((state) => state.worker);

  // console.log("allWorker=>", allWorker);

  useMemo(() => {
    dispatch(getAllWorker());
  }, []);

  const viewBtnClick = (vid: string | number) => {
   navigate(`/workerdetails/${vid}`);
    dispatch(getSingleWorker({ vId: vid }));
  };

  const delClick = (dData: WorkerModel) => {
    if (window.confirm("Do you want to Delete?")) {
      console.log("dData=>", dData);
      dispatch(deleteOneWorker({ delId: dData.id }));
    }

    dispatch(getAllWorker());
  };

  const editClick = (edData: WorkerModel) => {
    // console.log("edData=>", edData);
    navigate(`/workeredit/${edData.id}`, {
      state: { workerDatas: edData },
    });
  };

  return (
    <div className="container mt-4">
      <button
        className="btn btn-primary"
        onClick={() => navigate(`/workeradd`)}
      >
        Add
      </button>
      {getAllWorker.length === 0 ? (
        <h3>No data found!</h3>
      ) : (
        <WorkerTable
        allWorker={allWorker}
        viewBtnClick={viewBtnClick}
          delClick={delClick}
          editClick={editClick}
        />
      )}
    </div>
  );
};

export default WorkerList;
