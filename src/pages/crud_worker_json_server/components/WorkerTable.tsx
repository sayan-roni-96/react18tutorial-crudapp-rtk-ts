import React from "react";
import { Table } from "react-bootstrap";
import { WorkerModel } from "../../../redux/models/workerModel";

type workerTableType = {
    allWorker: WorkerModel[];
  viewBtnClick: (vid: string | number | any) => void;
  delClick: (dData: WorkerModel) => void;
};

const WorkerTable: React.FC<workerTableType> = ({
    allWorker,
  viewBtnClick,
  delClick,
}) => {
  // const StudentTable: React.FC = ({
  //   allUser,
  //   viewBtnClick,
  // }: userTableType) => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>User Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Fav Player</th>
          <th>Performance</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {allWorker &&
          allWorker?.map((sdata: WorkerModel, i: number) => {
            // console.log("sdata=>", sdata);

            return (
              <tr key={sdata.id}>
                <td>{i + 1}</td>
                <td>{sdata.workername}</td>
                <td>{sdata.age}</td>
                <td>{sdata.gender}</td>
                <td>{sdata.favplayer}</td>
                <td>{sdata.performance}</td>
                <td>
                  <button onClick={() => viewBtnClick(sdata.id)}>View</button>
                  &nbsp;&nbsp;
                  <button>Edit</button>&nbsp;&nbsp;
                  <button onClick={() => delClick(sdata)}>Delete</button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default WorkerTable;
