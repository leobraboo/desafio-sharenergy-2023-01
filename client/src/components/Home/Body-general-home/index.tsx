import { useState, useEffect } from "react";
import { Container, Pagination, PaginationItem, UserContainer, UserContent } from "./styles";
import { RandomUser } from "../../../@types/user";
import randomConfig from "../../../services/apiUser";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";


export function BodyGeneralHome() {
  const [users, setUsers] = useState<Array<RandomUser>>([]);
  const [limit, setLimit] = useState(5);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function loadUsers() {
      const response = await randomConfig.get(`?page=${currentPage}&results=${limit}`);
      setUsers(response.data.results);

    }
    loadUsers()
  }, [limit, currentPage])

  return (
    <Container>
      <div>
        <UserContainer>
          {users?.map((roin) => (
            <UserContent key={roin.name}>
              <img style={{ borderRadius: "50px" }} src={roin.picture.thumbnail} />
              <span>{`${roin.name.first} ${roin.name.last}`}</span>
              <h1> {roin.email} </h1>
              <span> {roin.login.username} </span>
              <span> {roin.registered.age} </span>
            </UserContent>
          ))}
        </UserContainer>
      </div>
      <footer style={{ display: "flex", justifyContent: "center" }}>
        <Pagination>
          {currentPage ? 
            <IoCaretBack size={23} onClick={() => setCurrentPage(currentPage - 1)} /> : ""
          }
          <PaginationItem
            onClick={() => setCurrentPage(currentPage)}>
            {currentPage}
          </PaginationItem>
          <IoCaretForward size={23} onClick={() => setCurrentPage(currentPage + 1)} />
        </Pagination>
      </footer>
    </Container>
  )
}