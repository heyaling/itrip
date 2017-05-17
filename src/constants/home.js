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
        imgUrl: './haiwai01.png',
        staticImgUrl: true,
        hotelName: 'hotelName1',
        minPrice: '101'
      }, {
        id: 2,
        imgUrl: './haiwai01.png',
        staticImgUrl: true,
        hotelName: 'hotelName2',
        minPrice: '102'
      }, {
        id: 3,
        imgUrl: './haiwai01.png',
        staticImgUrl: true,
        hotelName: 'hotelName3',
        minPrice: '103'
      }, {
        id: 4,
        imgUrl: './haiwai01.png',
        staticImgUrl: true,
        hotelName: 'hotelName4',
        minPrice: '104'
      }, {
        id: 5,
        imgUrl: './haiwai01.png',
        staticImgUrl: true,
        hotelName: 'hotelName5',
        minPrice: '106'
      }, {
        id: 6,
        imgUrl: './haiwai01.png',
        staticImgUrl: true,
        hotelName: 'hotelName6',
        minPrice: '106'
      }]
    }
  }
}
