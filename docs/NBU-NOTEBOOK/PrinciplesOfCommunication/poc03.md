# 确知信号和随机信号

<div id="progress-container">
  <div id="progress-bar"></div>
</div>


---

## 确知信号

### 能量信号、能量谱密度、功率信号、功率谱密度  

=== "能量信号"
    - 定义：如果一个信号 $x(t)$ 的总能量{==有限且非零==}，那么它被称为能量信号
    - 数学定义： $E=\lim_{T\to\infty}\int_{-T}^T|x(t)|^2dt=\int_{-\infty}^\infty|x(t)|^2dt<\infty$  
    - 特点：{==能量有限，功率为0==}

=== "能量谱密度"
    - 定义：能量谱密度（Energy Spectral Density，ESD）描述了能量信号的能量在频率轴上的分布情况。它表示在各个频率点 $f$上，单位带宽内所具有的能量
    - 计算方法(帕塞瓦尔定理)：  
        1.  根据帕斯瓦尔定理，{==信号在时域的总能量等于其在频域的总能量==}  
        2.  对于能量信号 $x(t)$，其傅里叶变换为 $X(f)$。能量谱密度定义为幅度谱的平方： $\Psi_x(f)=|X(f)|^2$  

    - 物理意义：  
        1.  对能量谱密度在整个频率轴上积分，得到信号的总能量: $E=\int_{-\infty}^{\infty}\Psi_x(f)df$  
        2.  它{==只包含幅度信息==}，丢失了相位信息  


=== "功率信号"
    - 定义： 如果一个信号的{==总能量是无限的（积分发散）==}，但其{==平均功率是有限且非零==}的，那么它被称为功率信号。
    - 数学定义： $P=\lim_{T\to\infty}\frac{1}{2T}\int_{-T}^T|x(t)|^2dt<\infty$  

    - 特点：{==能量无限，功率有限且非0==}  


=== "功率谱密度"
    - 定义：功率谱密度（Power Spectral Density，PSD）描述了功率信号（特别是随机信号/周期信号）的功率在频率轴上的分布情况。它表示在各个频率点 $f$ 上，单位带宽内所具有的平均功率。
    - 计算方法：
        1.  对于周期信号：可以使用{==傅里叶级数==}。功率谱是{==离散谱线==}（因为周期信号的能量集中在基频的整数倍上）。
        2.  对于随机信号/一般功率信号：不能直接对无限长信号做傅里叶变换（不满足绝对可积条件）。通常有两种等价定义：
            - <1>：基于截断函数：截取信号在 $(-T,T)$ 的一段，求其傅里叶变换 $X_T(f)$，然后取平方、除以时间长度、再取极限： $S_x(f)=\lim_{T\to\infty}\frac{E[|X_T(f)|^2]}{2T}$
            - <2>：**基于维纳-辛钦定理**：功率谱密度是信号自相关函数 $R(\tau)$ 的傅里叶变换。这是最常用的一种方法： $S_x(f)=\int_{-\infty}^\infty R(\tau)e^{-j2\pi f\tau}d\tau$

    - 物理意义：  
        1.  对功率谱密度在整个频率轴上积分，得到信号的平均功率: $P=\int_{-\infty}^{\infty}\S_x(f)df$  
        2.  它描述了功率在各个频率成分上的分布  

---

#### 帕什瓦尔能量谱和功率谱守恒定理

