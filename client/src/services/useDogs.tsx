import { useEffect, useState } from "react";

export function ApiDogs() {
  const [dogs, setDogs] = useState<string>()

  useEffect(() => {
    fetch('https://random.dog/woof.json')
      .then((response) => response.json())
      .then((data) => setDogs(data.url))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <div>
        <img src={dogs} />
      </div>
    </div>
  )

}