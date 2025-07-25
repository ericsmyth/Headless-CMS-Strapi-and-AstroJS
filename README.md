# WIP - Currently a basic headless CMS setup for Strapi and AstroJS.

Once Strapi is initialized you will need to setup a few Collection Types under Content-Type Builder (Article, Author, Category).
Follow the screenshots below for field types. 

![author example](images/author.png)
![category example](images/category.png)
![article example](images/article.png)

After the Content-Types are set, go ahead and create a couple test articles in Strapi.

Then open permissions under settings->users&permissions->roles->public. Select all under articles, category, author.

![permissions example](images/permissions.png)

CD into both backend & frontend directories and run

```
npm run dev
```







