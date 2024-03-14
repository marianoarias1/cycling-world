import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSignUpMutation } from '../../services/authService'
import { SubmitButton } from '../../components/submitButton/SubmitButton'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'
import { signupSchema } from '../../validations/signupSchema'
import { InputForm } from '../../components/InputForm/InputForm'



export const SingUp = ({navigation}) => {
    const onChange = () => { }
    const [email, setEmail] = useState('')
    const [errorMail, setErrorMail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
    const [triggerSignup, result] = useSignUpMutation();

    const dispatch = useDispatch()

    const onSubmit = () => {
        triggerSignup({ email, password })
        try {
            //limpiamos los errores cada vez que ejecutamos el Register
            setErrorMail("");
            setErrorPassword("");
            setErrorConfirmPassword("");

            signupSchema.validateSync({ password, confirmPassword, email });
            triggerSignup({ email, password });
            console.log("Registro exitoso");
        } catch (err) {
            console.log("path", err.path);
            switch (err.path) {
                case "email":
                    setErrorMail(err.message);
                    break;
                case "password":
                    setErrorPassword(err.message);
                    break;
                case "confirmPassword":
                    setErrorConfirmPassword(err.message);
                    break;
                default:
                    break;
            }
        }
    }

    useEffect(() => {
        if (result.data) {
            dispatch(setUser(result.data))
        }
    }, [result])
    return (
        <View>
            <Text>Register</Text>
            <InputForm label={"email"} error={errorMail} onChange={setEmail} />
            <InputForm label={"password"} error={errorPassword} onChange={setPassword} isSecure={true} />
            <InputForm label={"confirmar password"} error={errorConfirmPassword} onChange={setConfirmPassword} isSecure={true} />
            <Pressable onPress={() => navigation.navigate("Login")}>
                <Text>Ir al login</Text>
            </Pressable>
            <SubmitButton title={"Registrarse"} onPress={onSubmit} />
        </View>
    )
}
