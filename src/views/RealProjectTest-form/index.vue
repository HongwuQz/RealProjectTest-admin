<template>
  <div>
    <list-layout>
      <template slot="header">
        表单界面
      </template>
      <template slot="content">
        <el-form ref="form" style="width:700px" :model="form" label-width="80px">
          <el-form-item label="活动名称">
            <s-validate #default="{validate}" :value="form.name" :rules="needInputRules">
              <el-input v-model="form.name" @blur="validate" />
            </s-validate>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option
                v-for="(item,id) in selections"
                :key="id"
                :label="item"
                :value="item"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="活动时间">
            <el-col :span="11">
              <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 100%;" />
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker v-model="form.date2" placeholder="选择时间" style="width: 100%;" />
            </el-col>
          </el-form-item>
          <el-form-item label="即时配送">
            <el-switch v-model="form.delivery" />
          </el-form-item>
          <el-form-item label="活动性质">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="美食/餐厅线上活动" name="type" />
              <el-checkbox label="地推活动" name="type" />
              <el-checkbox label="线下主题活动" name="type" />
              <el-checkbox label="单纯品牌曝光" name="type" />
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="特殊资源">
            <el-radio-group v-model="form.resource">
              <el-radio label="线上品牌商赞助" />
              <el-radio label="线下场地免费" />
            </el-radio-group>
          </el-form-item>
          <el-form-item label="活动形式">
            <s-validate #default="{validate}" :value="form.name" :rules="needInputRules">
              <el-input v-model="form.desc" type="textarea" @blur="validate" />
            </s-validate>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </template>
    </list-layout>
  </div>
</template>

<script>
import ListLayout from '@/components/ListLayout'
import { getFormSeletion } from '@/api/RealProjectTest'
import SValidate from './renderless.vue'
export default {
  components: {
    ListLayout,
    SValidate
  },
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      selections: ['空空如也'],
      needInputRules: [{
        test: function(value) {
          return value
        },
        message: '内容不能为空'
      }]
    }
  },
  created() {
    getFormSeletion().then((result) => {
      console.log(result)
      if (result.code === 20000) this.selections = result.data.items.selection
    }).catch((err) => console.log(err))
  },
  methods: {
    onSubmit() {
      console.log(this.form)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
