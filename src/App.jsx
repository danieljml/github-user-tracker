import { useState } from 'react';
import './App.css';
import './index.css';
import Header from './components/header';
import Input from './components/input';
import Main from './components/main';
import BasicAlert from './components/alert';
const githubApi = 'https://api.github.com/users';

const getGithubUser = async name => {
  try {
    const res = await fetch(`${githubApi}/${name.trim()}`);
    const data = await res.json();
    if (res.status === 200) {
      return { data, severity: 'success', message: 'Success request' };
    }
    return { severity: 'error', message: 'User not found' };
  } catch (error) {
    console.log(error);
  }
};

function App() {
  const [user, setUser] = useState(null);
  const [popup, setPopup] = useState({ open: false });

  const handlerSubmitUser = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { user } = Object.fromEntries(formData.entries());
    const { data, severity, message } = await getGithubUser(user);
    setUser(data || null);
    setPopup({ open: true, severity, message });
    handlerAlert();
    e.target.reset();
  };

  const handlerAlert = () =>
    setTimeout(() => {
      setPopup({ open: false });
    }, 2500);

  return (
    <>
      <div className="app">
        <Header />
        <form className="form__search-user" onSubmit={handlerSubmitUser}>
          <Input />
        </form>
        <Main user={user} />
      </div>
      {popup.open ? <BasicAlert {...popup} /> : ''}
    </>
  );
}

export default App;
