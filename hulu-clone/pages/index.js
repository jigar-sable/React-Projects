import Head from 'next/head';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Movies from '../components/Movies';
import requests from '../utils/requests';

export default function Home({ movies }) {
  // console.log(movies)
  return (
    <div>
      <Head>
        <title>Hulu App | NextJS Project</title>
        <meta name="description" content="Hulu Nextjs TailwindCSS Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Movies movies={movies} />

    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.Trending.url}`)
    .then((res) => res.json())

  return {
    props: {
      movies: request.results,
    }
  }
}