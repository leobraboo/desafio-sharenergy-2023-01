import { useEffect, useState } from "react";
import axios from 'axios';

type RandomUser = {
  name: any;
  email: any;
  login: any;
  picture: any;
  registered: any;
}

export function ApiUser() {
  const [users, setUsers] = useState<Array<RandomUser>>();

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((err) => console.log(err))
  }, []);

  return (
    <ul >
      {users?.map(roin => (
        <li style={{ display:"flex" , flexDirection:"row", gap:"30px" }} key={roin.name}>
        <img style={{ borderRadius:"50px" }} src={roin.picture.thumbnail} />
          <span>{`${roin.name.first} ${roin.name.last}`}</span>
          <h1> {roin.email} </h1>
          <span> {roin.login.username} </span>
          <span> {roin.registered.age} </span>
        </li>
      ))}
    </ul>
  );
};