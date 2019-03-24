<?php
namespace Home\Controller;
use Think\Controller;
header('content-type:text/html;charset=utf-8');
class IndexController extends CommonController {

    //主页
	public function index(){
		$this->display();
	}

    public function hangban(){
        if(!session('uid')){
            echo "<script>";
            echo "window.location.href='/index.php/Home/Login/login';";
            echo "</script>";
            exit;
        }

        $menber =M('p_users');
        $res = $menber->where(array('id'=>session('uid')))->find();
        if($_POST){
            $data=$_POST;
            $menber->where(array('id'=>session('uid')))->save($data);

            echo "<script>alert('修改成功');window.location.href='".__ROOT__."/index.php/Home/Index/hangban';</script>";
        }
        $this->assign('res',$res);
        $this->display();
    }
}