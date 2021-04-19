Component({
  /**
   * Component initial data
   */
  data: {
    text: null
  },

  /**
   * Component methods
   */
  methods: {
  },
  pageLifetimes: {
    show () {
      this.setData({
        text: "hello world"
      })
    }
  }
})
