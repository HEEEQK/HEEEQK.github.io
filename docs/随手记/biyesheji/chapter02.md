# 压缩感知理论

<div id="progress-container">
  <div id="progress-bar"></div>
</div>

由于实际中的大部分连续信号具有{==冗余性和相关性==}，与之对应的离散信号的有效自由度远小于信号维度，因此{==信号在某些变换域上具有稀疏性==}。基于此，压缩感知理论被提出并不断发展。通过压缩感知技术重构原高维度稀疏信号所需的{==采样样本数远小于奈奎斯特采样定律所需的样本数==}。

---

## 压缩感知模型

为了以简单明了的方式来介绍压缩感知理论，首先假定稀疏度为 $s$ 的稀疏信号是 $\mathbf{x} \in \mathbb{C}^{K \times 1}$（也就是说，$\mathbf{x}$ 只有 $s \ll K$ 个非零元素），$\boxed{\Phi} \in \mathbb{C}^{N \times K} \left( N \ll K \right)$ 是观测矩阵，$\mathbf{y} = \boxed{\Phi}\mathbf{x} \in \mathbb{C}^{N}$ 是观测信号。$\mathbf{x}$ 本身可能并不稀疏，但在某些变换域上可以呈现出稀疏性，即 $\mathbf{x} = \boxed{\Psi}\boxed{\theta}$，这里 $\boxed{\Psi}$ 和 $\boxed{\theta}$ 分别表示变换矩阵和稀疏度为 $s$ 的稀疏信号。我们可以得到标准的压缩感知模型，即

$$
\mathbf{y} = \boxed{\Phi}\mathbf{x} = \boxed{\Phi}\boxed{\Psi}\boxed{\theta} = \boxed{\Theta}\boxed{\theta}
$$

其中，$\boxed{\Theta} = \boxed{\Phi}\boxed{\Psi}$。压缩感知模型包含 3 个部分，即

- **稀疏变换域**：找到合适的变换矩阵 $\boxed{\Psi}$，把原始的非稀疏信号 $\mathbf{x}$ 变换成稀疏信号 $\boxed{\theta}$。  
- **稀疏信号压缩**：构造投影矩阵 $\boxed{\Phi}$ 或 $\boxed{\Theta}$，尽可能减少原始高维稀疏信号信息的损失并降低观测维度。一般情况下，可以通过相关性或 **约束等距性 (Restricted Isometry Property, RIP)** 来评估 $\boxed{\Phi}$ 或 $\boxed{\Theta}$ 的性能。  
- **稀疏信号重构**：设计可靠的稀疏信号重构算法，准确地从低维观测信号 $\mathbf{y}$ 中重构出高维信号 $\mathbf{x}$ 或 $\boxed{\theta}$。  


!!! tip " $\mathbb{C}$ 表示复数域"

---

## 块压缩感知

另外，本小节还基于标准的压缩感知模型（式(1-18)），引入了一个压缩感知理论中的扩展模型，即块稀疏信号，该模型通过在实际应用场景中挖掘和利用来可以实现更为可靠的稀疏信号压缩或重建。块稀疏信号模型可以表述为 $\mathbf{y} = \boxed{\Theta}\boxed{\theta}$，其中 $\boxed{\theta}$ 呈现出块稀疏性，即  

$$
\boxed{\theta} = \left[ \underbrace{\theta_1 \cdots \theta_d}_{\boxed{\theta}^T[1]}, \underbrace{\theta_{d+1} \cdots \theta_{2d}}_{\boxed{\theta}^T[2]}, \dots, \underbrace{\theta_{K-d+1} \cdots \theta_K}_{\boxed{\theta}^T[L]} \right]^T
$$

其中，$dL = N$，$\boxed{\theta}^T[l] (1 \leq l \leq L)$ 具有至多 $s$ 个非零的欧式范数。我们可以在块稀疏压缩感知理论下，利用 $\boxed{\theta}$ 所具有的块稀疏性来提高稀疏信号的重构性能。


---

## 压缩感知重构算法

- 为了更好地平衡计算复杂度和采样效率，大量的学者研究了基于贪婪思想的重构算法。这类算法放弃了全局最优搜索，在每一步的迭代过程中寻求局部最优值，可以很好地进行信号重构，同时保持较低的计算复杂度。最早的贪婪重构算法是正交匹配追踪（Orthogonal Matching Pursuit, OMP）算法，分阶段的正交匹配追踪（Stagewise OMP, StOMP）算法和正则化的正交匹配追踪（Regularized OMP, ROMP）算法则是它的直接演进算法。

- OMP算法实际是把稀疏近似的思想应用到了压缩感知的稀疏信号重构中，其核心思想是每次迭代只选择投影矩阵的一个列。具体来说，对于每次迭代，先选择投影矩阵中与残差的相关值最大的一列，然后在残差中减去这列的贡献值。由 OMP 算法的原理可知，在 \(s\) 次迭代之后，能够从投影矩阵中选择出 \(s\) 列。OMP 算法每次取局部最优值的迭代选择过程如图 1-11 所示。在图 1-11 中，\(\boxed{r}_l\) 表示第 \(l\) 次迭代的残差，\(F_l\) 表示在第 \(l\) 次迭代后选出来的矩阵列的位置集合，即估计的稀疏信号支撑集。实际上，支撑集里的元素就是稀疏信号 \(\boxed{\theta}\) 的非零值的位置。因此，有了支撑集后，我们就可以把标准压缩感知数学模型中的欠定方程（\(N \ll K\)）转化为超定方程（\(s \ll K\)）。最后，就可以利用最基本的最小二乘法（Least Square, LS）求解此超定方程。  
<bar>  

