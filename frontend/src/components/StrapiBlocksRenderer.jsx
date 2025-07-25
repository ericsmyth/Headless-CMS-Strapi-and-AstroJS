import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export default function StrapiBlocksRenderer({ content }) {
    return <BlocksRenderer content={content} />;
}