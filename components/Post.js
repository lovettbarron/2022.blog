import Link from "next/link";
import styled, { css } from "styled-components";
import { Stack, Inline, Split, Cover, Frame } from "@bedrock-layout/primitives";

export default function Post({ post }) {
  return (
    <Stack>
      <Inline>
        <img src={post.frontmatter.cover_image} alt="" />
        <div className="post-date">Posted on {post.frontmatter.date}</div>
      </Inline>

      <h3>{post.frontmatter.title}</h3>

      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`}>
        <a className="btn">Read More</a>
      </Link>
    </Stack>
  );
}
