import BlogArticleLayout from "../BlogArticleLayout";
import { getBlogPost } from "../blogData";

const post = getBlogPost("path-to-inner-freedom");

export const metadata = {
  title: post.metadataTitle,
  description: post.metadataDescription,
  keywords: post.keywords
};

export default function PathToInnerFreedomPage() {
  return <BlogArticleLayout post={post} />;
}
