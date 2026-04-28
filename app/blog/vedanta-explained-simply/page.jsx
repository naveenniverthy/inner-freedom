import BlogArticleLayout from "../BlogArticleLayout";
import { getBlogPost } from "../blogData";

const post = getBlogPost("vedanta-explained-simply");

export const metadata = {
  title: post.metadataTitle,
  description: post.metadataDescription,
  keywords: post.keywords
};

export default function VedantaExplainedSimplyPage() {
  return <BlogArticleLayout post={post} />;
}
