<template>
    <div class="box">
        <cake-nav></cake-nav>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import nav from '../components/nav/nav.vue';
export default {
    components: {
        "cake-nav": nav
    }
}
</script>
<style lang="scss">
.box{
    background: #eee;
    .content{
        padding: 20px 20px 20px 270px;
        min-height: 500px;
        
    }
}
    
</style>
