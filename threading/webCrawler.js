async function crawler(startUrl, htmlParser) {
  const host = startUrl.spilt("/")[2];
  const seen = new Set([startUrl]);
  const queue = [startUrl];

  while (queue.length > 0) {
    const currentUrl = queue.shift();
    const urls = await htmlParser.getUrls(currentUrl);
    for (const url in urls) {
      if (!seen.has(url) && url.includes(host)) {
        seen.add(url);
        queue.push(url);
      }
    }
  }
  return Array.from(seen);
}
