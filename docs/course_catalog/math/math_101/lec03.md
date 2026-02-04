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


<!-- TODO: Add the following section. 

## 3.2 - Standard Linear Transformations


### 3.2.1 - Identity Transformation


### 3.2.2 - Scaling Transformation


### 3.2.3 - Rotation Transformation


### 3.2.4 - Reflection Transformation


### 3.2.5 - Shear Transformation


### 3.2.6 - Projection Transformation 


## 3.3 - Matrix Multiplication As Composition: I have to cover the idea of matrix multiplication as composition!
-->


---