---
layout: article
permalink: /hiring-phases/reviewing-resumes/usas-for-rr/
section: hiring-phases
title: Using USA Staffing for Resume Review
sidenav: hiring-phases
phase: reviewing-resumes
sub-phase-order: 030
intro: If you're using USA Staffing to support your hiring action, you can bulk export applicants and grant SMEs access to applicant resumes.
---

<p class="usa-intro">
  {{ page.intro }}
</p>

## Updating Applicant Resume Reviews in Bulk

This is the current preferred method in USA Staffing in conjunction with the SME-QA supported Resume Review Tool. It is done via *csv* download and upload. It is still recommended to use this process even if you are not using the SME-QA supported Resume Review Tool.

**Note:** To ensure the csv file uploads back into USA Staffing as a valid file format, do not add or remove any columns to the file that will be imported to USA Staffing.

## Exporting Applicant Lists as *csv* Files

As the HR specialist you can save time by exporting and importing lists to update applicant scores in bulk. You can also export applicants lists to indicate to SMEs which applicants they need to review.

### Creating an Active Applicant List

First create a list that will have only active applicants on it, we will use this for our bulk updates:
1. Navigate to the **Applicant Overview** page
2. Select **Create List** from the **Applicant Overview** page as shown below:
    [![USA Staffing create list](/assets/img/usas/applicant-list-overview-create-list.png)](/assets/img/usas/applicant-list-overview-create-list.png){:target="_blank"}
3. Filter by **Status (RSC)** with only the **PA** option selected; all other filters aside from the job series (no action necessary) and **PA** should be inactive.
    [![USA Staffing filter only applicants with a Status (RSC) of PA](/assets/img/usas/applicant-list-select-pa.png)](/assets/img/usas/applicant-list-select-pa.png){:target="_blank"}
4. Save the list as *PA Applicants*
    [![USA Staffing save applicant list](/assets/img/usas/applicant-list-save-list.png)](/assets/img/usas/applicant-list-save-list.png){:target="_blank"}
    [![USA Staffing name applicant list](/assets/img/usas/applicant-list-rename-pa.png)](/assets/img/usas/applicant-list-rename-pa.png){:target="_blank"}

### Exporting from USA Staffing

This is how you will retrieve the active applicant lists in the form of a *csv* to input status and score updates on each applicant before uploading it back into USAS.

This step will need to be done at the beginning of _each stage_ (e.g. _resume review_) for any results you want to bulk import. This assumes you will use a process outside of USA Staffing to collect SME feedback (e.g. a resume review tool, excel spreadsheets, CSV files, etc).

1. Click on the **Saved List** item from the **Applicant Overview**, select *PA Applicants* (the list we created and saved earlier).
    [![USA Staffing saved lists in the Applicant Overview](/assets/img/usas/applicant-overview-saved-lists.png)](/assets/img/usas/applicant-overview-saved-lists.png){:target="_blank"}
2. Export the applicant list by clicking on the *settings-cog* icon, then **Export**, and then export the list with the following settings:
    - **Export Applicants** should be set to **Filtered Applicants**
    - Be sure that only the _current assessment_ is selected (i.e. *Resume Review*) unless instructed otherwise.


    [![USA Staffing export a list](/assets/img/usas/applicant-list-pa-export-button.png)](/assets/img/usas/applicant-list-pa-export-button.png){:target="_blank"}
    [![USA Staffing set export properties](/assets/img/usas/applicant-list-export-detail-view.png)](/assets/img/usas/applicant-list-export-detail-view.png){:target="_blank"}
3. You will see a notification that the list is being generated.
    [![USA Staffing export confirmation dialog](/assets/img/usas/applicant-list-export-confirmation.png)](/assets/img/usas/applicant-list-export-confirmation.png){:target="_blank"}
4. After a short period of time you should see a notification in your messages that the export was completed successfully
    [![USA Staffing download ready notification](/assets/img/usas/applicant-list-successful-export-save.png)](/assets/img/usas/applicant-list-successful-export-save.png){:target="_blank"}
5. Click on this to download a *csv* file containing the applicants and empty ratings. Later, you will use this file to import the SME results back into USA Staffing.
6. Rename this file to something appropriate for your hiring action. (For this example, we will call it the "applicant list.")