![帕什瓦尔能量谱和功率谱守恒定理](https://img.heeeqkblog.dpdns.org/20260315161924.png){: .center }


---

#### 能量密度与功率谱密度

![能量密度与功率谱密度](https://img.heeeqkblog.dpdns.org/20260315162042.png){: .center }

---

## 常见信号的傅里叶变换

| # | $f(t)$ | $F(\omega)$ |
|---|--------|--------------|
| 1 | 单位冲激信号 $\delta(t)$ | $1$ |
| 2 | 常数信号 $1$ | $2\pi\delta(\omega)$ |
| 3 | 单位阶跃信号 $u(t)$ | $\pi\delta(\omega) + \frac{1}{j\omega}$ |
| 4 | $\text{sgn}(t)$ | $\frac{2}{j\omega}$ |
| 5 | $\frac{1}{\pi t}$（非常常见！） | $-j\text{sgn}(\omega)$ |
| 6 | 单边指数信号 $e^{-\alpha t}u(t)$（$\alpha$ 为大于零的实数） | $\frac{1}{j\omega + \alpha}$ |
| 7 | 门函数 $EG_\tau(t)$（$G$ 为 Gate 的缩写，代表门函数） | $E\tau\text{Sa}\left(\frac{\tau}{2}\omega\right)$ |
| 8 | $E\text{tri}_\tau(t)$（$\text{tri}$ 为 triangle 的缩写，代表三角形） | $\frac{E\tau}{2}\text{Sa}^2\left(\frac{\omega\tau}{4}\right)$ |
| 9 | $E\tau\text{Sa}\left(\frac{t\tau}{2}\right)$ | $2\pi EG_\tau(\omega)$ |
| 10 | $\frac{E\tau}{2}\text{Sa}^2\left(\frac{t\tau}{4}\right)$ | $2\pi E\text{tri}_\tau(\omega)$ |
| 11 | 抽样函数信号 $\text{Sa}(\omega_0 t) = \frac{\sin(\omega_0 t)}{\omega_0 t}$ | $\frac{\pi}{\omega_0}G_{2\omega_0}(\omega)$ |
| 12 | $e^{j\omega_0 t}$ | $2\pi\delta(\omega - \omega_0)$ |
| 13 | $\frac{1}{\pi t}$（非常常见！） | $-j\text{sgn}(\omega)$ |
| 14 | 周期冲激序列 $\sum_{n=-\infty}^{\infty}\delta(t-nT)$<br>$\sum_{n=-\infty}^{\infty}(-1)^n\delta(t-nT_s)$ | $\frac{2\pi}{T}\sum_{n=-\infty}^{\infty}\delta\left(\omega - n\frac{2\pi}{T}\right)$<br>$\frac{2\pi}{T}\sum_{n=-\infty}^{\infty}\delta\left(\omega - n\frac{\pi}{T}\right)$，$n$ 为奇数 |
| 15 | 余弦信号 $\cos\omega_0 t$ | $\pi\left[\delta(\omega + \omega_0) + \delta(\omega - \omega_0)\right]$ |
| 16 | 正弦信号 $\sin\omega_0 t$ | $j\pi\left[\delta(\omega + \omega_0) - \delta(\omega - \omega_0)\right]$ |
| 17 | 斜变信号 $tu(t)$ | $j\pi\delta'(\omega) - \frac{1}{\omega^2}$ |
| 18 | 单边正弦信号 $\sin(\omega_0 t)u(t)$ | $\frac{j\pi}{2}\left[\delta(\omega + \omega_0) - \delta(\omega - \omega_0)\right] - \frac{\omega_0}{\omega^2 - \omega_0^2}$ |
| 19 | 单边余弦信号 $\cos(\omega_0 t)u(t)$ | $\frac{\pi}{2}\left[\delta(\omega + \omega_0) + \delta(\omega - \omega_0)\right] - j\frac{\omega}{\omega^2 - \omega_0^2}$ |
| 20 | 周期信号 $\sum_{n=-\infty}^{\infty}x_1(t-nT_0)$ | $\omega_0\sum_{n=-\infty}^{\infty}X_1(jn\omega_0)\delta(\omega - n\omega_0)$ |
| 21 | 抽样信号 $\sum_{n=-\infty}^{\infty}x(t)\delta(t-nT_s)$ | $\frac{1}{T_s}\sum_{n=-\infty}^{\infty}X(j(\omega - n\omega_s))$ |
| 22 | $Ee^{-\left(\frac{t}{\tau}\right)^2}$ | $\sqrt{\pi}E\tau e^{-\left(\frac{\omega\tau}{2}\right)^2}$ |
| 23 | $\frac{1}{2}\left[\delta(t-1) + \delta(t+1)\right]$ | $\cos(\omega)$ |
| 24 | $t$ | $j2\pi\delta'(\omega)$ |
| 25 | $|t|$ | $-\frac{2}{\omega^2}$ |


### 周期函数
 未添加内容（只记得相当于单个周期函数做傅里叶变换后乘以2π/T，然后做周期延拓）

### 相关函数和谱密度的关系
![相关函数和谱密度的关系](https://img.heeeqkblog.dpdns.org/20260315162916.png){: .center }


## 随机信号
!!! tip "详情见《随机信号分析》一书"

---

### 广义平稳和严平稳

| 名称     | 定义                                                                 | 性质                                                                 |
|----------|----------------------------------------------------------------------|----------------------------------------------------------------------|
| 严平稳   | 随机过程 $\xi(t)$ 的任意 $n$ 维分布与时间起点无关                     | {==一维分布与时间 $t$ 无关==}；{==二维分布只与时间间隔 $\tau$ 有关==}             |
| 广义平稳 | $a(t) = a$<br>$R(t_1, t_1 + \tau) = R(\tau)$                          | 数学期望是个常数，与时间 $t$ 无关；自相关函数只与时间间隔 $\tau$ 有关 |
| 二者比较 | 严平稳（或狭义平稳）一定是广义平稳，反之不一定                         | —                                                                    |  


---

### 各态历经性
- 概念：^^随机过程中的任一次实现都经历了随机过程的所有可能状态^^。因此在求解均值等统计平均时，无须做出多次观测，只要进行一次观测，就能用一次的“时间平均”值去代替整个随机过程中的“统计平均”值  

- 数学定义：若任取{==平稳随机过程==}的{==任一函数样本==}，其^^时间均值为常数^^，^^时间自相关只与时间间隔有关^^，称为平稳随机过程具有各态历经性  

- 即 $\bar{a}=\overline{x(t)}=\lim_{T\to\infty}\frac{1}{T}\int_{-T/2}^{T/2}x(t)dt=a$  

- 即 $\overline{R(\tau)}=\overline{x(t)x(t+\tau)}=\lim_{T\to\infty}\frac{1}{T}\int_{-\tau/2}^{T/2}x(t)x(t+\tau)dt=R(\tau)$  

!!! tip "通信系统中检测到的随机信号和噪声，一般都满足各态历经性"

---
### 自相关与互相关

=== "自相关"
    - 自相关函数： $R(\tau)=\lim_{T\to\infty}\frac{1}{T}\int_{-\tau/2}^{T/2}x(t)x(t+\tau)dt$  
    - 自相关反应的是一个信号在不同时间上的取值的关联程度  
    - 能量信号的自相关函数在自变量为0时的取值为信号的能量： $E={R(0)}$  
    - 功率信号的自相关函数在自变量为0时的取值为信号的功率： $P={R(0)}$  

=== "互相关"
    - 互相关函数： $R(\tau)=\lim_{T\to\infty}\frac{1}{T}\int_{-\tau/2}^{T/2}x_1(t)x_2(t+\tau)dt$  
    - 互相关反应的两个信号的相关程度，与时间无关，只与{==时间差有关==}，并且互相关函数和两个信号相乘的{==前后次序==}有关  


### 自相关函数的性质

| 性质 | 含义 |
|------|------|
| $R(0) = E[\xi^2(t)]$ | $\xi(t)$ 的平均功率 |
| $R(\tau) = R(-\tau)$ | 偶函数 |
| $\|R(\tau)\| \le R(0)$ | $R(0)$ 是 $R(\tau)$ 的上界 |
| $R(\infty) = E[\xi(t)\xi(t+\infty)] = E^2[\xi(t)] = a^2$ | $\xi(t)$ 的直流功率 |
| $R(0) - R(\infty) = \sigma^2$ | $\xi(t)$ 的交流功率 |

---

### 随机过程的数字特征
=== "均值"
    - 定义： $E[\xi(t)]=\int_{-\infty}^{\infty}xf_{1}(x,t)dx$  
    - 意义：反映了{==函数样本的摆动中心==}  

=== "方差"
    - 定义： $\begin{aligned}&D[\xi(t)]=E[\xi^{2}(t)-2a(t)\xi(t)+a^{2}(t)]=E[\xi^{2}(t)]-2a(t)E[\xi(t)]+a^{2}(t)\\&=E[\xi^{2}(t)]-a^{2}(t)=\int_{-}^{\infty}x^{2}f_{1}(x,t)dx-[a(t)]^{2}\end{aligned}$  
    - 意义：描述了某一时刻{==样本偏离均值的程度==}  

=== "协方差与自相关函数"
    - 协方差定义： $\begin{aligned}&B(t_{1},t_{2})=E\{[\xi(t_{1})-a(t_{1})][\xi(t_{2})-a(t_{2})]\}\\&=\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}[x_{1}-a(t_{1})][x_{2}-a(t_{2})]f_{2}(x_{1},x_{2};t_{1},t_{2})\mathrm{d}x_{1}\mathrm{d}x_{2}\end{aligned}$  

    - 自相关函数定义： $R(t_1,t_2)=E[\xi(t_1)\xi(t_2)]=\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}x_1x_2f_2(x_1,x_2;t_1,t_2)\mathrm{d}x_1\mathrm{d}x_2$  

    - 协方差与自相关函数的关系： $B(t_1,t_2)=R(t_1,t_2)-a(t_1)a(t_2)$  

---

### 高斯随机过程
- 高斯随机过程也称^^正太随机过程^^，大多是噪声都是高斯型的
- 定义：高斯过程在任一时刻上的取值是一个正态分布的随机变量，也称高斯随机变量
- 概率密度函数表达式： $f(x)=\frac{1}{\sqrt{2\pi}\sigma}exp\left(-\frac{(x-a)^2}{2\sigma^2}\right)$  
- 性质：高斯过程是广义平稳的，经过线性变化后的过程仍是高斯过程  

---

### 平稳随机过程通过线性系统
- 均值变化： $E=a·H(0)$ ， $H(0)$ 是线性系统在 $f=0$处的频率响应
- 自相关函数：若线性系统的输入过程是平稳的，那么输出过程也是平稳的
- {==功率谱密度==}：输出过程的功率谱密度是输入过程的功率谱密度乘以系统频率响应模值的平方: $\overline{P_0(f)=H^*(f)\cdot H(f)\cdot P_\mathrm{i}(f)=|H(f)|^2P_\mathrm{i}(f)}$

---
### 随机窄带过程
- 定义：频带宽度远远小于其中心频率的过程，且中心频率远离0  

- 表示：窄带随机过程的样本的波形如同一个包络和相位随机缓变的正弦波： $\xi(t)=a_\xi(t)cos\left[\omega_ct+\varphi_\xi(t)\right]a_\xi(t){\geqslant}0$  

- 统计特性：
    1.  一个{==均值为零==}的窄带平稳高斯过程  
        <1> 它的同相分量和正交分量同样是平稳高斯过程  
        <2> 且同相分量与正交分量的均值为0，方差相同  
    2.  一个均值为零，方差为 $\sigma_\xi^2$ 的窄带平稳高斯过程 $\xi(t)$  
        <1> 包络 $a_\xi(t)$ 的一维分布是瑞利分布，相位 $\varphi_\xi(t)$ 的一维分布是均匀分布；  
        <2> 就一维分布而言，$a_\xi(t)$ 与 $\varphi_\xi(t)$ 是统计独立的，即 $f(a_\xi, \varphi_\xi) = f(a_\xi) \cdot f(\varphi_\xi)$  


---

### 白噪声
=== "白噪声"
    - 定义：如果噪声的功率谱密度在所有频率上均为一常数  

    - 数学表示： $P_{\mathrm{n}}(f)=\frac{n_{0}}{2}(-\infty<f<+\infty)(W/\mathrm{Hz})$ 或 $P_{n}(f)=n_{0}\left(0<f<+\infty\right)\left(W/Hz\right)$  

    - 自相关性：白噪声在除0外的任意两个时刻的随机变量不相关，即： $R(\tau)=\frac{n_0}{2}\delta(\tau)$  
    - 平均功率：无穷大

=== "高斯白噪声"
    - 定义：取值的概率分布服从高斯分布的白噪声  

    - 性质：高斯白噪声在任意两个不同时刻上的随机变量之间，不仅是互不相关的，而且还是统计独立的。 

    - 带通白噪声的平均功率： $N=n_0·B$

!!! tip "有关白噪声"
    白噪声实际上并不真实存在，在工程上，只要噪声的功率谱密度均匀分布的范围远远大于通信系统的工作频带，就可以把它视为白噪声


## 例题
??? success "有关自相关函数与功率谱密度的计算"
    ![题目1](https://img.heeeqkblog.dpdns.org/20260316094019.png){: .center }
    ![答案1](https://img.heeeqkblog.dpdns.org/20260316094122.png){: .center }
    - 第一题的另一种解答：^^（不知对错，仅作参考）^^  
    ![作法](https://img.heeeqkblog.dpdns.org/3c171eb638348f82efab9b7fbc328f4.jpg){: .center }