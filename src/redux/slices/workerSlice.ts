import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserModel } from "../models/userModel";
import { WorkerModel } from "../models/workerModel";
import { getAllWorker } from "../actions/workerAction";

export interface initialStateInterface {
    getAllWorker: WorkerModel[];
//   singleUser: UserModel;
     message: string;
     isLoading?: boolean;
}

const initialState: initialStateInterface = {
    getAllWorker: [],
    //  singleUser: {} as  UserModel,
      message: "",
      isLoading: false,
};

const workerSlice = createSlice({
  name: "workerSlice",
  initialState: initialState,

  reducers: {},
  extraReducers: function (builder) {
    // For Get All Users
    builder.addCase(getAllWorker.pending, (state) => {
      state.isLoading = true;
      state.message = "Worker data is loading";
    });

    builder.addCase(
        getAllWorker.fulfilled,
      (state, actions: PayloadAction<[WorkerModel]>) => {
        state.isLoading = false;
        state.getAllWorker = actions.payload;
        state.message = "User data is fetched";
      }
    );

    builder.addCase(getAllWorker.rejected, (state) => {
      state.isLoading = false;
      state.getAllWorker = [];
      state.message = "Something went wrong";
    });

    // For Get Single User
    // builder.addCase(getSingleUser.pending, (state) => {
    //   state.isLoading = true;
    //   state.message = "User data is loading";
    // });

    // builder.addCase(
    //     getSingleUser.fulfilled,
    //   (state, actions: PayloadAction<UserModel>) => {
    //     state.isLoading = false;
    //     state.singleUser = actions.payload;
    //     state.message = "User data is fetched";
    //   }
    // );

    // builder.addCase(getSingleUser.rejected, (state) => {
    //   state.isLoading = false;
    //   state.singleUser = {} as UserModel;
    //   state.message = "Something went wrong";
    // });

    // //For Delete One User
    // builder.addCase(deleteOneUser.pending, (state) => {
    //   state.isLoading = true;
    //   state.message = "User data is loading";
    // });

    // builder.addCase(
    //     deleteOneUser.fulfilled,
    //   (state, actions: PayloadAction<UserModel[]>) => {
    //     state.isLoading = false;
    //     state.allUser = [...state.allUser];
    //     state.message = "User data is deleted";
    //   }
    // );

    // builder.addCase(deleteOneUser.rejected, (state) => {
    //   state.isLoading = false;
    //   state.message = "Something went wrong";
    // });
  },
});

export default workerSlice.reducer;
