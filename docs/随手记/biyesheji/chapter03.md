# 联合用户活跃于信号检测

<div id="progress-container">
  <div id="progress-bar"></div>
</div>

---

## 块稀疏模型的生成
- 在一个帧的时间内，每个用户的状态是不变的，即用户要么一直保持活跃或非活跃状态。因此，\(\mathbf{X} = \left[ \mathbf{x}^{[1]}, \mathbf{x}^{[2]}, \cdots, \mathbf{x}^{[J]} \right]\)在 \(J\) 个时隙上具有共同的支撑集。我们可以把帧结构化稀疏信号 \(\mathbf{X}\) 中每一行数据 \(\mathbf{X}(k,:)\)（\(k=1,2,\cdots,K\)）分组为非零值块或零值块，从而生成等效的块稀疏向量 \(\mathbf{c}\)。确切地说，在数学表达上，块稀疏向量 \(\mathbf{c}\)、帧结构化稀疏信号 \(\mathbf{X}\) 与稀疏信号 \(\mathbf{x}\) 之间的关系为

\[
\mathbf{c}\left( (k-1)J + j \right) = \mathbf{X}(k,j) = \mathbf{x}^{[j]}(k)
\tag{4-1}
\]

- 根据式(4-1)，{==能够将二维的帧结构化稀疏信号==} \(\mathbf{X}\) {==转化为一维的块稀疏信号==} \(\mathbf{c}\)。
- 块稀疏信号 \(\mathbf{c}\) 被均分成 \(K\) 个块长为 \(J\) 的数据块，其中第 \(k\) 个块里包含的 \(J\) 个元素 \(\mathbf{c}(k)\) 要么全为零，要么全为非零。这就暗示着，我们可以把块稀疏信号 \(\mathbf{c}\) 的每 \(J\) 个连续元素作为一个整体来同时进行处理，这将是解决压缩感知中欠定问题的一个额外约束。为了利用这个思路，我们首先将二维的帧结构化稀疏信号 \(\mathbf{X}\) 转化为一维的块稀疏信号 \(\mathbf{c}\)，即


\[
\mathbf{c} = \left[
\underbrace{X(1,1), X(1,2), \dots, X(1,J)}_{\mathbf{c}^{[1]}},
\underbrace{X(2,1), X(2,2), \dots, X(2,J)}_{\mathbf{c}^{[2]}},
\dots,
\underbrace{X(K,1), X(K,2), \dots, X(K,J)}_{\mathbf{c}^{[K]}}
\right]^T = \mathrm{vec}\left( \mathbf{X}^T \right)
\tag{4-2}
\]

- 其中，符号 \(\mathrm{vec}(\cdot)\) 表示将矩阵按列向量化。如图 4-1 所示，\(\mathbf{c}\) 具有块稀疏特性。

- 为了挖掘并利用块稀疏特性，我们需要根据块稀疏信号 \(\mathbf{c}\) 的形式，把基于帧结构化稀疏的传输模型（式(1-6)）中的接收信号 \(\mathbf{Y}\)、噪声信号 \(\mathbf{Z}\) 和等效信道矩阵 \(\mathbf{G}\) 转换为相应的有效形式。具体来说，接收信号 \(\mathbf{Y}\) 和噪声信号 \(\mathbf{Z}\) 也是根据列向量化的算子 \(\mathrm{vec}(\cdot)\) 进行转化，即

\[
\mathbf{p} = \left[
Y(1,1), Y(1,2), \dots, Y(1,J), Y(2,1), Y(2,2), \dots, Y(2,J),
\dots, Y(N,1), Y(N,2), \dots, Y(N,J)
\right]^T = \mathrm{vec}\left( \mathbf{Y}^T \right)
\tag{4-3}
\]

<bar>

