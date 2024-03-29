import { getWordPressProps, WordPressTemplate } from '@faustwp/core';
export default function Page(props) {
  return <WordPressTemplate {...props} />;
}

export async function getStaticProps(ctx) {
  return getWordPressProps({ ctx });
}
