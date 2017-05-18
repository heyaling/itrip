export default {
  hotel: {
    foreignHotel: {
      title: '海外酒店',
      category: [{
        cityId: 1,
        name: '普吉酒店'
      }, {
        cityId: 2,
        name: '曼谷酒店'
      }, {
        cityId: 3,
        name: '首尔酒店'
      }, {
        cityId: 4,
        name: '清迈酒店'
      }, {
        cityId: 5,
        name: '新加坡酒店'
      }]
    },
    hotHotel: {
      title: '热门城市酒店',
      category: [{
        cityId: 6,
        name: '北京'
      }, {
        cityId: 7,
        name: '上海'
      }, {
        cityId: 8,
        name: '广州'
      }, {
        cityId: 9,
        name: '南京'
      }, {
        cityId: 10,
        name: '杭州'
      }]
    },
    hotDestination: {
      title: '热门目的地',
      category: [{
        cityId: 11,
        name: '美食'
      }, {
        cityId: 12,
        name: '赏花'
      }, {
        cityId: 13,
        name: '登山'
      }, {
        cityId: 14,
        name: '古镇'
      }, {
        cityId: 15,
        name: '度假'
      }],
      hotelList: [{
        id: 1,
        imgUrl: './imgs/fhs.jpg',
        staticImgUrl: true,
        hotelName: '凤凰山',
        minPrice: '156'
      }, {
        id: 2,
        imgUrl: './imgs/ps.jpg',
        staticImgUrl: true,
        hotelName: '盘山',
        minPrice: '109'
      }, {
        id: 3,
        imgUrl: './imgs/hs.jpg',
        staticImgUrl: true,
        hotelName: '黄山',
        minPrice: '131'
      }, {
        id: 4,
        imgUrl: './imgs/huangshan.jpg',
        staticImgUrl: true,
        hotelName: '华山',
        minPrice: '126'
      }, {
        id: 5,
        imgUrl: './imgs/wls.jpg',
        staticImgUrl: true,
        hotelName: '雾灵山',
        minPrice: '139'
      }, {
        id: 6,
        imgUrl: './imgs/djrm01.png',
        staticImgUrl: true,
        hotelName: '泰山',
        minPrice: '109'
      }]
    }
  }
}
