import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

// Дааные в Redux store лежат примерно таким образом

// const globalStore = {
//   auth: {
//     token: "ASDAFASDASD123124124124ADCADF",
//     privateRules: false,
//   },
//   weather: {
//     city: "Berlin",
//     temp: "1423142",
//     feelsLikeTemp: "123",
//   },
// }
