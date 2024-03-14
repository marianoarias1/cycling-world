import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Cart } from "../screens/cart/Cart";
import { Header } from "../components/Header/Header";
import { Login } from "../screens/login/Login";
import { SingUp } from "../screens/singUp/SingUp";

const Stack = createNativeStackNavigator();

export const AuthStack = () => {

    return (
        <Stack.Navigator initialRouteName="Login"
            screenOptions={{ header: () => <Header title={"Bienvenidos"} /> }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SingUp" component={SingUp} />

        </Stack.Navigator>
    )
}