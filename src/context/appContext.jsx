import { UserProvider } from "./userContext.jsx";
import { HomeProvider } from "./homeContext.jsx";

const AppProvider = ({ children }) => {
  return (
    <UserProvider>
      <HomeProvider>{children}</HomeProvider>
    </UserProvider>
  );
};

export default AppProvider;  // ✅ Ensure this is a default export
