import { createContext, ReactNode, useState } from "react";
import { IUser } from "@models/IUser";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { Alert } from "react-native";

WebBrowser.maybeCompleteAuthSession();

interface IAuthProvider {
  children: ReactNode;
}

type AuthDTO = {
  signIn: () => void;
  user: IUser;
  isAuthenticated: string
  logout: () => void;
}

export const AuthContext = createContext({} as AuthDTO);

export const AuthProvider = ({ children }: IAuthProvider) => {

  const [user, setUser] = useState({} as IUser)
  const [isAuthenticated, setIsAuthenticated] = useState("");


  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: process.env.ANDROIDCLIENTID,
    iosClientId:  process.env.IOSCLIENTID,
    expoClientId: process.env.EXPOCLIENTID
  });

  const signIn = async () => {
    await promptAsync().then((response: any) => 
    getUserInfo(response.authentication.accessToken))
    .catch(err => console.log(err))
  }

  const getUserInfo = async (tokendata: string) => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${tokendata}` },
        }
      );

      const user = await response.json();
      setUser({
        email: user.email,
        photo: user.picture,
        name: user.name,

      });

      setIsAuthenticated(tokendata);
    } catch (err) {
      console.log(err);
      Alert.alert("Opa", "Algo de errado aconteceu")

    }
  };

  const logout = () => {
    setIsAuthenticated("")
    setUser({
      email:'',
      photo: '',
      name: '',
    });

  }

  return (
    <AuthContext.Provider value={{
      signIn,
      user,
      isAuthenticated,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  )
}