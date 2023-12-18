import { RootState } from "store/store"

export const selectAllUsers = (state: RootState) => state.users.users;


