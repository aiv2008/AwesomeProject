

import React, { useState ,useEffect} from 'react';
import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, Text, useColorScheme, View,TextInput,TouchableOpacity, Alert,ScrollView,ActivityIndicator } from 'react-native';
function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [loginIsAssessbled, setLoginIsAssessbled] = useState(true);
    
    useEffect(() => {
      const timer = setTimeout(() => {
        if(email && !isValidEmail(email)){
          setEmailError('Invalid email address');
        }else{
          setEmailError('');
        }
      }, 500);
      return () => clearTimeout(timer);
    }, [email]);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        if(password && password.trim().length < 6){
          setPasswordError('Password must be at least 6 characters');
        }else{
          setPasswordError('');
        }
      }, 500);
  
      return () => clearTimeout(timer);
    }, [password]);
  
    const handleLogin = () =>{
      setIsLoading(true);
      setLoginIsAssessbled(false);
      if(emailError || passwordError)  {
        setLoginIsAssessbled(true);
        setIsLoading(false);
        return;
      }
      if (!email || !password) {
        Alert.alert('提示', '请输入邮箱和密码', [
          {
            text: 'OK', onPress: () => {
              setLoginIsAssessbled(true);
              setIsLoading(false); 
              console.log('请输入邮箱和密码');
            }},
        ]);
        return;
      }
      
      // 登录逻辑
      Alert.alert('成功', '登录成功！', [
          {
            text: 'OK', onPress: () => {
              setLoginIsAssessbled(true);
              setIsLoading(false); 
              console.log('登录成功');
            }},
        ]);
    }
  
    const isValidEmail = (email: string) =>{
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
        
        <View style={styles.card}>
          <Text style={styles.title}>Login</Text>
            <TextInput style={styles.input} placeholder='Email' value={email} onChangeText={setEmail} keyboardType='email-address' />
            <Text style={styles.error}>{emailError}</Text>
            <TextInput style={styles.input} placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry={true}/>
            <Text style={styles.error}>{passwordError}</Text>
            <TouchableOpacity style={styles.forgotPasswordContainer}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity disabled={!loginIsAssessbled} style={styles.button} onPress={handleLogin}>
              <View style={styles.buttonContent}>
                {isLoading && <ActivityIndicator size="small" color="#fff" style={{marginRight: 10}} />}
                <Text style={styles.buttonText}>Loginaaa</Text>
              </View>
            </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4A90E2',
      justifyContent: 'center',
      alignItems: 'center',
    },
    scrollContent:{
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 20,
    },
    card: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: 20,
      padding: 30,
      margin: 20,
      width: '90%',
      maxWidth: 200, 
      alignItems: 'center', 
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#4A90E2',
      marginBottom: 30,   
      textAlign: 'center',
    },
    input: {
      width: '90%',           // 占满卡片宽度
      height: 50,              // 输入框高度
      borderWidth: 1,          // 边框宽度
      borderColor: '#ddd',     // 边框颜色
      borderRadius: 10,        // 圆角
      paddingHorizontal: 15,   // 左右内边距
      // marginBottom: 15,        // 输入框之间的间距
      fontSize: 16,            // 字体大小
      backgroundColor: '#fff', // 背景色
    },
    button:{
      backgroundColor: '#4A90E2',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      width: '90%',
      marginTop: 10,
    },
    buttonText:{
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    buttonContent:{
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    forgotPasswordContainer:{
      width: '90%',
      alignItems: 'flex-end',
      marginTop: 5,
    },
    forgotPassword:{
      color: '#4A90E2',
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 10,
    },
    error:{
      color: 'red',
    }
  });
  export default Login;