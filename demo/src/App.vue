<template>
  <div id="layout-wrapper">
    <div class="main-content">
      <div class="page-content">
        <div class="container-fluid">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
