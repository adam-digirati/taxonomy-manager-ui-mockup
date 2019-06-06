import * as React from "react";
import { render } from "react-dom";
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import ProjectsScreen from "./containers/ProjectsScreen";
import ProjectScreen from "./containers/ProjectScreen";
import LoginScreen from "./containers/LoginScreen";
import "./styles.css";


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#62ffea',
      dark: '#009e88',
      main: '#00d0b8',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff',
      dark: '#ccc',
      main: '#fff',
      contrastText: '#00d0b8',
    },
  },
  typography: {
    fontSize: 12,
  },
  // mixins: {
  //   toolbar: {
  //     minHeight: 36,
  //   },
  // },
});

const App = () => {
  const [screen, setScreen] = React.useState('LoginScreen');
  let content = null;
  switch (screen) {
    
    case 'ProjectsScreen':
      content = (
        <ProjectsScreen 
          handleSelectProject={()=>setScreen('ProjectScreen')}
          handleLogout={()=>setScreen('LoginScreen')}
        />
      );
      break;
    case 'ProjectScreen':
      content = <ProjectScreen handleLogout={()=>setScreen('LoginScreen')} handleBackToProjects={()=>setScreen('ProjectsScreen')}/>;
      break;
    case 'LoginScreen':
    default:
      content =  <LoginScreen handleLogin={()=>setScreen('ProjectsScreen')}/>;
      break;
  }
  return (
    <ThemeProvider theme={theme}>
      {content}
    </ThemeProvider>
  )
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
