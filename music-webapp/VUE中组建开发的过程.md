#组件的构建
1. 以.vue为后缀名的文件就是一个模板，包含三个部分，
```javascript
    <template>标签中书写的就是html代码，可以使用vue中的指令等</template>
    <script>
        export defautl{
            // 使用export组件导出组件，
            // 组件中所使用的方法，，数据都写在这个对象中
            // 模板中使用的数据在data()方法的返回值中
            data(){
                return {
                    // 数据
                }
            }
         }
    </script scoped>

    <style>书写的是样式，是一个局部的作用域不会造成样式的污染</style>
```
#组件的调用
1. 使用利用import form 导入相关组件文件，根据目录导入
```javascript
    // 导入了.vue组件
    import Header from '/components/Header'
```
2. 在使用子组件的文件中注册
```javascript
    在conpontes:{
        注册组件
        conponents:{
            // 组件名
            Header
        }
    }
```
3. 使用组件在模板中
<template>
    <Header></Header>
</template>



#组件的传值问题
如何将父组件的值传递到子组件
1. 在父组件中的data()方法的返回值中定义好需要传递到组件的值，可以是字符串，数组，数子，对象等等
2. 通过v-bind 自定义一个属性绑定到子组件的属性上通过这个属性来传递到子组件
3. 子组件接收数据，通过props属性来接收数据，名称，需要和在子组件中绑定的自定义属性名称相同，
4. 在props中 接收到数据可以指定其类型，String,Number，Array,Object,Boolaan
5. 在子组件中引用数据，需要注意的是，父组件传递来的数据结构是我们提前定义好的