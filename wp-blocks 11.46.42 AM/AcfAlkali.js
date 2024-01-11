import React from 'react';
import {gql} from '@apollo/client';

export default function AcfAlkali(props) {
  // convert data to json object to be used in component render
  const blockData = JSON.parse(props.attributes.data);
  return (
    <div>
      <h1>shoudl go here: {blockData.title}</h1>
      <p>Alkali block!</p>
    </div>
  );
}

AcfAlkali.fragments = {
  key: `AcfAlkaliBlockFragment`,
  entry: gql`
    fragment AcfAlkaliBlockFragment on AcfAlkali {
      alkaliBlock {
        title
        description
      }
      attributes {
        data
      }
    }
  `,
};