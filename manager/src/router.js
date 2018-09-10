import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm'; 
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () =>{

    return(

        <Router>
            <Scene key='root' hideNavBar>
                <Scene key='off'>
                    <Scene key='login'
                    component={LoginForm}
                    title='Login'
                    initial
                    />
                </Scene>    
                <Scene key='main'>
                    <Scene 
                        rightTitle='Add'
                        onRight={() => Actions.employeeCreate()}
                        key='employeeList'
                        component={EmployeeList}
                        title={'Employees'}
                        initial
                    />
                    <Scene 
                        key='employeeCreate'
                        component={EmployeeCreate}
                        title={'Create Employee'}
                    />
                </Scene>    
            </Scene>
        </Router>
    );

};

export default RouterComponent;