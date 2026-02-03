# 02. Yet Another Way To Look At The System Of Equations

In school, you studied something called **a system of linear equations**. Let us begin exactly there, with a familiar example, and slowly change how we look at it.

## 2.1 - The Row Picture vs. The Column Picture

Consider the two equations in two variables. 

$$
\begin{aligned}
2x - y &= 1 \\
x + y &= 5
\end{aligned}
$$


In school, the standard way to solve this system was geometric. Each equation was treated as a line in the plane. The equation $2x - y = 1$ can be rewritten as $y = 2x - 1$. It is a line with slope $m = 2$, passing through $(0, -1)$ and $(\tfrac12, 0)$. Similarly, the equation $x + y = 5$ can be rewritten as $y = 5 - x$. It is a line with slope $m = -1$. When we draw both lines on the same coordinate plane, they intersect at the point $(2, 3)$. This point lies on both lines and therefore satisfies both equations. In school language, this point was called the **unique solution** of the system.

This way of thinking is called the **row picture**. Each equation is a row. Each row is a line. The solution is where the rows agree. Now we will look at the same problem from a different angle.

Let us write this system of linear equations in the **matrix form** as $A\mathbf{x} = \mathbf{b}$. $A$ is called **the coefficient matrix**, $\mathbf{x}$ is the vector of unknowns, and $\mathbf{b}$ is the target vector. This is the same system, written more compactly. Nothing has changed mathematically. But this form allows a new interpretation.

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

Instead of thinking row by row, we now think **column by column**. The above equation can be rewritten as,

$$
x
\begin{bmatrix}
2 \\
1
\end{bmatrix}
+
y
\begin{bmatrix}
-1 \\
1
\end{bmatrix}
=
\begin{bmatrix}
1 \\
5
\end{bmatrix}
$$

This equation says something very concrete. Our goal is to find numbers $x$ and $y$ such that a linear combination of the two column vectors lands exactly on the target. In other words, **How many steps along the vector $(2, 1)$, and how many steps along the vector $(-1, 1)$, do we need to reach $(1, 5)$?**

With some hit-and-trial, you can come up with the solution $x=2$ and $y=3$. Geometrically it says: Take $2$ steps along the vector $(2, 1)$. This takes you to $(4, 2)$. Then take $3$ steps along the vector $(-1, 1)$. This takes you from $(4, 2)$ to $(1, 5)$. You have reached the target.

<div class="grid" markdown>

