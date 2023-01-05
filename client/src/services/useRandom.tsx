import { useEffect, useState } from "react";
import axios from 'axios';

type RandomUser = {
  name: Array<String>[];
  email: Array<String>[];
  picture: string;
}

export function ApiUser() {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => setUser(data.results[0]));

  }, []);

  return (
    <div>
      {/* <img src={user.picture.large} alt="user avatar" />
      <p>{`${user.name.first} ${user.name.last}`}</p> */}
    </div>

  );
}