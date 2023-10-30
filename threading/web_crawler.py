from concurrent.futures import ThreadPoolExecutor, as_completed
from collections import deque


class Solution: 
    def crawl(self, startUrl: str, htmlParser: 'htmlParser') -> List[str]:
        # http://example.com:12345/path/to/file.html
        get_base = lambda url: url.split('/')[2]
        current_site = get_base(startUrl)
        visited = set([startUrl])
        
        with ThreadPoolExecutor(max_workers= 10) as ex:
            dq = deque([ex.submit(htmlParser.getUrls, startUrl)])
            while dq and as_completed(dq):
                current_urls = dq.popleft().result()
                for url in current_urls: 
                    if url not in visited and get_base(url) == current_site: 
                        visited.add(url)
                        dq.append(ex.submit(htmlParser.getUrls, url))
        return list(visited)


