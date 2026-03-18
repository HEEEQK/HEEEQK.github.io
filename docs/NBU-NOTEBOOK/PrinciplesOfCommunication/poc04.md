# 模拟信号调制

<div id="progress-container">
  <div id="progress-bar"></div>
</div>

---

!!! success "概念"
    - 模拟调制分为线性调制和非线性（角度调制）  
    - 线性调制包括AM、DSB、SSB以及VSB  
    <center>
    ![滤波法](https://img.heeeqkblog.dpdns.org/20260316151222.png)
    <center>
    <center>
    ![相移法](https://img.heeeqkblog.dpdns.org/20260316151315.png)
    <center>
    - 非线性调制包括FM与PM（在{==通信电子线路==}中详细介绍）  

---

## 线性调制

!!! tip "线性调制原理"
    ![线性调制原理](https://img.heeeqkblog.dpdns.org/20260316133953.png)  
    - 本质：时域上与 $cos(w_ct)$ 相乘，频域上做 $w_c$ 的偏移  

---

### AM
- AM又称{==调幅==}
- 原理：假设调制信号 $m（t）$的均值为0，将其叠加一个直流偏量 $A_0$后与载波相乘，即可形成调幅信号。
- 时域表达： $\begin{array}{rcl}s_{\mathrm{AM}}(t)&=&\left[A_{0}+m(t)\right]\mathrm{cos}\omega_{\mathrm{c}}t&=&A_{0}\mathrm{cos}\omega_{\mathrm{c}}t+m(t)\mathrm{cos}\omega_{\mathrm{c}}t\end{array}$  

- 频域表达： $S_{\mathrm{AM}}(\omega)=\pi A_{0}[\delta(\omega+\omega_{c})+\delta(\omega-\omega_{c})]+\frac{1}{2}[M(\omega+\omega_{c})+M(\omega-\omega_{c})]$  

- 框图如下：
<center>
![AM框图](https://img.heeeqkblog.dpdns.org/20260316133800.png)
<center>
- 调制过程波形：
![AM波形](https://img.heeeqkblog.dpdns.org/20260316134345.png)  

---

#### 解调
=== "包络检波"
    - 当波形满足： $\mid m\left(t\right)\mid_{\max}\leqslant A_{0}$ 时，AM波的包络与调制信号 $m(t)$ 的形状完全相同，使用包络检波可以很容易恢复原始信号
    - 当上述条件没有满足时，出现“过调幅”情况，采用包络检波会出现失真，但是可以采用其他解调方式


=== "相干解调"
    - 移步至右侧：解调---相干解调


---

#### 数字特性
- 带宽： $B_{_{\mathrm{AM}}}=2f_{_{\mathrm{H}}}$  

- 功率：在假设调制信号的平均值为0的情况下， $P_{_{\mathrm{AM}}}=\frac{A_{0}^{2}}{2}+\frac{\overline{m^{2}\left(t\right)}}{2}=P_{_{\mathrm{c}}}+P_{_{s}}$ ，式中， $P_c$ 是载波功率，$P_s$ 是边带功率  

- 调制效率： $\eta_{\mathrm{AM}}=\frac{P_{\mathrm{s}}}{P_{\mathrm{AM}}}=\frac{\overline{m^{2}\left(t\right)}}{A_{0}^{2}+\overline{m^{2}\left(t\right)}}$  

!!! tip "满调幅"
    在“满调幅”（$|m(t)|_{\max} = A_0$ 时，也称 100% 调制）条件下，这时调制效率的最大值为： $\eta_{\text{AM}} = 1/3$ ，因此，AM 信号的功率利用率比较低。

---

### DSB-SC
- 全称：抑制载波双边带调制
- 原理：由于载波信号并不传输信息，信息完全由边带传输，所以可以将AM调制中的直流分量去除  
- 时域表达： $s_{\mathrm{DSB}}\begin{pmatrix}t\end{pmatrix}=m\begin{pmatrix}t\end{pmatrix}\mathrm{cos}\omega_{\mathrm{c}}t$  
- 频域表达： $S_{_{\mathrm{DSB}}}(\omega)=\frac{1}{2}[M(\omega+\omega_{_{\mathrm{c}}})+M(\omega-\omega_{_{\mathrm{c}}})]$  
- 波形：  
![DSB波形](https://img.heeeqkblog.dpdns.org/20260316140125.png)

!!! tip "关于DSB"
    - DSB信号解调时需要使用{==相干解调==}
    - 由于不存在载波分量，所以DSB信号的{==调制效率是100%==}
    - DSB信号虽然节省了载波功率，但是所需传输带宽仍然是{==基带信号的两倍==}


---


### SSB
- 全称：单边带调制
- 原理：将双边带信号的一个边带滤掉
- 产生：滤波法、相移法
- 名词解释：下边带（LSB）、上边带（USB）

---


#### 滤波法
- 框图：
<center>
![滤波法框图](https://img.heeeqkblog.dpdns.org/20260316141139.png)
<center>

- 频谱图：
<center>
![滤波法频谱](https://img.heeeqkblog.dpdns.org/20260316141205.png)
<center>
- 难点：{==边带滤波器的制作==}


---


#### 相移法
- 原理：使用相移网络，对载波和调制信号进行适当的相移，以便在合成过程中将其中一个遍地啊抵消从而获得SSB信号
- 推导：篇幅原因不做详解，详情见《通信原理（第七版）》 樊昌信、曹丽娜编著 P91  

- 框图：
<center>
![相移法框图](https://img.heeeqkblog.dpdns.org/20260316141754.png)
<center>
- 难点：相移网络 $H_h(w)$ 的制作  

- 数字特性：带宽 $B_{\mathrm{SSB}}=f_{\mathrm{H}}$，比AM、DSB减少1/2，并且可以节省发射功率（只发送一个边带）   

!!! tip "关于 $ H_h(w) $ "
    - $H_{_h}(\omega)=\hat{M}(\omega)/M(\omega)=-\mathrm{jsgn}\omega$
    - $H_h(w)$ 称为 ^^希尔伯特滤波器^^

---

### VSB
- 全称：残留边带调制  

- 原理：不像SSB中那样完全抑制DSB信号的一个遍地啊，而是逐渐切割，使其残留一小部分  

- 框图对比：
![DSB SSB VSB对比](https://img.heeeqkblog.dpdns.org/20260316150328.png)  

- 频谱： $\begin{aligned}S_{\mathrm{VSR}}(\omega)&=S_{\mathrm{DSB}}(\omega)\cdot H(\omega)=\frac{1}{2}\left[M(\omega+\omega_{\mathrm{c}})+M(\omega-\omega_{\mathrm{c}})\right]H(\omega)\end{aligned}$  


---


#### 相干解调
- 框图：
<center>
![相干解调](https://img.heeeqkblog.dpdns.org/20260316150457.png)
<center>
- 对应频谱：  
    1.  $S_{_p}(\omega)=\left[S_{_\mathrm{VSB}}(\omega+\omega_{_\mathrm{c}})+S_{_\mathrm{VSB}}(\omega-\omega_{_\mathrm{c}})\right]$  
    2.  $\begin{aligned}S_{_p}(\omega)&=\frac{1}{2}\left[M(\omega+2\omega_{\mathrm{e}})+M(\omega)\right]H(\omega+\omega_{\mathrm{e}})+\frac{1}{2}\left[M(\omega)+M(\omega-2\omega_{\mathrm{e}})\right]H(\omega-\omega_{\mathrm{e}})\end{aligned}$  
    3.  低通滤波器输出 $S_{_d}(\omega)=\frac{1}{2}M(\omega)\left[H(\omega+\omega_{_c})+H(\omega-\omega_{_c})\right]$


!!! tip "相干解调的条件 "
    - $H(\omega+\omega_{\mathrm{c}})+H(\omega-\omega_{\mathrm{c}})=\text{常数}\quad|\omega|\leqslant\omega_{\mathrm{H}}$
    - 即滤波器的特性 $H(w)$ 在$±w_c$ 处必须具有奇对称（互补对称）的性质
    ![滤波器性质](https://img.heeeqkblog.dpdns.org/20260316151057.png)

---

## 解调

### 包络检波
- 原理：利用包络检波器直接从已调信号的幅度中提取原始信号，将幅度转化为波形  
- 框图：
<center>
![包络检波器](https://img.heeeqkblog.dpdns.org/20260316152132.png)  
<center>
- 优势：{==结构简单，解调输出是相干解调输出的两倍==}  

!!! tip "插入载波包络检波法"
    对于DSB、SSB、VSB等抑制载波的已调信号，不能直接使用包络检波，需要使用插^^入载波包络检波法^^，可以在接收端插入，也可以在发送端插入，但插入载波的振幅需要远大于原信号振幅  

---


### 相干解调
- 原理：调制与解调实质一样，都是对频谱进行搬移。解调需要将频谱搬回原始基带位置  
- 框图：
<center>
![相干解调](https://img.heeeqkblog.dpdns.org/20260316152702.png)  
<center>
- 原理：  
![相干解调原理](https://img.heeeqkblog.dpdns.org/20260316152758.png)

!!! tip "相干解调的关键"
    接收端需要提供一个与{==载波信号严格同步的相干载波==}


---

## 抗噪声性能分析
- 输出信噪比：$\frac{S_0}{N_0}=\frac{\text{解调器输出有用信号的平均功率}}{\text{解调器输出噪声的平均功率}}=\frac{\overline{m_0^2(t)}}{\overline{n_0^2(t)}}$  

- 信噪比增益（输出信噪比与输入信噪比的比值）：$G=\frac{S_\mathrm{o}/N_\mathrm{o}}{S_\mathrm{i}/N_\mathrm{i}}$  


---


### 系统性能分析

=== "DSB相干解调"
    - 一通分析之后：《通信原理（第七版）》P99
    - 解调器的输入信噪比： $\frac{S_i}{N_i}=\frac{\frac{1}{2}\overline{m^2(t)}}{n_0B}$  
    - 解调器的输出信噪比： $\frac{S_o}{N_o}=\frac{\frac{1}{4}\overline{m^2(t)}}{\frac{1}{4}N_i}=\frac{\overline{m^2(t)}}{n_0B}$  
    - 制度增益： $G_{_{\mathrm{DSB}}}=\frac{S_{_{o}}/N_{_{o}}}{S_{_{i}}/N_{_{i}}}=2$  
    - DSB 信号的解调信噪比可改善 1 倍。这是因为采用相干解调，使输入噪声中的一个 ^^正交分量^^  $n_s(t)$ ^^被消除^^ 的缘故。


=== "SSB相干解调"
    - 输入信噪比：$\frac{S_\mathrm{i}}{N_\mathrm{i}}=\frac{\frac{1}{4}\overline{m^2(t)}}{n_0B}=\frac{\overline{m^2(t)}}{4n_0B}$  
    - 输出信噪比：$\frac{S_o}{N_o}=\frac{\frac{1}{16}\overline{m^2(t)}}{\frac{1}{4}n_0B}=\frac{\overline{m^2(t)}}{4n_0B}$  
    - 制度增益： $G_{\mathrm{SSB}}=\frac{S_{\mathrm{o}}/N_{\mathrm{o}}}{S_{\mathrm{i}}/N_{\mathrm{i}}}=1$
    - 由于在 SSB 系统中，信号和噪声有相同表示形式，所以相干解调过程中，信号和噪声中的正交分量均被抑制掉，故信噪比没有改善。

=== "AM包络检波"
    1.  大信噪比情况下：即 $\begin{bmatrix}A_0+m\left(t\right)\end{bmatrix}\gg\sqrt{n_c^2\left(t\right)+n_s^2\left(t\right)}$  
        - 输入信噪比：$\frac{S_i}{N_i}=\frac{A_0^2+\overline{m^2(t)}}{2n_0B}$  
        - 输出信噪比：$\frac{S_o}{N_o}=\frac{\overline{m^2\left(t\right)}}{n_0B}$  
        - 制度增益：$G_{\mathrm{AM}}=\frac{S_{\mathrm{o}}/N_{\mathrm{o}}}{S_{\mathrm{i}}/N_{\mathrm{i}}}=\frac{2\overline{m^{2}\left(t\right)}}{A_{0}^{2}+\overline{m^{2}\left(t\right)}}$  
        - 对于100%的调制 $(A_{0}=\mid m(t)\mid_{\max})$，且 $m(t)$ 是单频正弦信号， $G_{AM}=\frac{2}{3}$ 达到最大值  

    2.  小信噪比情况下，即： $\begin{bmatrix}A_0+m(t)\end{bmatrix}\ll\sqrt{n_c^2(t)+n_s^2(t)}$  
        - 有用信号 $m(t)$ 被扰乱，发生{==门限效应==}


---

!!! success "相同输入条件下，SSB与DSB的抗噪声性能相同，AM最差"
    - $G_{\mathrm{DSB}}=2G_{\mathrm{SSB}}$
    - 如果在相同的输入信号功率 $S_i$，相同的输入噪声功率谱密度 $n_0$，相同的基带信号带宽 $f_H$ 条件下，对这两种调制方式进行比较，可以发现它们的输出信噪比是相等的。
    - 这就是说，两者的抗噪声性能是相同的。但 SSB 所需的传输带宽仅是 DSB 的 $1/2$，因此 SSB 得到普遍应用。


---


!!! tip "门限效应"
    - 在大信噪比情况下，AM 信号包络检波器的性能几乎与相干解调法相同
    - 在小信噪比情况下，调制信号和噪声难以分开，有用信号被淹没在噪声中，此时，输出信噪比不是按比例随输入信噪比下降，而是急剧恶化。通常把这种现象称为解调器的门限效应，开始出现门限效应的输入信噪比称为门限值
    - 门限效应是{==包络检波器的非线性解调作用引起的==}
    - ^^相干解调时不存在门限效应^^

---


## 非线性调制

- 一般表达式：$s_m(t)=A\cos\left[\omega_\mathrm{c}t+\varphi(t)\right]$
- 式中：$A$ 为载波的恒定振幅；$[\omega_c t + \varphi(t)]$ 为信号的瞬时相位，记为 $\theta(t)$；$\varphi(t)$ 为相对于载波相位 $\omega_c t$ 的瞬时相位偏移；$\frac{\mathrm{d}[\omega_c t + \varphi(t)]}{\mathrm{d}t}$ 为信号的瞬时角频率，记为 $\omega(t)$；$\frac{\mathrm{d}\varphi(t)}{\mathrm{d}t}$ 为相对于载频 $\omega_c$ 的瞬时频偏。


---


#### 相位调制PM
- 定义：瞬时相位偏移对调制信号 $m(t)$ 作线性变化，即 $\varphi\left(t\right)=K_{\mathrm{p}}m\left(t\right)$ ，其中 $K_p$ 为调相灵敏度（$\mathrm{rad/V}$）  

- 完整公式： $s_{_{\mathrm{PM}}}(t)=A\cos[\omega_{_{\mathrm{c}}}t+K_{_{\mathrm{P}}}m(t)]$  

#### 频率调制FM
- 定义：瞬时频率偏移随调制信号 $m(t)$ 成比例变化，即 $\frac{\mathrm{d}\varphi(t)}{\mathrm{d}t}=K_{f}m(t)$  

- 完整公式：$s_{_{\mathrm{FM}}}(t)=A\cos\left[\omega_{_{\mathrm{c}}}t+K_{_{f}}\int m(\tau)\mathrm{d}\tau\right]$  

---
FM与FM波形图：

![FM与FM波形图](https://img.heeeqkblog.dpdns.org/20260316163410.png)  

---

!!! tip "FM与PM区别"
    PM 与 FM 的区别仅在于，PM 是相位偏移随调制信号 $m(t)$ 线性变化，FM 是相位偏移随 $m(t)$ 的积分呈线性变化。如果预先不知道调制信号 $m(t)$ 的具体形式，则{==无法判断已调信号是调相信号还是调频信号==}。

---

#### 调频信号的产生

=== "直接调频法"
    - 使用调制信号直接去控制载波振荡器的频率，使其按调频信号的规律线性变化  
    - 锁相环（PLL）调制器框图：
    <center>
    ![](https://img.heeeqkblog.dpdns.org/20260316170211.png)
    <center>

=== "间接调频法"
    - 先将调制信号积分，然后对载波进行调相产生 $NBFM$ 信号，再经过n次倍频器得到 $WBFM$ 信号
    - 实现框图：
    <center>
    ![](https://img.heeeqkblog.dpdns.org/20260316170314.png)
    <center>

---
#### 调频信号的解调

- 解调：产生一个{==与输入调频信号的频率呈线性关系的输出电压==}

=== "非相干解调"
    - 使用鉴频器：完成从频率到电压的转化
    ![调频非相干解调](https://img.heeeqkblog.dpdns.org/20260316171413.png)


=== "相干解调"
    - 由于 $NBFM$ 信号可以分解为同相分量与正交分量之和，所以可以采用线性调制中相干解调
    ![调频相干解调](https://img.heeeqkblog.dpdns.org/20260316171553.png)


---


#### 调频系统的抗噪声性能
- 具体分析见《通信原理（第七版）》P116
- 大信噪比时：$G_{\mathrm{FM}}=\frac{S_{\mathrm{o}}/N_{\mathrm{o}}}{S_{\mathrm{i}}/N_{\mathrm{i}}}=\frac{3}{2}m_{f}^{2}\frac{B_{\mathrm{FM}}}{f_{m}}$
    1.  宽带调频时，信号带宽：$B_{\mathrm{FM}}=2(m_{f}+1)f_{m}=2(\Delta f+f_{m})$
    2.  所以：$G_{\mathrm{FM}}=3m_{f}^{2}(m_{f}+1)$
    3.  当 $m_f$ 远大于1时，$G_{\mathrm{FM}}\approx3m_{f}^{3}$
- 小信噪比时：产生门限效应

!!! tip "在大信噪比的情况下，宽带调频系统具有具有 ^^很高的抗噪声性能^^ ，但这一结果是 ^^增加传输带宽^^ 换来的，并且这种改善不是无限的。{==在保持输入信号功率不变的情况下，增加带宽会导致噪声功率增加，输入信噪比下降，从而可能导致门限效应==}"


---


#### 预加重与去加重
- 预加重：解调器输出端接一个传输特性随频率增加而滚降的线性网络 $H_d(f)$，其目的是将{==调制频率高频端的噪声衰减，使总的噪声功率减小==}。
- 去加重：抵消加重网络的影响，使信号不失真
- 数学公式： $H_{_p}(f)=\frac{1}{H_{_d}(f)}$
- 框图：
<center>
![预加重与去加重](https://img.heeeqkblog.dpdns.org/20260316173331.png)
<center>

---

## 各种调制模拟系统比较

![各种调制模拟系统比较](https://img.heeeqkblog.dpdns.org/20260316173733.png)


---


### 抗噪声性能方面
- $FM＞DSB＞SSB＞VSB＞AM$

---


### 频带利用率
- $SSB(f_m)＞VSB(f_m~2f_m)＞DSB(2f_m)＞AM(2f_m+\text{载波})＞FM$

---


### 特点与应用
- AM：{==接收设备简单;但是功率利用率低，抗干扰能力差==}。AM制式主要用在中波和短波的调幅广播中
- DSB：{==功率利用率高，且带宽与AM相同，但接收要求同步解调，设备较复杂==}。应用较少，一般只用于点对点的专用通信
- SSB：{==功率利用率和频带利用率都较高，抗干扰能力和抗选择性衰落能力均优于AM，而带宽只有AM的一半；但是发送和接收设备都复杂==}。鉴于这些特点，SSB常用于频分多路复用系统中
- VSB： ^^VSB的抗噪声性能和频带利用率与SSB相当 ^^。VSB的诀窍在于部分抑制了发送边带，同时又{==利用平缓滚降滤波器补偿了被抑制部分==}，这对包含有低频和直流分量的基带信号特别适合，因此，VSB在电视广播等系统中得到了广泛应用
- FM：FM波的幅度恒定不变，这使它{==对非线性器件不甚敏感，给FM带来了 ^^抗快衰落能力 ^^==}。利用自动增益控制和带通限幅还可以消除快衰落造成的幅度变化效应。宽带FM的抗干扰能力强，可以实现带宽与信噪比的互换，因而宽带FM广泛应用于长距离高质量的通信系统中，如空间和卫星通信、调频立体声广播、超短波电台等。宽带FM的缺点是频带利用率低，存在门限效应，因此在接收信号弱、干扰大的情况下宜采用窄带 FM，这就是小型通信机常采用窄带调频的原因


---

## 频分复用
- 按照频率划分信道的复用方式。信道的带宽被划分成多个互不重叠的频段，每路信号占据一个自信到，并且各路之间必须具有未被使用的分隔带，防止信号重叠