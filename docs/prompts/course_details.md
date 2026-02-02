You are a curriculum developer with the spirit of Paul Graham. We have the course for the following program. 

"""
Program: Bachelor's Program in Artificial Intelligence and High Performance Computing

Program's Goal: Building AI Engineers, Research Engineers, and Technical Founders in AI/ML Infrastructure.

This program is not designed to produce employees; it is designed to produce AI engineers who can build, scale, and deploy intelligent systems. The curriculum assumes that modern AI systems require deep understanding of: math -> 
 computation -> 
 parallelism -> 
 optimization -> 
 intelligence -> 
 systems -> 
 users. 
"""

I want you to give me a course details page in markdown codeblock to make zensical page of it. You can add HTML elements in it too if markdown feels insufficient for the page. Here are all the details I want on the page regarding the course, and just about this specific course. 

"""
Course Name: MATH 101 Linear Algebra

Objective: Learn the language of high-dimensional thinking. It's the backbone of modern ML, computer graphics, optimized systems and many other computational ideas. It's the language of how every kind of data is interpreted by the computers.

Department: Math

Pre-requisite: MATH 005	Cartesian Geometry
Co-requisite: MATH 102 Calculus 

Course Offered In: Semester 1

Assessment: Written Exam (60%), Assignments (40%). There shall be total of 2 assignments. Written exam is of 2 hours. 

Course Learning Outcomes: 
- solve systems of linear equations and demonstrate an understanding of the nature of the solutions.
- perform accurate and efficient calculations with vectors, matrices, eigenvalues and eigenvectors in arbitrary dimensions.
- demonstrate a geometrical understanding of vectors and vector operations in 2 and 3 dimensions.
- demonstrate an understanding of orthogonality and projection in arbitrary dimensions.
- argue in a formal style (definition/theorem/proof or use examples) about statements in linear algebra, as the first step towards a more abstract, pure-mathematical treatment of vector spaces.

Course Author: Sagar Udasi, MSc Statistics and Data Science with Computational Finance from University of Edinburgh, sagar.l.udasi@gmail.com
Course Organiser: Sagar Udasi, MSc Statistics and Data Science with Computational Finance from University of Edinburgh, sagar.l.udasi@gmail.com

Lecture Plan: <TBD>

Self-Study Resources: 
- Video: MIT 18.06 Linear Algebra, Spring 2005 by Prof Gilbert Strang https://www.youtube.com/playlist?list=PLE7DDD91010BC51F8 , Essence of Linear Algebra by Grant Sanderson (3Blue1Brown) https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab 
- Reading Material: Linear Algebra & Its Applications by Gilbert Strang https://rksmvv.ac.in/wp-content/uploads/2021/04/Gilbert_Strang_Linear_Algebra_and_Its_Applicatio_230928_225121.pdf 
"""

Write it in good structure. You can add some elements from your end to make it comprehensive, just in case I missed something. 

----

Now in the spirit of Veritasium, if you were to design 10 lecture titles with a rough idea of what would you cover in each one of them, what would those titles be. I want to cover the following stuff: 

1. I want to explain that there are 4 kinds of data in this world: numbers, images, audio, and video. All kinds can be represented by one mathematical structure: vectors! (eventually sequence of numbers) Then I want to do some basic vector operations. I want to also explain that if we write a collection of vectors side by side (each vector is a column), what we get is a matrix. This means each row is the values of all vectors for a specific component. Maybe a couple of matrix operations. 
2. I then want to start with the classical idea of row picture vs column picture of system of linear equations. This follows by the idea of linear combinations. Then, Guass elimination method, row-echelon form, LU factorization, rank of the matrix, span, basis, augmented matrix, linear independence, and finally the solvability of linear equations. 
3. I then want to introduce the idea of linear transformation. This couples with the idea of change of basis. Here, we start to see matrix as operators. Examples: identity, scaling, rotation, reflection, shear and projection! Then I want to explain the idea of what does determinant mean. Then properties of determinants. I want to touch how matrix multiplication is a composition of two transformations. 
4. I want to then cover the idea of vector products and norms. Dot products and the idea of duality, with cross products and their role in linear transformations. Then the concept of orthonormal basis, projection, least squares, the gram schmidt process, QR factorization, etc. 
5. I want to then cover the eigen problem: eigen values and eigen vectors. Then I want to explain what happens if we take the eigenbasis. Then diagonalization, concept of positive definiteness, idea of algebraic and geometric multiplicity, cholesky's decomposition. 
6. I then want to talk about rectangular matrices. How they are the transformations between dimensions. I want to touch the idea of SVD. 
7. I want to somewhere in between or here touch the idea of inverse of a matrix. I want to touch the idea of Cayley Hamilton Theorem. Here I want to explain the cramer's rule. 
8. Maybe I want to end it with the idea of abstract vector spaces!

