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
1. 组件式可以复用的Vue实例，所以和new Vue接收相同的选项参数，data,computed,watch,methods,以及生命周期钩子，只有类似于el根实例特有的选项

2. 每用一次组件时，就会创建一个新的实例,组件会各自维护

3. 在组件中数据并不是一个对象，而是一个函数,data(){return{}},利用函数的返回值，这个类似于构造函数中的this是默认的值，所有的实例都共享一个值，每个实例中的属性都会发生改变。

4. 所以利用data是个函数的返回值。来维护独立的空间

#通过Prop向子组件传递数据
Prop是可以在组件上组册的一些自定义的特性，当一个值传递给一个prop属性时候，它就变成了那个组件的一个属性。
利用组件的prpos属性，访问props中的数据，就像访问data中的值一样，property属性

#通过自定义的事件来从子组件中向父组件中传递数据
vue提供了一个自定义事件的系统来解决这问题，可以调用内建的方法$emit方法并传入事件的名字，来向父级的组件触发一个事件，在子组件上添加方法使用$eimt('methods-name'),
在父组件中使用v-on来监听这个事件v-on:methods-name=''

使用事件来抛出一个特定的值，可以使用$emit('methods-name',data)的第二个参数,来提供数据，
在父组件中通过$event来接收这个值