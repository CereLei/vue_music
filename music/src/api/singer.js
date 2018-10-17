import jsonp from '../common/js/jsonp'
import {commonParams,options} from './config'
import axios from 'axios'

export function getSingerList(){
    const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg';
    const data=Object.assign({},commonParams,{
        channel: 'singer',
        page: 'list',
        key: 'all_all_all',
        pagesize: 100,
        pagenum: 1,
        hostUin: 0,
        needNewCode: 0,
        platform: 'yqq'
    })
    return jsonp(url,data,options)
}
export function getSingerDetail(singerId){
    const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
    
      const data = Object.assign({}, commonParams, {
        hostUin: 0,
        needNewCode: 0,
        platform: 'yqq',
        order: 'listen',
        begin: 0,
        num: 80,
        songstatus: 1,
        singermid: singerId
      })
    
      return jsonp(url, data, options)
}
export function getSongerUrl(){
    const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg?_=1539741807436'
    
      const data = Object.assign({}, commonParams, {
        "req_0": {
            "module": "vkey.GetVkeyServer",
            "method": "CgiGetVkey",
            "param": {
            "guid": "6616016232",
            "songmid": [
            "003UTRfZ12wGOs",
            "002kADrZ01iC2L",
            "004295Et37taLD",
            "001nUzRq0GgCVb",
            "004TXEXY2G2c7C",
            "001IpbDW34m1Gy",
            "002CxSLT41D5tD",
            "002K4xqW4A7m7q",
            "002E8ebM3TFWmA",
            "001N8e5Q4Gjxda",
            "003h3CYS3UxDB4",
            "003gUMnj3mMwLZ",
            "000H3L9R1fk6DM",
            "0003y8uR1ZZwOI",
            "002ASCKm3ROw7t"
            ],
            "songtype": [],
            "uin": "0",
            "loginflag": 0,
            "platform": "23",
            "h5to": "speed"
            }
            },
            "comm": {
            "g_tk": 5381,
            "uin": 0,
            "format": "json",
            "ct": 23,
            "cv": 0
            }
      })
      return axios.post(url, {
        params: data
      }).then((res) => {
          debugger
        return Promise.resolve(res.data)
      }
    )

}