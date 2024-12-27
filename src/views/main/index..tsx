

import './styles.css';
import Couter from '../../components/Counter';

function Main() {
  return (
    <div className="container-main">
      <Couter title="Contador 1" initialValue={10} />
      <Couter title="Contador 2" initialValue={20} />
    </div>
  );
}

export default Main;
