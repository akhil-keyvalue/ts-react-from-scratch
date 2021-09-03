import './styles.css'
import Image from './react.png';
import Logo from './logo.svg';
import { ClickCounter } from './click-counter';

export const App = () => {
  return <>
    <h1>Shared Component Library - {process.env.NODE_ENV} - {process.env.name}</h1>
    <img src={Image} alt="react-logo" />
    <img src={Logo} alt="react-logo" width="300" />
    <ClickCounter />
  </>
}