# 04. The Geometry Hidden In This Single Number

In the last chapter, we learnt about **linear transformation**. Consider the matrix $A =\begin{bmatrix}3 & 1 \\ 1 & 2\end{bmatrix}$. This will transform the unit square on the standard $\mathbf{xy}$-plane to the shaded parallelogram shown below on the transformed $\mathbf{x'y'}$-plane. 

Since the area of the unit square on the standard $\mathbf{xy}$-plane is $1$ and if the area of the transformed parallelogram is $k$, we can say that every area on the transformed plane will be $k$ times the area of the corresponding shape in the standard plane. **What is this area of the shaded region, i.e. $k$?**

<figure markdown="span">
    ![Determinant](./img/deter.png#only-light){width=65%, loading=lazy}
    ![Determinant](./img/deter_dark.png#only-dark){width=65%, loading=lazy}
</figure>

In general, if $A =\begin{bmatrix}a & b \\ c & d\end{bmatrix}$, then 

$$
\text{Area of the shaded region} = \text{Area OCDG} - \text{Area OBA} - \text{Area ABCD} - \text{Area OEF} - \text{Area FEDG}
$$

$$
\text{Area of the shaded region} = (a+b)(c+d) - \tfrac12bd - \tfrac12(b+a+b)c-\tfrac12ac-\tfrac12(c+c+d)b = ad-bc
$$

For the given matrix, $k = 3 \times 2 - 1 \times 1 = 5$. So, the area of the shaded region in the considered example is $5$. 

This term $ad-bc$ is called **the determinant** of the matrix of size $2 \times 2$. 

## 4.1 - Properties of Determinants

**1. The determinant of the identity matrix is 1.** This follows from the fact that the identity matrix acts as the neutral element under linear transformation.

**2. The determinant changes sign when two rows are exchanged.** When rows of a 2D matrix are swapped, $\mathbf{x}$ components become $\mathbf{y}$ components and vice versa. This is equivalent of saying, $\mathbf{x}$ and $\mathbf{y}$ axes have been swapped. Geometrically, this is equivalent to reflecting the entire plane across the line $y = x$. **A reflection does not change area, but it does reverse orientation.** Moving from $\hat{\mathbf{i}}$ to $\hat{\mathbf{j}}$ is a **counterclockwise turn**. If the axes are swapped, moving from $\hat{\mathbf{i}}$ to $\hat{\mathbf{j}}$ becomes a **clockwise turn**. Negative sign of the determinant tells us that the orientation of axes has been changed. 

**3. If one of the rows of the matrix has all zero elements, the determinant of that matrix is zero.** For 2D case, if the row has all zero elements, it means both vectors are aligned in the same direction. The area has collapsed to a line in this case, and hence the determinant should be zero.  

!!! tip "Row Rank = Column Rank!"

    In this course, we have been focused only on row transformations. There is a concept called as **dual space**, where we **transpose** rows and columns. In other words, it is a world where rows are treated as vectors instead of columns. In that world, for Gaussian Elimination, we have to reduce the matrix to **column-echelon form.** 
    
    And what turns out is, if we take a matrix which has a dependent column vector, and if we perform column operations, we can reduce all the elements in a column to zeros (just like in case of all zeros row). **Why does it matter here?** 

    Because this means, **if one of the columns of the matrix has all zero elements, the determinant of that matrix is also zero!** You can use this result directly. 

**4. The determinant is linear in each row separately, when other rows are held fixed.** This means, the determinant satisfies **additivity** and **homogeneity** for each row. 

**Additivity in a row**: If a row vector is written as a sum, then the determinant splits as a sum. For a $2 \times 2$ matrix,

$$
\det\begin{bmatrix}
a + a' & b + b'  \\
c & d
\end{bmatrix}
=
\det\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
+
\det\begin{bmatrix}
a' & b' \\
c & d
\end{bmatrix}
$$

**Homogeneity in a row**: Scaling a row scales the determinant by the same factor. For a $2 \times 2$ matrix,

$$
\det\begin{bmatrix}
a & b  \\
tc & td
\end{bmatrix}
=
t.\det\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
$$

**What does this mean geometrically?**

In 2D example, determinants are areas. For two vectors $\mathbf{a}$ and $\mathbf{b}$, the determinant $\det(\mathbf{a}, \mathbf{b})$ represents the **signed area of the parallelogram** spanned by them. Now, suppose $\mathbf{a} = \mathbf{u} + \mathbf{v}$. Geometrically, $\mathbf{u}$ and $\mathbf{v}$ are two displacements, and $\mathbf{a}$ is the diagonal obtained by placing them head-to-tail. The parallelogram formed by $(\mathbf{u}+\mathbf{v}, \mathbf{b})$ can be **decomposed into two parallelograms**: one spanned by $(\mathbf{u}, \mathbf{b})$ and one spanned by $(\mathbf{v}, \mathbf{b})$. We can now add areas. That is why $\det(\mathbf{u}+\mathbf{v}, \mathbf{b})=\det(\mathbf{u}, \mathbf{b}) + \det(\mathbf{v}, \mathbf{b})$. 

Scaling is pretty easy now. If you stretch one side of a parallelogram by a factor $t$, the area scales by $t$. Hence, $\det(t\mathbf{a}, \mathbf{b}) = t \det(\mathbf{a}, \mathbf{b})$. 


**Splitting the determinant into components**

We can write, 

$$
\det\begin{bmatrix}
a & b  \\
c & d
\end{bmatrix}
=
\det\begin{bmatrix}
a + 0 & 0 + b  \\
c & d
\end{bmatrix}
=
\det\begin{bmatrix}
a & 0 \\
c & d
\end{bmatrix}
+
\det\begin{bmatrix}
0 & b \\
c & d
\end{bmatrix}.
$$

We can now the same for the second row. 

$$
\det\begin{bmatrix}
a & b  \\
c & d
\end{bmatrix}
=
\det\begin{bmatrix}
a & 0 \\
c + 0 & 0 + d
\end{bmatrix}
+
\det\begin{bmatrix}
0 & b \\
c + 0 & 0 + d
\end{bmatrix}.
$$

$$
\det\begin{bmatrix}
a & b  \\
c & d
\end{bmatrix}
=
\det\begin{bmatrix}
 a & 0 \\
 c & 0
\end{bmatrix}
+
\det\begin{bmatrix}
a & 0 \\
0 & d
\end{bmatrix}
+ 
\det\begin{bmatrix}
0 & b \\
c & 0
\end{bmatrix}
+ 
\det\begin{bmatrix}
0 & b \\
0 & d
\end{bmatrix}
$$

You either use the **property 3** (but the column version) or use the standard formula, to reduce two terms to zero. Either way, you will get the following result. 

$$
\det\begin{bmatrix}
a & b  \\
c & d
\end{bmatrix}
=
\det\begin{bmatrix}
a & 0 \\
0 & d
\end{bmatrix}
+ 
\det\begin{bmatrix}
0 & b \\
c & 0
\end{bmatrix}
$$

**5. When A is a triangular matrix, the determinant of A is the product of the diagonal entries.** It doesn't matter if the triangular matrix is lower triangular or upper triangular. Geometrically, a triangular matrix represents a transformation built from axis-aligned stretches and shears, applied one after another. This merely tilts the shape. Since tilting does not change area, only stretching does, the total area remains preserved and is equal to $\text{(stretch in x)} \times \text{(stretch in y)}$. This is exactly the product of the diagonal entries. 

**6. The determinant of the product of two matrices is the product of their determinants.** Think of multiplication of two matrices $AB$ as composition. Matrix $B$ transforms space first, then matrix $A$ transforms the already-transformed space. Each transformation scales area by its determinant. So geometrically, $B$ scales area by $\det(B)$ and $A$ further scales area by $\det(A)$. Doing both together should produce a total scaling of $\det(A).\det(B)$.

**7. Subtracting a multiple of one row from another row leaves the same determinant.** 

$$
\det\begin{bmatrix}
a - l.c & b - l.d  \\
c & d
\end{bmatrix}
=
\det\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
$$

> **Think: Why Property 7 holds?**

## 4.2 - Higher Dimension Determinants

It is easy to guess that in 3D, **determinants represents the volume of parallelepiped formed by 3 vectors as its sides.** The tougher question is, **how do we evaluate it?** One clumsy way would be to make volumes, subtract the volume of shapes we don't want and eventually come up with some kind of formula. However, we will again get stuck when the question will be to evaluate a $4 \times 4$ determinant. Hence, we will make use of properties. All the above 2D determinant properties can be extended naturally to 3D and above. 

**Property 1** and **Property 2** extend naturally. **Property 3** extends because in 3D case, a zero row will collapse 3D shape to 2D area because you get restricted on a plane. In that case, the volume (and hence the determinant) becomes $0$. Now, here comes the most interesting property. 

**Property 4** extends because just like areas, you'd be extending volumes which can be added. So, the property of **linearity still holds for each row**. The power of this property lies because it tells us how to evaluate $3 \times 3$ determinant. 

Just like in 2D case, you can apply this property to each row **to split each determinant into three, such that each row will eventually have only element.**

$$
\det\begin{bmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{bmatrix} 
= 
\quad...
\det\begin{bmatrix}
\text{one component from row 1}\\
\text{one component from row 2}\\
\text{one component from row 3}
\end{bmatrix}...
$$

There are $3^3 = 27$ such terms in principle. Any determinant where **two rows point in the same coordinate direction** is zero. For example, $\det\begin{bmatrix} a_{11} & 0 & 0 \\ a_{21} & 0 & 0 \\ * & * & * \end{bmatrix} = 0$ because the first two rows are linearly dependent. Therefore, **only those terms survive where the three rows point in three different coordinate directions.** That means, one row contributes $x$-component, one contributes $y$-component and one contributes $z$-component. There are exactly **six ways** to assign the directions $(x,y,z)$ to the three rows.

$$
\det\begin{bmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{bmatrix} 
= 
\det
\begin{bmatrix}
a_{11} & 0 & 0 \\
0 & a_{22} & 0 \\
0 & 0 & a_{33}
\end{bmatrix}
+
\det
\begin{bmatrix}
a_{11} & 0 & 0 \\
0 & 0 & a_{23} \\
0 & a_{32} & 0
\end{bmatrix}
+
\det
\begin{bmatrix}
0 & a_{12} & 0 \\
a_{21} & 0 & 0 \\
0 & 0 & a_{33}
\end{bmatrix}
$$

$$
\qquad
+
\det
\begin{bmatrix}
0 & a_{12} & 0 \\
0 & 0 & a_{23} \\
a_{31} & 0 & 0
\end{bmatrix}
+
\det
\begin{bmatrix}
0 & 0 & a_{13} \\
a_{21} & 0 & 0 \\
0 & a_{32} & 0
\end{bmatrix}
+
\det
\begin{bmatrix}
0 & 0 & a_{13} \\
0 & a_{22} & 0 \\
a_{31} & 0 & 0
\end{bmatrix}
$$

Here, we can swap rows so that all the elements are along the diagonal, and in that case the determinant will be equal to the product of diagonal elements. Remember that a single swap causes the determinant to be negative!

$$
\det\begin{bmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{bmatrix} 
= 
a_{11}a_{22}a_{33} -a_{11}a_{23}a_{32} -a_{12}a_{21}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} -a_{13}a_{22}a_{31}
$$

We successfully derived the formula for evaluating a $3 \times 3$ determinant. However, we need to write it in a very decent format, so that we can remember it and use it easily. 

$$
\det\begin{bmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{bmatrix} 
= 
a_{11}
\begin{vmatrix}
a_{22} & a_{23} \\
a_{32} & a_{33}
\end{vmatrix}
-
a_{12}
\begin{vmatrix}
a_{21} & a_{23} \\
a_{31} & a_{33}
\end{vmatrix}
+
a_{13}
\begin{vmatrix}
a_{21} & a_{22} \\
a_{31} & a_{32}
\end{vmatrix}
$$

And this is the exact rule we used in high-school to evaluate determinants. Now we know from where it came. 

The structure that emerged in the final expression is not accidental. It deserves a name. Each $2 \times 2$ determinant in the final expression is called **a minor**. 

!!! quote "Definition: Minor"

    The **minor** of an entry $a_{ij}$, denoted $M_{ij}$, is defined as the determinant of the matrix obtained by **deleting the $i$-th row and $j$-th column**.

    For example, in a $3 \times 3$ matrix,

    $$
    M_{11} =
    \begin{vmatrix}
    a_{22} & a_{23} \\
    a_{32} & a_{33}
    \end{vmatrix}
    $$

Minors alone aren't sufficient to evaluate the determinant. We need the alternating sign to come from the number of row (or column) swaps needed to move the chosen entry into a diagonal position. The term that incorporates this alternating sign is called **the cofactor**. 

!!! quote "Definition: Cofactor"

    The **cofactor** of $a_{ij}$, denoted $C_{ij}$, is defined as $C_{ij} = (-1)^{i+j} M_{ij}$.

With this notation, the determinant of a (3\times3) matrix can be written compactly as $\det(A) = a_{11}C_{11} + a_{12}C_{12} + a_{13}C_{13}$. This is called **cofactor expansion along the first row**.

Importantly, nothing special happened with the first row. Because the determinant is linear in **every row and every column**, we may expand along any row or any column. For example, expansion along row $i$ gives $\det(A) = \sum_{j=1}^{n} a_{ij} C_{ij}$. Similarly, expansion along column $j$, $\det(A) = \sum_{i=1}^{n} a_{ij} C_{ij}$. This freedom is extremely useful in practice: one typically expands along a row or column containing the **most zeros**.


!!! quote "General Determinant Expansion Rule"

    Let $A$ be an $n \times n$ matrix. Then the determinant of (A) is defined by,
    
    $$
    \det(A) = \sum_{j=1}^{n} a_{ij} C_{ij} \quad \text{for any fixed row } i
    $$

    with

    $$
    C_{ij} = (-1)^{i+j} \det(A_{ij})
    $$
    
    where $A_{ij}$ is the matrix obtained by deleting row $i$ and column $j$.

**Property 5, 6** and **7** extend naturally to higher dimensions. 

> **Think why!?**

---