import Toast from './Toast.vue';
const obj = {
    install(Vue) {
        console.log(this)
    //    创建组件构造器
    const toastConstrustor = Vue.extend(Toast)
    // 用new的方式 创建一个组件
    const toast = new toastConstrustor();
    // 将组件对象手动挂载到某一元素
    toast.$mount(document.createElement('div'));
    document.body.appendChild(toast.$el)

    Vue.prototype.$toast = toast
    }
}

export default obj