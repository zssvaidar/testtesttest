<template>
  <div class="container" >
      
    <div class="column-context"  v-for="(item, index) in data.items"  v-bind:key="item.id" 
    @drop='onDrop($event, item.id)' @dragover.prevent @dragenter.prevent>
      <Columns ref="col" v-bind:data="data" v-bind:col_index="index" v-bind:item="item" />
    </div>

    <div class="column-append" v-bind:class="{'column-append-adding-card': data.addingcolumn} ">
      <div  v-bind:class="{'column-append-adding-form': data.addingcolumn}"  hidden >
        <input type="text" name="" id=""  v-model='data.newcoltitle'>
        {{data.newcoltitle}}
        <input type="button"  value="save column" @click="columnPush($event)" >
      </div>

      <div class="btn-column-append" v-bind:class="{'column-append-adding-btn': data.addingcolumn}" @click="columnadd">add column
      </div>

    </div>

  </div>
</template>

<script>

import Columns from'./columns.vue'

export default {
  name: 'Main',
  components: { Columns },
  props: ['data'],
  computed: {
  },
  methods: {
    columnadd() {
      this.data.addingcolumn = true
    },
    columnPush() {
      console.log(this.data.newcoltitle)
      this.data.items.push({id:5, title: this.data.newcoltitle, notes:[]})
    },
    onDrop(evt, list) {

        if(this.data.cold) {

            const itemID = evt.dataTransfer.getData('itemID')
            // console.log(list, itemID);
            var item = this.data.items.find(item => item.id == itemID)
            var item2 = this.data.items.find(item => item.id == list)

            var buff = item.notes;
            item.notes = item2.notes; 
            item2.notes = buff; 

            buff = item.id;
            item.id = item2.id; 
            item2.id = buff;

            buff = item.title;
            item.title = item2.title; 
            item2.title = buff;
            this.data.cold = false;
            this.data.isediting=true

        }
    },
  },

}

</script>


<style scoped>
  .container {
    position: relative;
    min-width: 1360px;
    max-width: 1600px;
    /* display: block; */
    /* justify-content: center; */
    margin: 0 auto;
    border: 1.2px solid;
  }
  .column-context {
    display: inline-block;
    vertical-align: top;
    width: 272px;
    margin:0 4px;
    background-color:#EBEBEB;
  }
   .column-append {
    max-width: 400px;
    min-width: 240px;
    background-color: azure;
    display: inline-block;
    height: 55px;
    margin:0 auto ;
    border: .1px solid;
    border-radius: 14px;
  }
  
  .btn-column-append:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  .column-append-adding-card {
    height: 225px;
    transition:1.6s;
  }
  .column-append-adding-btn {
    position: absolute;
    visibility: hidden;
    opacity: 0;
  }

  .column-append-adding-btn:hover {
    text-decoration: none;
    cursor:none;
  }
 

  .column-append-adding-form {
    display: inline;
    /* margin: 0 auto; */
  }
  .column-append-adding-form  input {
    width: 50%;
    margin: 0 auto;
  }
  
</style>