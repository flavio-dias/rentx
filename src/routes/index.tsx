import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import LoadingContent from "../components/LoadingContent";
import { useAuth } from "../hooks/auth";
import AuthRoutes from "./auth.routes";
import AppTabRoutes from "./tab.routes";

export default function Routes() {
    const { user, isLoading } = useAuth();

    if (isLoading) return <LoadingContent />

    return <NavigationContainer>
        {user.id ?
            <AppTabRoutes /> : <AuthRoutes />
        }
    </NavigationContainer>
}