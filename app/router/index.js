/**
 * Created by xwatson on 2016/12/23.
 */
import path from './path'
const routes = [path]
export default function (app) {
    routes.forEach((route) => {
        app
            .use(route.routes())
            .use(route.allowedMethods({
                throw: true
            }))
    })
}