\[
\mathbf{v} = \left[
Z(1,1), Z(1,2), \dots, Z(1,J), Z(2,1), Z(2,2), \dots, Z(2,J),
\dots, Z(N,1), Z(N,2), \dots, Z(N,J)
\right]^T = \mathrm{vec}\left( \mathbf{Z}^T \right)
\tag{4-4}
\]

- 基于 \(\mathbf{p}\) 和 \(\mathbf{c}\) 的变换过程，我们构造了相应的测量矩阵 \(\mathbf{D}\)，即通过 \(G(i,j)\) 乘以 \(J \times J\) 的单位矩阵 \(\mathbf{I}_J\) 来表示 \(\mathbf{D}\)。也就是说，等效信道矩阵 \(\mathbf{G}\) 可以通过 Kronecker 积扩展为观测矩阵 \(\mathbf{D}\)，具体变换表达式如下

\[
\mathbf{D} =
\begin{bmatrix}
G(1,1)\mathbf{I}_J & G(1,2)\mathbf{I}_J & \dots & G(1,K)\mathbf{I}_J \\
G(2,1)\mathbf{I}_J & G(2,2)\mathbf{I}_J & \dots & G(2,K)\mathbf{I}_J \\
\vdots & \vdots &  & \vdots \\
G(N,1)\mathbf{I}_J & G(N,2)\mathbf{I}_J & \dots & G(N,K)\mathbf{I}_J
\end{bmatrix}
= \mathbf{G} \otimes \mathbf{I}_J
\tag{4-5}
\]

- 其中，\(\mathbf{D}[k] = \left[ G(1,k)\mathbf{I}_J, G(2,k)\mathbf{I}_J, \dots, G(N,k)\mathbf{I}_J \right]^T\)，\(k=1,2,\dots,K\)，\(\otimes\) 表示 Kronecker积  

