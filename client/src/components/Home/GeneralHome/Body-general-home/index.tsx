import { ApiUser } from "../../../../services/useRandom";
import { UserContent } from "./styles";

export function BodyGeneralHome() {
  return (
    <div style={{ width: "80vw", height: "70vh", background: "#121214", borderRadius: "1rem" }}>
      <div style={{ display:"flex", flexDirection:"column", margin:"10px", gap:"10px" }}>
        <UserContent> <ApiUser/> </UserContent>
        <UserContent> qualquer coisa</UserContent>
        <UserContent> qualquer coisa</UserContent>
        <UserContent> qualquer coisa</UserContent>
        <UserContent> qualquer coisa</UserContent>
        <UserContent> qualquer coisa</UserContent>
      </div>

    </div>
  )
}