<figure markdown="span">
    ![Row Picture](./img/row_pic.png#only-light){width=95%, loading=lazy}
    ![Row Picture](./img/row_pic_dark.png#only-dark){width=95%, loading=lazy}
</figure>

<figure markdown="span">
    ![Col Picture](./img/col_pic.png#only-light){width=95%, loading=lazy}
    ![Col Picture](./img/col_pic_dark.png#only-dark){width=95%, loading=lazy}
</figure>

</div>


Both viewpoints describe the same mathematics. But the column picture scales naturally to higher dimensions, where imagining intersection of lines/planes/hyperplanes to get a solution is no longer possible. 


## 2.2 - Gaussian Elimination Method

In the previous example, we found the solution by reasoning and a bit of trial and error. That worked because the system was small and well-behaved. But this raises a natural question.: Is there a **systematic method** that will always tell us the values of the unknown variables? Is there an algorithm that works step by step, without guesswork? The answer is **yes**. Such a method was developed by the German mathematician **Carl Friedrich Gauss**, and it is now known as **Gaussian Elimination**. We will learn it through an example.

Consider the system of simultaneous linear equations.

$$
\begin{aligned}
x + 2y + z &= 2 \\
2x + 6y + z &= 7 \\
x + y + 4z &= 3
\end{aligned}
$$

Writing and rewriting equations quickly becomes tedious. Gaussian elimination avoids this by organizing all the information into a single object. We collect the coefficients of the variables and the constants on the right-hand side into an **augmented matrix**. 

$$
[A|\mathbf{b}] = 
\left[
\begin{array}{ccc|c}
1 & 2 & 1 & 2 \\
2 & 6 & 1 & 7 \\
1 & 1 & 4 & 3
\end{array}
\right]
$$

This matrix represents the entire system. Any operation we perform on the rows of this matrix corresponds to a valid transformation of the original equations. The advantage is simple but important. We no longer need to rewrite equations repeatedly. We manipulate the matrix directly.

Gaussian elimination is based on three allowed operations, called **elementary row operations**.

1. Swap two rows: $R_i \leftrightarrow R_j$
2. Multiply a row by a nonzero scalar: $R_i \rightarrow c.R_i$
3. Add a scalar multiple of one row to another row: $R_i \rightarrow R_i + c.R_j$

These operations do not change the solution of the system. They only simplify its appearance.


The goal is to transform the augmented matrix into an **upper triangular form**, also called **row echelon form**, where all entries below the main diagonal elements, also called **pivots**, are zero.

**Step 1: First pivot**

We begin with the first pivot, the entry in the $(1,1)$ position. Here, the pivot is $1$. Our aim is to eliminate the entries below it. For this, we will perform two row operations: $R_2 \rightarrow R_2 - 2R_1$ and $R_3 \rightarrow R_3 - R_1$. After these operations, the augmented matrix becomes,

$$
\left[
\begin{array}{ccc|c}
1 & 2 & 1 & 2 \\
0 & 2 & -1 & 3 \\
0 & -1 & 3 & 1
\end{array}
\right]
$$

Now all entries below the first pivot are zero.

**Step 2: Second pivot**

We move to the second pivot, the entry in the $(2,2)$ position, which is $2$. To eliminate the entry below it, we add half of the second row to the third row: $R_3 \rightarrow R_3 + \tfrac{1}{2}R_2$.
This gives

$$
\left[
\begin{array}{ccc|c}
1 & 2 & 1 & 2 \\
0 & 2 & -1 & 3 \\
0 & 0 & 2 & 2
\end{array}
\right]
$$

At this stage, the matrix is in upper triangular form. Once the matrix is in row echelon form, solving the system becomes straightforward by **back-substitution**. 

From the last row,

$$
2z = 2 \quad \Rightarrow \quad z = 1.
$$

Substitute $z = 1$ into the second row,

$$
2y - 1 = 3 \quad \Rightarrow \quad y = 2.
$$

Now substitute $y = 2$ and $z = 1$ into the first row,

$$
x + 2(2) + 1 = 2 \quad \Rightarrow \quad x = -3.
$$

So the solution of the system is $(x = -3, \text{ } y = 2, \text{ } z = 1)$. You know the geometric interpretation of this solution: we need to take $3$ steps in the opposite direction of the first vector $(1, 2, 1)$, $2$ steps along the second vector $(2, 6, 1)$ and $1$ step along the third vector $(1, 1, 4)$, to reach the target vector $(2, 7, 3)$. 

The natural question that now arises is: **is it always possible to express one vector as a linear combination of others?** In other words, **is a solution always guaranteed?** Let's answer this in the next section. 

## 2.3 - Rank Of A Matrix

**Not having a solution** to the system of linear equations means **it is not possible to reach to the target vector with the linear combination of vectors given in the matrix.** To see if such a case is possible or not, let's try to see: **given a collection of vectors, what new vectors can you form from them?** 

### 2.3.1 - Vector Space

Consider the matrix,

$$
A =
\begin{bmatrix}
1 & 2 & 1 \\
2 & 6 & 1 \\
1 & 1 & 4
\end{bmatrix}.
$$

It has three column vectors. 

$$
\begin{bmatrix}
1 \\ 2 \\ 1
\end{bmatrix},
\quad
\begin{bmatrix}
2 \\ 6 \\ 1
\end{bmatrix},
\quad
\begin{bmatrix}
1 \\ 1 \\ 4
\end{bmatrix}.
$$

All the vectors that can be reached using these three vectors can be written in the form 

$$
x
\begin{bmatrix}
1 \\ 2 \\ 1
\end{bmatrix}
+
y
\begin{bmatrix}
2 \\ 6 \\ 1
\end{bmatrix}
+
z
\begin{bmatrix}
1 \\ 1 \\ 4
\end{bmatrix}
$$

The set of all vectors that can be formed is called **the vector space**. 

!!! quote "Definition: Vector Space"

    For a matrix $A$ with $n$ columns, let its column vectors be denoted by $\mathbf{c}_1, \mathbf{c}_2, \dots, \mathbf{c}_n$.

    The **vector space associated with $A$**, also called the **column space of $A$** or **span of $A$**, is defined as the set of all vectors that can be obtained as linear combinations of its column vectors.

    $$
    \mathcal{V}(A)
    =
    \left\{
    \mathbf{v} \middle|
    \mathbf{v} = 
    \sum_{i=1}^{n} k_i \mathbf{c}_i, \text{ }
    k_i \in \mathbb{R}
    \right\}.
    $$

    Equivalently, this can be written in matrix form as

    $$
    \mathcal{V}(A)
    =
    \left\{
    \mathbf{v} \middle|
    \mathbf{v} = A \mathbf{k}, \text{ }
    \mathbf{k} \in \mathbb{R}^n
    \right\},
    $$

    where $\mathbf{k} = (k_1, k_2, \dots, k_n)^T$.

    This set contains **all vectors that can be reached by scaling and adding the column vectors of $A$**. It is a vector space because it is closed under addition and scalar multiplication.

**If a target vector lies in the span of the columns, the system has a solution. If it does not, no solution exists.** This immediately connects back to the column picture. Solving $A\mathbf{x} = \mathbf{b}$ is the same as asking: **Is $\mathbf{b}$ in the span of the columns of $A$?**

We say, if all the $n$ columns are **linearly independent**, then $n$ vectors span the entire $\mathbb{R}^n$ space, and the solution always exists. But, what is *independence?*


### 2.3.2 - Linear Independence and Redundant Vectors

Consider two vectors in 3D space.

$$
\mathbf{v}_1 = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}, \quad
\mathbf{v}_2 = \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix}
$$

What can you reach with these?

$$
x \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix} + y \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix} = \begin{bmatrix} x \\ y \\ 0 \end{bmatrix}
$$

