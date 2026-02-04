# MATH 101: Assignment 01

| DETAILS | | 
| --- | --- |
| **Total Marks** | 100 | 
| **Instructions** | <ul><li>This assignment must be **submitted handwritten**. **Typed submissions will NOT be accepted.** I want to see your handwriting! </li><li>You may **choose which questions to attempt** as specified in each section.</li><li>Show **your thinking** clearly. Use words, and be verbose about your thoughts. Answers without reasoning will receive **no marks**. At the same time, I don't want you to drag the answers. **One clear argument wins over thousand confusing ones.**</li><li>If your **score crosses 100** by virtue of bonus problems, the **extra marks will get compensated in the next assignment.** </li></ul> |
| **Duration** | 1 week | 
| **Late Submission** | Submission delayed by each day will incur a **penalty of $5$ marks per day**. | 

---

## Section A: Solving Linear Systems & Elimination (20 Marks)

**Attempt any 2 out of the following 3 problems.**
Each problem carries **10 marks**.

---

### A1. Elimination and Comparison of Systems

Use Gaussian elimination to solve the following system of equations. 

$$
\begin{aligned}
u + v + w &= 6 \\
u + 2v + 2w &= 11 \\
2u + 3v - 4w &= 3
\end{aligned}
$$

and

$$
\begin{aligned}
u + v + w &= 7 \\
u + 2v + 2w &= 10 \\
2u + 3v - 4w &= 3
\end{aligned}
$$

Compare the two systems and comment on the nature of their solutions.


### A2. Elimination and Pivot Analysis

Use Gaussian elimination to solve the following system.

$$
\begin{aligned}
x + y + z &= 5 \\
2x + 3y + 4z &= 14 \\
3x + 4y + kz &= 18
\end{aligned}
$$

1. Solve the system for a general value of $k$.
2. Determine the value(s) of $k$ for which the system has a **unique solution** and **no solution**.
3. Explain your conclusions using pivot positions. 


### **A3. Singularity, Infinite Solutions, and Particular Solutions**

Which value of $q$ makes the following system singular? For that value of $q$, which right-hand side $t$ gives **infinitely many solutions**?

$$
\begin{aligned}
x + 4y - 2z &= 1 \\
x + 7y - 6z &= 6 \\
3y + qz &= t
\end{aligned}
$$

For the infinite-solution case, find the solution satisfying $z = 1$.

---

## Section B: Consistency, Column Space, and Solvability (10 Marks)

**Attempt *1 problem*.**

---

### B1. Conditions for Solvability

Under what condition(s) on $b_1, b_2, b_3$ is the system solvable?

$$
\begin{aligned}
x + 2y - 2z &= b_1 \\
2x + 5y - 4z &= b_2 \\
4x + 9y - 8z &= b_3
\end{aligned}
$$

Find **all solutions** when the system is solvable. 

### B2. Conditions for Solvability - 2

Consider the system.

$$
\begin{aligned}
x - y + z &= b_1 \\
2x - 2y + 2z &= b_2 \\
x + y - z &= b_3
\end{aligned}
$$

1. Write the augmented matrix $[A \mid b]$.
2. Find the condition(s) on $b_1, b_2, b_3$ for which the system is **consistent**.
3. Describe **all solutions** when the condition holds.

---

## Section C: Linear Independence & Dependence (20 Marks)

**Attempt any 2 out of the following 3 problems.**
Each problem carries **10 marks**.

---

### **C1. Dependence of Vector Differences**

Let $w_1, w_2, w_3$ be linearly independent vectors.

Define,

$$
v_1 = w_2 - w_3,\quad
v_2 = w_1 - w_3,\quad
v_3 = w_1 - w_2
$$

Show that $v_1, v_2, v_3$ are linearly dependent, and find a **non-trivial linear combination** that equals zero.

### **C2. Independence of Vector Sums**

Let $w_1, w_2, w_3$ be linearly independent vectors.

Define,

$$
v_1 = w_2 + w_3,\quad
v_2 = w_1 + w_3,\quad
v_3 = w_1 + w_2
$$

Show that $v_1, v_2, v_3$ are linearly independent.

### **C3. True or False (Justify Carefully)**

State whether each statement is **true or false**, and give a justification or counterexample.

1. If vectors $x_1, \dots, x_m$ span a subspace $S$, then $\dim S = m$.
2. The intersection of two subspaces cannot be empty.
3. If $Ax = Ay$, then $x = y$.
4. The column space of a matrix has a unique basis obtained from echelon form.
5. If a square matrix $A$ has independent columns, then $A^2$ also has independent columns.

---

## Section D: Linear Transformations & Matrices (10 Marks)

