import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserModel } from "../models/userModel";
import { deleteOneUser, getAllUser, getSingleUser } from "../actions/userAction";

export interface initialStateInterface {
  allUser: UserModel[];
  singleUser: UserModel;
  message: string;
  isLoading?: boolean;
}

const initialState: initialStateInterface = {
     allUser: [],
     singleUser: {} as  UserModel,
     message: "",
     isLoading: false,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,

  reducers: {},
  extraReducers: function (builder) {
    // For Get All Users
    builder.addCase(getAllUser.pending, (state) => {
      state.isLoading = true;
      state.message = "User data is loading";
    });

    builder.addCase(
        getAllUser.fulfilled,
      (state, actions: PayloadAction<[UserModel]>) => {
        state.isLoading = false;
        state.allUser = actions.payload;
        state.message = "User data is fetched";
      }
    );

    builder.addCase(getAllUser.rejected, (state) => {
      state.isLoading = false;
      state.allUser = [];
      state.message = "Something went wrong";
    });

    // For Get Single User
    builder.addCase(getSingleUser.pending, (state) => {
      state.isLoading = true;
      state.message = "User data is loading";
    });

    builder.addCase(
        getSingleUser.fulfilled,
      (state, actions: PayloadAction<UserModel>) => {
        state.isLoading = false;
        state.singleUser = actions.payload;
        state.message = "User data is fetched";
      }
    );

    builder.addCase(getSingleUser.rejected, (state) => {
      state.isLoading = false;
      state.singleUser = {} as UserModel;
      state.message = "Something went wrong";
    });

    //For Delete One User
    builder.addCase(deleteOneUser.pending, (state) => {
      state.isLoading = true;
      state.message = "User data is loading";
    });

    builder.addCase(
        deleteOneUser.fulfilled,
      (state, actions: PayloadAction<UserModel[]>) => {
        state.isLoading = false;
        state.allUser = [...state.allUser];
        state.message = "User data is deleted";
      }
    );

    builder.addCase(deleteOneUser.rejected, (state) => {
      state.isLoading = false;
      state.message = "Something went wrong";
    });
  },
});

export default userSlice.reducer;
