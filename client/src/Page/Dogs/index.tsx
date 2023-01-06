import { CmpDogs } from "../../components/Dogs";
import { ApiDogs } from "../../services/useDogs";
import { ApiUser } from "../../services/useRandom";

export function PageDogs() {
  return (
    <div>
      <ApiDogs />
    </div>
  )
}