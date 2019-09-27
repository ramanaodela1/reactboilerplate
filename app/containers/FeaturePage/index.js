import React from 'react';
import { Helmet } from 'react-helmet';

export default function FeaturePage() {
  return (
    <div>
      <Helmet>
        <title>Feature Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <h1>Feature Page</h1>
      <p>
        Use Redux to take control of your application’s state and keep state
        mutations manageable. If you have it, the boilerplate works with the
        Chrome Redux DevTools extension to allow you to see, play back, and
        change your action history!
      </p>
      <p>
        Enjoy the best DX and code your app at the speed of thought! Your saved
        changes to the CSS and JS are reflected instantaneously without
        refreshing the page. Preserve application state even when you update
        something in the underlying code!
      </p>
    </div>
  );
}
