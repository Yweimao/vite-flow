/*
 * @Author: yeweimao yeweimao@zhuanzhuan.com
 * @Date: 2022-09-12 16:38:24
 * @LastEditors: yeweimao yeweimao@zhuanzhuan.com
 * @LastEditTime: 2022-09-12 17:10:13
 * @FilePath: /vite-flow/src/router/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from "vue-router"
const getRouters = () => {
  const files = import.meta.glob("../views/*.vue")
  // console.log("files:", files)
  const router = Object.entries(files).map(([file, module]) => {
    const name = file.match(/\.\.\/views\/([^.]+?)\.vue/)?.[1]
    console.log(name)
    return {
      path: "/" + name,
      component: module
    }
  })

  return router
}
const router = createRouter({
  history: createWebHistory(),
  routes: getRouters()
})
export default router
