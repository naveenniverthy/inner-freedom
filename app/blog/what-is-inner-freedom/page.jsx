import BlogArticleLayout from "../BlogArticleLayout";
import { getBlogPost } from "../blogData";

const post = getBlogPost("what-is-inner-freedom");

export const metadata = {
  title: post.metadataTitle,
  description: post.metadataDescription,
  keywords: post.keywords
};

export default function WhatIsInnerFreedomPage() {
  return <BlogArticleLayout post={post} />;
}
