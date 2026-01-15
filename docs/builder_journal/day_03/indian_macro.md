# Indian Macros

The following data is something which we shall use for performing market analysis. For example, population demographic data is useful in estimating TAM. So, this is the page for India-specific data, to be readily used in guesstimates. 

## Population Demographics

| INDIA| |
| --- | --- | 
| **Population in 2024 *(in crores)*** | 145.1 | 
| **Number of households *(in crores)*** | 32 | 
| **Average people per household** | 4.53 | 

The first question that comes is: **what's the agewise distribution of the population?** We have heard that India has a lot of young population. Interestingly, 50.94% population in India is less than 30 years old!

| Age Bracket | % of Total Population | % of Males | % of Females | Males *(in lakhs)* | Females *(in lakhs)* |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 0 - 4 | 7.83% | 4.06% | 3.77% | 5892.05 | 5473.76 |
| 5 - 9 | 8.19% | 4.27% | 3.92% | 6196.54 | 5691.58 |
| 10 - 14 | 8.60% | 4.50% | 4.10% | 6525.38 | 5948.38 |
| 15 - 19 | 8.78% | 4.60% | 4.18% | 6673.06 | 6064.60 |
| 20 - 24 | 8.96% | 4.70% | 4.26% | 6815.52 | 6183.51 |
| 25 - 29 | 8.58% | 4.50% | 4.08% | 6525.84 | 5921.17 |
| 30 - 34 | 8.18% | 4.26% | 3.92% | 6184.66 | 5688.06 |
| 35 - 39 | 7.69% | 4.00% | 3.70% | 5797.99 | 5366.57 |
| 40 - 44 | 6.87% | 3.56% | 3.31% | 5162.22 | 4801.25 |
| 45 - 49 | 5.95% | 3.06% | 2.89% | 4439.11 | 4197.36 |
| 50 - 54 | 5.18% | 2.63% | 2.54% | 3822.21 | 3689.43 |
| 55 - 59 | 4.39% | 2.21% | 2.17% | 3213.76 | 3152.84 |
| 60 - 64 | 3.65% | 1.83% | 1.82% | 2651.93 | 2645.64 |
| 65 - 69 | 2.88% | 1.42% | 1.46% | 2061.32 | 2120.78 |
| 70 - 74 | 2.03% | 0.98% | 1.05% | 1422.42 | 1529.05 |
| 75 - 79 | 1.16% | 0.54% | 0.62% | 779.39 | 901.68 |
| 80+ | 1.07% | 0.46% | 0.61% | 265.27 | 371.73 |

The next important question is, **how much is the earning per household?** The estimate was made as follows. 

**Step 1.** The average number of people per household is 4.53. Now, if we sort the households based on the economic status, the number of people per household in top deciles would be a bit lesser than the bottom deciles. NFHS *(National Family Health Survey)* report has shown that the number of people in top 25% of households is around 3.8 to 4.2, compared to 4.5 to 5.0 for the bottom 25%. 

Let $\bar{h} = 4.53$ be the average number of people per household. Assume we divide the households in 10 deciles and $h_i$ be the average number of people per household for the $i^{th}$ decile. If we assume, that the number decreases linearly, then we can say $h_i \approx a + (i-1)\frac{b-a}{9}$. We know that, $\frac{\sum_{i=1}^{10}{h_i}}{10} = \bar{h}$. This gives, $(a + b) = 4.53 \times 2 = 9.06$. From NFHS data, we can estimate $a = 5.4$ and $b = 3.66$. This gives us the following estimate. 

| Decile by Economic Status | Estimated Average Number of People Per Household |
| --- | --- | 
| 0 - 10 | 5.40 | 
| 10 - 20 | 5.21 | 
| 20 - 30 | 5.01 |
| 30 - 40 | 4.82 |
| 40 - 50 | 4.63 |
| 50 - 60 | 4.43 |
| 60 - 70 | 4.24 |
| 70 - 80 | 4.05 |
| 80 - 90 | 3.85 |
| 90 - 100 | 3.66 |

**Step 2.** We know certain facts about the India's income distribution. Gross National Income *(GNI)* is 3.85 trillion USD $\approx$ 338.8 trillion rupees. Note that this number includes the corporate profits as well. The Gross Household National Income *(GHNI)* is 2.90 trillion USD $\approx$ 258.27 trillion rupees *($2,000 income per capita)*. However, we will consider GNI for our calculations because the corporate profits eventually benefit the directors and shareholders.  

Oxfam International in their report *Income Inequality in India: Survival of The Richest* shared that the bottom 50% of people take 15% of national income, bottom 90% take 43% of national income, top 10% takes 57%, top 1% takes 17% and top 0.1% takes 5%. This data is sufficient to fit the *Lorenz curve*. By calculating the area under this curve, we can estimate the income share of any percentile range of the population. By running this experiment, we found out the following. 

