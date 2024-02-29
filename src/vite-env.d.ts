/// <reference types="vite/client" />

declare module "myDockPlus/Clients/ClientsTable" {
  interface ClientsTableModuleProps {}

  export const ClientsTableModule: (
    props: ClientsTableModuleProps
  ) => JSX.Element;
}
