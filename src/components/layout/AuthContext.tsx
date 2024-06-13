"use client";
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useLayoutEffect,
} from "react";

interface userInfo {
  name: string;
}

type authContextType = {
  isUserAuthenticated: boolean;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: userInfo | null;
  login: () => Promise<void> | null;
  // login: () => Promise<Response>;
  logout: () => void | null;
};

const AuthContext = createContext<authContextType | undefined>(undefined);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isUserAuthenticated, setIsUserAuthenticated] =
    useState<boolean>(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // const router = useRouter();
  const validateToken = async () => {
    const res = await fetch("/api/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    setUser(data);
    setIsUserAuthenticated(true);
    // console.log(data);
  };

  useLayoutEffect(() => {
    try {
      validateToken();
    } catch (error) {
      console.log(error);
    }

    return () => {};
  }, []);

  const login = async () => {
    try {
      validateToken();
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    try {
      const deleteToken = async () => {
        const res = await fetch("/api/logout", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        // const data = res.json();
        setUser(null);
        setIsUserAuthenticated(false);
        console.log("user sucessfully logout");
      };
      deleteToken();
    } catch (error) {}
  };

  return (
    <AuthContext.Provider
      value={{
        isUserAuthenticated,
        isLoading,
        setIsLoading,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): authContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
};
