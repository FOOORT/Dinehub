"use client";
import store from "./store";
import { Provider } from "react-redux";

export function ProvidersComponent({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
