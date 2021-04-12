import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonContent,
	IonHeader,
	IonInput,
	IonLabel,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import React from 'react';

const Profile: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Profile</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonCard>
					<IonCardHeader>Update Your Profile</IonCardHeader>
					<IonCardContent>
						<IonInput>
							<IonLabel position='floating'></IonLabel>
						</IonInput>
					</IonCardContent>
				</IonCard>
			</IonContent>
		</IonPage>
	);
};

export default Profile;
