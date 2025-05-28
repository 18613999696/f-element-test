/* eslint-env node */
module.exports = {
  types: [
    { value: 'feat',     name: 'feat:     新增功能' },
    { value: 'fix',      name: 'fix:      修复 bug' },
    { value: 'docs',     name: 'docs:     文档变更' },
    { value: 'style',    name: 'style:    代码格式（不影响代码运行的变动）' },
    { value: 'refactor', name: 'refactor: 重构（既不是新增功能，也不是修复 bug）' },
    { value: 'test',     name: 'test:     添加测试' },
    { value: 'chore',    name: 'chore:    构建过程或辅助工具的变动' },
    { value: 'perf',     name: 'perf:     性能优化' },
    { value: 'ci',       name: 'ci:       持续集成相关更改' },
    { value: 'revert',   name: 'revert:   回滚操作' }
  ],
  messages: {
    type: '请选择提交类型:',
    subject: '请简要描述提交内容（不超过 72 个字符）:',
    confirmCommit: '确认使用以上信息提交？(y/n)'
  },
  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['scope', 'body', 'breaking', 'footer', 'confirmCommit'],
  subjectLimit: 72
};