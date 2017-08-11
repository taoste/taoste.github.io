一些平时用到的小技巧，权当是一些笔记

cmd一键获取所有连接过的wifi 密码:

-------------
for /f "skip=9 tokens=1,2 delims=:" %i in ('netsh wlan show profiles') do @echo %j | findstr -i -v echo | netsh wlan show profiles %j key=clear
pause
---------------------------
SSH命令行上传/下载文件:

上传：
---------------------------
scp /path/file（这部分为本地的路径） user（远端目标用户名）@host（远端目标IP）:/pathorfile（文件存储路径）
例如 ：
scp /root/Desktop/demo.php root@192.168.40.111:/var/www/html/
---------------------------
下载：

---------------------------
scp user（远端用户名）@host（远端IP）:/path/file（下载文件在远端的路径） localpathorfile（本地文件存放路径）
例如 ：scp root@192.168.40.111:/var/www/html/demo.zip /root/
---------------------------

查看目录或文件：

---------------------------
ssh user@host command ls "/path/*.tgz"
---------------------------
