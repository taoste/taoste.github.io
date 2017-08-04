

Snapshot/backup:
create a snapshot (or keep a backup of downloaded archive) before first booting and working with this VM, so that you can reset quickly after the OS trial expires.

Licensing notes and evaluation period:
The modern,ie virtual machines use evaluation versions of Microsoft Windows ,and therefore time limited. You can find a link the full license on the desktop.

Activation:
For Windows 7,8, and 8.1 virtual machines, you need to connect to the Internet in order to activate the trial, In most cases ,activation will be done automatically after a few minutes , but you can also enter "slmgr /ato" from an administrative command prompt , This will give you 90 days. For Windows Vista , you have 30 days after first boot.
For Windows XP , you have 30 days after first boot. You will see a toast notification pop up a few  minutes after boot stating the days left ( in the system tray ).

Re-arm:
In some cases (Windows XP, Vista ,and 7), it may be possible to further extend the initial trial period if there are rearms left. The following commands can be run from an administrative command prompt (right-click on Command Prompt and select the "Run as Administrator" option).
Show current license, time remaining,re-arm count (all except Windows XP): 
slmgr /dlv
Re-arm(all except Windows XP),Requires reboot.
slmgr /rearm
Re-arm (Windows XP only), Note that no error is given in the case no rearms are left.
rundll32.exe syssetup,SetupOobeBnk

For Windows 8 and 8.1, you will NOT be able to re-arm the trial.

-------------------------
[Google 翻译](https://translate.google.com/?hl=zh-CN#en/zh-CN/Snapshot%2Fbackup%3A%0Acreate%20a%20snapshot%20(or%20keep%20a%20backup%20of%20downloaded%20archive)%20before%20first%20booting%20and%20working%20with%20this%20VM%2C%20so%20that%20you%20can%20reset%20quickly%20after%20the%20OS%20trial%20expires.%0A%0ALicensing%20notes%20and%20evaluation%20period%3A%0AThe%20modern%2Cie%20virtual%20machines%20use%20evaluation%20versions%20of%20Microsoft%20Windows%20%2Cand%20therefore%20time%20limited.%20You%20can%20find%20a%20link%20the%20full%20license%20on%20the%20desktop.%0A%0AActivation%3A%0AFor%20Windows%207%2C8%2C%20and%208.1%20virtual%20machines%2C%20you%20need%20to%20connect%20to%20the%20Internet%20in%20order%20to%20activate%20the%20trial%2C%20In%20most%20cases%20%2Cactivation%20will%20be%20done%20automatically%20after%20a%20few%20minutes%20%2C%20but%20you%20can%20also%20enter%20%22slmgr%20%2Fato%22%20from%20an%20administrative%20command%20prompt%20%2C%20This%20will%20give%20you%2090%20days.%20For%20Windows%20Vista%20%2C%20you%20have%2030%20days%20after%20first%20boot.%0AFor%20Windows%20XP%20%2C%20you%20have%2030%20days%20after%20first%20boot.%20You%20will%20see%20a%20toast%20notification%20pop%20up%20a%20few%20%20minutes%20after%20boot%20stating%20the%20days%20left%20(%20in%20the%20system%20tray%20).%0A%0ARe-arm%3A%0AIn%20some%20cases%20(Windows%20XP%2C%20Vista%20%2Cand%207)%2C%20it%20may%20be%20possible%20to%20further%20extend%20the%20initial%20trial%20period%20if%20there%20are%20rearms%20left.%20The%20following%20commands%20can%20be%20run%20from%20an%20administrative%20command%20prompt%20(right-click%20on%20Command%20Prompt%20and%20select%20the%20%22Run%20as%20Administrator%22%20option).%0AShow%20current%20license%2C%20time%20remaining%2Cre-arm%20count%20(all%20except%20Windows%20XP)%3A%20%0Aslmgr%20%2Fdlv%0ARe-arm(all%20except%20Windows%20XP)%2CRequires%20reboot.%0Aslmgr%20%2Frearm%0ARe-arm%20(Windows%20XP%20only)%2C%20Note%20that%20no%20error%20is%20given%20in%20the%20case%20no%20rearms%20are%20left.%0Arundll32.exe%20syss
):英文 -> 中文简体

快照/备份：
在首次引导和使用此虚拟机之前创建快照（或保留下载归档的备份），以便在OS试用期满后能够快速重置。

授权说明和评估期：
现代即虚拟机使用Microsoft Windows的评估版，因此时间有限。您可以在桌面上找到一个链接的完整许可证。

激活：
对于Windows 7,8和8.1虚拟机，您需要连接到互联网才能激活试用。在大多数情况下，激活将在几分钟后自动完成，但您也可以输入“slmgr / ato”一个管理命令提示符，这将给你90天。对于Windows Vista，您首次启动30天。
对于Windows XP，首次启动后30天。启动后几分钟，您会看到一个吐司通知，说明剩下的时间（在系统托盘中）。

重新武装：
在某些情况下（Windows XP，Vista和7），如果有遗留的话，可能会进一步延长初始试用期。可以从管理命令提示符运行以下命令（右键单击命令提示符，然后选择“以管理员身份运行”选项）。
显示当前许可证，剩余时间，重新计数（除Windows XP之外的所有数据）：
slmgr / dlv
重新安装（除Windows XP之外的所有功能），需要重新启动。
slmgr / rearm
重新安装（仅适用于Windows XP），请注意，如果没有留下任何后缀，则不会显示任何错误。
rundll32.exe syssetup,SetupOobeBnk

对于Windows 8和8.1，您将无法重新安装试用版。

