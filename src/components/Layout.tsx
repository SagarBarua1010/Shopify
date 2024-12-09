"use client";
import { persistor, store } from "@/Redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import MainLoading from "./MainLoading";
import { SessionProvider } from "next-auth/react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <Provider store={store}>
        <PersistGate
          loading={<MainLoading></MainLoading>}
          persistor={persistor}
        >
          {children}
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
};

export default Layout;
