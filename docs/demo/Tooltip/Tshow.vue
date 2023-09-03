<template>
  <div class="basic block">
    <s-tooltip
      trigger="click"
    >
      <s-button> 复杂 HTML 结构的Tooltip </s-button>
      <template #content>
        <h3> this is the title</h3>
        <p> this is the content </p>
      </template>
    </s-tooltip>
  </div>
</template>