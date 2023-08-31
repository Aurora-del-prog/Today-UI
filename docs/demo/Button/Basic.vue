<template>
 <div class="basic block">
  <s-button> hello </s-button>
  <s-button type="primary"> Primary </s-button>
  <s-button type="success"> Success </s-button>
  <s-button type="warning"> Warning </s-button>
  <s-button type="danger"> Danger </s-button>
  <s-button type="info"> Info </s-button>
</div>

<div class="plain block">
  <s-button plain> hello </s-button>
  <s-button type="primary" plain> Primary </s-button>
  <s-button type="success" plain> Success </s-button>
  <s-button type="warning" plain> Warning </s-button>
  <s-button type="danger" plain> Danger </s-button>
  <s-button type="info" plain> Info </s-button>
</div>

<div class="round block">
  <s-button round> hello </s-button>
  <s-button type="primary" round> Primary </s-button>
  <s-button type="success" round> Success </s-button>
  <s-button type="warning" round> Warning </s-button>
  <s-button type="danger" round> Danger </s-button>
  <s-button type="info" round> Info </s-button>
</div>

<div class="circle block">
  <s-button circle> <s-icon icon="star" /> </s-button>
  <s-button type="primary" circle>   <s-icon icon="star" /> </s-button>
  <s-button type="success" circle> <s-icon icon="star" /> </s-button>
  <s-button type="warning" circle> <s-icon icon="star" /> </s-button>
  <s-button type="danger" circle> <s-icon icon="star" /> </s-button>
  <s-button type="info" circle> <s-icon icon="star" /> </s-button>
</div>
</template>

<script setup>
</script>
<style>
.block {
  margin-bottom: 10px;
}
</style>