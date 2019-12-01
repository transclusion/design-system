<template>
  <div :class=className>
    <slot />
  </div>
</template>

<script>
import {defaultTheme, paddingClassName} from '@transclusion/css'

export default {
  name: 'box',
  props: ['padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
  data (comp) {
    return {
      className: paddingClassName(defaultTheme, comp)
    }
  }
}
</script>
