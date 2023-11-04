import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackBtn, Button } from '../components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { COLORS } from '../constants';
import styles from './signUp.style';

const validationSchema = Yup.object().shape({
    password: Yup.string().min(8, 'Password must be at leatse 8 character').required('Input Required'),
    email: Yup.string().email('Provide a valid email').required('Input Required'),
    location: Yup.string().min(3, 'Provide a valid location').required('Input Required'),
    username: Yup.string().min(3, 'Provide a valid username').required('Input Required')

});

const SignUp = ({ navigation }) => {

    const [loader, setLoader] = useState(false);
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

    return (
        <ScrollView>
            <SafeAreaView style={{ margin: 20 }}>
                <View>
                    <BackBtn onPress={() => navigation.goBack()} />
                    <Image source={require('../assets/images/bk.png')} style={styles.cover} />
                    <Text style={styles.title}>You haven't an account? Register to join us</Text>
                    <Formik
                        initialValues={{ email: '', password: '', location: '', username: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => console.log(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, touched, values, errors, isValid, setFieldTouched }) => (

                            <View>
                                <View style={styles.wrapper}>
                                    <Text style={styles.label}>Username:</Text>
                                    <View style={styles.inputWrapper(touched.email ? COLORS.secondary : COLORS.offwhite)}>
                                        <MaterialCommunityIcons name='face-man' size={24} color={COLORS.gray} style={styles.iconStyle} />
                                        <TextInput
                                            placeholder='Username input...'
                                            value={values.username}
                                            onChangeText={handleChange('username')}
                                            onFocus={() => { setFieldTouched('username') }}
                                            onBlur={() => { setFieldTouched('username', '') }}
                                            autoCapitalize='none'
                                            autoCorrect={false}
                                            style={styles.txtInput} />
                                    </View>
                                    {touched.username && errors.username && (
                                        <Text style={styles.errorMessage}>{errors.username}</Text>
                                    )}
                                </View>

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
                                    <Text style={styles.label}>Location:</Text>
                                    <View style={styles.inputWrapper(touched.location ? COLORS.secondary : COLORS.offwhite)}>
                                        <MaterialCommunityIcons name='map-outline' size={24} color={COLORS.gray} style={styles.iconStyle} />
                                        <TextInput
                                            placeholder='Location input...'
                                            value={values.location}
                                            onChangeText={handleChange('location')}
                                            onFocus={() => { setFieldTouched('location') }}
                                            onBlur={() => { setFieldTouched('location', '') }}
                                            autoCapitalize='none'
                                            autoCorrect={false}
                                            style={styles.txtInput} />
                                    </View>
                                    {touched.location && errors.location && (
                                        <Text style={styles.errorMessage}>{errors.location}</Text>
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
                                <Button title={"S I G N U P"} onPress={isValid ? handleSubmit : validForm} isValid={isValid} />
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

export default SignUp;
