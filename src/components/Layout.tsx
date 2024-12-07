"use client";
import { persistor, store } from "@/Redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import MainLoading from "./MainLoading";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<MainLoading></MainLoading>} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default Layout;
