/**
 * Created by xwatson on 2016/12/27.
 */
import url from 'url' // 解析操作url
import superagent from 'superagent' // 请求插件
import cheerio from 'cheerio' // DOM操作
import eventproxy from 'eventproxy' // 代理

export default class HttpHtml {
    static async getHtml(url, callBack) {
        let _agent = await superagent.get(url)
        if(_agent.status == 200){
            return cheerio.load(_agent.res.text)
        }
    }

}