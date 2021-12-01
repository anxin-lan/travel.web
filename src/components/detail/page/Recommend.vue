<template>
  <div class="recommend">
    <div class="recommend-title">去哪儿推荐</div>
    <div class="recommend-container">
      <ul>
        <li>
          <h6>秦始皇兵马俑博物馆门票成人票【10:30-13:00】</h6>
          <div class="recommend-container-items">
            <img src="../../../../public/mock/icons/clock.png" alt="">
            <span>可订明日</span>
          </div>
          <div class="recommend-container-items">
            <img src="../../../../public/mock/icons/animal.png" alt="">
            <span>自营</span> <span>随时退</span> <span>无需换票</span>
          </div>
          <div class="recommend-price">
            <span><em>¥</em>120</span>
            <div class="btn">立即预定</div>
          </div>
        </li>
        <li>
          <h6>秦始皇兵马俑博物馆门票学生票【17:30-18:00】</h6>
          <div class="recommend-container-items">
            <img src="../../../../public/mock/icons/clock.png" alt="">
            <span>可订明日,预定后15分钟可用</span>
          </div>
          <div class="recommend-container-items">
            <img src="../../../../public/mock/icons/animal.png" alt="">
            <span>自营</span> <span>随时退</span> <span>无需换票</span>
          </div>
          <div class="recommend-price">
            <span><em>¥</em>60</span>
            <div class="btn">立即预定</div>
          </div>
        </li>
        <li>
          <h6>兵马俑博物馆门票+讲解（ 品质精选 深度讲解 赠耳麦）【9:00-16:00集合后统一入园】</h6>
          <div class="recommend-container-items">
            <img src="../../../../public/mock/icons/clock.png" alt="">
            <span>可订今日</span>
          </div>
          <div class="recommend-container-items">
            <img src="../../../../public/mock/icons/animal.png" alt="">
            <span>自营</span> <span>随时退</span> <span>无需换票</span>
          </div>
          <div class="recommend-price">
            <span><em>¥</em>60</span>
            <div class="btn">立即预定</div>
          </div>
        </li>
      </ul>
    </div>

    <div class="ticket">
      <div class="ticket-title">景区门票</div>
      <div class="ticket-title-small"><span></span> 门票</div>
    </div>

    <div class="recommend-container">
      <ul>
        <li>
          <h6>成人票</h6>
          <div class="recommend-price">
            <span><em>¥</em>120<em>起</em></span>
            <div class="btn">查看</div>
          </div>
        </li>
        <li>
          <h6>学生票</h6>
          <div class="recommend-price">
            <span><em>¥</em>60<em>起</em></span>
            <div class="btn">查看</div>
          </div>
        </li>
      </ul>
    </div>

    <div class="ticket">
      <div class="ticket-title">门票+导览</div>
      <div class="ticket-title-small"><span></span> 门票+人工讲解+耳麦套餐</div>
    </div>

    <div class="recommend-container">
      <ul>
        <li>
          <h6>成人票</h6>
          <div class="recommend-price">
            <span><em>¥</em>121<em>起</em></span>
            <div class="btn">查看</div>
          </div>
        </li>
        <li>
          <h6>学生票</h6>
          <div class="recommend-price">
            <span><em>¥</em>71<em>起</em></span>
            <div class="btn">查看</div>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.recommend {
  width: 100%;
  margin-top: 1.875rem;
  height: 31.25rem;
}
.recommend-title,
.ticket-title {
  width: 100%;
  height: 2.75rem;
  line-height: 2.75rem;
  padding-left: 0.625rem;
  font-weight: 700;
  font-size: 1.25rem;
}
.recommend-container {
  margin-top: 0.3125rem;
  height: 21.25rem;
  max-height: 25rem;
}
.recommend-container ul li {
  position: relative;
  height: 5rem;
  padding: 1.5625rem 5.9375rem 0 1.25rem;
}
.recommend-container ul li h6 {
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
}
.recommend-container-items {
  font-size: 0.75rem;
  padding: 0.3125rem 0;
  color: #00afc7;
}
.recommend-container-items img {
  width: 0.625rem;
  height: 0.625rem;
}

.recommend-price {
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
  width: 4.6875rem;
  height: 3.4375rem;
  text-align: center;
}
.recommend-price > span {
  font-size: 1.25rem;
  color: #ff8300;
}
.recommend-price > span > em {
  font-size: 0.75rem;
  font-style: normal;
}
.recommend-price .btn {
  width: 4.375rem;
  height: 1.5rem;
  line-height: 1.5rem;
  font-size: 0.75rem;
  margin-top: 0.3125rem;
  border-radius: 0.75rem;
  margin-left: 0.3125rem;
  color: #fff;
  background-color: #ffa21a;
}

.ticket-title-small {
  padding-left: 0.625rem;
  font-weight: 700;
}
.ticket-title-small > span {
  padding-right: 0.3125rem;
  border-left: 3px solid #00bcd4;
}
</style>