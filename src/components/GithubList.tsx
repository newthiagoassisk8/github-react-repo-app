import type {asdf} from "../types/types"



const GithubList = ({listaRepos}: {listaRepos:asdf[]}) => {

    return(
          <ul>
            {listaRepos.map((repo) => (
              <li key={repo.name}>
                <h2>{repo.name}</h2>
                <p>{repo.description}</p>
              </li>
            ))}
          </ul>

    )

}

export default GithubList
