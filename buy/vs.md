<div id="compire">
    <el-table :data="tableData" style="width: 100%"   height="90vh">
      <el-table-column
        label="序号"
        type="index"
        width="100"
        align="center">
     </el-table-column>
      <el-table-column
        align="center"
        prop="title"
        width="200"
        label="权益">
      </el-table-column>
      <el-table-column
        align="center"
        prop="first"
        label="DataV">
          <template slot-scope="scope">
            <el-tag type="success" v-if="scope.row.first === true">✅</el-tag>
            <el-tag type="danger" v-if="!scope.row.first === true">❌️</el-tag>
            <div v-if="typeof scope.row.first === 'string'">{{scope.row.first}}</div>
          </template>
      </el-table-column>
    <el-table-column
        align="center"
        prop="second"
        label="AvueData">
          <template slot-scope="scope">
            <el-tag type="success" v-if="scope.row.second === true">✅</el-tag>
            <el-tag type="danger" v-if="!scope.row.second === true">❌️</el-tag>
            <div v-if="typeof scope.row.second === 'string'">{{scope.row.second}}</div>
          </template>
      </el-table-column>
        <el-table-column
        align="center"
        prop="three"
        label="AvueData">
          <template slot-scope="scope">
            <el-tag type="success" v-if="scope.row.three === true">✅</el-tag>
            <el-tag type="danger" v-if="!scope.row.three === true">❌️</el-tag>
            <div v-if="typeof scope.row.three === 'string'">{{scope.row.three}}</div>
          </template>
      </el-table-column>
    </el-table>
</div>

<script>
new Vue({
  el: '#compire',
  data() {
    return {
      tableData: [{
    title: '金额', 
    first: '￥8000',
    second: '￥2999',
    three: '￥3999'
},{
    title: 'mybatis-mate',
    first: false,
    second: true,
    three: false
},{
    title: 'Spring Cloud Alibaba',
    first: true,
    second: true,
    three: true
}, {
    title: 'Spring Boot 2.6.x',
    first: true,
    second: true,
    three: true
}, {
    title: 'Spring Cloud 2021',
    first: true,
    second: true,
    three: true
}, {
    title: 'Spring Cloud Gateway',
    first: true,
    second: true,
    three: true
}, {
    title: 'MyBatis Plus 3.5.x',
    first: true,
    second: true,
    three: true
}, {
    title: '前后端代码生成',
    first: true,
    second: true,
    three: true
}, {
    title: '多数据库代码生成',
    first: false,
    second: true,
    three: true
}, {
    title: '移动端解决方案',
    first: false,
    second: true,
    three: true
}, {
    title: 'OAuth2.0高性能模式',
    first: false,
    second: true,
    three: true
}, {
    title: '分布式事务解决方案',
    first: false,
    second: true,
    three: true
}, {
    title: 'Activiti 工作流',
    first: false,
    second: true,
    three: true
}, {
    title: '微信公众号管理',
    first: false,
    second: true,
    three: true
}, {
    title: '微信支付宝收单',
    first: false,
    second: true,
    three: true
}, {
    title: '在线报表设计BI',
    first: false,
    second: true,
    three: true
}, {
    title: '在线大屏设计',
    first: false,
    second: true,
    three: true
}, {
    title: '灰度路由',
    first: false,
    second: true,
    three: true
}, {
    title: 'Dubbo3',
    first: false,
    second: true,
    three: true
}, {
    title: 'SAAS 多租户',
    first: false,
    second: true,
    three: true
}, {
    title: 'SSO单点登录',
    first: false,
    second: true,
    three: true
}, {
    title: '短信、社交登录',
    first: false,
    second: true,
    three: true
}, {
    title: '服务端动态路由',
    first: false,
    second: true,
    three: true
}, {
    title: 'knife4j 接口文档',
    first: false,
    second: true,
    three: true
}, {
    title: 'Sentinel 服务保护',
    first: false,
    second: true,
    three: true
}, {
    title: '图形化定时任务、数据权限',
    first: false,
    second: true,
    three: true
}, {
    title: '图形化客户端',
    first: false,
    second: true,
    three: true
}, {
    title: '分布式Druid 监控',
    first: false,
    second: true,
    three: true
}, {
    title: 'xss 安全过滤',
    first: false,
    second: true,
    three: true
}, {
    title: '数据脱敏',
    first: false,
    second: true,
    three: true
}, {
    title: 'Websocket',
    first: false,
    second: true,
    three: true
}, {
    title: '组件starter 、bom模块化',
    first: false,
    second: true,
    three: true
}, {
    title: '分布式文件系统',
    first: false,
    second: true,
    three: true
}, {
    title: 'Feign自动降级',
    first: false,
    second: true,
    three: true
}, {
    title: '顶部菜单、无限层级路由缓冲',
    first: false,
    second: true,
    three: true
}, {
    title: 'Git私服',
    first: false,
    second: true,
    three: true
}, {
    title: '配套文档视频',
    first: false,
    second: true,
    three: true
}, {
    title: '发版群、工单支持',
    first: false,
    second: true,
    three: true
}, {
    title: '安全建议订阅',
    first: false,
    second: true,
    three: true
}, {
    title: '企业 maven archetype',
    first: false,
    second: true,
    three: true
}, {
    title: 'SSO-SDK源码',
    first: false,
    second: true,
        three: true

}, {
    title: '商业版权',
    first: false,
    second: true,
        three: true

}, {
    title: '专属版本',
    first: false,
    second: true,
        three: true

}, {
    title: '自助修改包名',
    first: false,
    second: true,
        three: true

}]
    }
  }
});
</script>
