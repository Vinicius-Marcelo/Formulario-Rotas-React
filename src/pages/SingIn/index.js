import './style.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../../assets/logo.svg';

export default function SingIn({ setAuthenticatid }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: ``, password: `` });
  const [showPassword, setShowPassword] = useState(false);
  const [erro, setErro] = useState(``);

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.email || !form.password) {
      return setErro(`Preencha todos os campos.`);
    };
    setErro(``);
    setAuthenticatid(true);
    navigate('/main');
  };

  function handleChangerForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className='login border-radius'>
          <div className='logo'>
            <img src={Logo} alt='logo' />
          </div>

          <input className='border-radius'
            type='email'
            placeholder='E-mail'
            value={form.email}
            name='email'
            onChange={(e) => handleChangerForm(e)} />

          <input className='border-radius'
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            value={form.password}
            name='password'
            onChange={(e) => handleChangerForm(e)} />

          <div className='showpassword'>
            <input type='checkbox'
              name='show-password'
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)} />
            <label htmlFor='show-password'>Mostar Senha</label>
          </div>

          {erro && <strong className='erro'>{erro}</strong>}
          <span>Não tem cadastro?<a href='#'>Clique aqui!</a></span>
          <button className='border-radius'>Login</button>
        </div>
      </form>
    </div>
  );
}


