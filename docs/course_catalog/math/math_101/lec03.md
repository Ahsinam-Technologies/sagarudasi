# 03. Matrices Don't Just Store Vectors. They Transform Space!

I owe you an apology in advance. If you thought your mental model of systems of linear equations was finally settled, this chapter will once again tamper with your understanding of systems of linear equations, but for a good cause of course. So, shall we begin!? 🙂

## 3.1 - Change of Basis

Consider the following system of linear equations that we saw in the last chapter. 

$$
\begin{aligned}
2x - y &= 1 \\
x + y &= 5
\end{aligned}
$$

In matrix notation, this system can be written in the form $A.\mathbf{x} = \mathbf{b}$ as,

$$
\begin{bmatrix}
2 & -1 \\
1 & \phantom{-}1
\end{bmatrix}
\begin{bmatrix}
x \\
y
\end{bmatrix}
=
\begin{bmatrix}
1 \\
5
\end{bmatrix}
$$

So far, we were reading the column picture as **linear combination problem**, where we were asking: **How many units we should walk along vector $\begin{bmatrix}2 \\ 1 \end{bmatrix}$ and along $\begin{bmatrix}-1 \\ 1 \end{bmatrix}$ to reach the target $\begin{bmatrix}1 \\ 5 \end{bmatrix}$?** We can ask this same question, but in a very different manner. For that, let's start by understanding just the left-hand side of the above equation. 

### 3.1.1 - Linear Mapping

I wish to begin with simple vectors to illustrate the idea. On a 2D plane, we have two fundamental directions: $\hat{\mathbf{i}}$ and $\hat{\mathbf{j}}$. Along with these two vectors, we will also consider $\hat{\mathbf{i}} + \hat{\mathbf{j}}$. So, we have the following vectors in our consideration. 

$$
\hat{\mathbf{i}} =
\begin{bmatrix}
1 \\ 0
\end{bmatrix},
\qquad
\hat{\mathbf{j}} =
\begin{bmatrix}
0 \\ 1
\end{bmatrix},
\qquad
\hat{\mathbf{i}} + \hat{\mathbf{j}} =
\begin{bmatrix}
1 \\ 1
\end{bmatrix}
$$

What makes me curious is, **if I consider these vectors instead of $\mathbf{x}$ and use my matrix $A$, what would be the target vector?** In other words, **if I feed these vectors to $A$, where will they land?** This should be pretty easy for us to calculate. 

$$
A\hat{\mathbf{i}} =
\begin{bmatrix}
2 & -1 \\
1 & 1
\end{bmatrix}
\begin{bmatrix}
1 \\ 0
\end{bmatrix}
=
\begin{bmatrix}
2 \\ 1
\end{bmatrix}
$$

$$
A\hat{\mathbf{j}} =
\begin{bmatrix}
2 & -1 \\
1 & 1
\end{bmatrix}
\begin{bmatrix}
0 \\ 1
\end{bmatrix}
=
\begin{bmatrix}
-1 \\ 1
\end{bmatrix}
$$

$$
A(\hat{\mathbf{i}} + \hat{\mathbf{j}}) =
\begin{bmatrix}
2 & -1 \\
1 & 1
\end{bmatrix}
\begin{bmatrix}
1 \\ 1
\end{bmatrix}
=
\begin{bmatrix}
1 \\ 2
\end{bmatrix}
$$

Let's draw these **images** or **transformed versions** of our original vectors. Such a transformation can be done for each and every vector, not just these simple vectors. For each vector $\begin{bmatrix}x \\ y \end{bmatrix}$, the transformed version of it considering the matrix $A$ will be $\begin{bmatrix}2x-y \\ x+y \end{bmatrix}$.