Notice the last coordinate: it's **always zero**. No matter what values you choose for $x$ and $y$, that third coordinate remains stubbornly at zero. 
You're trapped in the $xy$-plane. You can move east-west, north-south, but you cannot lift yourself off the ground. **You have freedom in two dimensions, but you're imprisoned in the third.**

Can you reach the vector $\begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix}$? Absolutely not. To reach it, you'd need

$$
x \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix} + y \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix} = \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix}
$$

which is impossible!

Now let's add a third vector. But here's the critical question: **does it actually add new freedom?** Suppose our third vector is

$$
\mathbf{v}_3 = \begin{bmatrix} 2 \\ 3 \\ 0 \end{bmatrix}
$$

Notice anything? This vector also has zero in the third position. In fact, I can write it exactly as

$$
\mathbf{v}_3 = 2\mathbf{v}_1 + 3\mathbf{v}_2
$$

This third vector is **dependent**: it brings nothing new. It's already reachable using $\mathbf{v}_1$ and $\mathbf{v}_2$. This means if $A = \begin{bmatrix} 1 & 0 & 2 \\ 0 & 1 & 3 \\ 0 & 0 & 0 \end{bmatrix}$, then $A.\mathbf{x} = \mathbf{b}$ is not solvable unless $\mathbf{b}$ is of the form $\begin{bmatrix} a \\ b \\ 0 \end{bmatrix}$. 

!!! info "Notice!"

    The issue is happening **because the last row has all zeros!** If any vector had any value in the last row, that vector had the capability to lift us off the ground (along z-axis), and we would reach all possible $\mathbf{b}$. 


Now consider a genuinely different third vector.

$$
\mathbf{v}_3^* = \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix}
$$

