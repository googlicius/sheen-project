/** @format */

import { Navigation } from 'react-native-navigation';
import registerScreens from './screens/register-screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [{
                    component: {
                        name: "Sheen.PostList"
                    }
                }],
                options: {
                    topBar: {
                        title: {
                            text: "Posts"
                        }
                    }
                }
            }
        }
    })
})