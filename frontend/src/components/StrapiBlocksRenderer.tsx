import { BlocksRenderer, type BlockContent } from '@strapi/blocks-react-renderer';

export default function StrapiBlocksRenderer({ content }) {
    return <BlocksRenderer content={ content } />;
}