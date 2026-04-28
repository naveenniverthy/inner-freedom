import BlogArticleLayout from "../BlogArticleLayout";
import { getBlogPost } from "../blogData";

const post = getBlogPost("what-is-moksha");

export const metadata = {
  title: post.metadataTitle,
  description: post.metadataDescription,
  keywords: post.keywords
};

export default function WhatIsMokshaPage() {
  return <BlogArticleLayout post={post} />;
}
