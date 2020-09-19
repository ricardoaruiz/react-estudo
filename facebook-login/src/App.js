import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import './App.css';

//https://www.djamware.com/post/5e6d6a9a05efef95f94c4aed/reactjs-tutorial-facebook-login-example
function App() {

  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');

  const responseFacebook = async (response) => {
    try {
      const { accessToken } = response;
      const userConfirmation = await axios.get(
        `http://localhost:3333/auth/facebook/token?access_token=${accessToken}`)

      const { data } = userConfirmation;
      console.log('response do facebook', response)
      console.log('response do node', userConfirmation);


      if (data.NAME) {

        setData(response);
        setPicture(response.picture.data.url);
        if (response.accessToken) {
          setLogin(true);
        } else {
          setLogin(false);
        }
      }
    } catch (error) {
      console.log('Erro ao autenticar pelo facebook');
    }
  }

  return (
    <div>
      { !login &&
        <FacebookLogin
          appId="2745270305726481"
          autoLoad={false}
          fields="name,email,picture"
          scope="public_profile"
          callback={responseFacebook}
          icon="fa-facebook" />
      }
      { login &&
        <>
          <div className="avatar">
            <img src={picture} alt="teste" />
          </div>
          <p>{data.email}</p>
        </>
      }
    </div>
  );
}

export default App;