![支撑集迭代更新示意图](https://img.heeeqkblog.dpdns.org/20260406132621.png){: .center }  
<bar>  

- OMP 算法凭借其良好的重构性能以及较低的计算复杂度，吸引了大批学者进一步研究重构性能更好的算法。其中，两个最有名的 OMP 改进算法即压缩采样匹配追踪（Compressive Sampling Matching Pursuit, CoSaMP） 和{==子空间追踪（Subspace Pursuit, SP）==} 在核心思想方面非常相似，由于 SP 算法的性能较 CoSaMP 算法更为优越，这里我们仅{==以 SP 算法为例进行说明==}。

- 经典 OMP 算法的支撑集估计以一个空集开始，然后每次迭代都会将一个元素添加到支撑集中，这个元素将被视为可靠的估计值，不会在以后的迭代过程中被剔除出去。为了获得更好的重构性能，SP 算法引入了支撑集回溯更新的操作来修正支撑集。具体来说，在 SP 算法的第 \(l\) 次支撑集估计中，首先求相关性，选出与观测信号 \(\mathbf{y}\) 剩余部分的相关值最大的 \(s\) 列，与前一次估计的支撑集 \(F_{l-1}\) 合并，得到不超过 \(2s\) 的备选支撑集 \(C_l\)；接着通过最小二乘法进行回溯更新，如果 \(\mathbf{y}\) 不在 \(C_l\) 的向量空间中，则保留可靠的候选列，并删除 \(C_l\) 中不可靠的候选列；经过回溯更新，就可得到大小为 \(s\) 的新的估计支撑集 \(F_l\)；最后，用信号的残差减去可靠候选列的贡献值得到新的残差 \(\mathbf{r}_l\)。以此类推不断迭代，直至通过估计的稀疏信号 \(\hat{\boxed{\theta}}\) 计算出的 \(\hat{\mathbf{y}}\) 与原观测信号 \(\mathbf{y}\) 的残差足够小。SP 算法的支撑集迭代更新过程如图 1-12 所示。与经典 OMP 算法（包括改进的 StOMP 算法和 ROMP 算法）相比，SP 算法的支撑集迭代选择过程更加灵活，通过回溯更新删除前一次迭代更新中错误估计的支撑集，具有更好的重构能力。  

<bar>  
![支撑集迭代更新示意图](https://img.heeeqkblog.dpdns.org/20260406133133.png){: .center }  
<bar>  

- 然而，上述提到的贪婪算法{==均假设稀疏度已知==}。OMP 算法的迭代次数、CoSaMP 算法和 SP 算法支撑集大小的选取均与稀疏度有关。实际上，在许多应用场景中，稀疏度作为先验信息往往是不太合理的。因此，稀疏度不要求已知的算法才更具实用价值。

- 文献[99]综合 OMP 算法和 SP 算法的各自优势，提出一种稀疏度自适应匹配追踪（Sparsity Adaptive Matching Pursuit, SAMP）算法。OMP 算法是基于自底向上的设计思想，从空集开始逐个添加支撑集估计元素直至 s 个。而 SP 算法则基于自顶向下思想，首先估计出备选支撑集，然后通过回溯更新删除不可靠的支撑集估计。SAMP 算法综合了这两种算法的支撑集迭代更新方式，具体过程如图 1-13 所示。

<bar>  
![SAMP 支撑集迭代更新示意图](https://img.heeeqkblog.dpdns.org/20260406133347.png){: .center }  
<bar>  

!!! tip "文献[99]: T. Do, G. Lu, N. Nguyen, et al. Sparsity adaptive matching pursuit algorithm for practical compressed sensing[C]. Proceedings of Conference on Signals, Systems and Computers,Pacific Grove, CA, USA, 2009, 581-587"

- 将图 1-12 与图 1-13 进行比较，可以看到，SAMP 算法与 SP 算法在迭代更新中最大的不同在于，\( C_i \) 和 \( F_i \) 的大小不是固定的。实际上，SAMP 算法可以看作是从稀疏度 1 开始并根据特定步长逐渐更新稀疏度的 SP 算法。然而，SAMP 算法并不完全等同于按照不同稀疏度组合起来的 SP 算法，SAMP 算法每次稀疏度更新的初始估计都是基于前一次稀疏度的估计结果。因此，SAMP 算法的重构性能优于 SP 算法。

- 上述提及的所有基于贪婪思想的重构算法主要有两个步骤，即支撑集的迭代估计与超定方程的求解，如图 1-14 所示。贪婪重构算法通常在支撑集迭代估计后，采用最小二乘法求解超定方程。实际上，对贪婪重构算法的改进主要是为了实现更好的支撑集估计。  

<bar>  
![基于贪婪思想的重构算法的主要步骤](https://img.heeeqkblog.dpdns.org/20260406133519.png){: .center }  

<bar>  