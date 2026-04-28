import BlogArticleLayout from "../BlogArticleLayout";
import { getBlogPost } from "../blogData";

const post = getBlogPost("why-something-is-missing");

export const metadata = {
  title: post.metadataTitle,
  description: post.metadataDescription,
  keywords: post.keywords
};

export default function WhySomethingIsMissingPage() {
  return <BlogArticleLayout post={post} />;
}
