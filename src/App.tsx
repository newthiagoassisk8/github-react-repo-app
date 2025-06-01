
import { useEffect, useState } from 'react';
import './App.css'

interface Repo{
  name: string;
  description: string;
}
function App() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

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
      <h1>My Repositories</h1>
      <input
      name='search'
      type='text'
      placeholder='Search repositories...'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
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

export default App
