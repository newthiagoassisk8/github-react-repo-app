import type { asdf } from '../types/types';

type GithubListProps = {
    listaRepos: asdf[];
    onRepoClick: () => void;
};
const GithubList = ({ listaRepos, onRepoClick }: GithubListProps) => {
    return (
        <ul>
            <button onClick={onRepoClick}>dsdsds</button>

            {listaRepos.map((repo) => (
                <li key={repo.name}>
                    <h2>{repo.name}</h2>
                    <p>{repo.description}</p>
                </li>
            ))}
        </ul>
    );
};

export default GithubList;
