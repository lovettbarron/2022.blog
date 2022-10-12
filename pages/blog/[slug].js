import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";
import styled, { css } from "styled-components";
import { Stack, Inline, Split, Cover, Frame } from "@bedrock-layout/primitives";

export default function PostPage({
  frontmatter: { title, date, thumbnail },
  slug,
  content,
}) {
  console.log(title);
  return (
    <Stack>
      <Inline>
        <Link href="/">
          <a className="btn btn-back">Go Back</a>
        </Link>
      </Inline>
      <div className="card card-page">
        <h1 className="post-title">{title}</h1>
        <div className="post-date">Posted on {date}</div>
        <img src={thumbnail} alt="" />
        <div className="post-body">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </Stack>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("blog"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("blog", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
