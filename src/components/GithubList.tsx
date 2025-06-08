
export type asd = {
    id:number,
    name:string,
    full_name:string,
    private:boolean,
    url:string
    description:string

}


const GithubList = ({listaRepos}: {listaRepos:asd[]}) => {

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
