/**
 * Created by xwatson on 2016/12/27.
 */

import HttpHtml from '../utils/HttpHtml'


export default async function (ctx, next) {
    let $ = await HttpHtml.getHtml('https://movie.douban.com/tag/')
    let $tags = $('.tagCol')
    let tag_srt = ''
    $tags.each(function () {
        $(this).find('td').each(function () {
            tag_srt += $(this).find('a').text()+' | '
        })
    })
    ctx.body = {
        data: tag_srt
    }
}
