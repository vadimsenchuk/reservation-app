<template>
  <el-header class="header">
    <div class="header-logo">
      Reservation
    </div>
    <el-menu
      class="header-menu"
      mode="horizontal"
      background-color="#111111"
      text-color="#fff"
      active-text-color="#111111"
    >
      <el-menu-item index="1">Обзор</el-menu-item>
      <el-submenu index="2">
        <template slot="title">Возможности</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-submenu>
      <el-menu-item index="3" disabled>Цены</el-menu-item>
      <el-menu-item index="4">Приложение</el-menu-item>
      <el-submenu index="5">
        <template slot="title">Обучение</template>
        <el-menu-item index="5-1">item one</el-menu-item>
        <el-menu-item index="5-2">item two</el-menu-item>
        <el-menu-item index="5-3">item three</el-menu-item>
      </el-submenu>
      <el-menu-item index="6">
        <el-button plain>Default</el-button>
      </el-menu-item>
      <el-menu-item index="7">
        <el-button type="danger">Danger</el-button>
      </el-menu-item>
      <el-submenu index="8" class="header-menu__lng">
        <template slot="title">En</template>
        <el-menu-item index="8-1">Ru</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-header>
</template>

<style lang="sass" scoped>
.header
  display: flex
  padding: 0
  &-logo
    padding: 0 60px
    line-height: 60px
    font-size: 24px
  &-menu
    flex-grow: 1
    border-bottom: 0
  &-menu__lng
    .el-submenu__icon-arrow
      display: none
</style>
