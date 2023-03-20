<template>
    <div class="attachment-wrap">
        <div class="attach-item" v-for="attachment in props.attachments" :key="attachment">
            <n-button type="primary" size="tiny" dashed>
                <template #icon>
                    <n-icon>
                        <cloud-download-outline />
                    </n-icon>
                </template>
                附件
            </n-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { CloudDownloadOutline } from '@vicons/ionicons5';

const props = withDefaults(
    defineProps<{
        attachments: string[];
        price?: number;
    }>(),
    {
        attachments: () => [],
        price: 0,
    }
);
</script>

<style lang="less" scoped>
.attach-item {
    margin: 10px 0;
}
</style>