| | India 1A | India 1B | India 1C  | India 2A | India 2B | India 3 | 
| --- | --- | --- | --- | ---  | --- | --- |
| **%ile Range** | 99.5 - 100 | 96 - 99.5 | 91 - 96 | 82 - 91 | 70 - 82 | 0 - 70 |
| **Number of households in this range *(in lakhs)*** | 16 | 114 | 160 | 290 | 380 | 2530 |  
| **Total Income of this group *(% of GNI)*** | 10.16% | 15.86% | 12.19% | 15.27% | 14.16% | 32.33% | 
| **Total Income per household *(in lakhs/year)*** | 215.14 | 47.13 | 25.81 | 17.84 | 12.62 | 4.33 | 
| **Number of People in these households *(in lakhs)*** | 58.56 | 417.24 | 585.6 | 1116.5 | 1539 | 10793 |
| **Income per person *(in lakhs/year)*** | 58.78 |  12.88 | 7.05 | 4.63 | 3.11 | 0.89 | 
| **Equivalent Country *(by Blume)*** | Singapore | Poland | Mexico | Indonesia | Indonesia | Sub-Saharan Africa | 

These numbers are super close with the *Blume's Indus Valley Report* 2025!  

**Step 3.** We can actually estimate the number of people in each age group for each economic category. A quick estimate would be $n_{ij} = d_i \times n_j$ where $d_i$ is the distribution percentage for $i^{th}$ age group and $n_j$ is the number of people in $j^{th}$ economic category. However, this estimate would be slightly flawed as in poorer households, there are higher number of children due to high fertility rates and in rich households, old people are higher due to better medical facilities and lifestyle promoting longevity. 

The crude idea goes like this: the national average of people per household is 4.53; if the household size is larger than this, it must be a kid. If it is smaller, it should favor senior citizens *(a lot of empty nesters and seniors living alone in urban areas)*. So, we define kid's factor = average household size in that strata / national average household size. Similarly, senior citizen factor = 1 / kid's factor. This gives us the following factor values. 

| | India 1A | India 1B | India 1C  | India 2A | India 2B | India 3 | 
| --- | --- | --- | --- | ---  | --- | --- |
| **Kid's Correction Factor** | 0.808 | 0.808 | 0.808 | 0.851 | 0.893 | 1.064 | 
| **Senior Citizen Factor** | 1.238 | 1.238 | 1.238 | 1.176 | 1.119 | 0.940 | 

These factors form extremes. We should linearly spread them across age-groups. 

| Age Group | India 1A | India 1B | India 1C | India 2A | India 2B | India 3 |
| :-------- | :------- | :------- | :------- | :------- | :------- | :------ |
| 0 - 4     | 0.808    | 0.808    | 0.808    | 0.851    | 0.893    | 1.064   |
| 5 - 9     | 0.835    | 0.835    | 0.835    | 0.871    | 0.907    | 1.056   |
| 10 - 14   | 0.862    | 0.862    | 0.862    | 0.891    | 0.922    | 1.048   |
| 15 - 19   | 0.889    | 0.889    | 0.889    | 0.912    | 0.936    | 1.041   |
| 20 - 24   | 0.915    | 0.915    | 0.915    | 0.932    | 0.950    | 1.033   |
| 25 - 29   | 0.942    | 0.942    | 0.942    | 0.952    | 0.964    | 1.025   |
| 30 - 34   | 0.969    | 0.969    | 0.969    | 0.972    | 0.978    | 1.017   |
| 35 - 39   | 0.996    | 0.996    | 0.996    | 0.993    | 0.992    | 1.010   |
| 40 - 44   | 1.023    | 1.023    | 1.023    | 1.013    | 1.006    | 1.002   |
| 45 - 49   | 1.050    | 1.050    | 1.050    | 1.033    | 1.021    | 0.994   |
| 50 - 54   | 1.077    | 1.077    | 1.077    | 1.054    | 1.035    | 0.986   |
| 55 - 59   | 1.103    | 1.103    | 1.103    | 1.074    | 1.049    | 0.979   |
| 60 - 64   | 1.130    | 1.130    | 1.130    | 1.094    | 1.063    | 0.971   |
| 65 - 69   | 1.157    | 1.157    | 1.157    | 1.115    | 1.077    | 0.963   |
| 70 - 74   | 1.184    | 1.184    | 1.184    | 1.135    | 1.091    | 0.955   |
| 75 - 79   | 1.211    | 1.211    | 1.211    | 1.155    | 1.105    | 0.948   |
| 80+       | 1.238    | 1.238    | 1.238    | 1.176    | 1.119    | 0.940   |

