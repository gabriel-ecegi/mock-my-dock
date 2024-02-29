import React, { useEffect } from "react";
import { lazily } from "react-lazily";

const { ClientsTableModule } = lazily(
  () => import("myDockPlus/Clients/ClientsTable")
);

function App() {
  useEffect(() => {
    window.history.pushState({}, "", "/remote-client-app/clients");
  }, []);

  const renderOnlyRemoteApp = true;

  if (renderOnlyRemoteApp) {
    return (
      <React.Suspense>
        <ClientsTableModule />
      </React.Suspense>
    );
  }
}

export default App;
