# 数字频带传输系统

<div id="progress-container">
  <div id="progress-bar"></div>
</div>

## ASK调制

### 定义与表示
- 定义：振幅键控是正弦载波的幅度随数字基带信号而变化的数字调制，若数字基带信号为二进制时，则为二进制振幅键控（2ASK）  
- 序列表示：  

$$s(t)=\sum_na_ng(t-nT_s)$$  


$$a_n=\begin{cases}0&\text{概率为 }P\\1&\text{概率为 }1-P&\end{cases}$$  

- 信号表示为：

$$e_{2ASK}\left(t\right)=\left[\sum_na_ng(t-nT_s)\right]cos\omega_ct$$

- 波形表示：  
![ASK](https://img.heeeqkblog.dpdns.org/20260319130729.png){: .center }

!!! tip "2ASK信号的时间波形随二进制基带信号通断变化，所以又称 **通断键控信号（OOK信号）**"

---

### 产生
- 模拟调制法（相乘器法）与键控法  
![ASK产生](https://img.heeeqkblog.dpdns.org/20260319132420.png){: .center }

---

### 解调
=== "相干解调"
    ![ASK相干解调](https://img.heeeqkblog.dpdns.org/20260321101410.png){: .center }
=== "非相干解调（包络检波）"
    ![ASK非相干解调](https://img.heeeqkblog.dpdns.org/20260319132619.png){: .center }
    ![ASK非相干波形](https://img.heeeqkblog.dpdns.org/20260319132656.png){: .center }

---

### 功率和带宽
功率谱密度：

$$P_{2ASK}(f)=\frac{1}{4}[P_s(f+f_c)+P_s(f-f_c)]$$

其中：

$$P_s(f)=f_sP(1-P)|G(f)|^2+f_s^2(1-P)^2\sum_{m=-\infty}^\infty|G(mf_s)|^2\delta(f-mf_s)$$

!!! tip "当P=0.5，即1与0的出现概率相同时"  
    ![ASK公式](https://img.heeeqkblog.dpdns.org/20260319131535.png){: .center }  
    - 二进制振幅键控信号的功率谱密度示意图如图所示，其由{==离散谱==}和{==连续谱==}两部分组成  
    ![ASK功率谱](https://img.heeeqkblog.dpdns.org/20260319131701.png){: .center }

<bar>

带宽： $B_{2\text{ASK}}$ 是基带信号波形带宽 $B$ 的两倍，即 $B_{2\text{ASK}} = 2B$。

---


## FSK
### 定义与表示
- 定义：全称{==频移键控==}，载波的频率随二进制基带信号在两个频率点间变化，也可以看成{==两个不同载频的ASK信号叠加==}  

![FSK定义](https://img.heeeqkblog.dpdns.org/20260319133029.png){: .center }

- 波形：
![FSK波形](https://img.heeeqkblog.dpdns.org/20260319133248.png){: .center }


---

### 产生
- 模拟调频电路
- 键控法：  
![FSK产生](https://img.heeeqkblog.dpdns.org/20260319133351.png){: .center }

---

### 解调 
- 解调：
=== "非相干解调"
    ![FSK非相干](https://img.heeeqkblog.dpdns.org/20260319133444.png){: .center }

=== "相干解调"
    ![FSK相干](https://img.heeeqkblog.dpdns.org/20260319133521.png){: .center }

=== "过零检测法"
    - 过零点数因频率而不同，通过检测过零点数目的多少来区分码元
    ![FSK过0](https://img.heeeqkblog.dpdns.org/20260319133615.png){: .center }
    

---
### 功率与带宽
- 功率谱：  
![功率谱](https://img.heeeqkblog.dpdns.org/20260319134037.png){: .center }

!!! tip "解读功率谱"
    - 相位不连续 2FSK 信号的功率谱由连续谱和离散谱组成
    - 连续谱由两个中心位于 $f_1$ 和 $f_2$ 处的双边谱叠加而成
    - 离散谱位于两个载频 $f_1$ 和 $f_2$ 处
    - 连续谱的形状随着两个载频之差 $|f_1 - f_2|$ 的大小而变化
        1.  若 $|f_1 - f_2| < f_B$，连续谱在 $f_0$ 处出现单峰；
        2.  若 $|f_1 - f_2| > f_B$，出现双峰


- 带宽：若以功率谱第一个零点之间的频率间隔计算 2FSK 信号的带宽，则其带宽近似为 $ B_{2\text{FSK}} \approx |f_2 - f_1| + 2f_B $ ，式中：$f_B = 1/T_B$ 为基带信号的带宽。

---

## MSK调制
- 定义：最小移频键控 MSK(Minimum Frequency Shift Keying) 是二进制连续相位 FSK 的一种特殊形式，有时也称为快速移频键控(FFSK)。
    1.  “最小”是指这种调制方式能以最小的调制指数(0.5)获得正交信号；
    2.  “快速”是指在给定同样的频带内，MSK 能比 2PSK 的数据传输速率更高，且在带外的频谱分量要比 2PSK 衰减的快。
- 数学表达： **不做分析**

- 总结：
    1.  MSK 的整个相位路径是由间隔为 $T_s$ 的一系列直线段所连成的折线。在任一个码元期间 $T_s$，若 $a_k = +1$，则 $\theta(t)$ 线性增加 $\pi/2$；若 $a_k = -1$，则 $\theta(t)$ 线性减小 $\pi/2$。
    2.  对于给定的输入信号序列 $a_k = +1, +1, -1, +1, -1, +1, -1, -1$，相应的附加相位函数 $\theta(t)$ 的波形如图下图  
    ![MSK](https://img.heeeqkblog.dpdns.org/20260319135212.png){: .center }

- 特点：
    1.  MSK 信号是恒定包络信号
    2.  在码元转换时刻，信号的相位是连续的，以载波相位为基准的信号相位在一个码元期间内线性地变化 $\pm\pi/2$。
    3.  在一个码元期间内，信号应包括四分之一载波周期的整数倍，信号的频率偏移等于 $\pm \frac{1}{4T_s}$，相应的调制指数 $h = 0.5$。

- 与2PSK对比：
    1.  MSK 信号的功率谱更加紧凑，其第一个零点出现在 $0.75/T_s$ 处，而 2PSK 的第一个零点出现在 $1/T_s$ 处。
    2.  MSK 信号功率谱的主瓣所占的频带宽度比 2PSK 信号的窄；
    3.  在主瓣带宽之外，MSK 功率谱的旁瓣下降更为迅速，因此对邻道的干扰也较小。  
    ![MSK、2PSK对比](https://img.heeeqkblog.dpdns.org/20260319135612.png){: .center }


!!! tip "MSK与GMSK"
    - MSK 调制方式的突出优点是已调信号具有恒定包络，且功率谱在主瓣以外衰减较快。
    - 但是在移动通信中，对信号带外辐射功率的限制十分严格，一般要求必须衰减 70dB~80dB 以上。
    - 从 MSK 信号的功率谱可以看出，MSK 信号仍不能满足这样的要求。
    - 高斯最小移频键控(GMSK)就是针对上述要求提出来的。GMSK 调制方式能满足{==移动通信环境下对邻道干扰==}的严格要求，它以其良好的性能而被泛欧数字蜂窝移动通信系统(GSM)所采用。

---

## GMSK调制
- MSK 调制是调制指数为 0.5 的二进制调频，基带信号为矩形波形。为了压缩 MSK 信号的功率谱，可在 MSK 调制前加入预调制滤波器，即高斯型的低通滤波器，对矩形波形进行滤波，得到一种新型的基带波形，从而得到较好的频谱特性。这样的调制方式称为{==高斯最小移频键控 GMSK(Gaussian Filtered Minimum Shift Keying)==}，其原理如图所示。  
![GMSK](https://img.heeeqkblog.dpdns.org/20260319135929.png){: .center }

---


## PSK

### 定义与表示
- 定义：在二进制数字调制中，当正弦载波的相位随二进制数字基带信号离散变化时，则产生二进制移相键控(2PSK)信号。
- 数学表示：通常用已调信号载波的 0 相位和 $\pi$ 相位分别表示二进制数字基带信号的 0 和 1。二进制移相键控信号的时域表达式为  

![PSK公式](https://img.heeeqkblog.dpdns.org/20260319144233.png){: .center }

- 波形图：  
![PSK波形图](https://img.heeeqkblog.dpdns.org/20260319144316.png){: .center }

---

### 产生
- 模拟调制
- 键控法  

![PSK产生](https://img.heeeqkblog.dpdns.org/20260319144400.png){: .center }

---

### 解调 
- 相干解调  
![PSK相干解调](https://img.heeeqkblog.dpdns.org/20260319144603.png){: .center }
![PSK相干解调图形波](https://img.heeeqkblog.dpdns.org/20260319145135.png){: .center }

!!! danger "倒π现象/反相工作"
    - 2PSK信号的载波恢复过程中可能存在180°的相位模糊，导致{==恢复的本地载波与所需的相干载波可能同相，也能反相，可能会导致接收解调出的信号与发送的基带信号完全相反，并^^使判决器输出全部出错^^==}
    - 为解决这一问题，可以采用差分相移键控（DPSK）

---

### 功率谱与带宽
- 功率谱：二进制相移键控信号的频谱特性与 2ASK 的十分相似，区别仅在于当 $P = 1/2$ 时，其谱中{==无离散谱（即载波分量）==}，此时 2PSK 信号实际上相当于抑制载波的双边带信号，因此，它可以看作是双极性基带信号作用下的调幅信号。  

![PSK功率](https://img.heeeqkblog.dpdns.org/20260319145349.png){: .center }

<bar>

- 带宽：基带信号带宽的 2 倍

---

## DPSK
### 定义与表示
- 定义：利用{==前后相邻码元的载波相对相位变化传递数字信息==}，所以又称 ^^相对相移键控^^。
- 数学表示：假设 $\Delta\varphi$ 为当前码元与前一码元的载波相位差，可定义一种数字信息与 $\Delta\varphi$ 之间的关系为：
$$\Delta\varphi=\begin{cases}0&\text{表示数字信息“}0\\\\\pi&\text{表示数字信息“}1\mathrm{”}&\end{cases}$$

- 波形图：  

![波形图](https://img.heeeqkblog.dpdns.org/20260319150240.png){: .center }


!!! danger "相位问题与定时问题"
    - 2DPSK解决了信号波形的相位问题
    - 但是在某个长码元中，信号的相位仍没有跳凸点，使得接收端无法辨别信号码元的启止时刻，即定时问题没有解决
    - 解决方法：将相对相位偏移改为 ±π/2

---

### 产生

![DPSK产生](https://img.heeeqkblog.dpdns.org/20260319150938.png){: .center }


---

### 解调

#### 相干解调
- 相干解调+码反变换：对2DPSK 信号进行相干解调，恢复出{==相对码==}，再经{==码反变换器变换为绝对码==}，从而恢复出发送的二进制数字信息。在解调过程中，由于载波相位模糊性的影响，使得解调岀的相对码也可能是"1"和"0"倒置，但经差分译码(码反变换)得到的绝对码{==不会发生任何倒置的现象==}，从而解决了载波相位模糊性带来的问题。  

![DPSK相干解调](https://img.heeeqkblog.dpdns.org/20260319151720.png){: .center }

---

#### 差分相干解调
- {==无需使用码反变换器==}，但需要将{==接收信号延迟再相乘==}  

![差分相干解调](https://img.heeeqkblog.dpdns.org/20260319152001.png){: .center }

---

### 功率谱与带宽
- 功率谱：2DPSK功率谱与2PSK相同
- 带宽：与2ASK相同，都是码元速率的2倍：  

$$B_{2\mathrm{DPSK}}=B_{2\mathrm{PSK}}=2f_{\mathrm{B}}$$

---

## MPSK
- M代表M进制 
- M制数字相位调制信号的功率谱如图多进制数字相位调制信号功率谱所示，图中给出了信息速率相同时，2PSK、4PSK 和 8PSK 信号的单边功率谱。可以看出，M越大，功率谱主瓣越窄，频带利用率越高。  
![MPSK](https://img.heeeqkblog.dpdns.org/20260319152410.png){: .center }


---

### QPSK(4PSK)

![](https://img.heeeqkblog.dpdns.org/20260319153851.png){: .center }

![](https://img.heeeqkblog.dpdns.org/20260319153916.png){: .center }

---

## 总结对比

![](https://img.heeeqkblog.dpdns.org/20260319154104.png){: .center }
