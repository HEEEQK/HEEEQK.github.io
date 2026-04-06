# 传输模型

<div id="progress-container">
  <div id="progress-bar"></div>
</div>

## 基于单时隙的传输模型

!!! tip "每个用户在单时隙内只发送一个调制符号（QPSK、QAM）"

![基于单时隙的传输模型](https://img.heeeqkblog.dpdns.org/20260404145822.png){: .center }


扩频序列：每个用户不同，用于区分多用户，通常是正交、准正交的（满足 $\mathbf{s}_{i}^{H}\mathbf{s}_{j}\approx0(i\neq j),$ ），用户抑制多用户干扰  
 $diag(h_k)$ 对角矩阵：  

$$\operatorname{diag}(\mathbf{h}_k)=\begin{bmatrix}h_{1,k}&0&\ldots&0\\0&h_{2,k}&\ldots&0\\\vdots&\vdots&\ddots&\vdots\\0&0&\ldots&h_{N,k}\end{bmatrix}\in\mathbb{C}^{N\times N}$$  

- 对 $s_k$ 作{==逐维信道加权衰落==}，模拟无线信道对每个子载波的{==独立衰落==}影响  
<bar>
等效信道矩阵G：融合了信道增益和扩频信息的等效信道矩阵


!!! success "压缩感知重构信号：1.估计待重构信号上那些位置活跃（非0）；2.恢复出非0元素的具体值"

!!! success "由压缩感知理论中稀疏度的定义可知：用户发送数据 $x$ 本质上是稀疏的{==（在同一时刻，大量用户中只有少量在发送数据）==}"

---

### 等效信道矩阵G详细推导

**1.单用户等效信道向量**  
对第 $k$ 个用户，信道向量与扩频向量：  

$$
\mathbf{h}_k = \begin{bmatrix} h_{1,k} \\ h_{2,k} \\ \vdots \\ h_{N,k} \end{bmatrix}, \quad
\mathbf{s}_k = \begin{bmatrix} s_{1,k} \\ s_{2,k} \\ \vdots \\ s_{N,k} \end{bmatrix}
$$

构造信道对角矩阵：  

$$
\mathrm{diag}(\mathbf{h}_k) = \begin{bmatrix}
h_{1,k} & 0 & \cdots & 0 \\
0 & h_{2,k} & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & h_{N,k}
\end{bmatrix}
$$

相乘得到单用户等效信道向量：  

$$
\mathrm{diag}(\mathbf{h}_k)\mathbf{s}_k = \begin{bmatrix}
h_{1,k}s_{1,k} \\ h_{2,k}s_{2,k} \\ \vdots \\ h_{N,k}s_{N,k}
\end{bmatrix}
$$

定义：

$$
\mathbf{g}_k = \mathrm{diag}(\mathbf{h}_k)\mathbf{s}_k
$$

**2.多用户信号叠加**  
第 $k$ 个用户接收信号：$\mathbf{g}_k x_k$

所有用户信号叠加：  

$$
\sum_{k=1}^K \mathbf{g}_k x_k = \mathbf{g}_1 x_1 + \mathbf{g}_2 x_2 + \cdots + \mathbf{g}_K x_K
$$

**3.构造等效信道矩阵G**  

将所有用户的 $\mathbf{g}_k$ 按 **列** 排列：  

$$
\mathbf{G} = \big[\, \mathbf{g}_1\ \mathbf{g}_2\ \cdots\ \mathbf{g}_K \,\big]
$$

维度：$N \times K$  

**4.矩阵乘法等价性**  
发送符号向量：  

$$
\mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_K \end{bmatrix}
$$

矩阵乘法展开：  

$$
\mathbf{G}\mathbf{x} = \mathbf{g}_1 x_1 + \mathbf{g}_2 x_2 + \cdots + \mathbf{g}_K x_K
$$

因此：  

$$
\sum_{k=1}^K \mathrm{diag}(\mathbf{h}_k)\mathbf{s}_k x_k = \mathbf{G}\mathbf{x}
$$


---

## 基于帧结构化稀疏的传输模型
即：发送数据的活跃用户与处于静默的非活跃用户至少在一个帧内保持现状（活跃或静默）  
使用支撑集来表明数据的非位置：  
![支撑集](https://img.heeeqkblog.dpdns.org/20260404153619.png){: .center }  
<bar>
!!! tip "由于在一帧内状态保持，所以每个时隙的非位置都相同（发送数据的用户相同）"
<bar>
![帧结构传输模型](https://img.heeeqkblog.dpdns.org/20260404153732.png){: .center }  

---

## 动态稀疏的传输模型
即：一帧内的活跃状态不是不变的，而是缓慢变化的，一般情况下两个相邻时隙的活跃用户支撑集具有时间相关性  
![动态稀疏的传输模型](https://img.heeeqkblog.dpdns.org/20260404154043.png){: .center }  