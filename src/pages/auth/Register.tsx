import {
	IonPage,
	IonContent,
	IonRow,
	IonCol,
	IonImg,
	IonGrid,
	IonItem,
	IonLabel,
	IonInput,
	IonButton,
	IonIcon,
} from '@ionic/react';
import React, { useState } from 'react';
import axios from 'axios';
import { alert, personOutline } from 'ionicons/icons';

const Register: React.FC = () => {
	const [name, setName] = useState<string>();
	const [email, setEmail] = useState<string>();
	const [phone, setPhone] = useState<string>();
	const [password, setPassword] = useState<string>();
	const [password2, setPassword2] = useState<string>();

	const submitHandler = async () => {
		if (password !== password2) {
			window.alert('passwords do not match');
		} else {
			const newUser = {
				name,
				email,
				phone,
				password,
			};
			try {
				const config = {
					headers: {
						'Content-Type': 'application/json',
					},
				};
				const body = JSON.stringify(newUser);
				const res = await axios.post(
					'https://joint-node-deploy.herokuapp.com/api/users',
					body,
					config
				);
				console.log(res.data);
			} catch (err) {
				console.error(err.message);
			}
		}
		console.log([name, email, phone, password, password2]);
	};

	return (
		<IonPage>
			<IonContent className='ion-padding'>
				<div>
					<IonRow>
						<IonCol></IonCol>
						<IonCol>
							<IonImg
								style={{ width: 200, height: 200 }}
								src='https://i.pinimg.com/originals/80/fc/0c/80fc0c96c4c29d3fe9efbd6dc6c4f9b8.png'
							/>
						</IonCol>
						<IonCol></IonCol>
					</IonRow>
				</div>
				<h3 className='ion-padding ion-text-center'>
					<IonIcon icon={personOutline} />
					Create Your Account
				</h3>
				<IonGrid>
					<IonRow>
						<IonCol>
							<IonItem>
								<IonLabel position='floating'>Name</IonLabel>
								<IonInput
									onIonChange={(e: any) => setName(e.target.value)}
								></IonInput>
							</IonItem>
						</IonCol>
					</IonRow>
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
							<IonItem className=''>
								<IonLabel position='floating'>Phone Number</IonLabel>
								<IonInput
									type='tel'
									onIonChange={(e: any) => setPhone(e.target.value)}
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
					<IonRow>
						<IonCol>
							<IonItem className=''>
								<IonLabel position='floating'>Confirm Password</IonLabel>
								<IonInput
									type='password'
									onIonChange={(e: any) => setPassword2(e.target.value)}
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
					Register
				</IonButton>
				<p className='ion-padding'>
					Already have an account? <a href='login'>Sign In</a>
				</p>
			</IonContent>
		</IonPage>
	);
};

export default Register;
