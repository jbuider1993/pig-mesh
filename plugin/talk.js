let talkHtml = ` 
### 💬 本章交流 

<div id='gitalk-container'></div>

<script>
var gitalk = new Gitalk({
  clientID: 'a5dd5d136c3c290e1130',
  clientSecret: '4687bb9dcd6eadb82a5d5865b57160c151ba9cde',
  repo: 'gitalk',
  owner: 'supoxz',
  admin: ['supoxz','lltx'],
  id: (window.location.href.indexOf('?') > 0 ? window.location.href.substring(0,window.location.href.indexOf('?')) :window.location.href).replaceAll("https://pig4cloud.com/#/",""), 
  title: '文档反馈',
  labels: ['pig'],
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

    if (url.indexOf('datav') > 0) {
      return html + talkHtml;
    }

    return html;
  });
};
