<?php
/**
 * Created by PhpStorm.
 * User: a
 * Date: 2017/3/1
 * Time: 18:53
 */
if(!defined('IN_OAOOA')) {
    exit('Access Denied');
}
global $_G;

/*if($_GET['formhash'] != $_G['formhash']) {

    showmessage(lang('logout_succeed'), dreferer(), array('formhash' => FORMHASH));
}*/
//应用退出登录挂载点
Hook::listen('applogout');

clearcookies();

$_G['groupid'] = $_G['member']['groupid'] = 7;

$_G['uid'] = $_G['member']['uid'] = 0;

$_G['username'] = $_G['member']['username'] = $_G['member']['password'] = '';
$isapi = ((isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') || (isset($_GET['inajax']) && $_GET['inajax']))
    ? true : false;
if($isapi){
    exit(json_encode(array('success'=>true)));
}else{
    if(defined('IN_MOBILE')) {

        showmessage(lang('location_logout_succeed_mobile'), dreferer(), array('formhash' => FORMHASH));

    } else {

        showmessage(lang('logout_succeed'), dreferer(), array('formhash' => FORMHASH));
    }
}
