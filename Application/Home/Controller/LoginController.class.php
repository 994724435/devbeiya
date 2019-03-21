<?php

namespace Home\Controller;
use Think\Controller;
header('content-type:text/html;charset=utf-8');
class LoginController extends Controller{
    public function login(){
        session('uid',0);
        if($_POST){
            $menber =M('p_users');
            $res = $menber->where(array('tel'=>$_POST['tel']))->select();
            if($res[0]['password']==$_POST['pwd']){
                session_start();
                session('name',$_POST['name']);
                session('uid',$res[0]['id']);
                echo "<script>window.location.href='".__ROOT__."/index.php/Home/Index/index';</script>";
            }else{
                echo "<script>alert('用户名或密码错误');</script>";
            }
        }

        $this->display();
    }

    public function reg(){
        session('uid',0);

        if($_POST){
            $menber = M('p_users');
            if(!$_POST['tel'] || !$_POST['password'] || !$_POST['password1'] || !$_POST['name']){
                echo "<script>alert('请将信息填写完整');</script>";
                $this->display();
                exit();
            }

            if($_POST['tel']){
                $tel = $menber->where(array('tel'=>$_POST['tel']))->select();
                if($tel[0]){
                    echo "<script>alert('电话号码已注册');</script>";
                    $this->display();
                    exit();
                }
            }
            if($_POST['password']!=$_POST['password1']){
                echo "<script>alert('登录密码不一致');";
                echo "window.location.href='".__ROOT__."/index.php/Home/Login/reg';";
                echo "</script>";
                exit;
            }

            $data = $_POST;
            $data['addtime'] = date('Y-m-d H:i:s',time());
            $data['updatetime'] = date('Y-m-d H:i:s',time());

            $userid = $menber->add($data);
            session_start();
            session('name',$_POST['name']);
            session('uid',$userid);
            if (1) {
                $message="注册成功";
                vendor('Ucpaas.Ucpaas','','.class.php');
                //初始化必填
                $options['accountsid']='91fab867d00475a570640abe64d7454f';
                $options['token']='89d730355ab7a6f3bcc02daa43d81557';
                $ucpass = new \Ucpaas($options);
                $appId = "cd9233a18f5f421c8a19381c9e8833e7";
                $to = $data['tel'];
                $templateId = "421973";
                $param=$message ;
                $resmsg =$ucpass->templateSMS($appId,$to,$templateId,$param);
            }

            echo "<script>window.location.href='".__ROOT__."/index.php/Home/Index/index';</script>";
            exit();
        }

        $this->display();
    }

}