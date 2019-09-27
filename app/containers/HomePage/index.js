import React from 'react';
import { Helmet } from 'react-helmet';

export function HomePage() {
  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>Home Page</div>
    </article>
  );
}
export default HomePage;
