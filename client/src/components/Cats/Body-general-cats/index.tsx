import { ContainerBody, ContentCats, ContentFooter, FooterCats, Legends, LinksCats } from "../styles";


export function BodyCats() {
  return (
    <>
      <ContainerBody>
        <ContentCats>
          <LinksCats> <a href="https://http.cat/100">100</a> </LinksCats>
          <LinksCats> <a href="https://http.cat/101">101</a> </LinksCats>
          <LinksCats> <a href="https://http.cat/102">102</a> </LinksCats>
          <LinksCats> <a href="https://http.cat/103">103</a> </LinksCats>
          <LinksCats> <a href="https://http.cat/200">200</a> </LinksCats>
        </ContentCats>
        <ContentCats>
          <LinksCats> <a href="https://http.cat/201">201</a> </LinksCats>
          <LinksCats> <a href="https://http.cat/202">202</a> </LinksCats>
          <LinksCats> <a href="https://http.cat/203">203</a> </LinksCats>
          <LinksCats> <a href="https://http.cat/204">204</a> </LinksCats>
          <LinksCats> <a href="https://http.cat/206">206</a> </LinksCats>
        </ContentCats>
        <ContentCats>
          <LinksCats> <a href="https://http.cat/207">207</a> </LinksCats>
          <LinksCats> <a href="https://http.cat/300">300</a> </LinksCats>
          <LinksCats> <a href="https://http.cat/301">301</a> </LinksCats>
          <LinksCats> <a href="https://http.cat/302">302</a> </LinksCats>
          <LinksCats> <a href="https://http.cat/303">303</a> </LinksCats>
        </ContentCats>
        <ContentCats>
          <LinksCats> <a href="https://http.cat/304">304</a>  </LinksCats>
          <LinksCats> <a href="https://http.cat/305">305</a>  </LinksCats>
          <LinksCats> <a href="https://http.cat/307">307</a>  </LinksCats>
          <LinksCats> <a href="https://http.cat/308">308</a>  </LinksCats>
          <LinksCats> <a href="https://http.cat/303">303</a>  </LinksCats>
        </ContentCats>
        <ContentCats>
          <LinksCats> <a href="https://http.cat/303">303</a>  </LinksCats>
          <LinksCats> <a href="https://http.cat/303">303</a>  </LinksCats>
          <LinksCats> <a href="https://http.cat/303">303</a>  </LinksCats>
          <LinksCats> <a href="https://http.cat/303">303</a>  </LinksCats>
          <LinksCats> <a href="https://http.cat/303">303</a>  </LinksCats>
        </ContentCats>
        <ContentCats>
          <LinksCats> <a href="https://http.cat/303">303</a>  </LinksCats>
          <LinksCats> <a href="https://http.cat/303">303</a>  </LinksCats>
          <LinksCats> <a href="https://http.cat/303">303</a>  </LinksCats>
          <LinksCats> <a href="https://http.cat/303">303</a>  </LinksCats>
          <LinksCats> <a href="https://http.cat/303">303</a>  </LinksCats>
        </ContentCats>
      </ContainerBody>
        <FooterCats>
          <ContentFooter>
            <div> <Legends /> <span> Informational Responses </span> </div>
            <div> <Legends /> <span> Successful Responses </span> </div>
          </ContentFooter>
          <ContentFooter>
            <div> <Legends /> <span> Redirection messages </span> </div>
          </ContentFooter>
          <ContentFooter>
            <div> <Legends /> <span> Client error responses </span> </div>
            <div> <Legends /> <span> Server error responses </span> </div>
          </ContentFooter>
        </FooterCats>
    </>
  )
}