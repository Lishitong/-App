<template lang="html">
      <div class="top250">
        <ul>
          <li><img :src="arr[1]" alt=""></li>
        </ul>
      </div>
</template>

<script>
export default {
  props: ["arr"],
  methods: {
    getImage(url) {
      // console.log(url);
      if (url !== undefined) {
        return url.replace("https://", "https://images.weserv.nl/?url=");
      }
    }
  }
};
</script>

<style lang="css" scoped>

</style>
