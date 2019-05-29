<template>
    <div>
        This is B Page<br>
        <button @click="plus">+</button>{{count}}
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            count : 0
        }
    },
    methods: {
        plus(){
            this.count++
            if(this.count > 10){
                this.$router.push("/")
            }
        }
    },
}
</script>

<style>

</style>