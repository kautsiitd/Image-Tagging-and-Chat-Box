# Introduction

This repo contains [templates](templates) for adding multiple tags in Images and associate chat with each tag separately. You can find related [css](static/kauts/css) and corresponding [js](static/kauts/js) files in [static](static) folder. Required [png files](static/kauts) is also there in [static](static) folder.

# Working Flow

Here is the basic flow chart:

![alt tag](Readme%20Images/Overall_Flow_Chart.png)

Here *See Tags* is just to show an entry point, from where collection of all projects will open. Here each project can have multiple photos in it. And each photo can have multiple tags. And there is a chat associated with each tag.

![alt tag](Readme%20Images/Tagging_FlowChart1.png)

Here you can see visuals of How multiple projects can be accessed from See Tags button on left side. And photos inside a particular tag can be accessed from a particular project Or you can also access all photos using See All Photos button. I have used ***Pinterest type stacking*** while displaying multiple photos here to use space efficiently. And there are 3 Types of tags on a photo I have used:

  * **Light Blue** implies tags which have unseen comments
  * **Dark Blue** implies selected tag for which comments are shown on right
  * **Red** implies old tag

![alt tag](Readme%20Images/Tagging_FlowChart2.png)

You can also select a tag and add a comment from right side. Other than that new tags can also be added by just clicking any where on Image, and then just add some comment or description along with tag in popped up window.

# Motivation

This additional feature was required to increase interaction between vendors/professionals and users because in description for images it is not possible to include everything that would satisfy every query for all customers. So this additional plug-in was required where a user can ask question on any existing tag or may create new tag and ask questions through app then professionals need to reply their queries from their dashboard and this was main requirement for doing this project.

# Need help/Issues

If you find some issue or require some help then you can report about it in [Issues](https://github.com/kautsiitd/Image-Tagging-and-Chat-Box/issues).