This vector points straight up, perpendicular to the $xy$-plane. Can you write this as a combination of $\mathbf{v}_1$ and $\mathbf{v}_2$? Absolutely not. This vector is **independent**. It lives outside the plane and cannot be reached by any combination of $\mathbf{v}_1$ and $\mathbf{v}_2$. This gives us a new matrix:

$$
B = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}
$$

Can we reach $\begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix}$ now? Yes! Simply choose $x = 1, y = 1, z = 1$. In fact, **every vector in 3D space is now reachable**. Want $\begin{bmatrix} 5 \\ -2 \\ 7 \end{bmatrix}$? Take $5\mathbf{v}_1 - 2\mathbf{v}_2 + 7\mathbf{v}_3^*$. 


!!! tip "Intuition Behind Linear Independence"

    Think of **linear independence** in the following way. 
    
    If you have one 3-dimensional vector, you can define the direction, and hence a line in 3D space. The moment you have two 3D vectors, you can define a plane in 3D space. Now suppose you have a third 3D vector which happens to be a linear combination of these two vectors, in that case the third vector also lies in the same plane defined by the initial two vectors. So, even though you have 3 vectors in 3D, you can never escape that plane and any target point that is not in that plane is not reachable! 

    This happened because the third vector is **not independent** and is **redundant** because it technically didn't add any value compared to the initial two vectors. 

    When a **redundant vector** appears in the matrix, if the point is not reachable, it has no solution. If the point lies in the reduced span of these vectors, it can be reached in infinitely many ways.  


### 2.3.3 - The Rank

The above example was still pretty obvious. What happens when you get a matrix with the columns like the ones below? 

$$
\mathbf{u}_1 = \begin{bmatrix} 1 \\ 2 \\ 1 \end{bmatrix}, \quad
\mathbf{u}_2 = \begin{bmatrix} 2 \\ 1 \\ 3 \end{bmatrix}, \quad
\mathbf{u}_3 = \begin{bmatrix} 5 \\ 4 \\ 7 \end{bmatrix}
$$

At first glance, they might look independent, but upon careful observation, we will see $\mathbf{u}_3 = \mathbf{u}_1 + 2.\mathbf{u}_2$. The matrix $U = \begin{bmatrix} 1 & 2 & 5 \\ 2 & 1 & 4 \\ 1 & 3 & 7 \end{bmatrix}$ can only reach a **2D plane** in 3D space, not the entire space.

This is still relatively simple. What I am trying to ask is: **is there a way we can figure out if all the columns are independent or not?** Yes! And luckily, the answer is our very old method: **Gaussian Elimination**!

$$
\begin{bmatrix} 1 & 2 & 5 \\ 2 & 1 & 4 \\ 1 & 3 & 7 \end{bmatrix}
\xrightarrow{R_2 \to R_2 - 2R_1}
\begin{bmatrix} 1 & 2 & 5 \\ 0 & -3 & -6 \\ 1 & 3 & 7 \end{bmatrix}
$$

$$
\xrightarrow{R_3 \to R_3 - R_1}
\begin{bmatrix} 1 & 2 & 5 \\ 0 & -3 & -6 \\ 0 & 1 & 2 \end{bmatrix}
$$

$$
\xrightarrow{R_3 \to R_3 + \tfrac{1}{3}R_2}
\begin{bmatrix} 1 & 2 & 5 \\ 0 & -3 & -6 \\ 0 & 0 & 0 \end{bmatrix}
$$

That bottom row of zeros is the signature of dependence. It tells us: **you only have two independent directions, not three.**

The number of **independent** vectors is called the **rank** of the matrix. It tells you the dimension of the space you can actually reach. And that, ultimately, determines whether your system of equations has a solution. Equivalently, **rank** can also be defined as **the number of non-zero rows in the row-echelon form of the matrix.** 

**If the rank of the matrix of size $3 \times 3$ is $3$, it means any point in $\mathbb{R}^3$ can be reached. The solution is guaranteed!** Let's formalize this result in the next section. 


## 2.4 - Solvability of System Of Linear Equations

