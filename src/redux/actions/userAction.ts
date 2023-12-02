import { createAsyncThunk } from "@reduxjs/toolkit"
import { UserModel } from "../models/userModel";
import { RootApi } from "../../RootApi";


type userActionViewType = {
  vId: string | number;
};
type userActionDelType = {
  delId: string | number;
};


export const getAllUser = createAsyncThunk<[UserModel]>(
    "user/get",
    async () => {
      const response = await RootApi.get(`/user`);
      // console.log("response-user=>", response);
      if (response.status === 200) {
        return response.data.reverse();
      }
    }
  );

  export const getSingleUser = createAsyncThunk<
  UserModel,
  userActionViewType,
  {}
>("user/view", async ({ vId }) => {
  // console.log("vId=>", vId);

  const response = await RootApi.get(`/user/${vId}`);
  // console.log("response-user=>", response);

  return response.data;
});

export const deleteOneUser = createAsyncThunk<
  [UserModel],
  userActionDelType,
  {}
>("user/delete", async ({ delId }) => {
  console.log("delid=>", delId);

  const response = await RootApi.delete(`/user/${delId}`);
  console.log("response-user=>", response);

  return response.data;
});