This _applicant list_ is what will be used to input SME responses and upload it back into USA Staffing. Do not add or remove any columns/fields. The columns you will would see in the downloaded *applicant list* *csv* are:

* Vacancy ID
* Assessment ID
* Application ID
* Application Rating ID
* Applicant Last Name
* Applicant First Name
* Applicant Middle Name
* Application Number
* Application Combination
* Assessment Rating
* Minimum Qualifications Rating
* USAJOBS Applicant GUID (This may not be present.)


## Giving SMEs Access to Resumes

Even though the SMEs will not be putting scores directly into USA Staffing, they will still need to access applicant resumes. This section covers how to grant SMEs limited access to resumes.

* **Generate** a stored list containing all the applicants that an SME pool should be able to see and save it as _Resume Review Stored List_
* Select **Create Review**
* Set the **Review Name** to be _Resume Review_
* Set the **Due Date** to when Resumes should be finished being reviewed
* Ensure the **Stored List** section has the _Resume Review Stored List_ listed
* After Saving this **Review** add all SMEs in the **Review Assignments** tab
* Un-check **Return to HR** for all SMEs
    * This will prevent the SMEs from ending the review process for all other SMEs.
* Expand each SMEs information and change the **Permissions** field to **View only**
* Save the review
* Send the review

This will give the SMEs access to all the resumes that were selected.

## SME Feedback

The process of gathering SME Scores can be done with tooling or without, but should always result in a single pass/fail code from the SMEs. How that score was arrived at must be uploaded to the case file in addition the uploaded **applicant list** csv file.

The suggested method for collecting SME feedback is using the SME-QA resume review tool, though you could also enter NOR codes manually into this file.

To use the SME-QA Resume Review Tool, reach out to the SME-QA Team early in the process so your review can be set up.

### Manual Feedback
_This method assumes that you are not using the SME-QA Resume Review Tool._

You must divide the list of applicants manually and send each applicant to two different SMEs along with instructions on how to conduct a resume review.

1. Create an extra copy of the **applicant list** to track SME feedback.

2. Review SME feedback to ensure everything was filled out correctly.

3. Confirm there were no applicant reviews missed and that the correct roles were reviewed for each applicant.

4. Send back any mistakes to appropriate SMEs and request prompt corrections.

5. Add extra columns to the applicant list copy for each SME and track each SME's reviews.

6. Resolve tie breakers as quickly as possible when two SMEs disagree

7. Update the **Minimum Qualifications Rating** column in the **applicant list** file where two SMEs agree or with the tie breaker's score.
   * If at least two SMEs gave the applicant "move forward": `ELSM`
   * If at least two SMEs gave the applicant "do not move forward": `IQSM`
   * There should only be two reviews unless a tie breaker was needed.
*
8. Gather all the SME feedback files and the copy of the applicant list made to track the SME feedback for easy upload to USA Staffing.

> If two SMEs disagree on an applicant status then a tie breaker is required. This can be done by having a third SME review the resume.


## Importing the Results into USA Staffing

After you have exported the *applicant lists* and filled out the results, you can then import it back into USA Staffing with a few clicks rather than updating each applicant one at a time.

1. Ensure that saved applicant ratings file format is valid.
  * No column names have been changed
  * *All* applicants have values in the **Minimum Qualifications Rating** column.
  * There should be no values in the **Assessment Rating** column.
  * No values aside from those in the **Minimum Qualifications Rating** column have been changed or added.
  * Ensure the **Minimum Qualifications Rating** column values are valid *NOR codes*
  * Every applicant for this stage is present.
  * File type is _csv_.


2.  Click on the **Saved List** item from the **Applicant Overview** page, and  select the previously created list *PA Applicants*.

3.  Click on the *settings-cog* icon and click **Import**.

4.  Select the file with the saved applicant ratings.

5.  Click **Import**.

6. Upload additional files to the case files (Any files used to support how the scores were arrived at. These usually include SME justifications and feedback.)

7. Send out NOR letters to notify applicants who are moving forward to the interview assessment or not based on resume review. Sample NOR letters are available in the Resume Review toolkit.

All applicants in the _applicant file_ must have appropriate NOR codes in the **Minimum Qualifications Rating** column and no values in the _Assessment Rating_ column. All applicants for the stage must be present.