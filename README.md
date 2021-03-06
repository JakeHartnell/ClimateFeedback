ClimateFeedback
===============

[ClimateFeedback.org](http://climatefeedback.org/) is an effort to 'improve the scientific accuracy in the coverage of climate change and provide readers and authors with in situ feedback from scientists.' In their own words:

> We propose to experiment a novel approach to help Internet users from the general public to key policymakers evaluate how scientifically sound are the claims they read about climate science. A primary goal is to encourage better initial reporting through a consistent, repeated process of collaborative evaluation.

At Ecohack SF we have begun work on sketching out what an implementation of this could look like. The goal of this is ultimately providing not only correct information, but also a form of accountability.

We also want to incentivize scientists to do the work of creating these annotations (though saving the planet is certainly the best reason). We are exploring ideas around:
* Leaderboards: see who's creating the best annotations, with the goal of providing acknowledgement for really good contributors. 
  * Could potentially explore using something like GitTip?
* Profiles

We also want to promote discussion which will lead to accountability. 
* Identifying sources of misinformation. Commonly cited articles that are misleading or wrong.
* We can highlight trending articles.
* We can focus on types of misinformation that are most prevalent.
* We can allow users to easily share the findings (through direct linking).
* Visualizing data in interesting ways.
 * Misconceptions over time.
 * Breakdown of what is most misunderstood. We could visualize how many annotations have a certain tag with a pie-chart for example. We can visualize the ontology.
* Current annotations feed. 

## Hypothes.is Requirements
This will be powered by [Hypothes.is](https://hypothes.is), and *might* potentially run it's own annotation server (this could be easier than building a specific public groups feature for example). It is important that people annotating and moderating the annotations have the right credentials in climate science (PhDs and PhD Candidates). In other words we need to control access to comment. This could come in a number of forms.
* Moderation workflow: anyone can create annotation, but moderators PhDs and PhD candidates can approve them.
* Some form of invite only account creation. This maybe in the form of an authorization code that people need to create an account. The only way to get an authorization code is to email the projects leaders. It might be quicker to build something like this. 
* A public group feature.

An MVP version might work like this:

1. User clicks link for information on contributing.

2. There is information on the process and a form for them to fill out.

3. The email goes to site admins who can accept or reject the application.

4. If accepted, they user is given an activation code and a link to download the extension.

5. They are taken to a welcome page that explains both how to use the annotation software and how climatefeedback.org opperates.

6. They can now make annotations on articles. 

##### Profiles
It might be important to show the credentials of the scientists annotating. We should have a talk with them about what information they would like to include in their profile. For example, the profile might contain links to credentials such as published papers, ORCID IDs, Google Scholar profiles, etc. We need to have some way for them to provide this information in their profile.

##### Direct linking
For people who don't have the extension, direct linking will provide an important way for them to be able to see the annotations of the climate scientists. Articles could be featured on the home page of ClimateFeedback.org and clicking on the article could take the reader to that page with the extension loaded.

##### Embedded annotations
Part of the purpose of this is to generate conversation, and help journalists due a better job of climate reporting. Embedded annotations can help with this by allowing people to reuse the annotations in additional responses to the articles such as blog posts.

##### Multi-store
Eventually, it would be great if we could make it easy for people to subscribe to these annotations in hypothes.is. However, this wouldn't be needed if climatefeedback.org was a public group on hypothes.is rather than hosting its own instance.

## Frequently Asked Questions
Answers from http://climatefeedback.org/FAQ.html

##### There is a vast amount of information out there, how are you going to select what to evaluate?
We will focus on pieces that play a leading role in shaping the debate around climate change. We will start with a limited number of articles and increase this number as our pool of contributors grows so as to always ensure that we can produce collective contributions of high quality.

##### Who is your intended audience?
Anyone interested in climate science and evidence-based reasoning. We expect our primary audience to be mostly composed of:
* scientists, whether expert in climate or in another field.
* University students.
* Journalists.
* Politicians who care about factual accuracy.
* Activists who want to base their advocacy on scientific ground.

##### Who gets access to comment?

Everyone will be able to see the annotations. Climate Feedback animates a channel of annotations for which contributions are made by active publishers in climate science. It is also possible for anyone to annotate using the public channel of hypothes.is.

##### Scientists are busy people. Will they contribute their time to this project?

Some scientists already devote time to share their expertise by blogging and commenting news article for instance. We will strive to make Climate Feedback an effective way for them to communicate climate science and promote their research and outreach productions. Annotating article also offer the possibility to create small contributions for a small time commitment.

##### How will people be aware of the annotations and actually read them?

We will write short blog posts summarizing scientists findings about the selected articles and invite people to share annotations on social media. Hypothes.is allows to visualize the article with the annotation without installing the web browser add-on, so people will be able to access the annotated article via just one click.

##### How will you avoid annotation to devolve into just another form of the inane argumentation found in most comment sections?

The first part of the answer is to have a group with identified expertise and focus on the 'simple' task of evaluating the factual accuracy of articles. The second part is to have participants respect certain rules that warrant constructive contributions. For instance, participants will be required to back their claims with relevant sources. 