![帧结构化稀疏模型转化成块稀疏模型的示意](https://img.heeeqkblog.dpdns.org/20260406140625.png){: .center }


- 因此，综合式(4-2)~式(4-5)，基于帧结构化稀疏的传输模型（式(1-6)）可以重新表示为

\[
\mathbf{p} = \mathbf{D}\mathbf{c} + \mathbf{v}
\tag{4-6}
\]

- 其中，\(\mathbf{p} \in \mathbb{C}^{NJ \times 1}\)，\(\mathbf{D} \in \mathbb{C}^{NJ \times KJ}\)，\(\mathbf{c} \in \mathbb{C}^{KJ \times 1}\) 和 \(\mathbf{v} \in \mathbb{C}^{NJ \times 1}\)。这里的 \(\mathbf{c}\) 如图 4-1 所示是块稀疏的，将被用于联合信号重构。具体来说，{==块稀疏可以用来提高非零元素定位的准确性，进而有助于提高信号检测性能。==}

- 使用块稀疏提取方法，我们可以将多个观测向量确定性地变换为单向量模型（式(4-6)），从而将任何帧结构化稀疏模型转换为块稀疏的压缩感知问题。因此，接下来，我们将重点关注如何由观测向量 \(\mathbf{p}\) 来重构块稀疏向量 \(\mathbf{c}\)。

- 在获得式(4-6)的估计解，即 \(\hat{\mathbf{c}}\) 之后，我们可以根据式(4-7)获取估计解 \(\hat{\mathbf{X}}\)。

\[
\hat{\mathbf{X}} = \left( \mathrm{vec}^{-1}\left( \hat{\mathbf{c}}, J \right) \right)^T
\tag{4-7}
\]

- 其中，\(\mathrm{vec}^{-1}\left( \hat{\mathbf{c}}, J \right)\) 将向量 \(\hat{\mathbf{c}}\) 进行反列向量化，生成 \(J\) 个等长的列向量。

- 众所周知，类似于式(4-6)的问题通常可以通过诸如 SP 的贪婪算法来解决。但经典 SP 算法并没有考虑信号的块稀疏特性。


---

## 交叉验证辅助的块稀疏自适应子空间追踪算法（在信道状态已知的情况下）
!!! tip "即在 ^^等效信道矩阵 $G$ 已知的情况下^^"  
<bar>

- CVA-BSASP 算法首先会分别把观测向量 \(\mathbf{p}\) 和观测矩阵 \(\mathbf{D}\) 划分为重构部分和交叉验证部分。当重构部分被自适应 BSP 算法用来重构发信号时，交叉验证部分被利用来计算 CV 残差并确定迭代终止条件。具体来说，随机划分观测向量 \(\mathbf{p} \in \mathbb{C}^{NJ \times 1}\) 为训练（估计）向量 \(\mathbf{p}_c \in \mathbb{C}^{N_c \times 1}\) 和测试向量（交叉验证）\(\mathbf{p}_{cv} \in \mathbb{C}^{N_{cv} \times 1}\)，这里 \(JN = N_c + N_{cv}\)，相应地，划分观测矩阵 \(\mathbf{D} \in \mathbb{C}^{JN \times KJ}\) 为 \(\mathbf{D}_c \in \mathbb{C}^{N_c \times JK}\) 和 \(\mathbf{D}_{cv} \in \mathbb{C}^{N_{cv} \times JK}\)，具体关系如式(4-10)所示。

\[
\begin{bmatrix}
\mathbf{p}_c \\
\mathbf{p}_{cv}
\end{bmatrix}
=
\begin{bmatrix}
\mathbf{D}_c \\
\mathbf{D}_{cv}
\end{bmatrix}
\mathbf{c}
+
\begin{bmatrix}
\mathbf{v}_c \\
\mathbf{v}_{cv}
\end{bmatrix}
\tag{4-10}
\]

- 利用训练向量 \(\mathbf{p}_c\) 生成一系列可能的估计 \((\hat{\mathbf{c}}_1, \hat{\mathbf{c}}_2, \dots, \hat{\mathbf{c}}_{\bar{s}})\)。对于每一个估计 \(\hat{\mathbf{c}}_s\)，测试向量 \(\mathbf{p}_{cv}\) 将被用于计算其 CV 残差，即

\[
\varepsilon_s = \left\| \mathbf{p}_{cv} - \mathbf{D}_{cv} \hat{\mathbf{c}}_s \right\|_2
\tag{4-11}
\]

式(4-11)得到的 CV 残差的大小随用户活跃度估计的准确性呈负相关性，具体来说，CV 残差越大，则用户活跃度估计得越不准确；CV 残差越小，则用户活跃度估计得越准确。

迭代重构信号根据估计误差最小而不是小于某一常数的准则，选择合适的估计作为输出。具体来说，最小估计误差的索引为用户活跃度的估计，即，

\[
s^* = \arg \min_{s=1,2,\dots,\bar{s}} \left\{ \varepsilon_s \right\}
\tag{4-12}
\]

这样，\(\hat{\mathbf{c}}_{s^*}\) 将作为块稀疏信号 \(\mathbf{c}\) 的估计。

CVA-BSASP 算法的具体过程如表 4-2 所述。


![](https://img.heeeqkblog.dpdns.org/20260406142700.png){: .center }
![](https://img.heeeqkblog.dpdns.org/20260406142721.png){: .center }
![](https://img.heeeqkblog.dpdns.org/20260406142748.png){: .center }

!!! tip success"有关输入部分"
    - $J$:每帧时隙数
    - $Y$:接收端信号(K行J列)
    - $G$:等效信道矩阵(K行J列)
    - $N_{cv}$:测试数据数量
    - $$\bar{s}$$:最小估计误差

<bar>
值得一提的是，在观测数据的数量一定的条件下，训练数据的数量 \(N_c\) 与测试数据的数量 \(N_{cv}\) 之间存在着一个折衷。一方面，增加训练数据的数量 \(N_c\)，尽管信号重构能力可以因训练数据量增多而提高，但用户活跃度估计的准确性会降低；另一方面，增加测试数据的数量 \(N_{cv}\)，虽然基于测试数据估计的用户活跃度的准确性会更好，但是因为用作重构稀疏信号的训练数据减少，信号的重构能力将降低。因此，测试数据量的选取要适中，且有一个最优值。

---

## 联合信道估计和数据检测（用户活跃、信道估计、数据检测）
### 系统模型
- 传输模型与之前一致，不同之处在于，由于需要进行信道估计，活跃用户需要在{==发送
数据符号之前先发送自己的导频符号==}
- {==假设一帧内全部时隙的信道状态保持不变==}。为了简单和不失一般性，每个活跃用户在一个帧长的时间上首先发送一个导频符号，接着发送 \(J_d\) 个数据符号。这里，一帧共包含了 \(J = J_d + 1\) 个时隙，一帧之内的结构化稀疏性可表示为

\[
\mathrm{supp}\left( \mathbf{x}_p \right) = \mathrm{supp}\left( \mathbf{x}_p^{[1]} \right) = \cdots = \mathrm{supp}\left( \mathbf{x}_p^{[J]} \right) = \Gamma
\tag{4-13}
\]

- 其中，\(\mathbf{x}_p = \left( x_{p,1}, x_{p,2}, \dots, x_{p,K} \right)^T\) 和 \(\mathbf{x}_p^{[j]} = \left( x_{d,1}^{[j]}, x_{d,2}^{[j]}, \dots, x_{d,K}^{[j]} \right)^T\) 分别为导频符号向量和第 \(j\) 个时隙上传送的数据符号向量，\(x_{d,k}^{[j]}\) 取自于一个增广复星座点集合 \(\chi \triangleq \{\chi_0 \cup 0\}\)。

- 在导频区域，基站接收到的信号可以表示为

\[
\mathbf{y}_p = \sum_{k \in \Gamma} h_k \mathbf{s}_k x_{p,k} + \mathbf{z}_p = \mathbf{S}\mathbf{h} + \mathbf{z}_p
\tag{4-14}
\]

- 其中，\(\mathbf{s}_k = \left( s_{1,k}, s_{2,k}, \dots, s_{N,k} \right)^T\) 是用户 \(k\) 对应的扩频序列，\(\mathbf{S} = \left( \mathbf{s}_{1,p,1}, \mathbf{s}_{2,p,2}, \dots, \mathbf{s}_{K,p,K} \right)\) 为观测矩阵。为了简单和不失一般性，我们把导频符号 \(x_{p,k}\) 设置为 1，从而使得 \(\mathbf{S} = \left( \mathbf{s}_1, \mathbf{s}_2, \dots, \mathbf{s}_K \right)\) 代表扩频矩阵。\(\mathbf{h} = \left( h_1, h_2, \dots, h_K \right)^T\) 为信道系数向量，其中元素均彼此独立且服从复高斯分布 \(\mathcal{CN}(0,1)\)。\(\mathbf{z}_p\) 为噪声向量，服从复高斯分布 \(\mathcal{CN}(0, \sigma_p^2 \mathbf{I})\)。

- 在数据区域，基站第 \(j\) 个时隙上接收到的信号可以表示为

\[
\mathbf{y}_p^{[j]} = \sum_{k \in \Gamma} h_k \mathbf{s}_k x_{d,k}^{[j]} + \mathbf{z}_p^{[j]} = \mathbf{S}\mathrm{diag}(\mathbf{h}) \mathbf{x}_p^{[j]} + \mathbf{z}_p^{[j]}
\tag{4-15}
\]


---

### 解决方案

实际上，\(\mathbf{h}\) 和 \(\mathbf{x}_p^{[j]}\) 的支撑集都是一样的。因此，我们将引入一个混合变量 \(\mathbf{a}_d^{[j]} = \mathrm{diag}(\mathbf{h}) \mathbf{x}_p^{[j]}\) 来统一表示数据符号 \(\mathbf{x}_p^{[j]}\) 和其对应信道状态信息 \(\mathbf{h}\) 的相同支撑集 \(\Gamma\)。现在，我们可以重新表示式(4-15)为

\[
\mathbf{y}_p^{[j]} = \mathbf{S} \mathbf{a}_d^{[j]} + \mathbf{z}_p^{[j]}
\tag{4-16}
\]

这样，用户活跃度就体现在了 \(\mathbf{a}_d^{[j]}\) 上。

!!! tip "对于相同支撑集"
    信道系数向量h本身都是有数的，但是由于对应的用户没有发送信息，接收端也不用对它对信道估计，所以可以将其没有发送信号的部分视为0，所以发送数据x与信道系数向量h是有相同支撑集的

基于 \(\mathbf{h}\) 与 \(\mathbf{a}_d^{[j]}\) 共享相同支撑集的事实，我们可以以帧为单位接收信号，从而把两个稀疏信号恢复问题(式(4-14)与式(4-16))合二为一，变成一个新的稀疏信号恢复问题。具体来说，这个新的稀疏信号恢复问题的数学表达式为

\[
\left( \mathbf{y}_p, \mathbf{y}_p^{[j]} \right) = \mathbf{S} \left( \mathbf{h}, \mathbf{a}_d^{[j]} \right) + \left( \mathbf{z}_p, \mathbf{z}_p^{[j]} \right), j = 1,2,\dots,J_d
\tag{4-17}
\]

接下来，我们将重点考虑如何在从观测矩阵 \(\left( \mathbf{y}_p, \mathbf{y}_p^{[j]} \right), j=1,2,\dots,J_d\) 中恢复稀疏矩阵 \(\left( \mathbf{h}, \mathbf{a}_d^{[j]} \right), j=1,2,\dots,J_d\)。为了从潜在的帧结构化稀疏结构中挖掘出块稀疏特性，类似于 4.2 节，基于帧结构化稀疏的传输模型(式(4-17))可以重新表示为

\[
\mathbf{u} = \mathbf{D} \mathbf{c} + \mathbf{v}
\tag{4-18}
\]

其中，
\(\mathbf{u} = \mathrm{vec}\left( \left( \mathbf{y}_p, \mathbf{y}_p^{[1]}, \mathbf{y}_p^{[2]}, \dots, \mathbf{y}_p^{[J_d]} \right)^T \right)\)，
\(\mathbf{D} = \mathbf{S} \otimes \mathbf{I}_J\)，
\(\mathbf{v} = \mathrm{vec}\left( \left( \mathbf{n}_p, \mathbf{n}_p^{[1]}, \mathbf{n}_p^{[2]}, \dots, \mathbf{n}_p^{[J_d]} \right)^T \right)\)。
\(\left( \mathbf{h}, \mathbf{a}_d^{[j]} \right), j=1,2,\dots,J_d\) 的帧结构化稀疏结构导致了向量 \(\mathbf{c}\) 具有块稀疏特性。块稀疏可以用来提高非零元素定位的准确性，进而有助于提高信道估计与数据检测的性能。

在获得式(4-18)的估计解，即 \(\hat{\mathbf{c}}\) 之后，我们可以根据式(4-19)获取式(4-17)的估计解。

\[
\left( \hat{\mathbf{h}}, \hat{\mathbf{A}}_d \right) = \left( \mathrm{vec}^{-1} \left( \hat{\mathbf{c}}, J \right) \right)^T
\tag{4-19}
\]


最后，根据式(4-20)可以得到式(4-15)的估计解

\[
\hat{\mathbf{X}}_d = \left( \hat{\mathbf{x}}_d^{[1]}, \hat{\mathbf{x}}_d^{[2]}, \dots, \hat{\mathbf{x}}_d^{[J_d]} \right) = \mathrm{diag}\left( \mathbf{1} ./ \hat{\mathbf{h}} \right) \times \hat{\mathbf{A}}_d
\tag{4-20}
\]