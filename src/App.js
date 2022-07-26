import React,{useContext, useEffect,useReducer} from 'react';
import './App.css';
import Login from './Components/Login';
import { getTokenFromResponse } from './Components/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Components/Player';
import { StateContext } from './index';

const spotify=new SpotifyWebApi();

function App() {

    const fl=useContext(StateContext);
    // console.log(fl);

    const [{ user,token },dispatch]=useReducer(fl.reducer,fl.initialState);
    useEffect(()=>{

        const hash=getTokenFromResponse();
        window.location.hash="";
        const _token=hash.access_token;
        if(_token)
        {

            spotify.setAccessToken(_token);

            dispatch({
                type:'SET_TOKEN',
                token:_token
            });
            
            spotify.getMe().then((user)=>{

                dispatch({
                    type:'SET_USER',
                    user:user,
                })
            });
        }
    },[]);
    console.log(user);
    console.log(token);
    return (
        <div className="App">
        {
            token? <Player /> : <Login/>
        }

        </div>
    );
}

export default App;
