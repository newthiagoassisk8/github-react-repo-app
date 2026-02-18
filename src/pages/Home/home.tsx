import GithubList from "../../components/GithubList";
import Search from "../../components/Search";
import { useEffect, useState } from 'react';
import { type asdf } from "../../types/types";

interface Repo{
    name: string;
    description: string;
  }
// TODO: Aplicar e entender o hook reducer aqui
export function Home() {
  const [repos, setRepos] = useState<asdf[]>([]);


    useEffect( () => {
      const fetchRepos = async () => {
        try {
          const response = await fetch('example.json');
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
    },[])

    return (
        <>
          <Search/>
          <GithubList listaRepos={repos} />


        </>
      )
}

export default Home;
