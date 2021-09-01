# Requirements

## Software Requirements

## Vision

- The vision of Travel Bucket List Generator helps you pick countries you want to visit. It will allow you to save your favorite countries, recipes to try until you get to travel and comments about your trip planning.

- The pain point this solves is to scratch the travel itch that COVID restrictions have caused.

- This can be used well after COVID as way to research a country you are interested in visting. It can give you a little information about the country, a few foods/recipes to try, currency, travel documentation needed, some environmental concerns, travel restrictions. You can even save comments about your planning.

## Scope (In/Out)

- In
  Search for country(ies) to get more information/start a Bucket to add to Bucket List(account).
  Shows random Buckets of countries to try.
  Offers user ability to Like, Add, Get More Info on Buckets. Must login to Add or Like.
  Can add, edit, delete comments.
  
- Out
  We will not make an IOS app!

## MVP vs Stretch Goals

- MVP
  About Us Page
  Search for a country & add it to bucket list (saves to mongo)
    Backend will get info as a list from API to display
    User can click on an item to see more info on this more info there is an ADD to LIST button to add to bucket list. Once added, will go back to list
    Search box for country can be cleared to resetsearch.
  View bucket list items as a list of cards?? Or somethinglike that.
  Select one to see more info about that location youadded
    Lots of this below is based on what we can get fromthe API.
    Carousel of Pics (5-10)
    Fun facts are displayed
    Population Info
    Dims of country
    Flag of country
    Buttons/Icons related to:
      Food
      Environmental
      Travel
        Language/Current (voltage) socket
        Docs needed
        Medical needs (vaccines)
        Currency/Conversion
      Governmental Structure
  
- Stretch
  Travel info, vaccines, restrictions, visa/docs needed etc
  Auth0 (login/logout)

## Functional Requirements

- A user can search for a country and see information, foods and weather/air quality data for that country.

- A user can add, delete, update and save their Bucket List

- A user can add notes to their Trip Bucket to help with planning.

## Data Flow

  A user visits the site, if the user is not logged in, a selection of random Trip Buckets will appear. If the user would like to add the Bucket to their Bucket List, they are routed to the Login Page. Then the user can add the Bucket.

  The user can also Search for a Country. The search will show food, weather/air quality, advisories and possible environmental concerns. The user can add the Bucket to their List, add/update/delete notes, delete Buckets or delete entire Bucket Lists.
  
  The user can visit the About Us page to see information on the site developers.

## Non-Functional Requirements

- Security

  We are using Auth0 to secure authentication to the site. This will ensure users are the only authorized entrants into their Bucket Lists to review notes, see trip plans, etc. Auth0 is a trusted security measure, so we feel confident that our users will feel secure with our site.

- Scalability

  We could keep adding information points to our sites, and keep finding APIs that find another few tidbits of data. However, we are going to limit our scope of items to <enter amount of items here> to ensure the users are not overwhelmed by their user experience when visiting our site. We can definitely add many more APIs and endpoints, however, we would like to offer our users a clean, well presented, uncluttered looking site.
