<template>
  <div class="like">
    <div class="like-title">
      <span class="like-frist">为你推荐</span>
    </div>

    <div v-for="item in contentList" :key="item.index">
      <div class="title">
        {{ item.title }}
      </div>
      <dl class="clearfix">
        <dt>
          <img :src="item.imgURL" alt="">
        </dt>
        <dd>
          <div class="summer">
            {{ item.summer }}
          </div>
          <div class="extra">
            <div class="look">{{ item.look }}浏览</div>
            <div class="author">
              {{ item.author }}
              <img :src="item.authorImg">
            </div>
          </div>
        </dd>
      </dl>
    </div>

    <div class="btn"><span>更多精彩攻略</span> <em>&gt;</em></div>
  </div>
</template>

<script>
export default {
  name: 'Like',
  props: ['contentList'],
  data() {
    return {}
  }
}
</script>

<style scoped>
.like-title {
  height: 2.75rem;
  line-height: 2.75rem;
  font-weight: 700;
  padding-left: 0.625rem;
}

.like-frist {
  border-left: 3px solid #00bcd4;
}

.title {
  padding: 0.3125rem 0.625rem 0 0.625rem;
  font-size: 1.25rem;
  color: #111;
  overflow: hidden;
}
.clearfix {
  position: relative;
  width: 100%;
  height: 7.5rem;
}
.clearfix img {
  padding: 0 0.625rem 0 0.625rem;
  height: 7.5rem;
}
.summer {
  position: absolute;
  top: 0;
  right: 0.625rem;
  width: 50%;
  height: 80px;
  color: #888;
  font-size: 0.875rem;
  vertical-align: middle;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}
.extra {
  position: absolute;
  right: 0.625rem;
  bottom: 0;
  width: 50%;
  line-height: 20px;
  color: #888;
  font-size: 0.75rem;
}
.look {
  float: left;
}
.author {
  float: right;
  padding-bottom: 0.3125rem;
  padding-left: 1.5625rem;
}
.author img {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  vertical-align: middle;
}

.btn {
  width: 100%;
  height: 2.75rem;
  line-height: 2.75rem;
  text-align: center;
  color: #00bcd4;
}

.btn span {
  display: inline-block;
  width: 85%;
  height: 2.625rem;
  border: 1px solid #00bcd4;
  border-radius: 0.3125rem;
}

.btn em {
  position: absolute;
  right: 34%;
}
</style>