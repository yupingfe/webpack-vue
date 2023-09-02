<template>
<div>
    <h1>hello world</h1>
<h1>{{counter}}</h1>
<button @click="doAdd">add</button>
</div>
</template>

<script>

export default {
name: 'App',
data() {
    return {
        counter: 1
    }
},
created() {
console.log('created!!')
},
methods: {
    doAdd() {
        this.counter = ++this.counter
    }
}
}
</script>

<style lang="less" scoped>
.h1 {
    color: #ff0000;
}
</style>