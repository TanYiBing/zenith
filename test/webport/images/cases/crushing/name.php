<?php 
/************按时间顺序输出文件夹中的文件******************/  
function dir_size($dir, $url) {  
    $dh = @opendir ( $dir ); // 打开目录，返回一个目录流  
    $return = array ();  
    $i = 0;  
    while ( $file = @readdir ( $dh ) ) { // 循环读取目录下的文件  
        if ($file != '.' and $file != '..') {  
            $path = $dir . '/' . $file; // 设置目录，用于含有子目录的情况  
            if (is_dir ( $path )) {  
            } elseif (is_file ( $path )) { 
                echo $file;
                
                $filetime [] =  filemtime ( $path ); // 获取文件最近修改日期
                $filename[] =$path;
                $str=strtolower($file);
                echo $str."--------".$file.PHP_EOL;
                $stra=explode(" ",$str);
                $str=implode($stra, "-");
                rename($file, $str) ; 
                $return [] = $url . '/' . $str;  
            }  
        }  
    }  
    @closedir ( $dh ); // 关闭目录流   
    
    array_multisort($filename,SORT_DESC,SORT_STRING, $return); 
    array_multisort($filetime,SORT_DESC,SORT_STRING, $return);//按时间排序 
    return $return; // 返回文件  
}
$result=dir_size("./","/images/cases/crushing");  
print_r($result);
 ?>