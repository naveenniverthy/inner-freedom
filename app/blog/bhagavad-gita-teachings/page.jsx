import BlogArticleLayout from "../BlogArticleLayout";
import { getBlogPost } from "../blogData";

const post = getBlogPost("bhagavad-gita-teachings");

export const metadata = {
  title: post.metadataTitle,
  description: post.metadataDescription,
  keywords: post.keywords
};

export default function BhagavadGitaTeachingsPage() {
  return <BlogArticleLayout post={post} />;
}
