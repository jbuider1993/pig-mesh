let talkHtml = ` 
### 💬 本章交流 

<div id='gitalk-container'></div>

<script>
var gitalk = new Gitalk({
  clientID: 'ec62f63fe99b3e07cea9',
  clientSecret: '733636b1038e2d3256cc915de9a4fac22585ae36',
  repo: 'gitalk',
  owner: 'supoxz',
  admin: ['supoxz','lltx'],
  id: 'datav',
  title: '文档反馈',
  labels: ['datav'],
  body:  location.href,
  distractionFreeMode: false  // Facebook-like distraction free mode
})

gitalk.render('gitalk-container')
</script>
`;

// 注入插件
const gittalk = function (hook) {
  hook.beforeEach(function (html) {
    let url = window.location.href;

    if (url.indexOf('docs') > 0) {
      return html + talkHtml;
    }

    return html;
  });
};
