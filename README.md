# UFOs

### Purpose

The purpose of this project was to design a webpage to help display
information pertaining to UFO sightings. Included on the site is a table that
lists all of the reported sightings available. Since there is a breadth of
information available, we have included filter criteria to narrow down the
information.


### Technologies Used

There were a few technologies that were utilized in the creation of this
project. To create the framework for the site, we utilized HTML. To add more
aesthetics to the site, we utilized CSS Bootstrap, particularly for the body
and button buttons. Javascript was used to make the table and filters dynamic.


The D3 library was utilized in order to identify input values and actions on
the site, which will trigger the filter functions. Five filter fields were
added to the site page where data can be input. If a field is filled out, it
will trigger the 'updateFilters' function.

The 'updateFilters' function creates variable for all five fields and creates
a dictionary type object which contains the id, which is the column name on
the data table, and value, which is the value input into the field. If data
was inputted, the object is added to the filters array which is then fed into
the 'filterTable' function.

In the 'filterTable' function, the filters array is fed through a for loop
which will filter the table using the appropriate column if it matches the
inputted data. The table will apply every filter entered and be displayed on
the site.

### Future Recommendations

There are a few items that I would change to make immprovements to this page.
First, I would also add in another filter field for duration. Some folks may
have an interest in that particular detail.

Next, rather than refreshing the
page, I added an undo filter button which clears the filter array as well as
resets to the original unfiltered table. The only limitation to this was that
I was unable to figure out how to clear the data entered in the inputs as
well. This would be an additional measure that I would add to the site.

Lastly, I re-purposed the filter table button into a Re-apply Filter button,
in the event a person cleared the data accidentally and wanted to use the same
filter as before. I would also add a message if an empty table were yielded
saying that data is not available and use a different criteria.