We know that a system of linear equations can be written compactly as $A\mathbf{x} = \mathbf{b}$. If **$\mathbf{b} = \mathbf{0}$**, the system is called **homogeneous**. Else, if **$\mathbf{b} \neq \mathbf{0}$**, the system is **non-homogeneous**. The term *homogeneous* is inspired from physics where it means *of the same kind.* Think of it like, homogeneous systems always describe planes (or lines) that **pass through the origin**, whereas non-homogeneous systems describe planes that may be **shifted away from the origin**. In physics, sometimes you are only interested in the nature of solutions and not exactly if planes or lines pass through origin or not. 

Given below is the example of homogeneous system *(on left)* and non-homogeneous system *(on right)*. 

$$
\begin{aligned}
x + y + z &= 0 \\
2x + y + z &= 0 \\
x + 2y + z &= 0
\end{aligned}
\qquad\qquad
\begin{aligned}
x + y + z &= 6 \\
2x + y + z &= 9 \\
x + 2y + z &= 8
\end{aligned}
$$

A homogeneous system **always has at least one solution**: the **zero solution** $\mathbf{x} = \mathbf{0}$. So for homogeneous systems, the only possibilities are: **exactly one solution** (the trivial solution), or **infinitely many solutions**. There is **never** a *no solution* case.

**Case (1): Homogeneous system with only one solution**

Consider the system,

$$
\begin{aligned}
x + y + z &= 0 \\
2x + y + z &= 0 \\
x + 2y + z &= 0
\end{aligned}
$$

The augmented matrix is $[A|\mathbf{b}] = \left[\begin{array}{ccc|c} 1 & 1 & 1 & 0 \\ 2 & 1 & 1 & 0 \\ 1 & 2 & 1 & 0 \end{array}\right]$. 

$$
\left[\begin{array}{ccc|c} 1 & 1 & 1 & 0 \\ 2 & 1 & 1 & 0 \\ 1 & 2 & 1 & 0 \end{array}\right]
\xrightarrow{R_2 \to R_2 - 2R_1, \text{ } R_3 \rightarrow R_3 - R_1}
\left[\begin{array}{ccc|c} 1 & 1 & 1 & 0 \\ 0 & -1 & -1 & 0 \\ 0 & 1 & 0 & 0 \end{array}\right]
$$

$$
\xrightarrow{R_3 \to R_3 + R_2}
\left[\begin{array}{ccc|c} 1 & 1 & 1 & 0 \\ 0 & -1 & -1 & 0 \\ 0 & 0 & -1 & 0 \end{array}\right]
$$

Here, we observe that **every variable is a pivot.** In other words, we don't have any free variables. The **only solution** is the zero vector, which means the planes intersect **only at the origin**. 

**Case (2): Homogeneous system with infinitely many solutions**

This case would have come if all the elements of the last row had become zero. If we modify the above system by changing $z$ to $2z$ in the third equation, we will get zeros in the reduced form. 

$$
\begin{aligned}
x + y + z &= 0 \\
2x + y + z &= 0 \\
x + 2y + 2z &= 0
\end{aligned}
$$

$$
\left[\begin{array}{ccc|c} 1 & 1 & 1 & 0 \\ 2 & 1 & 1 & 0 \\ 1 & 2 & 2 & 0 \end{array}\right]
\xrightarrow{R_2 \to R_2 - 2R_1, \text{ } R_3 \rightarrow R_3 - R_1}
\left[\begin{array}{ccc|c} 1 & 1 & 1 & 0 \\ 0 & -1 & -1 & 0 \\ 0 & 1 & 1 & 0 \end{array}\right]
$$

$$
\xrightarrow{R_3 \to R_3 + R_2}
\left[\begin{array}{ccc|c} 1 & 1 & 1 & 0 \\ 0 & -1 & -1 & 0 \\ 0 & 0 & 0 & 0 \end{array}\right]
$$

Since the last row is all zeros, we only have 2 independent vectors. This means one vector is redundant, or in other words, one variable is **free**.

Let $z = t$ *(the free variable).*

From the second row, we see $-y -z = 0 \implies y = -z \implies y = -t$. 

