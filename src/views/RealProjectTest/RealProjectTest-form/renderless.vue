<template>
  <div class="content">
    <slot :validate="validate" />
    <span class="errMsg">{{ errMsg }}</span>
  </div>
</template>

<script>
export default {
  props: ['value', 'rules'],
  data() {
    return {
      errMsg: ''
    }
  },
  methods: {
    validate() {
      const validateState = this.rules.reduce((pre, cur) => {
        const check = cur && cur.test && cur.test(this.value)
        this.errMsg = check ? '' : cur.message
        return pre && check
      }, true)
      return validateState
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
    display: flex;

    .errMsg{
    color: #CB0C10;
    margin: 0 0 0 5px;
    padding: 0;
    width: 200px;
    }
}

</style>
