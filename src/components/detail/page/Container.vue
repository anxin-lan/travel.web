<template>
  <div class="detail-main">
    <div class="detail-container">
      <div class="discuss">
        <div class="discuss-item">
          <div class="discuss-item-lefttop"><span>5.0</span>分 超赞</div>
          <div class="discuss-item-leftbottom">2354623评论 13条攻略</div>
          <span class="right">&gt;</span>
        </div>
        <div class="discuss-item">
          <div class="discuss-item-righttop">景点简介</div>
          <div class="discuss-item-rightbottom">开放时间、贴士</div>
          <span class="right">&gt;</span>
        </div>
      </div>
      <div class="address">
        <span class="iconfont">&#xe63f;</span>
        陕西省西安市临潼区秦陵北路与秦俑馆公路交叉口
        <span class="right">&gt;</span>
      </div>
      <div class="information">
        <van-notice-bar left-icon="volume-o" text="秦始皇帝陵博物院在做好疫情防控的同时将于2021年9月17日起有序恢复开放。现就恢复开放相关事项公告如下：一.参观须知1、观众测温在37.3℃以下并完成扫描西安实时“一码通”、“行程卡”后方可凭个人有效身份证件排队检票。2、暂不接待中、高风险等级地区所在市的观众及14日内有中、高风险等级地区所在市旅居史的观众。省外观众或14天内有省外旅居史的本省观众，需持48小时内核酸检测报告阴性证明方可入园。3、落实实名制售检票，所有游客（含政策性免票人员、港澳台及外籍观众）参观须持个人有效身份证件。二.防疫措施1、全程佩戴口罩，排队及参观过程中，须与他人保持1.5米以上的距离。2、如发现体温异常或其他紧急状况，须立即就医或在临时隔离点配合接受防疫检查。3、参观区设置导向标识和设施，实行单向参观线路，观众请勿逆行。4、未提前预约或疫情检测信息异常者谢绝入园。三.限流措施：1.根据疫情防控要求，秦始皇帝陵博物院单日最大观众接待量不超过景区最大承载量的30%，超过上限时将采取临时闭馆措施。2.各展厅将根据实时观众量实行流控措施，请服从引导指挥。" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailContainer'
}
</script>

<style scoped>
.detail-main {
  width: 100%;
  height: 10.875rem;
}
.detail-container {
  position: absolute;
  top: 14rem;
  width: 100%;
  height: 11.25rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  background-color: #fff;
}
.discuss {
  display: flex;
  width: 100%;
  height: 3.75rem;
  margin-top: 0.375rem;
}
.discuss-item {
  position: relative;
  flex: 1;
  padding: 0.3125rem 0.1875rem 0 0.625rem;
}
.discuss-item:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 0.0625rem;
  height: 100%;
  background-color: #ededed;
}
.right {
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  color: #999;
}
.discuss-item-lefttop {
  font-size: 0.875rem;
  color: #ff8733;
}
.discuss-item-lefttop span {
  font-size: 1.25rem;
}
.discuss-item-leftbottom,
.discuss-item-rightbottom {
  font-size: 0.75rem;
  color: #999;
  margin-top: 0.3125rem;
}
.discuss-item-righttop {
  font-size: 0.875rem;
}
.discuss-item-rightbottom {
  margin-top: 0.75rem;
}
.address {
  width: 100%;
  height: 3.75rem;
  line-height: 3.125rem;
  padding-top: 0.3125rem;
  font-size: 0.875rem;
}
.address > .right {
  position: absolute;
  right: 5%;
  top: 54%;
  font-size: 1.25rem;
}
.address > .iconfont {
  padding: 0 0.3125rem;
}
</style>