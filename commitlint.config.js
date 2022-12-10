module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['create', 'delete', 'update', 'docs', 'fix', 'test']],
  },
};
