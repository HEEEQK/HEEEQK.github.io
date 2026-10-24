// 核心配置：只保留必要项，避免重复操作
/*window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],    // 行内公式分隔符
    displayMath: [["\\[", "\\]"]],   // 块级公式分隔符
    processEscapes: true             // 允许转义字符
  },
  svg: {
    fontCache: 'global'              // 优化字体缓存，避免渲染异常
  },
  options: {
    ignoreHtmlClass: "tex2jax_ignore|dno",  // 适配 MkDocs 的忽略类
    processHtmlClass: "tex2jax_process|arithmatex"  // 正确的处理类
  }
};

// 简化渲染逻辑：只在页面加载/更新后执行一次渲染
document$.subscribe(() => {
  MathJax.typesetPromise()
    .catch(err => console.error('MathJax 渲染失败:', err));
});
*/

window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],    // 行内公式分隔符
    displayMath: [["\\[", "\\]"]],   // 块级公式分隔符
    processEscapes: true             // 允许转义字符
  },
  // 注：你引用的核心库是 tex-mml-chtml.js，输出的是 CHTML，
  // 所以 svg: { fontCache: 'global' } 其实不会生效，但留着也无妨，不报错。
  svg: {
    fontCache: 'global'
  },
  options: {
    // 👇 关键修改：忽略所有普通元素，只精准处理被 arithmatex 扩展包裹的元素
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

document$.subscribe(() => {
  MathJax.typesetPromise()
    .catch(err => console.error('MathJax 渲染失败:', err));
});