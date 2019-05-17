import React from 'react';
import ErrorBoundaries from './ErrorBoundaries';
import Bad from './Bad';
import Good from './Good';

export default function App() {
  return (
    <>
      <ErrorBoundaries>
        <Bad />
      </ErrorBoundaries>
      <Good />
    </>
  );
}
