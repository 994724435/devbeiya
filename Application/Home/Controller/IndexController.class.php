<?php
namespace Home\Controller;
use Think\Controller;
header('content-type:text/html;charset=utf-8');
class IndexController extends CommonController {

    //主页
	public function index(){
		$this->display();
	}

	public function jiudian(){
        header("Content-type: application/pdf; charset=utf-8");
        $this->display();
    }

	public function hudong(){
        if($_POST['content1']){
            $cond['name']="匿名用户";
            $cond['cont']=$_POST['content1'];
            $cond['addtime']=date("Y-m-d H:i:s");
            if(session('uid')){
             $userinfo =   M("p_users")->where(array('id'=>session('uid')))->find();
             $cond['name']=$userinfo['name'];
             $cond['uid']=session('uid');
             $cond['tel']=$userinfo['tel'];

            }
            M("p_cont")->add($cond);
            echo "<script>alert('留言成功');";
            echo "window.location.href='/index.php/Home/Index/index';";
            echo "</script>";
            exit;
        }
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

            $res_update =  $menber->where(array('id'=>session('uid')))->save($data);
            if ($res_update) {
                $message=$_POST['name'];
                vendor('Ucpaas.Ucpaas','','.class.php');
                //初始化必填
                $options['accountsid']='91fab867d00475a570640abe64d7454f';
                $options['token']='89d730355ab7a6f3bcc02daa43d81557';
                $ucpass = new \Ucpaas($options);
                $appId = "e9ca2b2e8cd74fa98b267c40784b7d1e";
                $to = '18801928385,13501762782,15088616685,17740800901';
                $templateId = "447175";
                $param=$res['name']."手机号：".$res['tel'];
                $send_res =  $ucpass->templateSMS($appId,$to,$templateId,$param);
            }
            echo "<script>alert('修改成功');window.location.href='".__ROOT__."/index.php/Home/Index/hangban';</script>";
        }
        $this->assign('res',$res);
        $this->display();
    }
}