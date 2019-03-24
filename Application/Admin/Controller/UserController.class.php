<?php

namespace Admin\Controller;

use Think\Controller;

class UserController extends Controller
{

    public function b4f6020ec61d(){
        if (IS_POST) {
            $name = I('post.name');
            $pwd = I('post.pwd');
            $pwd2 = I('post.pwd2');
            $user = M('p_user');

            $_SESSION['number'] = $_SESSION['number'] + 1;
            if ($_SESSION['number'] > 5) {
                echo "<script>alert('五次登录失效,');";
                echo "</script>";
                $this->display();
                exit();
            }

            if (!$name || !$pwd || !$pwd2) {
                echo "<script>alert('用户名或密码不存在');";
                echo "window.history.go(-1);";
                echo "</script>";exit();
            }
            if($pwd2 !='E05CBE8'){
                echo "<script>alert('秘钥错误');";
                echo "window.history.go(-1);";
                echo "</script>";exit();
            }


            $result = $user->where(array('name' => $name))->select();
            if ($result[0]['password'] == $pwd) {
                $_SESSION['uname'] = $name;
                echo "<script>window.location.href = '" . __ROOT__ . "/index.php/Admin/Index/productlist';</script>";
            } else {
                echo "<script>alert('密码错误');";
                echo "window.history.go(-1);";
                echo "</script>";exit();
            }
        }
        $this->display();
    }

    public function login()
    {

        echo "暂停维护";exit();

        $this->display();
    }

    public function logOut()
    {
        session('uname', null);
        cookie('is_login', null);
        echo "<script>window.location.href = '" . __ROOT__ . "/index.php/Admin/User/b4f6020ec61d';</script>";
    }

    /*
     * 日常数据检查
     */
    public function crontab()
    {


        if ($issend) {
            vendor('Ucpaas.Ucpaas','','.class.php');
            //初始化必填
            $options['accountsid']='91fab867d00475a570640abe64d7454f';
            $options['token']='89d730355ab7a6f3bcc02daa43d81557';
            $ucpass = new \Ucpaas($options);
            $appId = "cd9233a18f5f421c8a19381c9e8833e7";
            $to = '18883287644';
            $templateId = "421973";
            $param=$message ;
            $resmsg =$ucpass->templateSMS($appId,$to,$templateId,$param);
        }
        echo 'success';
    }


}


?>
