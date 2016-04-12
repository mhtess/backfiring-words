# Backfiring Experiments


## 1. Prior task

4/3/2016
n = 30
$1.50 
About 15 minutes.

1. How many Americans *have gone outside* before?
2. How many Americans do you think *went outside* yesterday?
3. Imagine a person who *went outside* yesterday? How often does he or she go outside?
4. Imagine a person who has gone outside before but did not do it yesterday. How often does he or she go outside?

### Analysis

BDA

1. d_1 ~ Beta (gamma_1, delta_1)
2. d_2 ~ Beta (gamma_2, delta_2)
3. d_3 ~ Log-Normal (mu1, sigma1)
4. d_4 ~ Log-Normal (mu2, sigma2)

One possibility: Use mu1 and mu2 as forced-choices in Language task.

## 2. Posterior (language) task


4/12/2016

n = 30
$0.80
About 8 minutes.



<!--
2AFC. Which is more likely?

3 conditions: Between-subjects

1. Prior task (no information, perhaps "Bob is a normal person".)
2. Observation (You will be given one bit of information about a person and be asked to choose between 2 alternatives about that person.  Pick whichever is more likely.  "Bob watched a space launch today.")
3. Conversation (Imagine you overhear the following from a conversation between friends. A: "Bob watched a space launch today.")

-->