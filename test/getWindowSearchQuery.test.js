import { describe, expect, test, beforeEach } from 'vitest'
import { getWindowSearchQuery } from '../src/index.js';

describe('getWindowSearchQuery', () => {
  const originalWindowLocation = window.location;

  beforeEach(() => {
    window.location = originalWindowLocation;
  });

  test('getWindowSearchQuery', () => {
    window.location.search = '?a=1&b=2';

    const search = getWindowSearchQuery();
    expect(search).deep.eq({
      a: '1',
      b: '2',
    });
  });
});
