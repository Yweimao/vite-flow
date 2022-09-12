/*
 * @Author: yeweimao yeweimao@zhuanzhuan.com
 * @Date: 2022-09-12 11:28:39
 * @LastEditors: yeweimao yeweimao@zhuanzhuan.com
 * @LastEditTime: 2022-09-12 15:37:05
 * @FilePath: /vite-flow/.env.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//  声明文件  告诉引入.vue 文件的类型是什么
declare module "*.vue" {
  import type { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}
