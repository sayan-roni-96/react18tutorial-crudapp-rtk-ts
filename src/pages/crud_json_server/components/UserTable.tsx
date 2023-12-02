import React from "react";
import { Table } from "react-bootstrap";
import { UserModel } from "../../../redux/models/userModel";

type userTableType = {
    allUser: UserModel[];
  viewBtnClick: (vid: string | number | any) => void;
  delClick: (dData: UserModel) => void;
};

const StudentTable: React.FC<userTableType> = ({
    allUser,
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
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {allUser &&
          allUser?.map((sdata: UserModel, i: number) => {
            // console.log("sdata=>", sdata);

            return (
              <tr key={sdata.id}>
                <td>{i + 1}</td>
                <td>{sdata.username}</td>
                <td>{sdata.email}</td>
                <td>{sdata.phone}</td>
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

export default StudentTable;
