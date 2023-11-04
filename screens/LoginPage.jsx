import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import styles from './loginPage.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackBtn, Button } from '../components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { COLORS } from '../constants';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const validationSchema = Yup.object().shape({
    password: Yup.string().min(8, 'Password must be at leatse 8 character').required('Required'),
    email: Yup.string().email('Provide a valid email').required('Required')
});

const LoginPage = ({ navigation }) => {
    const [loader, setLoader] = useState(false);
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState({});
    const [obsecureText, setObsecureText] = useState(false);

    const validForm = () => {
        Alert.alert(
            "Invalid Form",
            "You must to all infomation on form to login",
            [
                { text: 'Cancel', onPress: () => console.log('cancel') },
                { text: 'Accept', onPress: () => console.log('accept') },
            ]
        )
    }

    const login = async (values) => {
        setLoader(true)
        try {
            const data = values;
            const response = await axios.post("http://192.168.1.11:3000/api/login", data);
            if (response.status === 200) {
                setLoader(false)
                setResponseData(response.data)
                await AsyncStorage.setItem(`user${responseData._id}`, JSON.stringify(responseData))
                await AsyncStorage.setItem('id', JSON.stringify(responseData._id))
                navigation.replace('Bottom Navigation')
            } else {
                Alert.alert(
                    "Error",
                    "You must provide valid credentials",
                    [
                        { text: 'Cancel', onPress: () => console.log('cancel') },
                        { text: 'Accept', onPress: () => console.log('accept') },
                    ]
                )
            }
        } catch (error) {
            Alert.alert(
                "Error", { error },
                [
                    { text: 'Cancel', onPress: () => console.log('cancel') },
                    { text: 'Accept', onPress: () => console.log('accept') },
                ]
            )
        } finally {
            setLoader(false)
        }
    }

    return (
        <ScrollView>
            <SafeAreaView style={{ margin: 20 }}>
                <View>
                    <BackBtn onPress={() => navigation.goBack()} />
                    <Image source={require('../assets/images/bk.png')} style={styles.cover} />
                    <Text style={styles.title}>What's happents? Login to continutes</Text>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => login(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, touched, values, errors, isValid, setFieldTouched }) => (

                            <View>
                                <View style={styles.wrapper}>
                                    <Text style={styles.label}>Email:</Text>
                                    <View style={styles.inputWrapper(touched.email ? COLORS.secondary : COLORS.offwhite)}>
                                        <MaterialCommunityIcons name='email-outline' size={24} color={COLORS.gray} style={styles.iconStyle} />
                                        <TextInput
                                            placeholder='Email input...'
                                            value={values.email}
                                            onChangeText={handleChange('email')}
                                            onFocus={() => { setFieldTouched('email') }}
                                            onBlur={() => { setFieldTouched('email', '') }}
                                            autoCapitalize='none'
                                            autoCorrect={false}
                                            style={styles.txtInput} />
                                    </View>
                                    {touched.email && errors.email && (
                                        <Text style={styles.errorMessage}>{errors.email}</Text>
                                    )}
                                </View>

                                <View style={styles.wrapper}>
                                    <Text style={styles.label}>Password:</Text>
                                    <View style={styles.inputWrapper(touched.password ? COLORS.secondary : COLORS.offwhite)}>
                                        <MaterialCommunityIcons name='lock-outline' size={24} color={COLORS.gray} style={styles.iconStyle} />
                                        <TextInput
                                            placeholder='Password input...'
                                            secureTextEntry={obsecureText}
                                            value={values.password}
                                            onChangeText={handleChange('password')}
                                            onFocus={() => { setFieldTouched('password') }}
                                            onBlur={() => { setFieldTouched('password', '') }}
                                            autoCapitalize='none'
                                            autoCorrect={false}
                                            style={styles.txtInput} />
                                        <TouchableOpacity onPress={() => { setObsecureText(!obsecureText) }}>
                                            <MaterialCommunityIcons name={obsecureText ? 'eye-outline' : 'eye-off-outline'} size={18} />
                                        </TouchableOpacity>
                                    </View>
                                    {touched.password && errors.password && (
                                        <Text style={styles.errorMessage}>{errors.password}</Text>
                                    )}
                                </View>
                                <Button title={"L O G I N"}
                                    loader={loader}
                                    onPress={isValid ? handleSubmit : validForm}
                                    isValid={isValid} />
                                <Text style={styles.noAccount}>You haven't an account?
                                    <Text style={styles.register} onPress={() => navigation.navigate('SignUp')}> Register here</Text>
                                </Text>
                            </View>
                        )}

                    </Formik>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

export default LoginPage;
