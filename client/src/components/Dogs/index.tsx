import { useState, useEffect } from "react";
import { apiDogs } from "../../services/apis";
import { ContainerDogs, BtnDogs, Content, ImgDogs } from "./styles";


export function CmpDogs() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    async function loadDogs() {
      const response = await apiDogs.get('/woof.json');
      setDogs(response.data.url);
    }
    loadDogs()
  }, [])

  async function uptadeDogs() {
    const response = await apiDogs.get('/woof.json');
    setDogs(response.data.url);
  }

  return (
    <ContainerDogs>
      <Content>
        <ImgDogs>
          <img style={{ height: "60vh", width: "70%" }} src={`${dogs}`} />
        </ImgDogs>
        <BtnDogs onClick={uptadeDogs}>
          <button>Clique para atualizar o Doguinho</button>
        </BtnDogs>
      </Content>
    </ContainerDogs>
  )
}