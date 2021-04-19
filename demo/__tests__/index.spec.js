const simulate = require('miniprogram-simulate')
const path = require("path")

describe("demo", () => {
  it("should equal 1", async () => {
    const comp = simulate.load(path.resolve(__dirname, '../index'))
    const renderedComp = simulate.render(
      simulate.load({
        usingComponents: {
          comp: comp
        },
        template: "<comp></comp>"
      })
    )

    const container = document.createElement("div")
    await simulate.sleep(10)
    renderedComp.triggerLifeTime("show")
    expect(renderedComp.querySelector("#text").dom.textContent).toBe("1")
  })
})