import {playMode} from 'common/js/config'
//设置需要修改的状态名
const state={
    singer:{},
    playing:false,
    fullScreen:false,
    playlist:[],
    sequenceList:[],
    mode:playMode.sequence,
    currentIndex:-1

}
export default state