import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../consts';

export async function GET(context) {
  const carnets = (await getCollection('carnets')).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site,
    items: carnets.map((entry) => ({
      title: entry.data.title,
      pubDate: entry.data.date,
      description: entry.data.teaser ?? '',
      link: `/carnets/${entry.id}/`,
    })),
    customData: `<language>fr</language>`,
  });
}
