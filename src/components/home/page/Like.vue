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
  // props: ['contentList'],
  data() {
    return {
      name: 'Like',
      contentList: [
        {
          id: 'content01',
          title: '房车自驾｜土家族姑娘的湘·黔环游记',
          imgURL: 'https://img1.baidu.com/it/u=2815308973,1456052386&fm=26&fmt=auto',
          summer: '题记-人总要给忙忙碌碌的生活找点不一样的乐趣，或是约一约许久不见的老朋友吃一顿火锅，或是打一场酣畅淋漓的篮球比赛，或是安静的看完一本喜欢的书，亦或是去那个一直想去却还不曾到达的远方。预告片夜晚芙蓉镇水面上的一抹红，越是平静的水面越...',
          look: '17917',
          author: '大大泡泡糖',
          authorImg: 'https://img0.baidu.com/it/u=1573546504,3763833163&fm=26&fmt=auto'
        },
        {
          id: 'content02',
          title: '退去神秘面纱的甘南，谁还甘心做神山的亡命之徒',
          imgURL:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190325%2F3a0e5e1d7b7a4b498fec7887d7e073a2.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641008935&t=90bf417aaa99b38d29100521bda97f59',
          summer: '前言——重走洛克之路爱上旅行之后我一直希望像洛克一般，怀着唐·吉诃德式的旅行梦想，带着电唱机听着音乐和歌剧，沿路做着植物学的笔记和宗教、人类学的记录，走在蛮荒的路上，享受一份孤独的自由。所以我相信人生真正好的东西是不可说的，就像武陵...',
          look: '53464',
          author: '我想发芽',
          authorImg: 'https://img2.baidu.com/it/u=2100406100,4284515804&fm=26&fmt=auto'
        },
        {
          id: 'content03',
          title: '打卡湖北恩施如诗如画的山水风光，绚丽多彩的绿色仙境',
          imgURL: 'https://img1.baidu.com/it/u=2989376431,4252100426&fm=26&fmt=auto',
          summer:
            ' 序言 一说到 湖北 旅游，那么 恩施 应该是网红打卡比较多的一个地方了，被称为 中国 版 仙本那 的景点，就位于 恩施 大峡谷中的 鹤峰 屏山 峡谷。那说到 湖北 恩施 那么一定不能错过的就是 恩施 的大峡谷了，水质清澈透明，跟 仙本那 水质一样，小船在 水里 行驶，犹如漂浮在半空中似的。 恩施 大峡谷能跟 美国 科罗拉多大峡谷 的绝壁栈道相媲美。这里是清江流域山清水秀的地段，整个峡谷全长多达108米，凡是来到这里的游客，都会拍手称赞。景区标志性打卡点“一炷香”只有亲身看过了才会知道原来大自然鬼斧神工真的是那么厉害。 从空中',
          look: '6681',
          author: '唐伯虎',
          authorImg: 'https://img0.baidu.com/it/u=334973661,412364761&fm=26&fmt=auto'
        },
        {
          id: 'content04',
          title: '(拯救周末计划)成都及周边丨我和周末有个约会',
          imgURL: 'https://img0.baidu.com/it/u=939723981,167457400&fm=26&fmt=auto',
          summer:
            ' 写在前面 一次偶尔的机会让我重逢阔别多年的 成都 ， 解锁了许多 成都 的秘密， 也开启了周边的新旅程。 当想伸出手抓住这10个月的流淌时光， 才发觉似乎有人将时光给偷走了。 看来，要用文字才能留住永恒的记忆。 不论多年后的变迁， 回忆起来： “嘿，这才是我认识的 成都 。” 我的 四川 里，没有去过 稻城 亚丁、 海螺沟 、毕棚沟感受 川西 高山低谷的壮阔，也没有南下到攀西地区见识到大 凉山 的粗犷和凛冬里难得的阳光，更没有去过剑南关体验过“一夫当关万夫莫开”的磅礴气势。更多的是周末或者凑上的三天，周游在附近城市的大街',
          look: '275',
          author: 'kingprofessor',
          authorImg: 'https://img2.baidu.com/it/u=2237039644,3735368368&fm=26&fmt=auto'
        }
      ]
    }
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
  /* height: 7.5rem; */
  width: 9.6875rem;
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