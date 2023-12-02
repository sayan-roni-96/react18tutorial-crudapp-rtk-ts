import React, { useEffect, useMemo } from "react";
import { Table } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  deleteOneUser,
  getAllUser,
  getSingleUser,
} from "../../redux/actions/userAction";
import { useNavigate } from "react-router-dom";
import UserTable from "./components/UserTable";
import { UserModel } from "../../redux/models/userModel";

const UserList: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { allUser } = useAppSelector((state) => state.user);

  // console.log("allUser=>", allUser);

  useMemo(() => {
    dispatch(getAllUser());
  }, []);

  const viewBtnClick = (vid: string | number) => {
    navigate(`/userdetails/${vid}`);
    dispatch(getSingleUser({ vId: vid }));
  };

  const delClick = (dData: UserModel) => {
    if (window.confirm("Do you want?")) {
      console.log("dData=>", dData);
      dispatch(deleteOneUser({ delId: dData.id }));
    }

    dispatch(getAllUser());
  };

  return (
    <div className="container mt-4">
      {getAllUser.length === 0 ? (
        <h3>No data found!</h3>
      ) : (
        <UserTable
         allUser={allUser}
          viewBtnClick={viewBtnClick}
          delClick={delClick}
        />
      )}
    </div>
  );
};

export default UserList;
