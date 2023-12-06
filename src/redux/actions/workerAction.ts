import { createAsyncThunk } from "@reduxjs/toolkit";
import { WorkerModel } from "../models/workerModel";
import { NewRootApi } from "../../RootApi";

type workerActionDelType = {
  delId: string | number;
};

type userActionViewType = {
  vId: string | number;
};

export const getAllWorker = createAsyncThunk<[WorkerModel]>(
    "worker/get",
    async () => {
      const response = await NewRootApi.get(`/worker`);
       console.log("response-user=>", response);
      if (response.status === 200) {
        return response.data.reverse();
      }
    }
  );

  //delete action
  export const deleteOneWorker = createAsyncThunk<
  [WorkerModel],
  workerActionDelType,
  {}
>("worker/delete", async ({ delId }) => {
  console.log("delid=>", delId);

  const response = await NewRootApi.delete(`/worker/${delId}`);
  console.log("response-worker=>", response);

  return response.data;
});

//single view action
export const getSingleWorker = createAsyncThunk<
WorkerModel,
userActionViewType,
{}
>("user/view", async ({ vId }) => {
// console.log("vId=>", vId);

const response = await NewRootApi.get(`/worker/${vId}`);
// console.log("response-worker=>", response);

return response.data;
});
