import {
	IonBadge,
	IonContent,
	IonHeader,
	IonIcon,
	IonLabel,
	IonPage,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import {
	calendar,
	duplicateOutline,
	home,
	homeOutline,
	informationCircle,
	map,
	peopleOutline,
	personCircle,
	personCircleOutline,
} from 'ionicons/icons';
import React from 'react';
import { Redirect, Route } from 'react-router';
// import Login from '../auth/Login';

//@ todo - set this as a component, not a page

const Home: React.FC = () => {
	return (
		<IonTabs>
			<IonRouterOutlet>
				<Route path='/' exact />
			</IonRouterOutlet>
			<IonTabBar slot='bottom'>
				<IonTabButton tab='home'>
					<IonIcon icon={homeOutline} />
					<IonLabel>Home</IonLabel>
					<IonBadge>3</IonBadge>
				</IonTabButton>

				<IonTabButton tab='network'>
					<IonIcon icon={peopleOutline} />
					<IonLabel>Network</IonLabel>
				</IonTabButton>

				<IonTabButton tab='post'>
					<IonIcon icon={duplicateOutline} />
					<IonLabel>Add Post</IonLabel>
				</IonTabButton>

				<IonTabButton tab='profile'>
					<IonIcon icon={personCircleOutline} />
					<IonLabel>Profile</IonLabel>
				</IonTabButton>
			</IonTabBar>
		</IonTabs>
	);
};

export default Home;
