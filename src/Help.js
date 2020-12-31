import React, { useState } from 'react';
import Button from './components/Button';
import Api from './services/Api';

const Help = (props) => {
  const [token, setToken] = useState(null);

  const onAuthClick = async () => {
    const data = await Api.post('auth', { login: "esenin", password: "password" });
    const { data: json } = data;

    console.log(json);
    setToken(json.token);
  };

  const onAllBeverageClick = async () => {
    const data = await Api.get('beverages');
    console.log(data);
  };

  const onCreateBeverageClick = async () => {
    const data = await Api.post(
      'beverages',
      {
        "id": null,
        "beverage_name": "jopa",
        "description": "hz",
        "recipe": "how to do it",
        "creator_id": 1
      },
      { token }
    );
    console.log(data);
  };

  const onDeleteBeverageClick = async () => {
    const data = await Api.delete('beverages/2', { token });
    console.log(data);
  };

  const onUpdateBeverageClick = async () => {
    const data = await Api.put(
      'beverages', 
      { 
        beverage_name: 'сhupachups',
        recipe: 'how to do it 123',
        description: 'hz',
        creator_id: 1,
        id: 4
      }, 
      { token });
      
      console.log(data);
  };
}

export default Help;