While these correction factors capture the essence of our idea, multiplying them directly will result in the population to blow up because $\sum_{i}{d_i \cdot k'_{ij}} \neq 1$, where $d_i$ is the national distribution *(proportion)* of people for the $i^{\text{th}}$ age group and $k'_{ij}$ is the correction factor for the $i^{\text{th}}$ age group and $j^{\text{th}}$ economic strata. So, we derive the proportions as. 

$$
p_{ij} = \frac{k'_{ij}.d_i}{\sum_{i}{d_i \cdot k'_{ij}}}
$$

| Age Group | India 1A | India 1B | India 1C | India 2A | India 2B | India 3 |
| :-------- | :------- | :------- | :------- | :------- | :------- | :------ |
| 0 - 4     | 6.55%    | 6.55%    | 6.55%    | 6.87%    | 7.17%    | 8.18%   |
| 5 - 9     | 7.08%    | 7.08%    | 7.08%    | 7.36%    | 7.61%    | 8.49%   |
| 10 - 14   | 7.68%    | 7.68%    | 7.68%    | 7.91%    | 8.12%    | 8.85%   |
| 15 - 19   | 8.08%    | 8.08%    | 8.08%    | 8.25%    | 8.42%    | 8.97%   |
| 20 - 24   | 8.50%    | 8.50%    | 8.50%    | 8.61%    | 8.72%    | 9.09%   |
| 25 - 29   | 8.38%    | 8.38%    | 8.38%    | 8.43%    | 8.47%    | 8.64%   |
| 30 - 34   | 8.21%    | 8.21%    | 8.21%    | 8.20%    | 8.20%    | 8.17%   |
| 35 - 39   | 7.93%    | 7.93%    | 7.93%    | 7.87%    | 7.82%    | 7.62%   |
| 40 - 44   | 7.28%    | 7.28%    | 7.28%    | 7.18%    | 7.08%    | 6.76%   |
| 45 - 49   | 6.47%    | 6.47%    | 6.47%    | 6.34%    | 6.22%    | 5.81%   |
| 50 - 54   | 5.78%    | 5.78%    | 5.78%    | 5.63%    | 5.49%    | 5.02%   |
| 55 - 59   | 5.02%    | 5.02%    | 5.02%    | 4.86%    | 4.72%    | 4.22%   |
| 60 - 64   | 4.27%    | 4.27%    | 4.27%    | 4.12%    | 3.97%    | 3.48%   |
| 65 - 69   | 3.45%    | 3.45%    | 3.45%    | 3.31%    | 3.18%    | 2.72%   |
| 70 - 74   | 2.49%    | 2.49%    | 2.49%    | 2.38%    | 2.27%    | 1.90%   |
| 75 - 79   | 1.46%    | 1.46%    | 1.46%    | 1.38%    | 1.31%    | 1.08%   |
| 80+       | 1.37%    | 1.37%    | 1.37%    | 1.30%    | 1.23%    | 0.99%   |

And using the population of each economic strata, we get the following results *(number of people in lakhs)*. 

| Age Group | India 1A | India 1B | India 1C | India 2A | India 2B | India 3  |
| :-------- | :------- | :------- | :------- | :------- | :------- | :------- |
| 0 - 4     | 3.8      | 27.3     | 38.4     | 76.7     | 110.3    | 882.9    |
| 5 - 9     | 4.1      | 29.6     | 41.5     | 82.1     | 117.2    | 916.8    |
| 10 - 14   | 4.5      | 32.0     | 45.0     | 88.3     | 125.0    | 955.6    |
| 15 - 19   | 4.7      | 33.7     | 47.3     | 92.2     | 129.5    | 968.4    |
| 20 - 24   | 5.0      | 35.5     | 49.8     | 96.1     | 134.2    | 980.9    |
| 25 - 29   | 4.9      | 34.9     | 49.0     | 94.1     | 130.4    | 932.2    |
| 30 - 34   | 4.8      | 34.3     | 48.1     | 91.6     | 126.2    | 882.0    |
| 35 - 39   | 4.6      | 33.1     | 46.5     | 87.9     | 120.3    | 822.9    |
| 40 - 44   | 4.3      | 30.4     | 42.6     | 80.1     | 109.0    | 729.5    |
| 45 - 49   | 3.8      | 27.0     | 37.9     | 70.8     | 95.7     | 626.9    |
| 50 - 54   | 3.4      | 24.1     | 33.8     | 62.9     | 84.5     | 541.5    |
| 55 - 59   | 2.9      | 20.9     | 29.4     | 54.3     | 72.6     | 455.3    |
| 60 - 64   | 2.5      | 17.8     | 25.0     | 46.0     | 61.2     | 375.6    |
| 65 - 69   | 2.0      | 14.4     | 20.2     | 37.0     | 48.9     | 294.0    |
| 70 - 74   | 1.5      | 10.4     | 14.6     | 26.5     | 34.9     | 205.5    |
| 75 - 79   | 0.9      | 6.1      | 8.5      | 15.4     | 20.2     | 116.5    |
| 80+       | 0.8      | 5.7      | 8.0      | 14.5     | 18.9     | 106.6    |
