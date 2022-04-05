import './style.css';
import { useNavigate } from 'react-router-dom';
import data from '../../data';
import Logo from '../../assets/logo.svg';
import Prev from '../../assets/seta.svg';

export default function Teach({ id }) {
  const currentUser = data.find(dado => dado.id === id);
  const navigate = useNavigate();

  return (
    <div className="container">
      <img src={Prev} alt='seta' className='prev-img' onClick={() => navigate(-1)} />
      <div className='logo-img'>
        <img src={Logo} alt='logo' />
      </div>
      <div className='user'>
        <img src={currentUser.avatar} alt='avatar' />
        <h1>{currentUser.name}</h1>
        <span>{currentUser.stack}</span>
        <div className='bio'>
          <p>Bio</p>
          <div className='description'>
            <span>{currentUser.bio}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
