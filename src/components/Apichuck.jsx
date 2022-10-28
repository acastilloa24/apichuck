import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';

const Apichuck = () => {
    const limit = 25;
    const array = [];
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        const getJokes = async () => {
            const url = "https://api.chucknorris.io/jokes/random";
            let i = 0;
            while (i <= limit){
                const result = await axios.get(url)
                array.push(result.data)
                i++;
            }
            setJokes(array);
            
        }

        getJokes();
    }, [])
    
  return (
    <div>
        <ul>
            {
                jokes.map((item, i) => (<li key={i}><span>{i} ---- </span>{item.id}</li>))
            }
        </ul>
    </div>
  )
}

export default Apichuck