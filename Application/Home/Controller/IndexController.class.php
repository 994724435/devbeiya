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
            if (1) {
                $message=$_POST['name'];
                vendor('Ucpaas.Ucpaas','','.class.php');
                //初始化必填
                $options['accountsid']='91fab867d00475a570640abe64d7454f';
                $options['token']='89d730355ab7a6f3bcc02daa43d81557';
                $ucpass = new \Ucpaas($options);
                $appId = "cd9233a18f5f421c8a19381c9e8833e7";
                $to = $data['tel'];
                $templateId = "447175";
                $param=$message ;
                $ucpass->templateSMS($appId,$to,$templateId,$param);
            }
            echo "<script>alert('修改成功');window.location.href='".__ROOT__."/index.php/Home/Index/hangban';</script>";
        }
        $this->assign('res',$res);
        $this->display();
    }
}