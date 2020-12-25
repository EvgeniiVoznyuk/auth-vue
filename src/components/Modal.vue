<template>
  <div class="modal">
   <el-button type="text" @click="dialogTableVisible = true">open a Table nested Dialog</el-button>

    <el-dialog title="Users" :visible.sync="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column property="date" label="Date" width="150"></el-table-column>
        <el-table-column property="name" label="Name" width="200"></el-table-column>
        <el-table-column property="address" label="Address"></el-table-column>
      </el-table>
</el-dialog>

  </div>
</template>

<script>
export default {
  data() {
    return {
      gridData: [{
        date: '2016-05-02',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
      }, {
        date: '2016-05-04',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
      }, {
        date: '2016-05-01',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
      }, {
        date: '2016-05-03',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
      }],
      dialogTableVisible: false,
      users: [],
    };
  },
  async mounted() {
    await this.$store.dispatch('fetchUserProfile');
    this.users = this.$store.getters['/users'];
  },
  methods: {
  },
};
</script>
