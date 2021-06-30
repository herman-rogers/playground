const deduplicate = require('./deduplicate-array');

test('removes duplicates in an array', () => {
  const mockArray = ['dog', 'cat', 'horse', 'dog', 'cat'];

  expect(deduplicate(mockArray)).toEqual(['dog', 'cat', 'horse']);
});