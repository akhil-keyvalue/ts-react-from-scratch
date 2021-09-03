import './styles.css'
import Image from './react.png';

export const App = () => {
  return <>
    <h1>Shared Component Library</h1>
    <img src={Image} alt="react-logo" />
  </>
}