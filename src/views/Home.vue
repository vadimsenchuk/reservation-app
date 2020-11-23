<template>
  <div class="home">
    <el-row class="home-rockstar" type="flex" align="middle" justify="center">
      <el-col :span="18" class="home-rockstar__form">
        <h1 class="title">Find your table for any occasion</h1>
        <el-form class="search" :inline="true" :model="search">
          <el-form-item class="search-item">
            <el-date-picker
              v-model="search.date"
              type="date"
              placeholder="Pick a day">
            </el-date-picker>
          </el-form-item>
          <el-form-item class="search-item">
            <el-time-select
              v-model="search.time"
              :picker-options="{
                selectableRange: '18:30:00 - 20:30:00'
              }"
              placeholder="Select time">
            </el-time-select>
          </el-form-item>
          <el-form-item>
            <el-select v-model="search.people" clearable placeholder="People">
              <i class="el-icon-user" slot="prefix"></i>
              <el-option
                v-for="(item, index) in 10"
                :key="index"
                :label="`${item} people`"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="Location"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="danger">Let`s go</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row class="home-cuisines">
      <el-col>
        <h1 class="home-cuisines__title">Кухня</h1>
      </el-col>
      <el-col :span="6">
        <el-card class="card" shadow="hover" :body-style="{ padding: '0px', height: '100%' }">
          <div :style="src | bgrImage" class="card-image"></div>
          <div class="card-title">Европейская кухня</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="card" shadow="hover" :body-style="{ padding: '0px', height: '100%' }">
          <div :style="src | bgrImage" class="card-image"></div>
          <div class="card-title">Европейская кухня</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="card" shadow="hover" :body-style="{ padding: '0px', height: '100%' }">
          <div :style="src | bgrImage" class="card-image"></div>
          <div class="card-title">Европейская кухня</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="card" shadow="hover" :body-style="{ padding: '0px', height: '100%' }">
          <div :style="src | bgrImage" class="card-image"></div>
          <div class="card-title">Европейская кухня</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="card" shadow="hover" :body-style="{ padding: '0px', height: '100%' }">
          <div :style="src | bgrImage" class="card-image"></div>
          <div class="card-title">Европейская кухня</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="card" shadow="hover" :body-style="{ padding: '0px', height: '100%' }">
          <div :style="src | bgrImage" class="card-image"></div>
          <div class="card-title">Европейская кухня</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="card" shadow="hover" :body-style="{ padding: '0px', height: '100%' }">
          <div :style="src | bgrImage" class="card-image"></div>
          <div class="card-title">Европейская кухня</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="card" shadow="hover" :body-style="{ padding: '0px', height: '100%' }">
          <div :style="src | bgrImage" class="card-image"></div>
          <div class="card-title">Европейская кухня</div>
        </el-card>
      </el-col>
      <el-col style="text-align: center">
        <el-button type="text">Показать ещё</el-button>
      </el-col>
    </el-row>
    <el-row class="home-areas">
      <el-col>
        <h1 class="home-areas__title">Featured Ares</h1>
      </el-col>
      <el-col :span="8">
        <el-card class="card" shadow="hover" :body-style="{ padding: '0px', height: '100%' }">
          <div :style="src1 | bgrImage" class="card-image"></div>
          <div class="card-title">New York Area</div>
          <div class="card-subtitle">37,920 restaurants</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="card" shadow="hover" :body-style="{ padding: '0px', height: '100%' }">
          <div :style="src1 | bgrImage" class="card-image"></div>
          <div class="card-title">New York Area</div>
          <div class="card-subtitle">37,920 restaurants</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="card" shadow="hover" :body-style="{ padding: '0px', height: '100%' }">
          <div :style="src1 | bgrImage" class="card-image"></div>
          <div class="card-title">New York Area</div>
          <div class="card-subtitle">37,920 restaurants</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="card" shadow="hover" :body-style="{ padding: '0px', height: '100%' }">
          <div :style="src1 | bgrImage" class="card-image"></div>
          <div class="card-title">New York Area</div>
          <div class="card-subtitle">37,920 restaurants</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="card" shadow="hover" :body-style="{ padding: '0px', height: '100%' }">
          <div :style="src1 | bgrImage" class="card-image"></div>
          <div class="card-title">New York Area</div>
          <div class="card-subtitle">37,920 restaurants</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="card" shadow="hover" :body-style="{ padding: '0px', height: '100%' }">
          <div :style="src1 | bgrImage" class="card-image"></div>
          <div class="card-title">New York Area</div>
          <div class="card-subtitle">37,920 restaurants</div>
        </el-card>
      </el-col>
      <el-col>
        <el-row class="home-areas__addresses">
          <el-col :span="6">
            <ul class="list">
              <li class="list-item">Atlanta (7,209)</li>
              <li class="list-item">Denver (7,209)</li>
              <li class="list-item">Los Angles (7,209)</li>
              <li class="list-item">New York Area (7,209)</li>
              <li class="list-item">Richmond (7,209)</li>
            </ul>
          </el-col>
          <el-col :span="6">
            <ul class="list">
              <li class="list-item">Atlanta (7,209)</li>
              <li class="list-item">Denver (7,209)</li>
              <li class="list-item">Los Angles (7,209)</li>
              <li class="list-item">New York Area (7,209)</li>
              <li class="list-item">Richmond (7,209)</li>
            </ul>
          </el-col>
          <el-col :span="6">
            <ul class="list">
              <li class="list-item">Atlanta (7,209)</li>
              <li class="list-item">Denver (7,209)</li>
              <li class="list-item">Los Angles (7,209)</li>
              <li class="list-item">New York Area (7,209)</li>
              <li class="list-item">Richmond (7,209)</li>
            </ul>
          </el-col>
          <el-col :span="6">
            <ul class="list">
              <li class="list-item">Atlanta (7,209)</li>
              <li class="list-item">Denver (7,209)</li>
              <li class="list-item">Los Angles (7,209)</li>
              <li class="list-item">New York Area (7,209)</li>
              <li class="list-item">Richmond (7,209)</li>
            </ul>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    src: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
    src1: '../img/ny.jpeg',
    search: {
      date: '',
      time: '',
      people: ''
    }
  })
};
</script>

<style lang="sass" scoped>
.home
  &-rockstar
    position: relative
    height: 400px
    background: url('~@/assets/images/main.jpeg') center
    background-size: cover
    z-index: 1
    &:before
      content: ''
      display: block
      position: absolute
      right: 0
      left: 0
      top: 0
      bottom: 0
      background: #000000
      opacity: 0.5
      z-index: 2
    &__form
      position: relative
      height: min-content
      color: #ffffff
      z-index: 3
      .title
        margin-bottom: 20px
        font-size: 46px
        text-align: center
      .search
        display: flex
        justify-content: center
        // &-item
        //   margin-right: 0
  &-cuisines,
  &-areas
    margin-top: 100px
    padding: 0 20px
    &__title
      font-size: 26px
      padding-bottom: 20px
    .card
      position: relative
      margin: 5px 10px
      height: 200px
      z-index: 1
      &:before
        content: ''
        display: block
        position: absolute
        right: 0
        left: 0
        top: 0
        bottom: 0
        background: #000000
        opacity: 0.5
        z-index: 2
      &-title,
      &-subtitle
        position: absolute
        left: 50%
        bottom: 50%
        transform: translateX(-50%)
        padding: 0 20px
        font-size: 18px
        color: #ffffff
        z-index: 3
      &-image
        width: 100%
        height: 100%
        background-position: center
        background-size: cover
  &-areas
    margin: 200px auto 300px
    max-width: 1200px
    &__title
      border-bottom: 1px solid grey
    .card
      margin: 10px
      &-subtitle
        bottom: calc(50% - 30px)
    &__addresses
      margin-top: 20px
      .list
        &-item
          &:not(:first-child)
            margin-top: 20px


</style>
