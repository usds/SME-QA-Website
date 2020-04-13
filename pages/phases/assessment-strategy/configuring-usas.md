---
layout: article
permalink: /hiring-phases/assessment-strategy/configuring-usas/
section: hiring-phases
title: Configuring USA Staffing for the SME-QA Process
sidenav: hiring-phases
phase: assessment-strategy
sub-phase-order: 010
intro: Set up USA Staffing to facilitate and support the SME-QA process.
---

<p class="usa-intro">
  {{ page.intro }}
</p>

In order to facilitate the SME-QA process in USA Staffing, use Manual Assessments when the vacancy is set up. If the Manual Assessments option isn't available to you, contact your USA Staffing Office Administrator.

## Creating Manual Assessments

In order to create manual assessments, you must have an active **vacancy**. You can create new manual assessments by creating new assessments and selecting type **manual**. This will allow for manual scoring which is critical for the SME-QA process.

Once this is done, un-check the **Rating column** from any assessments that should be pass/fail _only_ and do not contribute to the final category rating (i.e. Resume review in the standard SME-QA process).

### Category Ratings

This process has used the following rating categories:

* Qualified - 70 points
* Well Qualified - 85 points
* Best Qualified - 100 points

The SME-QA process assumes that there is:

* One resume review without score (the resume review is pass/fail)
* Two interviews (both interviews are pass/fail and are used to determine category ratings) with the following details:
    * Passing score of 1
    * Maximum score of 2
    * Any applicant who does not meet the requirements will receive an ineligible NOR code and _no score_

Scores will then be transmuted automatically by USA Staffing as follows:

* Any applicant with two 1s receives 70 points.
* Any applicant with one 1 and one 2 receives 85 points.
* Any applicant with two 2s receives 100 points.


### NOR Codes
Confirm which NOR message codes you will use for this process. We suggest the following (you may have to contact your TAS operator to add/enable these):

* **IQSM - IN:** You are ineligible for this position because subject matter experts have determined you do not meet the required qualifications as described in the job announcement.
* **ELSM - PA:** Subject matter experts have reviewed your resume for evidence of the required qualifications and have determined you should move on to the next phase of the process. You will be scheduled for one or more interviews to further assess your qualifications.
* **ELSN - IN:** Based on the results of your interviews, subject matter experts have determined that you meet the qualifications for this position. However, you were not in the highest qualification category, or there are other applicants who, by law, must be considered before your application, such as displaced federal employees and certain veterans. Therefore, your application will not be referred to the selecting official at this time. If additional candidates are needed, your application may be referred at a later date.
* **ELSR - PA:** Based on the results of your interviews, subject matter experts have determined that you meet the qualifications for this position. You have been referred to the hiring manager for selection consideration and may be contacted for additional interviews.


### SME-QA Standard Example
This assumes the standard SME-QA set up, using one *Resume Review* step and two *Interview* steps:
1. In the Vacancy's **Assessment Package** page, go to the **Assessment Plan** tab and click the **New Assessment** button.
    ![USA Staffing create a new assessment](/assets/img/usas/assessment-package-new-assessment.png)
    
2. In the newly created **Assessment** tab, create and name assessments of type **manual** for each stage:
    ![USA Staffing create a manual assessmnent](/assets/img/usas/assessment-creation-manual.png)
    The specifics are as follows:
    1. *Resume Review*:
        - **Assessment Type**: Manual
        - **Minimum Raw Score**: 0
        - **Maximum Raw Score**: 1
        - **Scoring**: Do not standardize scores
        ![USA Staffing create a manual assessment for Resume Review](/assets/img/usas/assessment-create-resume-review.png)
    2. *Interview 1*
        - **Assessment Type**: Manual
        - **Minimum Raw Score**: 1
        - **Maximum Raw Score**: 2
        - **Scoring**: Do not standardize scores
        ![USA Staffing create a manual assessment for interview 1](/assets/img/usas/assessment-create-interview1.png)
    3. *Interview 2*:
        - **Assessment Type**: Manual
        - **Minimum Raw Score**: 1
        - **Maximum Raw Score**: 2
        - **Scoring**: Do not standardize scores
        ![USA Staffing create a manual assessment for interview 2](/assets/img/usas/assessment-create-interview2.png)
        
3. In the **Assessment Plan** tab, un-check the **Rating** column from the **Resume Review** assessment.
    ![USA Staffing unchecked resume review assessment rating](/assets/img/usas/assessment-set-up-complete.png)
    
4. In the **Categories** tab, ensure you have the following categories:
    - *Best Qualified*: **Final Rating Cutpoint**: 100
    - *Well Qualified*: **Final Rating Cutpoint**: 85
    - *Qualified*: **Final Rating Cutpoint**: 70
    ![USA Staffing Category Ratings for SME-QA](/assets/img/usas/assessment-categories.png)

5. Create the remainder of the vacancy as usual, excluding an occupational questionnaire, which is not used in the traditional SME-QA process.

6. Unless you plan on sending each participating SME a batch download of all resumes submitted and having them conduct their review in an external tool (excel or the Resume Review Tool), create a USA Staffing account for each SME.

> While the **Resume Review** will not have any scores, the USA Staffing system currently requires that you allow for a score of **0** or **1**.
