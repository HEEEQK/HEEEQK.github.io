# 同步原理

<div id="progress-container">
  <div id="progress-bar"></div>
</div>

## 同步介绍

![同步介绍](https://img.heeeqkblog.dpdns.org/20260320092505.png){: .center }  

---

## 载波同步

---

### 外同步（插入导频法）
- 适用范围：{==不包含载频分量的信号==}，如抑制载波的 $DSB$ 、 $VSB$ 、等概的 $2PSK$ 和 $2DPSK$ 等。  
    - 特例：单边带信号 $(SSB)$ 既没有载波分量又 ^^不能用直接法提取载波^^ ，{==只能用插入导频法==}。


- 原理框图：
![载波外同步](https://img.heeeqkblog.dpdns.org/20260320093139.png){: .center }  

- 示意图：
![载波外同步示意图](https://img.heeeqkblog.dpdns.org/20260320093219.png){: .center }  


---

### 自同步法（直接法）

- 平方变换：
    ![平方变换原理](https://img.heeeqkblog.dpdns.org/20260320093433.png){: .center }  
    - 二倍频中， $E[m^2(t)]\neq0$ ，可以将二倍频提取出来


- 平方环法框图：
![平方环法框图](https://img.heeeqkblog.dpdns.org/20260320093617.png){: .center }  

- 注意：由于窄带滤波器难以实现，常用锁相环代替

---

## 码元同步

---

### 外同步
- 频域插入法：在发送的基带信号中插入频率为码元速率或码元速率倍数的同步信号  
![码元同步外同步](https://img.heeeqkblog.dpdns.org/20260320093721.png){: .center }  


---

### 自同步法
- 开环同步法：将解调后的基带信号先进行某种线性变换，使其{==频谱中含有离散的定时信息==},再通过窄带滤波器滤除。又称之为{==非线性波形变换滤波法==}

- 延迟相乘法：当延迟时间等于码元持续时间一半时, 可以得到最强的码元速率分量  

![延迟相乘法](https://img.heeeqkblog.dpdns.org/20260320094058.png){: .center }  

- 微分整流法：  
![微分整流法](https://img.heeeqkblog.dpdns.org/20260320094128.png){: .center }  

- 波形变换滤波法：  

![波形变换滤波法](https://img.heeeqkblog.dpdns.org/20260320094151.png){: .center }  

---

## 群同步

### 起止式同步法
- 定义：在空闲时，传输线保持高电平（“1”状态）。当要发送一个字符时，先发送一个低电平（“0”状态）作为“起始位”，然后发送数据位，最后发送高电平（“1”状态）作为“停止位”。  

![起止式同步法](https://img.heeeqkblog.dpdns.org/20260320094520.png){: .center }  

### 集中插入法

- 巴克码：  
![集中插入法](https://img.heeeqkblog.dpdns.org/20260320094717.png){: .center }  

- 巴克码识别器：  
![巴克码识别器](https://img.heeeqkblog.dpdns.org/20260320094620.png){: .center }  
