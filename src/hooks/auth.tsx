import React, { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import api from "../services/api";
import { database } from '../database';
import { User as ModelUser } from '../database/model/User';

interface User {
    id: string,
    user_id: string,
    email: string,
    name: string,
    driver_license: string,
    avatar: string,
    token: string
}

interface AuthContextData {
    user: User,
    signIn: (email: string, senha: string) => Promise<void>,
    signOut: () => Promise<void>,
    updateUsuario: (user: User) => Promise<void>,
    isLoading: boolean
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }) {
    const [data, setData] = useState({} as User);
    const [isLoading, setIsLoading] = useState(true);

    const signIn = async (email: string, senha: string) => {
        try {
            const response = await api.post('/sessions', {
                email,
                password: senha
            });

            const { token, user } = response.data;
            api.defaults.headers.common['Authorization'] = 'Bearer ' + token;

            const userCollection = database.get<ModelUser>('users');
            await database.write(async () => {
                await userCollection.create(newUser => {
                    newUser.user_id = user.id,
                        newUser.name = user.name,
                        newUser.email = user.email,
                        newUser.driver_license = user.driver_license,
                        newUser.avatar = user.avatar,
                        newUser.token = token
                });
            });

            setData({ ...user, token });

        } catch (e) {
            Alert.alert('Erro', e.message);
        }
    }

    const signOut = async () => {
        try {
            const userCollection = database.get<ModelUser>('users');
            await database.write(async () => {
                await userCollection.query().destroyAllPermanently();
            });

            setData({} as User);

        } catch (error) {
            Alert.alert('Erro', error.message);
        }
    }

    const updateUsuario = async (user: User) => {
        try {
            const userCollection = database.get<ModelUser>('users');
            await database.write(async () => {
                let userSelecionado = await userCollection.find(user.id);
                await userSelecionado.update((userData) => {
                    userData.name = user.name,
                        userData.email = user.email,
                        userData.driver_license = userData.driver_license,
                        userData.avatar = user.avatar
                });
            });

            setData(user);

        } catch (error) {
            Alert.alert('Erro', error.message);
        }
    }

    useEffect(() => {
        const loadUserData = async () => {
            const userCollection = database.get<ModelUser>('users');
            let response = await userCollection.query().fetch();

            if (response.length > 0) {
                const userData = response[0]._raw as unknown as User;
                api.defaults.headers.common['Authorization'] = 'Bearer ' + userData.token
                setData(userData);
                setIsLoading(false);
            } else setIsLoading(false);
        }
        loadUserData();
    }, [])

    return <AuthContext.Provider
        value={{
            user: data,
            signIn,
            signOut,
            updateUsuario,
            isLoading
        }}
    >
        {children}
    </AuthContext.Provider>
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };