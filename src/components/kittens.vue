<template>
    <div class="cat-block">
        <img class="big" :src=currKitten />
        <div>
            <img @click="selectCat(item)" :src=item v-for="item in kittensList" :key="item.id" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'kittens',
    data() {
        return {
            currKitten: require('@/assets/img/1.jpg'),
            kittensList: {
                cat1: require('@/assets/img/1.jpg'),
                cat2: require('@/assets/img/2.jpg'),
                cat3: require('@/assets/img/3.jpg'),
            }
        }
    },
    methods: {
        selectCat(src) {
            this.currKitten = src;
        }
    },
};
</script>

<style lang="scss">
.cat-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.big {
    width: 400px;
    height: 300px;
}
</style>