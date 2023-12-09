import { PayloadAction, createSlice } from "@reduxjs/toolkit";
//import { UserModel } from "../models/userModel";
import { WorkerModel } from "../models/workerModel";
import { EditSingleWorker, addNewWorker, deleteOneWorker, getAllWorker, getSingleWorker } from "../actions/workerAction";

export interface initialStateInterface {
  allWorker: WorkerModel[];
  singleWorker:WorkerModel,
  editedSingleWorker: WorkerModel;
  message: string;
  isLoading?: boolean;
}

const initialState: initialStateInterface = {
      allWorker: [],
      singleWorker: {} as  WorkerModel,
      editedSingleWorker: {} as  WorkerModel,
      message: "",
      isLoading: false,
};

const workerSlice = createSlice({
  name: "workerSlice",
  initialState: initialState,

  reducers: {},
  extraReducers: function (builder) {
    // For Get All Worker
    builder.addCase(getAllWorker.pending, (state) => {
      state.isLoading = true;
      state.message = "Worker data is loading";
    });

    builder.addCase(
        getAllWorker.fulfilled,
      (state, actions: PayloadAction<[WorkerModel]>) => {
        state.isLoading = false;
        state.allWorker = actions.payload;
        state.message = "Worker data is fetched";
      }
    );

    builder.addCase(getAllWorker.rejected, (state) => {
      state.isLoading = false;
      state.allWorker = [];
      state.message = "Something went wrong";
    });

    // For Get Single Worker
    builder.addCase(getSingleWorker.pending, (state) => {
      state.isLoading = true;
      state.message = "Worker data is loading";
    });

    builder.addCase(
      getSingleWorker.fulfilled,
      (state, actions: PayloadAction<WorkerModel>) => {
        state.isLoading = false;
        state.singleWorker = actions.payload;
        state.message = "Worker data is fetched";
      }
    );

    builder.addCase(getSingleWorker.rejected, (state) => {
      state.isLoading = false;
      state.singleWorker = {} as WorkerModel;
      state.message = "Something went wrong";
    });

    //For Delete One Worker
    builder.addCase(deleteOneWorker.pending, (state) => {
      state.isLoading = true;
      state.message = "Worker data is loading";
    });

    builder.addCase(
      deleteOneWorker.fulfilled,
      (state, actions: PayloadAction<WorkerModel[]>) => {
        state.isLoading = false;
        state.allWorker = [...state.allWorker];
        state.message = "Worker data is deleted";
      }
    );

    builder.addCase(deleteOneWorker.rejected, (state) => {
      state.isLoading = false;
      state.message = "Something went wrong";
    });

    // For Add New Worker
    builder.addCase(addNewWorker.pending, (state) => {
      state.isLoading = true;
      state.message = "New Worker data is loading";
    });

    builder.addCase(
      addNewWorker.fulfilled,
      (state, actions: PayloadAction<WorkerModel>) => {
        state.isLoading = false;
        state.allWorker = [...state.allWorker, actions.payload];
        state.message = "New Worker added";
      }
    );

    builder.addCase(addNewWorker.rejected, (state) => {
      state.isLoading = false;
      state.singleWorker = {} as WorkerModel;
      state.message = "Something went wrong";
    });

    //edit worker slice
    
    builder.addCase(EditSingleWorker.pending, (state) => {
      state.isLoading = true;
      state.message = "Worker data is now loading";
    });

    builder.addCase(
      EditSingleWorker.fulfilled,
      (state, actions: PayloadAction<WorkerModel>) => {
        state.isLoading = false;
        state.allWorker = [...state.allWorker, actions.payload];
        state.editedSingleWorker = actions.payload;
        state.message = "Worker data is updated";
      }
    );

    builder.addCase(EditSingleWorker.rejected, (state) => {
      state.isLoading = false;
      state.editedSingleWorker = {} as WorkerModel;
      state.message = "Something went wrong";
    });
  },
});

export default workerSlice.reducer;
