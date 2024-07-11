<template>
    <div class="modal" v-if="visible">
      <div class="modal-content">
        <button class="close" @click="closeModal">&times;</button>
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      visible: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      closeModal() {
        this.$emit('close');
      }
    }
  }
  </script>
  
  <style scoped>
  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    backdrop-filter: blur(2px);
  }
  .modal-content {
    background: var(--c4);
    padding: 2px;
    border-radius: 10px;
    position: relative;
  }
  .close {
    margin: 0px !important;
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    padding: 0px 8px;
    background-color: var(--p1);
  }
  </style>
  