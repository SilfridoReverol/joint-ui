import {
	IonGrid,
	IonHeader,
	IonPage,
	IonRow,
	IonTitle,
	IonCol,
	IonToolbar,
	IonContent,
	IonButtons,
	IonMenuButton,
	IonInput,
	IonLabel,
	IonItem,
	IonCard,
	IonCardContent,
	IonButton,
	IonImg,
	IonRouterLink,
} from '@ionic/react';
import React, { useState } from 'react';
import axios from 'axios';
import { Link, Redirect, useHistory } from 'react-router-dom';
import Home from '../layout/Home';

const Login: React.FC = () => {
	const [email, setEmail] = useState<string>();
	const [password, setPassword] = useState<string>();
	// const [redirect, setRedirect] = useState<Redirect>()
	const [token, setToken] = useState<string>();

	const submitHandler = async () => {
		if (email === '' || password === '') {
			window.alert('You are missing some credentials');
		} else {
			const user = {
				email,
				password,
			};
			try {
				const config = {
					headers: {
						'Content-Type': 'application/json',
					},
				};
				const body = JSON.stringify(user);
				const res = await axios.post(
					'https://joint-node-deploy.herokuapp.com/api/auth',
					body,
					config
				);

				console.log(res.data);
				setToken(res.data);
				// setRedirect('/home')
			} catch (err) {
				console.error(err.message);
			}
		}
	};

	return (
		<IonPage>
			<IonContent className='ion-padding'>
				<div>
					<IonRow>
						<IonCol></IonCol>
						<IonCol className='ion-margin-bottom'>
							<IonImg
								style={{ width: 200, height: 200 }}
								src='https://i.pinimg.com/originals/80/fc/0c/80fc0c96c4c29d3fe9efbd6dc6c4f9b8.png'
							/>
						</IonCol>
						<IonCol></IonCol>
					</IonRow>
				</div>
				<h3 className='ion-padding'>Sign Into Your Account</h3>
				<IonGrid>
					<IonRow>
						<IonCol>
							<IonItem className=''>
								<IonLabel position='floating'>Email Address</IonLabel>
								<IonInput
									type='email'
									onIonChange={(e: any) => setEmail(e.target.value)}
								></IonInput>
							</IonItem>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>
							<IonItem className='ion-margin-top'>
								<IonLabel position='floating'>Password</IonLabel>
								<IonInput
									type='password'
									onIonChange={(e: any) => setPassword(e.target.value)}
								></IonInput>
							</IonItem>
						</IonCol>
					</IonRow>
				</IonGrid>
				<IonButton
					onClick={submitHandler}
					color='danger'
					expand='full'
					className='ion-padding'
				>
					Login
				</IonButton>
				<p className='ion-padding'>
					Don't have an account? <a href='register'>Sign Up</a>{' '}
				</p>
			</IonContent>
		</IonPage>
	);
};

export default Login;