I want to split the entire content in 10 lectures, so I need 10 lecture titles. 



----


## **Lecture 1 — “Why Everything Is a Vector (Even Things That Don’t Look Like Numbers)”**

**Core idea:** All data collapses to one abstraction.

**What we cover:**

* The four kinds of data: numbers, images, audio, video
* Flattening reality into sequences of numbers
* Vectors as ordered containers of information
* Vector addition, scalar multiplication
* From many vectors → placing them side by side → matrices
* Column picture vs row interpretation of matrices
* Basic matrix operations (addition, scalar multiplication)

**Takeaway:**

> If you can represent it as data, you can represent it as a vector.

---

## **Lecture 2 — “One Equation, Many Geometries”**

**Core idea:** A system of equations is not algebra — it’s geometry.

**What we cover:**

* Systems of linear equations in 2D and 3D
* Row picture (intersecting hyperplanes)
* Column picture (linear combinations of vectors)
* Span as “reachable space”
* Augmented matrices
* Why some systems have no solution, some one, some infinitely many

**Takeaway:**

> Solving equations is really about asking: *Can I reach this vector?*

---

## **Lecture 3 — “How Matrices Reveal the Truth (Gaussian Elimination)”**

**Core idea:** Structure emerges when you systematically destroy clutter.

**What we cover:**

* Gaussian elimination as an algorithmic lens
* Row-echelon and reduced row-echelon forms
* Rank and what it really measures
* Linear independence
* Basis as “minimal generators”
* LU factorization (elimination as factorization)

**Takeaway:**

> Rank tells you how much freedom the system actually has.

---

## **Lecture 4 — “Matrices Are Not Tables — They Are Machines”**

**Core idea:** A matrix *does something*.

**What we cover:**

* Linear transformations as functions on space
* Matrices as operators, not data
* Identity, scaling, rotation, reflection, shear, projection
* Composition of transformations → matrix multiplication
* Why matrix multiplication is not commutative

**Takeaway:**

> A matrix is a rule for moving space itself.

---

## **Lecture 5 — “What Does the Determinant Really Measure?”**

**Core idea:** One number that encodes collapse, expansion, and reversibility.

**What we cover:**

* Determinant as signed volume scaling
* Determinant = zero → information loss
* Properties of determinants
* Invertibility and geometric meaning
* Orientation and handedness

**Takeaway:**

> The determinant answers one brutal question: *Did space collapse?*

---

## **Lecture 6 — “Measuring Angles, Errors, and Meaning”**

**Core idea:** Geometry needs measurement, not just direction.

**What we cover:**

* Dot product and angle
* Norms and length
* Duality and geometric interpretation
* Orthogonality and orthonormal bases
* Projections and least squares
* Gram–Schmidt process
* QR factorization

**Takeaway:**

> Orthogonality is the secret to clean computation.

---

## **Lecture 7 — “Eigenvectors: The Axes That Don’t Move”**

**Core idea:** Every transformation has preferred directions.

**What we cover:**

* Eigenvalues and eigenvectors
* Geometric intuition: invariant directions
* Eigenbasis and why it simplifies everything
* Diagonalization
* Algebraic vs geometric multiplicity
* Positive definite matrices
* Cholesky decomposition

**Takeaway:**

> Eigenvectors reveal how a system wants to behave.

---

## **Lecture 8 — “When Dimensions Don’t Match (Rectangular Matrices)”**

**Core idea:** Most real-world transformations change dimension.

**What we cover:**

* Rectangular matrices as dimension changers
* Rank revisited
* Null space and range
* Overdetermined and underdetermined systems
* Introduction to Singular Value Decomposition (SVD)
* Geometry of SVD: stretch, rotate, squash

**Takeaway:**

> SVD is what eigenvalues become when reality isn’t square.

---

## **Lecture 9 — “Undoing Transformations (Inverses & Polynomial Truths)”**

**Core idea:** Not everything can be reversed — and there’s a reason.

**What we cover:**

* Matrix inverse: algebraic and geometric meaning
* Conditions for invertibility
* Solving systems via inverses
* Cramer’s Rule (and why it doesn’t scale)
* Cayley–Hamilton Theorem
* Matrices as objects that satisfy their own equations

**Takeaway:**

> Every matrix obeys its own characteristic law.

---

## **Lecture 10 — “When Vectors Aren’t Arrows Anymore”**

**Core idea:** Linear algebra was never about arrows.

**What we cover:**

* Abstract vector spaces
* Examples beyond ℝⁿ (functions, polynomials, signals)
* Basis without coordinates
* Linear maps in abstract spaces
* Why this abstraction matters for ML, physics, and systems

**Takeaway:**

> Vectors are not things — they are roles.
