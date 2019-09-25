import { createStackNavigator, createAppContainer } from 'react-navigation';
import { LoginScreen, TimeSheetScreen, LeaveScreen } from '../Screens';

const AppNavigator = createStackNavigator(
    {
        Login: LoginScreen,
        Timesheet: TimeSheetScreen,
        Leave: LeaveScreen
    },
    {
        headerMode: 'none',
    },
    {
        initialRouteName: 'Login'
    },
);

export default createAppContainer(AppNavigator);