<figure markdown="span">
    ![Standard Basis](./img/standard_basis.png#only-light){width=55%, loading=lazy}
    ![Standard Basis](./img/standard_basis_dark.png#only-dark){width=55%, loading=lazy}
</figure>

<figure markdown="span">
    ![Transformed Basis](./img/transformed.png#only-light){width=80%, loading=lazy}
    ![Transformed Basis](./img/transformed_dark.png#only-dark){width=80%, loading=lazy}
</figure>

So, **what just happened?**

The original coordinate axes were defined by $\hat{\mathbf{i}}$ and $\hat{\mathbf{j}}$. These were the standard $\mathbf{x}$ and $\mathbf{y}$ axes. For every point (or vector), denoted by $\begin{bmatrix}x \\ y \end{bmatrix}$, we defined a linear map using matrix $A$ as $\begin{bmatrix}2x-y \\ x+y \end{bmatrix}$. **This mapping moved these axes!** The new **right direction** becomes $A\hat{\mathbf{i}} = \begin{bmatrix}2 \\ 1 \end{bmatrix}$, and the new **up direction** becomes $A\hat{\mathbf{j}} = \begin{bmatrix}-1 \\ 1 \end{bmatrix}$. These new axes are denoted by $\mathbf{x'}$ and $\mathbf{y'}$.  Everything else in the plane is dragged along **consistently**. So, you can see how the gridlines have transformed in the $\mathbf{x'y'}$ plane. 

So, the effect of this drag *(or transformation)* is the vector $\begin{bmatrix}1 \\ 1 \end{bmatrix}$ in $\mathbf{xy}$ plane got moved to $\begin{bmatrix}1 \\ 2 \end{bmatrix}$ in $\mathbf{x'y'}$ plane. However, in both the planes, this same vector is still $1$ unit along their respective horizontal axis and $1$ unit along their respective vertical axis. 

In short, every point is rebuilt using the **new directions**. The matrix doesn’t move points one by one, it **reshapes the entire grid at once**. Squares become parallelograms. Straight lines stay straight and parallel. The origin stays fixed where it was.

Now, let's look back at the system of equations that we began with. 

$$
\begin{bmatrix}
2 & -1 \\
1 & \phantom{-}1
\end{bmatrix}
\begin{bmatrix}
x \\
y
\end{bmatrix}
=
\begin{bmatrix}
1 \\
5
\end{bmatrix}
$$

Writing the axes more explicity, we have:

$$
\begin{bmatrix}
2 & -1 \\
1 & \phantom{-}1
\end{bmatrix}
\left(
\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}
\begin{bmatrix}
x \\
y
\end{bmatrix}
\right)
=
\begin{bmatrix}
1 \\
5
\end{bmatrix}
$$

The question that we are asking now is: **What original vector $\begin{bmatrix} x \\ y \end{bmatrix}$ in $\mathbf{xy}$-plane, where axes were $\mathbf{i} = \begin{bmatrix}1 \\ 0 \end{bmatrix}$ and $\mathbf{j} = \begin{bmatrix}0 \\ 1 \end{bmatrix}$, is now represented as $\begin{bmatrix}1 \\ 5 \end{bmatrix}$ in $\mathbf{x'y'}$-plane, where axes are $\begin{bmatrix}2 \\ 1 \end{bmatrix}$ and $\begin{bmatrix}-1 \\ 1 \end{bmatrix}$?** 

It was all about the mapping between two points in two different spaces!


### 3.1.2 - Linear Transformation


Once we fix a matrix and let it act on vectors, something important happens conceptually. We are **no longer working inside a single space.** We now have **two vector spaces**. The original **$\mathbf{xy}$-plane**, where vectors like $\begin{bmatrix} x \\ y \end{bmatrix}$ live. The transformed **$\mathbf{x'y'}$-plane**, where the images $\begin{bmatrix} 2x - y \\ x + y \end{bmatrix}$ live. Every vector in the $\mathbf{xy}$-plane is sent to **exactly one** vector in the $\mathbf{x'y'}$-plane by the matrix $A$. So we have a **mapping between two spaces**. This is the correct moment to stop thinking of matrices as tables of numbers and start thinking of them as **functions** that perform **linear transformations**.


!!! quote "Definition: Linear Transformations"

    Let $\mathcal{V}$ and $\mathcal{W}$ be real vector spaces. A function $L : \mathcal{V} \longrightarrow \mathcal{W}$ is called a **linear map** (or **linear transformation**) if it satisfies the following two properties for all vectors $\mathbf{u}, \mathbf{v} \in \mathcal{V}$ and all scalars $c \in \mathbb{R}$ : 

    1. **Additivity**: $L(\mathbf{u} + \mathbf{v}) = L(\mathbf{u}) + L(\mathbf{v})$
    2. **Homogeneity**: $L(c.\mathbf{u}) = c.L(\mathbf{u})$

    Here, $\mathcal{V}$ is called the **domain** of $L$ and $\mathcal{W}$ is called the **codomain** of $L$. 


In the above 2D example, $\mathcal{V} = \mathbb{R}^2$ (the $\mathbf{xy}$-plane), $\mathcal{W} = \mathbb{R}^2$ (the $\mathbf{x'y'}$-plane), and the linear map $L$ is defined by the matrix $A = \begin{bmatrix}2 & -1 \\ 1 & 1 \end{bmatrix}$. Explicitly,

$$
L\left(
\begin{bmatrix}
x \\ y
\end{bmatrix}
\right)
=
\begin{bmatrix}
2x - y \\
x + y
\end{bmatrix}
$$

**Let's verify linearity!**

Suppose we take the following vectors in the $\mathbf{xy}$-plane.

$$
\mathbf{u} =
\begin{bmatrix}
1 \\ 2
\end{bmatrix},
\qquad
\mathbf{v} =
\begin{bmatrix}
3 \\ -1
\end{bmatrix}
$$

**Linearity** says **if you add these vectors in $\mathbf{xy}$-plane and then map the resultant to $\mathbf{x'y'}$-plane** or **if you first map both the vectors from $\mathbf{xy}$-plane to $\mathbf{x'y'}$-plane and then take the resultant in the $\mathbf{x'y'}$-plane**, the **result should be the same**. 

**Order 1: Adding Them Before Applying The Transformation**

$$
\mathbf{u} + \mathbf{v}
=
\begin{bmatrix}
4 \\ 1
\end{bmatrix}
$$

Now applying the transformation $L$,

$$
L(\mathbf{u} + \mathbf{v})
=
\begin{bmatrix}
2(4) - 1 \\
4 + 1
\end{bmatrix}
=
\begin{bmatrix}
7 \\ 5
\end{bmatrix}
$$


**Order 2: Applying The Transformation First and Then Adding**

$$
L(\mathbf{u})
=
\begin{bmatrix}
2(1) - 2 \\
1 + 2
\end{bmatrix}
=
\begin{bmatrix}
0 \\ 3
\end{bmatrix},
\qquad
L(\mathbf{v})
=
\begin{bmatrix}
2(3) - (-1) \\
3 + (-1)
\end{bmatrix}
=
\begin{bmatrix}
7 \\ 2
\end{bmatrix}
$$

Now adding the transformed vectors,

$$
L(\mathbf{u}) + L(\mathbf{v})
=
\begin{bmatrix}
7 \\ 5
\end{bmatrix}.
$$

We can see, $L(\mathbf{u} + \mathbf{v}) = L(\mathbf{u}) + L(\mathbf{v})$. This confirms **additivity**.

**Let's verify homogeneity!**

Let's take a scalar $c = 2$ and the vector $\mathbf{u}$. 

**Homogeneity** says **if you scale the vector first in $\mathbf{xy}$-plane and then transform it to $\mathbf{x'y'}$-plane** or **if you transform the vector first from $\mathbf{xy}$-plane to $\mathbf{x'y'}$-plane and then scale it**, the **result should be the same**.


**Order 1: Scaling Before Applying The Transformation**

$$
L(2\mathbf{u})
=
L\left(
\begin{bmatrix}
2 \\ 4
\end{bmatrix}
\right)
=
\begin{bmatrix}
2(2) - 4 \\
2 + 4
\end{bmatrix}
=
\begin{bmatrix}
0 \\ 6
\end{bmatrix}
$$


**Order 2: Applying The Transformation First and Then Scaling**


$$
2.L(\mathbf{u})
=
2
\begin{bmatrix}
0 \\ 3
\end{bmatrix}
=
\begin{bmatrix}
0 \\ 6
\end{bmatrix}
$$

Again, $L(c\mathbf{u}) = cL(\mathbf{u})$. This confirms **homogeneity**.


Geometrically, these two properties together explain **why a matrix reshapes the grid the way it does**.  Vector **addition** corresponds to **parallelograms** (as per the parallelogram law of vector addition seen in chapter 1). Scalar multiplication corresponds to **stretching or shrinking**. Because both are preserved, straight lines stay straight. Parallel lines remain parallel and the origin stays fixed. 

A linear transformation **does not distort geometry**, it **re-expresses it in a new coordinate frame**.

## 3.2 - Standard Linear Transformations in 2D

A **linear transformation in 2D** is a function that maps vectors in (\mathbb{R}^2) to other vectors in (\mathbb{R}^2) while preserving vector addition and scalar multiplication. Every such transformation can be represented by a (2 \times 2) matrix. Following are few examples of the standard linear transformations. 

### 3.2.1 - Identity Transformation

The **identity transformation** leaves every vector unchanged. It represents the idea of *doing nothing* to the space.

In $\mathbb{R}^2$, the identity matrix is

$$
I =
\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}
$$

For any vector $\mathbf{v} = (x, y)$,

$$
I\mathbf{v} =
\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}
\begin{bmatrix}
x \\
y
\end{bmatrix}
=
\begin{bmatrix}
x \\
y
\end{bmatrix}
$$

Geometrically, every vector remains exactly where it is.


### 3.2.2 - Scaling Transformation

A **scaling transformation** stretches or shrinks all vectors by a constant factor $k$.

The scaling matrix in $\mathbb{R}^2$ is

$$
L =
\begin{bmatrix}
k & 0 \\
0 & k
\end{bmatrix}
$$

Applying it to a vector $\mathbf{v} = (x, y)$,

$$
L\mathbf{v} =
\begin{bmatrix}
kx \\
ky
\end{bmatrix}
$$

If $k > 1$, vectors stretch away from the origin. If $0 < k < 1$, vectors shrink toward the origin. And if $k < 0$, vectors also reverse their original direction.

### 3.2.3 - Rotation Transformation

A **rotation transformation** rotates every vector in $\mathbb{R}^2$ counterclockwise by an angle $\theta$ about the origin. Let $\mathbf{v} = \begin{bmatrix} x \\ y \end{bmatrix}$ be our initial vector (shown as dashed vector in the diagram below). Suppose $\mathbf{v}$ has length $r$ and makes an initial angle $\phi$ with the positive $x$-axis. Then, $\mathbf{v} = \begin{bmatrix} r\cos\phi \\ r\sin\phi \end{bmatrix}$. 

After rotating the vector counterclockwise by $\theta$, its new angle becomes $\phi + \theta$, while its length remains unchanged. The rotated vector $\hat{\mathbf{v}}$ has coordinates $\hat{\mathbf{v}} = \begin{bmatrix} r\cos(\phi + \theta) \\ r\sin(\phi + \theta) \end{bmatrix}$. 

<figure markdown="span">
    ![Rotation](./img/rotation.png#only-light){width=60%, loading=lazy}
    ![Rotation](./img/rotation_dark.png#only-dark){width=60%, loading=lazy}
</figure>

Using trigonometric identities, 

$$
\cos(\phi + \theta) = \cos\phi\cos\theta - \sin\phi\sin\theta \quad \text{and} \quad \sin(\phi + \theta) = \sin\phi\cos\theta + \cos\phi\sin\theta
$$

Substituting $x = r\cos\phi$ and $y = r\sin\phi$, $\hat{\mathbf{v}} = \begin{bmatrix} x\cos\theta - y\sin\theta \\ x\sin\theta + y\cos\theta \end{bmatrix}$. This gives $\hat{\mathbf{v}} = A_\theta \mathbf{v}$ where $A_\theta = \begin{bmatrix} \cos\theta & -\sin\theta \\  \sin\theta & \cos\theta \end{bmatrix}$. 

### 3.2.4 - Reflection Transformation

A **reflection transformation** flips vectors across a line (the *mirror*) while preserving distances and angles. Reflections reverse orientation but keep lengths intact.

Reflection across the x-axis leaves the $x$-coordinate unchanged and reverses the sign of the $y$-coordinate. For $\mathbf{v} = (x, y)$, $(x, y) \mapsto (x, -y)$. The reflection matrix across x-axis is $R_X = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}$. Similarly, reflection across the y-axis reverses the sign of the $x$-coordinate and leaves the $y$-coordinate unchanged. The reflection matrix across y-axis is $R_Y = \begin{bmatrix} -1 & 0 \\ 0 & 1 \end{bmatrix}$. 

For reflection across a general line $y = mx + c$, **if $c \neq 0$, the transformation is not linear** and cannot be represented by a matrix. Linear transformations must send the origin to itself. Reflection across $y = mx + c$ moves the origin unless $c = 0$.

Let the line make an angle $\theta$ with the x-axis, where $\tan\theta = m$. Reflection across this line can be built as: rotate by $-\theta$, reflect across the $x$-axis, and rotate back by $+\theta$.  The resulting reflection matrix is $R =\begin{bmatrix} \cos 2\theta & \sin 2\theta \\ \sin 2\theta & -\cos 2\theta \end{bmatrix}$. 

In terms of $m$, using $\cos 2\theta = \frac{1-m^2}{1+m^2}$ and $\sin 2\theta = \frac{2m}{1+m^2}$,

$$
R =
\frac{1}{1+m^2}
\begin{bmatrix}
1 - m^2 & 2m \\
2m & m^2 - 1
\end{bmatrix}
$$

We can perform the sanity-check and confirm the formula is correct by substituting $m=0$ to get $R_X$ and $m=\infty$ to get $R_Y$. 

$$
R_X = \frac{1}{1+0}\begin{bmatrix}
1 & 0 \\
0 & -1
\end{bmatrix} 
=
\begin{bmatrix}
1 & 0 \\
0 & -1
\end{bmatrix}
$$

$$
R_Y = \frac{1}{\frac{1}{m^2}+1}
\begin{bmatrix}
\frac{1}{m^2}-1 & \frac{2}{m} \\
\frac{2}{m} & 1-\frac{1}{m^2}
\end{bmatrix}
=
\begin{bmatrix}
-1 & 0 \\
0 & 1
\end{bmatrix}
$$


### 3.2.5 - Shear Transformation

A **shear transformation** skews vectors in a fixed direction while preserving **area** (but not angles or lengths).

In a $x$-shear, horizontal displacement depends on the $y$-coordinate, i.e. $(x, y) \mapsto (x + ky, y)$. In matrix notation, $L_x = \begin{bmatrix} 1 & k \\ 0 & 1 \end{bmatrix}$. Area is preserved, and vertical lines tilt; horizontal lines stay horizontal. 

In a $y$-shear, vertical displacement depends on the $x$-coordinate, i.e., $(x, y) \mapsto (x, y + kx)$. In matrix notation, $L_x = \begin{bmatrix} 1 & 0 \\ k & 1 \end{bmatrix}$. Here, horizontal lines tilt; vertical lines stay vertical. 


### 3.2.6 - Projection Transformation 

A **projection transformation** maps vectors onto a subspace (a line in 2D case) by *dropping* them perpendicularly.

Projection onto $x$ preserves $x$-coordinate, i.e. $(x, y) \mapsto (x, 0)$. Hence, $P_x = \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}$.

Similarly, projection onto $y$ preserves $y$-coordinate, i.e. $(x, y) \mapsto (0, y)$. Hence, $P_x = \begin{bmatrix} 0 & 0 \\ 0 & 1 \end{bmatrix}$.

For a general line $y=mx$, the direction vector of the line is $\mathbf{u} = \begin{bmatrix} 1 \\ m \end{bmatrix}$. Normalizing it, to get unit vector $\hat{\mathbf{u}} = \frac{1}{\sqrt{1+m^2}}\begin{bmatrix} 1 \\ m \end{bmatrix}$.  


The projection of any vector $\mathbf{v}$ onto $\hat{\mathbf{u}}$ is

$$
\text{proj}*{\hat{\mathbf{u}}}(\mathbf{v}) = (\hat{\mathbf{u}}\cdot\mathbf{v}).\hat{\mathbf{u}}.
$$

Writing the dot product as a matrix product, $\hat{\mathbf{u}}\cdot\mathbf{v} = \hat{\mathbf{u}}^T\mathbf{v}$, we get

$$
\text{proj}*{\hat{\mathbf{u}}}(\mathbf{v}) = \hat{\mathbf{u}}(\hat{\mathbf{u}}^T\mathbf{v}) = (\hat{\mathbf{u}}\hat{\mathbf{u}}^T)\mathbf{v}.
$$

Hence, the projection matrix onto the direction $\hat{\mathbf{u}}$ is $P = \hat{\mathbf{u}}\hat{\mathbf{u}}^T.$ We already have $\hat{\mathbf{u}}.$ Substituting that, we get 

$$
P =
\frac{1}{1+m^2}
\begin{bmatrix}
1 & m \\
m & m^2
\end{bmatrix}
$$


We can perform the sanity-check and confirm the formula is correct by substituting $m=0$ to get $R_X$ and $m=\infty$ to get $R_Y$.

$$
P_X = \frac{1}{1+0}
\begin{bmatrix}
1 & 0 \\
0 & 0
\end{bmatrix} =
\begin{bmatrix}
1 & 0 \\
0 & 0
\end{bmatrix}
$$

$$
P_Y = \frac{1}{\frac{1}{m^2}+1}
\begin{bmatrix}
\frac{1}{m^2} & \frac{1}{m} \\
\frac{1}{m} & 1
\end{bmatrix} =
\begin{bmatrix}
0 & 0 \
0 & 1
\end{bmatrix}
$$


## 3.3 - Matrix Multiplication As Composition

### 3.3.1 - Idea of Composition

In practice, we often want to apply **two or more linear transformations in sequence**. For example, you might first rotate an image, then scale it, or reflect it across a line, then shear it. Each individual transformation is represented by a matrix. The question is: **can we find one single matrix that captures the combined effect of applying them one after the other?**  

The answer is yes! **Matrix multiplication** gives us exactly that single combined matrix. If transformation \(T_1\) has matrix \(A\) and transformation \(T_2\) has matrix \(B\), then doing \(T_1\) first and then \(T_2\) is equivalent to applying the single transformation whose matrix is \(BA\). 

!!! info "Notice!"

    The transformation that happens **first** appears on the **right** in the multiplication.

!!! quote "Definition: Composition of Two Transformations"

    Let \(A\) and \(B\) be \(2 \times 2\) matrices representing linear transformations \(T_A\) and \(T_B\) respectively. The **composition** \(T_B \circ T_A\) is defined by  

    \[
    (T_B \circ T_A)(\mathbf{v}) = T_B\bigl(T_A(\mathbf{v})\bigr)
    \]

    for any vector \(\mathbf{v} \in \mathbb{R}^2\).  

    Since \(T_A(\mathbf{v}) = A\mathbf{v}\) and \(T_B(\mathbf{w}) = B\mathbf{w}\), we have  

    \[
    (T_B \circ T_A)(\mathbf{v}) = B(A\mathbf{v}) = (BA)\mathbf{v}.
    \]

    Thus, the matrix representing the composition \(T_B \circ T_A\) is the product \(BA\).


### 3.3.2 - Example Of Composition Of Two Rotations


A classic example is performing two rotations, one after the other. Let \(R_{\theta_1}\) be rotation counterclockwise by angle \(\theta_1\), and \(R_{\theta_2}\) by \(\theta_2\). Their matrices are  

\[
R_{\theta_1} = \begin{bmatrix}
\cos\theta_1 & -\sin\theta_1 \\
\sin\theta_1 &  \cos\theta_1
\end{bmatrix}, \quad
R_{\theta_2} = \begin{bmatrix}
\cos\theta_2 & -\sin\theta_2 \\
\sin\theta_2 &  \cos\theta_2
\end{bmatrix}.
\]

If we rotate first by \(\theta_1\) and then by \(\theta_2\), the total rotation is by angle \(\theta_1 + \theta_2\). Let’s verify that matrix multiplication gives the same result.

We compute \(R_{\theta_2} R_{\theta_1}\):

\[
\begin{aligned}
R_{\theta_2} R_{\theta_1}
&= \begin{bmatrix}
\cos\theta_2 & -\sin\theta_2 \\
\sin\theta_2 &  \cos\theta_2
\end{bmatrix}
\begin{bmatrix}
\cos\theta_1 & -\sin\theta_1 \\
\sin\theta_1 &  \cos\theta_1
\end{bmatrix} \\
&= \begin{bmatrix}
\cos\theta_2\cos\theta_1 - \sin\theta_2\sin\theta_1 &
-\cos\theta_2\sin\theta_1 - \sin\theta_2\cos\theta_1 \\
\sin\theta_2\cos\theta_1 + \cos\theta_2\sin\theta_1 &
-\sin\theta_2\sin\theta_1 + \cos\theta_2\cos\theta_1
\end{bmatrix}.
\end{aligned}
\]

Using the cosine and sine addition formulas,

\[
\cos(\theta_1+\theta_2) = \cos\theta_1\cos\theta_2 - \sin\theta_1\sin\theta_2,\quad
\sin(\theta_1+\theta_2) = \sin\theta_1\cos\theta_2 + \cos\theta_1\sin\theta_2,
\]

we see that the top-left and bottom-right entries are \(\cos(\theta_1+\theta_2)\), the top-right is \(-\sin(\theta_1+\theta_2)\), and the bottom-left is \(\sin(\theta_1+\theta_2)\). Thus,

\[
R_{\theta_2} R_{\theta_1} = \begin{bmatrix}
\cos(\theta_1+\theta_2) & -\sin(\theta_1+\theta_2) \\
\sin(\theta_1+\theta_2) &  \cos(\theta_1+\theta_2)
\end{bmatrix} = R_{\theta_1+\theta_2}.
\]


!!! example "Example 3.1"

    Consider reflecting a vector across the \(x\)-axis, then scaling it uniformly by a factor of 2.

    - Reflection across \(x\)-axis: \(R_x = \begin{bmatrix}1 & 0 \\ 0 & -1\end{bmatrix}\).
    - Scaling by 2: \(S_2 = \begin{bmatrix}2 & 0 \\ 0 & 2\end{bmatrix}\).

    We do reflection **first**, then scaling. So the combined matrix is \(S_2 R_x\).

    \[
    S_2 R_x =
    \begin{bmatrix}2 & 0 \\ 0 & 2\end{bmatrix}
    \begin{bmatrix}1 & 0 \\ 0 & -1\end{bmatrix}
    = \begin{bmatrix}2 & 0 \\ 0 & -2\end{bmatrix}.
    \]

    Let’s test on \(\mathbf{v} = (3,4)\).

    \[
    R_x \mathbf{v} = (3,-4), \text{ then } S_2(3,-4) = (6,-8).
    \]

    Using the combined matrix,

    \[
    \begin{bmatrix}2 & 0 \\ 0 & -2\end{bmatrix}
    \begin{bmatrix}3 \\ 4\end{bmatrix} = \begin{bmatrix}6 \\ -8\end{bmatrix}.
    \]

    This produced **same result.**


!!! example "Example 3.2"

    Let’s apply an \(x\)-shear with factor \(k=3\), then project onto the \(x\)-axis.

    - \(x\)-shear: \(H = \begin{bmatrix}1 & 3 \\ 0 & 1\end{bmatrix}\).
    - Projection onto \(x\)-axis: \(P_x = \begin{bmatrix}1 & 0 \\ 0 & 0\end{bmatrix}\).

    Shear first, then project. The combined matrix \(= P_x H\).

    \[
    P_x H =
    \begin{bmatrix}1 & 0 \\ 0 & 0\end{bmatrix}
    \begin{bmatrix}1 & 3 \\ 0 & 1\end{bmatrix}
    = \begin{bmatrix}1 & 3 \\ 0 & 0\end{bmatrix}.
    \]

    Apply to \(\mathbf{v} = (1,2)\).

    Shear step: \(H\mathbf{v} = (1+6, 2) = (7,2)\).  
    Projection step: \(P_x (7,2) = (7,0)\).

    Using the combined matrix,

    \[
    \begin{bmatrix}1 & 3 \\ 0 & 0\end{bmatrix}
    \begin{bmatrix}1 \\ 2\end{bmatrix} = \begin{bmatrix}1+6 \\ 0\end{bmatrix} = \begin{bmatrix}7 \\ 0\end{bmatrix}.
    \]

    The matrix \( \begin{bmatrix}1 & 3 \\ 0 & 0\end{bmatrix} \) is **not** a standard projection or shear alone. It’s a new transformation that comes from their composition. Notice its effect: it sends \((x,y)\) to \((x+3y, 0)\), i.e., shear horizontally based on \(y\), then collapse vertically to the \(x\)-axis.

---







