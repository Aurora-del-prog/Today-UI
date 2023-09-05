<template>
  <s-button @click="open">打开</s-button>

  <s-dialog v-model="visible" show-Close title="Shipping address" width="50%">
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2016-05-02</td>
          <td>John Smith</td>
          <td>No.1518, Jinshajiang Road, Putuo District</td>
        </tr>
        <tr>
          <td>2016-05-04</td>
          <td>John Smith</td>
          <td>No.1518, Jinshajiang Road, Putuo District</td>
        </tr>
        <tr>
          <td>2016-05-01</td>
          <td>John Smith</td>
          <td>No.1518, Jinshajiang Road, Putuo District</td>
        </tr>
        <tr>
          <td>2016-05-03</td>
          <td>John Smith</td>
          <td>No.1518, Jinshajiang Road, Putuo District</td>
        </tr>
      </tbody>
    </table>
  </s-dialog>
</template>
<script setup>
import { ref } from 'vue'

  const visible = ref(false)
  const open = () => {
    visible.value = true;
  }

</script>
