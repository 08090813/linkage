// component/linkage/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    address: {
      type: Object,
      value: []
    },
    is_show: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    province: [],
    province_tmp:[],
    city: [],
    city_tmp:[],
    region: [],
    r_tmp:[],
    activeArea:[0,0,0]
  },
  created() {
    setTimeout(() => {
      this.setArea()
      this.getArea()
    }, 2000)
  },
  /**
   * 组件的方法列表
   */
  methods: {
    cancel:function(e){
      // detail对象，提供给事件监听函数
      var myEventDetail = {
        area: this.getSelect()
      }
      // 触发事件的选项
      var myEventOption = {}
      // 使用 triggerEvent 方法触发自定义组件事件，指定事件名、detail对象和事件选项
      this.triggerEvent('cancel', myEventDetail, myEventOption)
    },
    confirm:function(e){
      // detail对象，提供给事件监听函数
      var myEventDetail = {
        area: this.getSelect()
      }
      // 触发事件的选项
      var myEventOption = {}
      // 使用 triggerEvent 方法触发自定义组件事件，指定事件名、detail对象和事件选项
      this.triggerEvent('confirm', myEventDetail, myEventOption)
    },
    getSelect:function(){
      let province = this.data.province
      let city = this.data.city
      let region = this.data.region
      let active = this.data.activeArea
      let a = active[0]
      let b = active[1]
      let c = active[2]
      let obj = {}
      obj.province = province[a]
      obj.city = city[b]
      obj.region = region[c]
      return obj
    },
    getArea: function() {
      let province = this.data.province
      let city = this.data.city
      let region = this.data.region
      let active = this.data.activeArea
      if (province.length <= 0 || city.length <= 0 || region.length <= 0){
        return false
      }
      let a = active[0]
      let b = active[1]
      let c = active[2]
      // 取出省份ID
      let province_obj = province[a]
      let province_id = province_obj.area_id
      //遍历出所有市
      let newCity = []
      let city_index = 0
      for (let i in city) {
        if (city[i].pid == province_id){
          newCity[city_index] = city[i]
          city_index++
        }
      }
      city = newCity
      // 取出市级ID
      let city_obj = city[b]
      let city_id = city_obj.area_id
      //遍历出所有区县
      let newArea = []
      let area_index = 0
      for (let i in region) {
        if (region[i].pid == city_id) {
          newArea[area_index] = region[i]
          area_index++
        }
      }
      this.setData({
        province: province,
        city: newCity,
        region: newArea
      })
    },
    setArea:function(){
      let province = []
      let city = []
      let region = []
      let data = this.data.address
      if(data.length<=0){
        return false
      }
      let p_index = 0
      let c_index = 0
      let r_index = 0
      for (let i in data) {
        let tmp = {}
        tmp.area_id = data[i].area_id
        tmp.name = data[i].name
        tmp.pid = data[i].pid
        province[i] = tmp
        if (data[i].child) {
          for (let x in data[i].child) {
            city[c_index] = data[i].child[x]
            if (data[i].child[x].child) {
              for (let y in data[i].child[x].child) {
                region[r_index] = data[i].child[x].child[y]
                r_index++
              }
            }
            c_index++
          }
        }
      }
      this.setData({
        province: province,
        city: city,
        region: region
      })
    },
    AreaChange:function(e){
      this.setData({
        activeArea: e.detail.value
      })
      this.setArea()
      this.getArea()
    }
  }
})