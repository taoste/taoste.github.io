最简短的HTML显示时间

```HTML
<span id="Time">当前时间</span>
<script>setInterval("Time.innerHTML=new Date().toLocaleString()+' 星期'+'日一二三四五六'.charAt(new Date().getDay());",1000);
</script> 
``` 
