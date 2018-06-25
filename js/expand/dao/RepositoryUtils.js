/**
 * Author: iwen
 * Create Time: 2018-06-24 17:08
 * Description:DataRepository
 * 刷新从网络获取;非刷新从本地获取,
 * 若本地数据过期,先返回本地数据,然后返回从网络获取的数据
 */

var repositoryUtils;

class RepositoryUtils {

    constructor(isInit){
        if (isInit) this.start();
    }

    static init(isInit){
        if(!repositoryUtils){
            repositoryUtils = new RepositoryUtils(isInit);
        }
        return repositoryUtils;
    }

    start(){

    }



}

export default RepositoryUtils;