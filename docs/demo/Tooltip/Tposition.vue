<template>
  <div class="basic block">
    <s-tooltip 
      content="hello tooltip"
      placement="top-start"
    >
      <s-button> top-start </s-button>
    </s-tooltip>

    <s-tooltip 
      content="hello tooltip"
      placement="bottom-start"
    >
      <s-button> bottom-start </s-button>
    </s-tooltip>

    <s-tooltip 
      content="hello tooltip"
      placement="left-start"
    >
      <s-button> left-start </s-button>
    </s-tooltip>

    <s-tooltip 
      content="hello tooltip"
      placement="right-start"
    >
      <s-button> right-start </s-button>
    </s-tooltip>
  </div>
</template>
<style scoped>
.vk-s-button {
  margin-right: 20px;
}
</style>