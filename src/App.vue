<template>
  <div id="app">
    <Main v-bind:data="data" />
  </div>
</template>

<script>
import Main from './components/main.vue'

export default {
  name: 'App',
  components: {
    Main
  },
  
  data() {
    return {
      data:{
        items: [
          {
            id:1, title:'Progress', notes: 
            [
              {id:1, description:'vue context', },
              {id:3, description:'vuex dragndrop context'},
              {id:5, description:'state update system'}  
            ],

          },
          {
            id:2, title:'Done', notes: 
            [
              {id:2, description:'complex refactoring', },
              {id:4, description:'first stage testing'},
              {id:6, description:'desployment'}  
            ]
          },
          {
            id:3, title:'Expired', notes: 
            [
              {id:1, description:'vue context', },
              {id:3, description:'vuex dragndrop context'},
              {id:5, description:'state update system'}  
            ]
          }
        ],
        addingcolumn:false,
        newnotedescription:'none',
        medifynote: [],
        newcoltitle:'n',
        modifyingnoteID:-1,
        modifyinnotecolID:-1,
        loaded: false,
        clicks:0,
        cold:false,
        isediting:true,
        timer:null,
        isdraggable:false
        
        
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2, h3, h4, h5 {
   margin:0;
   padding:0; 
}
div {
  margin: 0;
  padding:0;
}
</style>
