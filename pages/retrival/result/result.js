// pages/retrival/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    remark:"注：以上评估结果根据用户输入的相关信息生成，该价 值仅供用户参考，具体价值以估价师实际查勘后的评估 价值为准。",
    priceData:[
      {
        pname:"评估总价 （万元）",
        price:"368.20"
      },
      {
        pname:"评估单价 （元/平方米）",
        price:"2700"
      }
    ],
    detaiList:[
      {
        id:1,
        name:"巴厘香泉",
        area:87.49,
        total:210,
        price:24003
      },
      {
        id: 2,
        name: "城北新村",
        area: 87.49,
        total: 210,
        price: 24003
      },
      {
        id: 3,
        name: "加州花园",
        area: 87.49,
        total: 210,
        price: 24003
      },
      {
        id: 4,
        name: "华昌小区",
        area: 87.49,
        total: 210,
        price: 24003
      },
      {
        id: 5,
        name: "未来橙堡",
        area: 87.49,
        total: 210,
        price: 24003
      }
    ]
  },
  todetailPage:function(){
    wx.navigateTo({
      url: '../../map/detail/detail',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})