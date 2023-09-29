<template>
  <i class="vk-icon" :class="{[`vk-icon--${type}`] : type }" :style="customStyles" v-bind="$attrs">
    <font-awesome-icon v-bind="filteredProps"/>
  </i>
</template>
<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { omit } from 'lodash-es'
import type { IconProps } from './types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '../style/style.css'

defineOptions({
  name: 'SIcon',
  inheritAttrs: false
})

const props = withDefaults(defineProps<IconProps>(), {
  border: false
}) 
const filteredProps = computed(() => omit(props, ['type', 'color']))
const customStyles = computed(() => {
  return props.color ? { color: props.color } : {}
})
</script>