Finally, $x + y + z = 0 \implies x -t + t = 0 \implies x = 0$. 

The solution is $\mathbf{x} = t \begin{bmatrix} 0 \\ -1 \\ 1 \end{bmatrix} \forall \text{ } t \in \mathbb{R}$. The solution set is a **line through the origin**. 

Let's have a look at **non-homogenous cases**. Here, all three solutions are possible, including the one with no solution. 

**Case (3): Non-homogeneous system with a unique solution**

Let's consider the system. 

$$
\begin{aligned}
x + y + z &= 6 \\
2x + y + z &= 9 \\
x + 2y + z &= 8
\end{aligned}
$$

The augmented matrix is $[A|\mathbf{b}] = \left[\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 2 & 1 & 1 & 9 \\ 1 & 2 & 1 & 8 \end{array}\right]$. After same set of row operations, we will get $\left[\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 0 & -1 & -1 & -3 \\ 0 & 0 & -1 & -1 \end{array}\right]$. 

Upon back substitution, we get $z = 1, y = 2, x = 3$. 


**Case (4): Non-homogeneous system with no solution**

If we modify the third equation in a way that we get full zeros in the last row of $A$, the same system will have no solution. 

$$
\begin{aligned}
x + y + z &= 6 \\
2x + y + z &= 9 \\
x + 2y + 2z &= 8
\end{aligned}
$$

During Gaussian Elimination, we will reach $\left[\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 0 & -1 & -1 & -3 \\ 0 & 0 & 0 & -1 \end{array}\right]$. 

!!! info "Notice!"

    Here, the system is not solvable because **the rank of matrix $A$ is $2$** but **the rank of augmented matrix $[A|\mathbf{b}]$ is still $3$.**  

If we change the target vector by a little, so that its third component also gets zero by the end of row operations, we reach the final case. 

**Case (5): Non-homogeneous system with infinitely many solutions**

Consider the system, 

$$
\begin{aligned}
x + y + z &= 6 \\
2x + y + z &= 9 \\
x + 2y + 2z &= 9
\end{aligned}
$$

By Gaussian Elimination, we will reach $\left[\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 0 & -1 & -1 & -3 \\ 0 & 0 & 0 & 0 \end{array}\right]$. The way to solve this is similar to the homogeneous case, by using **free variable**. 

Let $z = t$ *(the free variable).*

From the second row, we see $-y -z = -3 \implies y = 3-z \implies y = 3-t$. 

Finally, $x + y + z = 6 \implies x + (3-t) + t = 6 \implies x = 3$. 

The solution is $\mathbf{x} = \begin{bmatrix} 3 \\ 3-t \\ t \end{bmatrix} = \begin{bmatrix} 3 \\ 3 \\ 0 \end{bmatrix} + t\begin{bmatrix} 0 \\ -1 \\ 1 \end{bmatrix} \forall \text{ } t \in \mathbb{R}$. The solution set is a **line but not through the origin**. 


### 2.4.1 - Rouché-Capelli Theorem

!!! quote "Rouché–Capelli Theorem (Solvability of Linear Systems)"


    Consider a system of linear equations written as $A\mathbf{x} = \mathbf{b}$, where $A$ is the coefficient matrix and $[A|\mathbf{b}]$ is the augmented matrix. Say, $n$ denotes the number of unknowns (variables) in the system. Then,

    1. The system is solvable (i.e., has at least one solution) if and only if $\operatorname{rank}(A) = \operatorname{rank}([A|\mathbf{b}]).$ In this case, the system is also referred as **consistent**. 

    2. If the system is solvable and

        - $\operatorname{rank}(A) = \operatorname{rank}([A|\mathbf{b}]) = n$, then the system has a **unique solution**.
        - $\operatorname{rank}(A) = \operatorname{rank}([A|\mathbf{b}]) < n$, then the system has **infinitely many solutions**, with  $n - \operatorname{rank}(A)$ free variables.

    3. If $\operatorname{rank}(A) \neq \operatorname{rank}([A|\mathbf{b}]),$ then the system is **inconsistent** and has **no solution**.

---
