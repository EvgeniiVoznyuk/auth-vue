<template>
  <div class="modal">
    <el-dialog
      title="Users"
      :visible="dialogTableVisible"
      @close="$emit('close-modal')"
    >
      <el-table :data="dataFromServer">
        <el-table-column
          v-for="column in Object.keys(dataFromServer[0])"
          :key="column"
          :property="column"
          :label="column"
          width="150"
        />
        <!-- <el-table-column property="name" label="Name" width="200"></el-table-column>
        <el-table-column property="address" label="Address"></el-table-column> -->
      </el-table>
</el-dialog>

  </div>
</template>

<script>
export default {
  props: {
    dialogTableVisible: {
      type: Boolean,
      required: true,
    },
    dataFromServer: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
