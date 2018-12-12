import { Navigation } from 'react-native-navigation';

import App from './App';
import Screen1 from './screen1';
import PostList from './post-list';
import ViewPost from './view-post';
import AddPost from './add-post';

export default function registerScreens() {
    Navigation.registerComponent('Sheen.App', () => App);
    Navigation.registerComponent('Sheen.Screen1', () => Screen1);
    Navigation.registerComponent('Sheen.PostList', () => PostList);
    Navigation.registerComponent('Sheen.ViewPost', () => ViewPost);
    Navigation.registerComponent('Sheen.AddPost', () => AddPost);
}