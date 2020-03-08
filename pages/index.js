import Layout from '../Components/Layout';
import Link from 'next/link';
import Test from '../Components/Test';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import { useRouter } from 'next/router';

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

const Cc = () => (
  <div className="test-wrapper">
    <Test />
  </div>
)

const Index = props => {
  const { query } = useRouter();
  const { data, error } = useSWR(
    `/api/randomQuote${query.author ? '?author=' + query.author : ''}`,
    fetcher
  );
  // The following line has optional chaining, added in Next.js v9.1.5,
  // is the same as `data && data.author`
  const author = data?.author;
  let quote = data?.quote;


  if (!data) quote = 'Loading...';
  if (error) quote = 'Failed to fetch the quote.';

  return (
    <div className="aaa">
      <Layout>
      <div className="quote">{quote}</div>
      {author && <span className="author">- {author}</span>}
        <h1>Batman TV Shows</h1>
        <ul>
          {props.shows.map(show => (
              <li key={show.id}>
                <Link
                  href="/p/[id]"
                  as={`/p/${show.id}`}
                >
                  <a>{show.name}</a>
                </Link>
              </li>
            ))}
        </ul>
        <div>
          sss
          <span className="a">123</span>
        </div>
        <div>123</div>
        <div className="stt">
          <Cc />
        </div>
      </Layout>
      <style jsx>
        {`
          div {
            color: pink;
          }
        `}
      </style>
      <style jsx>
        {`
          h1 {
            color: orange;
          }
          .stt {
            color: red;
          }
        `}
        </style>
    </div>
  )
}

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(data)

  return {
    shows: data.map(entry => entry.show)
  }
}

export default Index