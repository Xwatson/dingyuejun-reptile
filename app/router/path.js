/**
 * Created by xwatson on 2016/12/23.
 */
import Router from 'koa-router'
const router = new Router()

import verify from '../controller/verify'
import index from '../controller/index'
import movieType from '../controller/movieType'

router.get('/', index)

router.get('/api', verify)

router.post('/api/movieType', movieType)

export default router
