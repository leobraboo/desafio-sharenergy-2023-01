import { useState } from "react";

export function SideBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div style={{ width: open ? "13rem" : "4rem", transition:"ease-in 500ms", height:"100vh", background:"#121214" }} onClick={() => setOpen(!open)} >

    </div>
    </>
  )
}