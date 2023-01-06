import { ApiDogs } from "../../../services/useDogs";

export function BodyGeneralDogs() {
  return (
    <div style={{ width: "80vw", height: "70vh", background: "#121214", borderRadius: "1rem" }}>
      <div style={{ display:"flex", flexDirection:"column", margin:"10px", gap:"10px" }}>
        <ApiDogs/>
      </div>
    </div>
  )
}