import VanillaTilt from 'vanilla-tilt'
import type { Directive } from 'vue'

export const tilt: Directive = {
  mounted(el) {
    VanillaTilt.init(el, {
      max: 15,
      speed: 400,
      glare: false,
      'max-glare': 0.2,
      scale: 1,
    })
  },
  unmounted(el: any) {
    if (el.vanillaTilt) {
      el.vanillaTilt.destroy()
    }
  },
}