**Attempt 1 problem.**

---

### D1. Transformations

1. What matrix represents: (a) Rotation by $90^\circ$ counterclockwise **followed by** projection onto the $x$-axis? (b) Projection onto the $x$-axis **followed by** projection onto the $y$-axis?

2. The matrix $A = \begin{bmatrix}1 & 0 \\ 3 & 1\end{bmatrix}$ produces a shearing transformation. Describe its effect on the $x$-axis by computing: $A(1,0), A(2,0), A(-1,0)$.

### D2. Composition of Transformations

1. Find the matrix that represents reflection across the $x$-axis, followed by projection onto the line $y = x$. 

2. Apply this transformation to the vector $(2,1)$, and interpret the result geometrically.

---

## Section E: Determinants (20 Marks)

**Attempt any *2 out of the following 3 problems*.**
Each problem carries **10 marks**.

---

### **E1. Vandermonde Determinant**

Prove that

$$
\det
\begin{bmatrix}
1 & a & a^2 \\
1 & b & b^2 \\
1 & c & c^2
\end{bmatrix}
= (b-a)(c-a)(c-b)
$$


### **E2. Determinants with Parameter**

Compute the determinant of the following matrix. 

$$
\begin{bmatrix}
1 & t & t^2 & t^3 \\
t & 1 & t & t^2 \\
t^2 & t & 1 & t \\
t^3 & t^2 & t & 1
\end{bmatrix}
$$

### **E3. Determinants and Singularity**

Let

$$
A =
\begin{bmatrix}
2 & 1 & 0 \\
1 & 2 & 1 \\
0 & 1 & \lambda
\end{bmatrix}
$$

1. Compute $\det(A)$ as a function of $\lambda$.
2. For which value(s) of $\lambda$ is $A$ singular?
3. Explain what singularity means in terms of the **column space** of $A$.

---


## Section F: Orthogonality, Projections & Inequalities (20 Marks)

**Attempt any *2 out of the following 3 problems*.**
Each problem carries **10 marks**.

---

### **F1. Orthogonality**

Which pairs among the following vectors are orthogonal?

$$
v_1 = \begin{bmatrix}1\\2\\-2\\1\end{bmatrix},\quad
v_2 = \begin{bmatrix}4\\0\\4\\0\end{bmatrix},\quad
v_3 = \begin{bmatrix}1\\-1\\-1\\-1\end{bmatrix},\quad
v_4 = \begin{bmatrix}1\\1\\1\\1\end{bmatrix}
$$


### **F2. Schwarz Inequality and Means**

Let $x, y > 0$.

Define

$$
a = (\sqrt{y}, \sqrt{x}), \quad b = (\sqrt{x}, \sqrt{y})
$$

Use the Schwarz inequality to compare,

$$
\frac{x+y}{2} \quad \text{and} \quad \sqrt{xy}
$$


### **F3. Projection and Inner Products**

Let $a = (1,2,2)$ and let $P$ be the projection matrix onto the line spanned by $a$.

1. Compute the projection matrix $P$.
2. For vectors $x = (2,1,0)$ and $y = (1,0,1)$, verify $\langle Px, y \rangle = \langle x, Py \rangle$. 
3. Find the angle between $Px$ and $Py$.

---


## Bonus Questions (Optional)

### X1. Rank-One Update Determinant (Up to +5 Marks)

Let $M$ be a $4 \times 4$ matrix with all rows equal to $(a,b,c,d)$.

Compute:

$$
\det(I + M)
=
\begin{vmatrix}
1+a & b & c & d \\
a & 1+b & c & d \\
a & b & 1+c & d \\
a & b & c & 1+d
\end{vmatrix}
$$

Partial credit for solving the case $a=b=c=d=1$.


### X2. Rank-One Updates, Geometry, and Invertibility (Up to +10 Marks)

Let $A$ be an invertible $n \times n$ matrix, and let $u, v \in \mathbb{R}^n$ be nonzero vectors. Define the matrix $B = A + u v^T$.

1. Show that for any vector $x$, $Bx = Ax + u(v^T x)$. Explain geometrically how $B$ modifies the action of $A$.

2. Prove that if $1 + v^T A^{-1} u \neq 0$, then $B$ is invertible, and derive an explicit formula for $B^{-1}$ in terms of $A^{-1}, u,$ and $v$.

3. Show that if $1 + v^T A^{-1} u = 0$, then the system $Bx = 0$ has a **nonzero solution**, and explicitly construct such a vector.

4. Interpret the condition $v^T A^{-1} u = -1$ in terms of **projection onto a line** and explain why it causes a loss of invertibility.


---





