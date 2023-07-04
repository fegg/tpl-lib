import { isBrowser } from './isBrowser';

/**
 * 获取浏览器的 search query
 */
export function getWindowSearchQuery() {
  if (!isBrowser) {
    throw new Error('getUrlQuery 方法必须在浏览器环境使用');
  }

  const search = window.location.search;

  if (!search) {
    return {};
  }

  const map = {};
  let groups = search;

  if (groups.indexOf('?') === 0) {
    groups = groups.substring(1);
  }

  groups.split('&').forEach(function (item) {
    const [key, value] = item.split('=');
    const _key = decodeURIComponent(key);
    const _value = decodeURIComponent(value);

    map[_key] = _value;
  });

  return map;
}
