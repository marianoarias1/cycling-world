import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Header } from "../components/Header/Header";
import { MyProfile } from "../components/MyProfile/MyProfile";
import { ImageSelector } from "../screens/imageSelector/ImageSelector";
import { LocationSelector } from "../screens/locationSelector/LocationSelector";

const Stack = createNativeStackNavigator();

export const MyProfileStack = () => {

    return (
        <Stack.Navigator initialRouteName="My Profile"
            screenOptions={{ header: () => <Header title={"My profile"} /> }}
        >
            <Stack.Screen name="MyProfile" component={MyProfile} />
            <Stack.Screen name="Image Selector" component={ImageSelector} />
            <Stack.Screen name="Location Selector" component={LocationSelector} />


        </Stack.Navigator>
    )
}