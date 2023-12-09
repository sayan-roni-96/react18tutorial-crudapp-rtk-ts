import { createAsyncThunk } from "@reduxjs/toolkit";
import { WorkerModel } from "../models/workerModel";
import { NewRootApi } from "../../RootApi";

type workerActionDelType = {
  delId: string | number;
};

type userActionViewType = {
  vId: string | number;
};
type workerActionAddType = {
  formData: WorkerModel;
};

type workerEditType = {
  eid: string | number | undefined;
  formEdData: WorkerModel;
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
>("worker/view", async ({ vId }) => {
// console.log("vId=>", vId);

const response = await NewRootApi.get(`/worker/${vId}`);
// console.log("response-worker=>", response);

return response.data;
});

//add worker
export const addNewWorker = createAsyncThunk<
WorkerModel,
  workerActionAddType,
  {}
>("worker/add", async ({ formData }) => {
  // console.log("formData-action=>", formData);

  const response = await NewRootApi.post(`/worker`, formData);
  // console.log("addNewStudent-action=>", response);

  return response.data;
});

// edit worker
export const EditSingleWorker = createAsyncThunk<
WorkerModel,
  workerEditType,
  {}
>("worker/edit", async ({ eid, formEdData }) => {
  console.log("formData-action=>", eid, formEdData);
  const response = await NewRootApi.put(`/worker/${eid}`, formEdData);
  console.log("response-edit=>", response);

  return response.data;
});