<template>
  <el-container>
    <app-header></app-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer>
      <el-row>
        <el-col :span="5">
          <ul class="list">
            <li class="list-item">Продукт</li>
            <li class="list-item">Возможности</li>
            <li class="list-item">Тариф и цены</li>
            <li class="list-item">Приложение</li>
            <li class="list-item">База знаний</li>
            <li class="list-item">Партнёры</li>
          </ul>
        </el-col>
        <el-col :span="5">
          <ul class="list">
            <li class="list-item">Компания</li>
            <li class="list-item">Возможности</li>
            <li class="list-item">Тариф и цены</li>
            <li class="list-item">Приложение</li>
            <li class="list-item">База знаний</li>
            <li class="list-item">Партнёры</li>
          </ul>
        </el-col>
        <el-col :span="5">
          <ul class="list">
            <li class="list-item">Поддержка</li>
            <li class="list-item">Возможности</li>
            <li class="list-item">Тариф и цены</li>
            <li class="list-item">Приложение</li>
            <li class="list-item">База знаний</li>
            <li class="list-item">Партнёры</li>
          </ul>
        </el-col>
        <el-col :span="5">
          <ul class="list">
            <li class="list-item">Для связи</li>
            <li class="list-item">Возможности</li>
            <li class="list-item">Тариф и цены</li>
            <li class="list-item">Приложение</li>
            <li class="list-item">База знаний</li>
            <li class="list-item">Партнёры</li>
          </ul>
        </el-col>
        <el-col :span="4">
          <i class="el-icon-picture"></i>
          <i class="el-icon-upload"></i>
          <i class="el-icon-message-solid"></i>
          <i class="el-icon-s-ticket"></i>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>



<script>

import Header from './components/Header'

export default {
  components: {
    'app-header': Header
  }
}
</script>

<style lang="sass" scoped>
.el-main
  padding: 0

.el-footer
  max-width: 1200px
  width: 100%
  margin: 0 auto
  .list
    font-size: 18px
    &-item
      &:first-child
        text-transform: uppercase
        font-weight: bold
        margin-bottom: 30px
      &:not(:last-child)
        margin-bottom: 20px

</style>
