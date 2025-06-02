import Search from "../../components/Search";
import { useEffect, useState } from 'react';

interface Repo{
    name: string;
    description: string;
  }

export function Home() {
  const [repos, setRepos] = useState<Repo[]>([]);


    useEffect( () => {
      const fetchRepos = async () => {
        try {
          const response = await fetch('https://api.github.com/users/newthiagoassisk8/repos');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setRepos(data);
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
      };

      fetchRepos();
    })

    return (
        <>
          <Search/>
          <ul>
            {repos.map((repo) => (
              <li key={repo.name}>
                <h2>{repo.name}</h2>
                <p>{repo.description}</p>
              </li>
            ))}
          </ul>

        </>
      )
}

export default Home;
