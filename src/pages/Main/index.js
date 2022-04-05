import './style.css';
import data from '../../data';
import Logo from '../../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';


export default function Main({ setId, setAuthenticatid }) {
  const navigate = useNavigate();
  function handleChangerPage() {
    setAuthenticatid(false);
    navigate(-1);
  };

  return (
    <div className="container">
      <div className='logo-img'>
        <img src={Logo} alt='logo' onClick={() => handleChangerPage()} />
      </div>
      <div className='teachers'>
        {data.map(dado =>
          <Link to={`/teach/:${dado.id}`} key={dado.id} className='link'>
            <div className='teacher' onClick={() => setId(dado.id)}>
              <img src={dado.avatar} alt='avatar' />
              <h1>{dado.name}</h1>
            </div>
          </Link>
        )};
      </div>
    </div>
  );
}


