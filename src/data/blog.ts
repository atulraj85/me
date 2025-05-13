import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { notFound } from "next/navigation";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

function getMDXFiles(dir: string) {
  try {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error);
    return [];
  }
}

export async function markdownToHTML(markdown: string) {
  try {
    const p = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypePrettyCode, {
        theme: {
          light: "min-light",
          dark: "min-dark",
        },
        keepBackground: false,
      })
      .use(rehypeStringify)
      .process(markdown);

    return p.toString();
  } catch (error) {
    console.error("Error converting markdown to HTML:", error);
    return markdown; // Fallback to raw markdown if processing fails
  }
}

export async function getPost(slug: string) {
  try {
    const filePath = path.join("content", `${slug}.mdx`);
    let source = fs.readFileSync(filePath, "utf-8");
    const { content: rawContent, data: metadata } = matter(source);
    const content = await markdownToHTML(rawContent);
    return {
      source: content,
      metadata,
      slug,
    };
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
      console.error(`Post not found: ${slug}`);
      return notFound();
    }
    console.error(`Error loading post ${slug}:`, error);
    throw error; // Re-throw for the caller to handle
  }
}

async function getAllPosts(dir: string) {
  try {
    let mdxFiles = getMDXFiles(dir);
    return await Promise.all(
      mdxFiles.map(async (file) => {
        let slug = path.basename(file, path.extname(file));
        try {
          let { metadata, source } = await getPost(slug);
          return {
            metadata,
            slug,
            source,
          };
        } catch (error) {
          console.error(`Error processing file ${file}:`, error);
          return null;
        }
      }),
    ).then(posts => posts.filter(Boolean)); // Filter out null values
  } catch (error) {
    console.error(`Error loading posts from ${dir}:`, error);
    return [];
  }
}

export async function getBlogPosts() {
  return getAllPosts(path.join(process.cwd(), "content"));
}