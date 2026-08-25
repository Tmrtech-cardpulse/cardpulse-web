import type { Cluster, Post } from '@/content/types';

import { authenticityPosts } from './authenticity';
import { carePosts } from './care';
import { gradingPosts } from './grading';
import { productPosts } from './products';
import { rookiePosts } from './rookies';
import { sellingPosts } from './selling';
import { valuationPosts } from './valuation';

/**
 * Every post, including ones not yet due.
 *
 * **Nothing user-facing should read this.** Use `publishedPosts()`, which
 * applies the date. This export exists for the sitemap, the verify script and
 * `generateStaticParams`, all of which need the full set for their own reasons.
 */
export const allPosts: Post[] = [
  ...valuationPosts,
  ...gradingPosts,
  ...sellingPosts,
  ...productPosts,
  ...rookiePosts,
  ...authenticityPosts,
  ...carePosts,
];

/**
 * Posts whose publication date has arrived, newest first.
 *
 * Fifty posts appearing on one day is the signature of scaled content abuse
 * under Google's spam policies, regardless of who wrote them or how good they
 * are. So the set is written once and released over weeks by date alone: this
 * function is the whole mechanism, and moving a launch date is a one line edit.
 *
 * Evaluated per request rather than at module load, and the routes that call it
 * set `revalidate`, so a post becomes live on its date without a redeploy.
 */
export function publishedPosts(now: Date = new Date()): Post[] {
  return allPosts
    .filter((p) => new Date(p.published) <= now)
    .sort((a, b) => b.published.localeCompare(a.published));
}

export function postBySlug(slug: string): Post | undefined {
  return allPosts.find((p) => p.slug === slug);
}

/** Whether a post is due. The route uses this to 404 anything scheduled. */
export function isPublished(post: Post, now: Date = new Date()): boolean {
  return new Date(post.published) <= now;
}

/** Published posts in one cluster, for the cluster strips on the index. */
export function postsInCluster(cluster: Cluster, now: Date = new Date()): Post[] {
  return publishedPosts(now).filter((p) => p.cluster === cluster);
}

/** Clusters that currently have at least one published post. */
export function activeClusters(now: Date = new Date()): Cluster[] {
  const seen: Cluster[] = [];
  for (const p of publishedPosts(now)) {
    if (!seen.includes(p.cluster)) seen.push(p.cluster);
  }
  return seen;
}
