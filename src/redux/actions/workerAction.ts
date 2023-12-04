import { createAsyncThunk } from "@reduxjs/toolkit";
import { WorkerModel } from "../models/workerModel";
import { NewRootApi } from "../../RootApi";



export const getAllWorker = createAsyncThunk<[WorkerModel]>(
    "worker/get",
    async () => {
      const response = await NewRootApi.get(`/worker`);
      // console.log("response-user=>", response);
      if (response.status === 200) {
        return response.data.reverse();
      }
    }
  );