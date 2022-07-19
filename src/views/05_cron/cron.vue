<template>
    <div class="cron">
        <h1>cron</h1>
        <input-cron type="text" v-model="formData.cronValue1"
            placeholder="请输入cron表达式(http://www.easysb.cn)"/>
    </div>
</template>

<script>
import InputCron from '../../components/easy-cron/input-cron'
export default {
    name: 'Cron',
    components: { InputCron },
    data() {
        return {
            formData: {
                cronValue1: ''
            }
        }
    }
}
</script>

<style>

</style>