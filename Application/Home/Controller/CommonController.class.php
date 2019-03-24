<?php
namespace Home\Controller;
use Think\Controller;
class CommonController extends Controller {
	public function _initialize(){
		$function = explode('/',__ACTION__);
		$curfunction =$function[count($function)-1];

		// session('uid',5);

	}

	private function getfunction($curfunction){
		if(in_array($curfunction, array('index')) ){
			return 1;
		}elseif(in_array($curfunction, array('category'))){
			return 2;
		}elseif(in_array($curfunction, array('shopcart'))){
			return 3;
		}elseif(in_array($curfunction, array('member'))){
			return 4;
		}elseif(in_array($curfunction, array('shop','shopapply'))){
            return 5;
        }else{
			return 1;
		}
	}

	/**
	 * 获取当前页面完整URL地址
	 */
	private function get_url() {
		$sys_protocal = isset($_SERVER['SERVER_PORT']) && $_SERVER['SERVER_PORT'] == '443' ? 'https://' : 'http://';
		$php_self = $_SERVER['PHP_SELF'] ? $_SERVER['PHP_SELF'] : $_SERVER['SCRIPT_NAME'];
		$path_info = isset($_SERVER['PATH_INFO']) ? $_SERVER['PATH_INFO'] : '';
		$relate_url = isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : $php_self.(isset($_SERVER['QUERY_STRING']) ? '?'.$_SERVER['QUERY_STRING'] : $path_info);
		return $sys_protocal.(isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : '').$relate_url;
	}


}