import React from 'react';
import { gql } from '@apollo/client';

export default function CoreCode(props) {
  return (
    <div key="core-block">
      <h1>CoreCode</h1>
      <h2>Component content:</h2>
      <pre>
        {props.attributes.content}
      </pre>
    </div>
  );
}


CoreCode.fragments = {
  key: `CoreCodeBlockFragment`,
  entry: gql`
    fragment CoreCodeBlockFragment on CoreCode {
      attributes {
        content

      }
    }
  `,
}; 
