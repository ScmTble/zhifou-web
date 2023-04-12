<template>
  <div class="images-wrap">
    <n-image-group v-if="[1].includes(props.imgs.length)">
      <n-grid :x-gap="4" :y-gap="4" :cols="2">
        <template v-for="img in props.imgs" :key="img.id">
          <n-gi>
            <n-image @click.stop class="post-img x1" object-fit="cover" :src="img.url + thumbnail"
              :preview-src="img.url" />
          </n-gi>
        </template>
      </n-grid>
    </n-image-group>

    <n-image-group v-if="[2, 3].includes(props.imgs.length)">
      <n-grid :x-gap="4" :y-gap="4" :cols="3">
        <template v-for="img in props.imgs" :key="img.id">
          <n-gi>
            <n-image @click.stop class="post-img x2" object-fit="cover" :src="img.url + thumbnail"
              :preview-src="img.url" />
          </n-gi>
        </template>
      </n-grid>
    </n-image-group>

    <n-image-group v-if="[4].includes(props.imgs.length)">
      <n-grid :x-gap="4" :y-gap="4" :cols="4">
        <template v-for="img in props.imgs" :key="img.id">
          <n-gi>
            <n-image @click.stop class="post-img x3" object-fit="cover" :src="img.url + thumbnail"
              :preview-src="img.url" />
          </n-gi>
        </template>
      </n-grid>
    </n-image-group>

    <n-image-group v-if="[5].includes(props.imgs.length)">
      <n-grid :x-gap="4" :y-gap="4" :cols="3">
        <template v-for="(img, idx) in props.imgs" :key="img.id">
          <n-gi v-if="idx < 3">
            <n-image @click.stop class="post-img x2" object-fit="cover" :src="img.url + thumbnail"
              :preview-src="img.url" />
          </n-gi>
        </template>
      </n-grid>
      <n-grid :x-gap="4" :y-gap="4" :cols="2" style="margin-top: 4px">
        <template v-for="(img, idx) in props.imgs" :key="img.id">
          <n-gi v-if="idx >= 3">
            <n-image @click.stop class="post-img x1" object-fit="cover" :src="img.url + thumbnail"
              :preview-src="img.url" />
          </n-gi>
        </template>
      </n-grid>
    </n-image-group>

    <n-image-group v-if="[6].includes(props.imgs.length)">
      <n-grid :x-gap="4" :y-gap="4" :cols="3">
        <template v-for="(img, idx) in props.imgs" :key="img.id">
          <n-gi v-if="idx < 3">
            <n-image @click.stop class="post-img x2" object-fit="cover" :src="img.url + thumbnail"
              :preview-src="img.url" />
          </n-gi>
        </template>
      </n-grid>
      <n-grid :x-gap="4" :y-gap="4" :cols="3" style="margin-top: 4px">
        <template v-for="(img, idx) in props.imgs" :key="img.id">
          <n-gi v-if="idx >= 3">
            <n-image @click.stop class="post-img x2" object-fit="cover" :src="img.url + thumbnail"
              :preview-src="img.url" />
          </n-gi>
        </template>
      </n-grid>
    </n-image-group>

    <n-image-group v-if="props.imgs.length === 7">
      <n-grid :x-gap="4" :y-gap="4" :cols="4">
        <template v-for="(img, idx) in props.imgs">
          <n-gi v-if="idx < 4">
            <n-image @click.stop class="post-img x3" object-fit="cover" :src="img.url + thumbnail"
              :preview-src="img.url" />
          </n-gi>
        </template>
      </n-grid>
      <n-grid :x-gap="4" :y-gap="4" :cols="3" style="margin-top: 4px">
        <template v-for="(img, idx) in props.imgs">
          <n-gi v-if="idx >= 4">
            <n-image @click.stop class="post-img x2" object-fit="cover" :src="img.url + thumbnail"
              :preview-src="img.url" />
          </n-gi>
        </template>
      </n-grid>
    </n-image-group>

    <n-image-group v-if="props.imgs.length === 8">
      <n-grid :x-gap="4" :y-gap="4" :cols="4">
        <template v-for="(img, idx) in props.imgs">
          <n-gi v-if="idx < 4">
            <n-image @click.stop class="post-img x3" object-fit="cover" :src="img.url + thumbnail"
              :preview-src="img.url" />
          </n-gi>
        </template>
      </n-grid>
      <n-grid :x-gap="4" :y-gap="4" :cols="4" style="margin-top: 4px">
        <template v-for="(img, idx) in props.imgs">
          <n-gi v-if="idx >= 4">
            <n-image @click.stop class="post-img x3" object-fit="cover" :src="img.url + thumbnail"
              :preview-src="img.url" />
          </n-gi>
        </template>
      </n-grid>
    </n-image-group>

    <n-image-group v-if="props.imgs.length === 9">
      <n-grid :x-gap="4" :y-gap="4" :cols="3">
        <template v-for="(img, idx) in props.imgs">
          <n-gi v-if="idx < 3">
            <n-image @click.stop class="post-img x2" object-fit="cover" :src="img.url + thumbnail"
              :preview-src="img.url" />
          </n-gi>
        </template>
      </n-grid>
      <n-grid :x-gap="4" :y-gap="4" :cols="3" style="margin-top: 4px">
        <template v-for="(img, idx) in props.imgs">
          <n-gi v-if="idx >= 3 && idx < 6">
            <n-image @click.stop class="post-img x2" object-fit="cover" :src="img.url + thumbnail"
              :preview-src="img.url" />
          </n-gi>
        </template>
      </n-grid>
      <n-grid :x-gap="4" :y-gap="4" :cols="3" style="margin-top: 4px">
        <template v-for="(img, idx) in props.imgs">
          <n-gi v-if="idx >= 6">
            <n-image @click.stop class="post-img x2" object-fit="cover" :src="img.url + thumbnail"
              :preview-src="img.url" />
          </n-gi>
        </template>
      </n-grid>
    </n-image-group>
  </div>
</template>

<script setup lang="ts">

const config = useRuntimeConfig();
const thumbnail = config.public.imageThumbnail;
const props = withDefaults(defineProps<{
  imgs: Img.ImgInfo[],
}>(), {
  imgs: () => []
});
</script>

<style lang="less">
.images-wrap {
  margin-top: 10px;
}

.post-img {
  display: flex;
  margin: 0;
  border-radius: 3px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid #eee;

  img {
    width: 100%;
    height: 100%;
  }
}

.x1 {
  height: 140px;
}

.x2 {
  height: 90px;
}

.x3 {
  height: 80px;
}

// .dark {
//   .post-img {
//     border: 1px solid #333;
//   }
// }

@media screen and (max-width: 821px) {
  .x1 {
    height: 100px;
  }

  .x2 {
    height: 70px;
  }

  .x3 {
    height: 50px;
  }
}
</style>