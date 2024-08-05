#  Angular Notes/Cheatsheet and Learning Kit
![alt text](angular-header.png)

> Click :star: if you like the project. Pull Request are highly appreciated. Follow me [@thedevankit](https://twitter.com/thedevankit) for technical updates.


## Contents:
   + [Installation](#installing-angular-cli)
   + [Useful Commands](#useful-commands)
   + [Important Packages](#important-packages)
   + [Awesome Packages](#awesome-packages)
   + [Web Tutorials](#web-tutorials )
   + [Video Tutorials](#video-tutorials)
   + [Courses](#courses)
   + [Free Courses](#free-courses)
   + [Podcast for angular](#podcast-for-angular)
   + [Blogs](#blogs) 
   + [Projects with angular to contribute](#projects-with-angular-to-contribute)
   + [Angular common errors and features](#angular-common-errors-and-features)
   + [Trends in web technology](#trends-in-web-technology)
   + [Useful Code snippet](/UsefulCode)
   + [Code snippet for from validation](/validation/validation.md)
   + [Interview Questions](#interview)
   + [Angular Optimization and Hacks](#angular-optimization-and-hacks)
   + [Contributing](#how-can-i-support--contributing)
   
### Installing Angular CLI:

```shell
npm install -g @angular/cli
```

### Useful Commands:

The documentation for the command ist linked on the task description.

Parameters like `<NAME>` should be replaced with the actual names of the element.

<table>
<tr>
<td> Task </td>
<td> Command </td> 
<td> Popular Parameters </td>
</tr>
<tr>
<td>

[Create new Application](https://angular.io/cli/new)
</td>
<td>

```shell

ng new <PROJECT_NAME>
```
</td>
<td>

`--directory` Generates the new application in the specified directory.
</td>
</tr>
<tr>
<td>

[Run an Angular Application](https://angular.io/cli/serve)
</td>
<td>

```shell
ng serve
ng s (Run the angular app.)
ng s -o (Open angular app in browser.)
```
</td>
<td>

`--open`, `-o` Opens the application in the default browser.

`--port <NUMBER>`
</td>
</tr>
<tr>
<td>

[Generate Module](https://angular.io/cli/generate#module-command)
</td>
<td>

```shell
ng generate module <NAME> 
ng g m <NAME>
```
</td>
<td>

`--module`, `-m` Specifies the declaring ngModule
</td>
</tr>
<tr>
<td>

[Generate Component](https://angular.io/cli/generate#component-command)
</td>
<td>

```shell
ng generate component <NAME> 
ng g c <NAME>
```
</td>
<td>

`--change-detection`, `-c` Set the change detection strategy of the component. Possible values: `Default | OnPush`

`--display-block`, `-b` Adds the style `:host{display:block}`

`--project` Set the target module to add the component to.
</td>
</tr>
<tr>
<td>

[Generate Interface](https://angular.io/cli/generate#interface)
</td>
<td>

```shell
ng generate interface <NAME> <TYPE>
ng g i <NAME> <TYPE>
```
</td>
<td>

The `type` parameter defines part of the file name `name.type.ts`
</td>
</tr>
<tr>
<td>

[Generate Service](https://angular.io/cli/generate#service)
</td>
<td>

```shell
ng generate service <NAME>
ng g s <NAME>
```
</td>
<td>

`--skip-tests` Does not crete `.spec.ts` file.
</td>
</tr>
<tr>
<td>

[Generate Guard](https://angular.io/cli/generate#guard)
</td>
<td>

```shell
ng generate guard <NAME>
ng g g <NAME>
```
</td>
<td>

`--skip-tests` Does not crete `.spec.ts` file.
</td>
</tr>
</table>

## Angular update from 9 to 14 or latest 
```shell
ng update  @angular/cli@10  @angular/cdk@10 @angular/core@10 @angular/common@10 @angular/forms@10 @angular/router@10 @angular/material@10 --force

ng update  @angular/cli@11  @angular/cdk@11 @angular/core@11 @angular/common@11 @angular/forms@11 @angular/router@11 @angular/material@11 --force

ng update  @angular/cli@12 @angular/cdk@12 @angular/core@12 @angular/common@12 @angular/forms@12 @angular/router@12 @angular/material@12 --force


ng update  @angular/cli@13 @angular/cdk@13 @angular/core@13 @angular/common@13 @angular/forms@13 @angular/router@13 @angular/material@13 --force


ng update  @angular/cli@14 @angular/cdk@14 @angular/core@14 @angular/common@14 @angular/forms@14 @angular/router@14 @angular/material@14 --force
```
    
## Important Packages
### Bootstrap:
- Link:  (https://www.npmjs.com/package/bootstrap)
- Installation steps:
        Add Bootstrap js and bootstrap css in angular.json  at style and script.
### NGXS State Management Pattern + Library
- npm install @ngxs/store --save
- Documentation : https://www.ngxs.io
- Practical video tutorial : https://www.youtube.com/watch?v=4gkVp9OHpi0
### Ng Bootsttrap
- npm install --save @ng-bootstrap/ng-bootstrap
- Link : https://ng-bootstrap.github.io/#/home
### Components and Material Design for Angular
- ng add @angular/material
- Link:  (https://www.npmjs.com/package/@angular/material)

### NGX Scanner
   - https://github.com/zxing-js/ngx-scanner
   - Info: Add support for QR code scanner in web app.
### Jquery:
   - Installation steps:
        Add Jquery js before bootstrap js in angular.json  at style and script.
   - Link: (https://www.npmjs.com/package/jquery) 
### Multiple select 
   - npm install --save @ng-select/ng-select
   - https://www.npmjs.com/package/@ng-select/ng-select
### Image slider:
   - npm install angular-image-slider --save
   - Link: (https://www.npmjs.com/package/angular-image-slider)
### Angular Custom Scrollbar:
   - npm i -S ngx-scrollbar @angular/cdk
   - Link: (https://www.npmjs.com/package/ngx-scrollbar)
### Search Filters:
   - npm i ng2-search-filter --save
   - Link: (https://www.npmjs.com/package/ng2-search-filter)
### Loader on service call
   - npm i ngx-ui-loader
   - Link: https://www.npmjs.com/package/ngx-ui-loader
### ngx-skeleton-loader
   - npm install ngx-skeleton-loader --save
   - Used for: Loading content (better ux)
   - Link: https://github.com/willmendesneto/ngx-skeleton-loader 
### Toster :
   - npm install ngx-toastr --save
   - Link: (https://www.npmjs.com/package/ngx-toastr)
### ngx-face-api (face detection)
   - ng add ngx-face-api-js
   - Link: https://ngx-face-api-js-demo.stackblitz.io/
### Material Carusel
   - npm install @ngmodule/material-carousel --save
   - Link: https://gsr.dev/material2-carousel/
### Slider:
   - npm install --save ng5-slider
   - Link: (https://www.npmjs.com/package/ng5-slider)
### Emoji for angular
   - npm install @ctrl/ngx-emoji-mart
   - Link: https://www.npmjs.com/package/@ctrl/ngx-emoji-mart
   - Example link: https://github.com/ariang/EasyChat-scrummers
### spinner
   - npm install ngx-spinner --save
   - Link: (https://www.npmjs.com/package/ngx-spinner)
### ngx-gesture-password (Smart Lock)
   - Link: https://github.com/cipchk/ngx-gesture-password
   - Demo: https://cipchk.github.io/ngx-gesture-password/
### ReactiveFormsModule:
   - https://angular.io/api/forms/ReactiveFormsModule
### Google Recaptcha:
   - npm i ng-recaptcha --save
   - Link: (https://www.npmjs.com/package/ng-recaptcha)
### Angular Scroll Bar
   - npm i -S ngx-scrollbar @angular/cdk
   - Link: (https://www.npmjs.com/package/ngx-scrollbar)
### ngx-typed-text (Animation)
   - npm install ngx-typed-text --save
   - https://jghignatti.github.io/ngx-typed-text/
### Pagination:
   - npm install ngx-pagination --save
   - Link: (https://www.npmjs.com/package/ngx-pagination)
### Angular mat table crud
   -Link: https://github.com/marinantonio/angular-mat-table-crud
### NGX-Moment :
   - npm install --save moment ngx-moment
   - Link: https://www.npmjs.com/package/ngx-moment
   - used for: Using Moment JS as a Pipe Angular for date time 
### Unobtrusive Toaster
   - npm install ngx-toastit --save
   - Link: https://monolizard.github.io/ngx-toastit/
### ngx-beautiful charts
   - npm install ngx-beautiful-charts --save
   - Link: https://snowpu.github.io/ngx-beautiful-charts/
### Angular text input autocomplete
   - npm i angular-ng-autocomplete
   - Link : https://www.npmjs.com/package/angular-ng-autocomplete
   - Example Link: https://stackblitz.com/edit/angular-ng-autocomplete?file=src%2Fapp%2Fapp.module.ts
### CSS Toolkit:
   - Link: https://tachyons.io/
      A lightweight CSS Toolkit that is good for your angular application.
### Data-driven Form Validators
   - npm install ngx-validate
   - Link: https://github.com/EdenWoo/ngx-validate
### Json Server
   - npm install -g json-server <br>
  **To Run json server**
      1. json-server --watch db.json
      2. json-server --watch db.json --port 3004
      - Link: https://www.npmjs.com/package/json-server
### http-server-spa
   - npm install http-server-spa -g
   - Usage: http-server-spa <directory> <fallback> <port>
   - Link: https://www.npmjs.com/package/http-server-spa
### ngx-lightbox
   - npm install --save ngx-lightbox
   - Used for: Imgage pop up 
   - Link: https://www.npmjs.com/package/ngx-lightbox
### ngx-link-preview
   - npm i ngx-link-preview
   - Used for: To show link preview
   - Link: https://www.npmjs.com/package/ngx-link-preview
### Autocomplete user name (@ and username to get auto suggetions):
   - npm i ngx-input-autocomplete
   - https://www.npmjs.com/package/ngx-input-autocomplete
### PWA App 
   - npm i @angular/pwa
   - Used for: To add PWA feature in angular web app
   - Link: https://www.npmjs.com/package/@angular/pwa
### ng-simple-slideshow
   - npm i ng-simple-slideshow
   - Used for: Adding responsive image sliders/ Carousel
   - Link: https://www.npmjs.com/package/ng-simple-slideshow
### Image Slider2
   - npm i ng-image-slider
   - Demo Link: https://sanjayv.github.io/ng-image-slider/
   - Link: https://www.npmjs.com/package/ng-image-slider
### Google Charts
   - npm i angular-google-charts
   - Used for: To add google charts in web app
   - Link: https://www.npmjs.com/package/angular-google-charts
   - Demo: [Demo code](https://stackblitz.com/edit/angular-google-chart?file=src%2Fapp%2Fpie-chart.component.ts)
   - Documentation: [devrandom-official doc](https://www.devrandom.it/software/ng2-google-charts/additional-documentation/formatters.html) 
### Infinite scroll / Data load on mouse scroll
   - npm install ngx-infinite-scroll --save
   - Used for: To load data from apis on scroll
   - Link: https://www.npmjs.com/package/ngx-infinite-scroll
   - Demo: [ngx infinite scroll demo code](https://stackblitz.com/edit/ngx-infinite-scroll)
### @ngneat/spectator
   - `npm install @ngneat/spectator --save-dev`
   - Used for: Making more readable, sleek unit testing by getting rid of boilerplates
   - Link: https://ngneat.github.io/spectator/
   - Demo: [NgNeat used in unit testing](https://stackblitz.com/edit/angular-testing-spectator?file=app%2Fhello.component.spec.ts,app%2Fapp.component.ts)
### Webcam component
   - npm install --save ngx-webcam
   - Used for: To load data from apis on scroll
   - Link: https://www.npmjs.com/package/ngx-webcam
   - Demo: [ngx-webcam demo](https://basst314.github.io/ngx-webcam/?)

## Awesome Packages
>Packages to export data in different file type.
   1. [Export To Csv](https://github.com/javiertelioz/angular2-csv)
   2. [Pdfjs-viewer](https://www.npmjs.com/package/ng2-pdfjs-viewer)
   
## Web Tutorials 
1. https://angular.io/start
2. https://www.tutorialspoint.com/angular7/index.htm
3. https://angular.io/tutorial
4. https://www.thetechieshouse.com/
5. [angular-beginners-guide](https://malcoded.com/posts/angular-beginners-guide/)
6. [angular-forms-and-validations](https://angular-templates.io/tutorials/about/angular-forms-and-validations)
## Video Tutorials
1. [Mastering Advanced Angular](https://www.youtube.com/playlist?list=PLoC8Q0moRTSgYzCoo5fklvPT40KQVUorx)

2. [Angular 8 Tutorial by Codevolution](https://www.youtube.com/watch?v=0eWrpsCLMJQ&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ)

3. [Angular 7 Full Tutorial in Hindi](https://www.youtube.com/watch?v=SuZa2nv24HE&list=PL_qizAfcpJ-MTpfAPtayiKeJ0OexCcxvh)

4. [Angular University](https://www.youtube.com/channel/UC3cEGKhg3OERn-ihVsJcb7A)

5. [Angular Crash Course - 2019](https://www.youtube.com/watch?v=Fdf5aTYRW0E)

6. [kudvenkat](https://www.youtube.com/channel/UCCTVrRB5KpIiK6V2GGVsR1Q)

7. [Angular Tutorial for Beginners: Learn Angular from Scratch | Mosh](https://www.youtube.com/watch?v=k5E2AVpwsko)

8. [Angular Material Tutorial](https://www.youtube.com/watch?v=bV8emCBmFHk&list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU)

9. [Learn Angular 2,4,5 Online Training](https://www.youtube.com/watch?v=BGaPNvay5e8&list=PLd3UqWTnYXOk9-_CYxIy-Vayx3iV55QDt)

10. [Angular Best Practices](https://www.youtube.com/playlist?list=PLLHU4eOoZH8rUC9cr-p9SkAAra7RuGwG7)

11. [Advanced Angular tips and tricks](https://www.youtube.com/watch?v=vyiyJCLlGwo&feature=youtu.be)

12. [How to Unit Test in Angular](https://www.youtube.com/watch?v=c57llB8QA2E&t=2s)

13. [How E2E Tests can drive Angular Testing Approach](https://www.youtube.com/watch?v=qdwcmSOfdZY&t=254s)

## Courses

1. [Angular and NodeJS - The Mean Stack Guide](https://www.udemy.com/course/angular-2-and-nodejs-the-practical-guide/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-rJw2OvTgG9qeT8xdaxcRPQ)

2. [Shaping up with AngularJS](https://www.pluralsight.com/courses/angularjs-get-started?clickid=Xj8ySQXa4xyJW5zwUx0Mo3QzUkn2vHxeFz3s1w0&irgwc=1&mpid=1419154&utm_source=impactradius&utm_medium=digital_affiliate&utm_campaign=1419154&aid=7010a000001xAKZAA2)

3. [Angular 8 The Complete Guide](https://www.udemy.com/course/the-complete-guide-to-angular-2/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-VIh0RH5MxSrf2kWMlXlH2A)

4. [Angular front to back](https://www.udemy.com/course/angular-4-front-to-back/)

5. [The Complete Angular Course: Beginner to Advanced ](https://www.udemy.com/course/the-complete-angular-master-class)

## Free Courses
 1. [Angular free cource in Edyoda](https://www.edyoda.com/course/1227?episode_id=113)

## Podcast for angular
   1. [Angular Air](https://angularair.com)
   2. [Adventures in Angular](https://devchat.tv/adv-in-angular/)
    
## Blogs 
   1. [Build A Real World Beautiful Web APP with Angular 8](https://medium.com/@hamedbaatour/build-a-real-world-beautiful-web-app-with-angular-6-a-to-z-ultimate-guide-2018-part-i-e121dd1d55e)   
   2. [Angular Blogs](https://blog.angular.io)
   3. [Adv-in-Angular](https://devchat.tv/adv-in-angular)
   4. [Sitepen](https://www.sitepen.com/blog/category/angular/)
   5. [Principles For Better, Cleaner Code](https://dev.to/x-team/6-principles-to-for-better-cleaner-code-1j1j?utm_source=digest_mailer&utm_medium=email&utm_campaign=digest_email)
   6. [Learn Angular 8 Step By Step in 10 Days ](https://www.c-sharpcorner.com/article/learn-angular-8-step-by-step-in-10-days-day-1/)
   7. [angular-cheat-sheet](https://medium.com/@onejohi/angular-6-cheat-sheet-b36e04bf008a)
   8. [Crud operation using angular 8/9](https://www.techiediaries.com/angular/angular-9-8-crud-example-and-tutorial/)

## Angular Quick Cheatsheet
   1. [angular-cheat-sheet](https://malcoded.com/angular-cheat-sheet/)
   2. [Angular-PWA](https://www.altexsoft.com/blog/engineering/progressive-web-apps/)
   
## Projects with angular to contribute
   1. [NGX-Admin](https://github.com/akveo/ngx-admin)
   2. [Angular google maps](https://github.com/SebastianM/angular-google-maps)
   3. [NGX-charts](https://github.com/swimlane/ngx-charts)
   4. [Storybook](https://github.com/storybookjs/storybook)
   5. [Angularfire2](https://github.com/angular/angularfire2)
   6. [Angular Material](https://github.com/angular/components)
   7. [Angular-chat-sentiment-analysis](https://pusher.com/tutorials/angular-chat-sentiment-analysis)
   8. [Music-web-player](https://github.com/naveedgol/music-web-player)

## Tools to combine with your angular application ()
   1. [GraphQL](https://www.apollographql.com/docs/angular/)
      - Great for big scope application and multiple endpoints.
   2. [RSCSS](https://rscss.io)
      - A styleguide for creating styles, made by a filipino github contributor.
      
## Trends in web technology
   1. [Tech-trends-showdown-react-vs-angular-vs-vue](https://zerotomastery.io/blog/tech-trends-showdown-react-vs-angular-vs-vue/?utm_source=medium&utm_medium=react-angular-vue)   
   2. [AngularToVue](https://tpalmer75.github.io/AngularToVue/)
   3. [From-vue-to-angular](https://www.codegram.com/blog/from-vue-to-angular/)
   
## Angular common errors and features
   **(How to solve)**

 1. [Angular 7 app getting CORS error from angular client](https://stackoverflow.com/questions/53473754/angular-7-app-getting-cors-error-from-angular-client)
 2. [Angular cors error](https://www.google.com/search?q=cors+angular+7&oq=cors+angular+&aqs=chrome.1.69i57j0l5.4479j0j4&sourceid=chrome&ie=UTF-8)
 3. [Angular-jwt](https://angular-academy.com/angular-jwt/)
 4. [Angular-forms-and-validations](https://angular-templates.io/tutorials/about/angular-forms-and-validations)
 5. [Responsive bootstrap tabs](https://codepen.io/devben/pen/EaLdeJ?editors=0010) 
 6. [Uploading-files-in-angular2](https://nehalist.io/uploading-files-in-angular2/) 
 7. [Setup-a-proxy-for-api-calls](https://medium.com/better-programming/setup-a-proxy-for-api-calls-for-your-angular-cli-app-6566c02a8c4d?) 
 8. [404-error-occur-when-i-refresh-through-the-browser](https://stackoverflow.com/questions/35284988/angular-2-404-error-occur-when-i-refresh-through-the-browser) 
 9. [How-to-get-route-path-parameters-in-non-routed-angular-components](https://medium.com/@tomastrajan/how-to-get-route-path-parameters-in-non-routed-angular-components-32fc90d9cb52) 
 10. [48-answers-on-stack-overflow-to-the-most-popular-angular-questions](https://www.freecodecamp.org/news/48-answers-on-stack-overflow-to-the-most-popular-angular-questions-52f9eb430ab0/) 
 11. [angular-2-google-docs-viewer](https://stackoverflow.com/questions/44367577/angular-2-google-docs-viewer) 
 12. [encrypt-the-string-in-typescript-and-decrypt-in-c-sharp](https://stackoverflow.com/questions/41671267/encrypt-the-string-in-typescript-and-decrypt-in-c-sharp-using-advanced-encryptio) 
 13. [anchorscroll-on-static-page-with-angular](https://stackoverflow.com/questions/54554991/anchorscroll-on-static-page-with-angular-7-x-x)
 14. [using sqlite as database for angular v7](https://stackoverflow.com/questions/55438664/using-sqlite-as-database-for-angular-v7)
 15. [What is the proper use of an EventEmitter](https://stackoverflow.com/questions/36076700/what-is-the-proper-use-of-an-eventemitter)

## Interview 
   1. [Angular Interview Questions](https://hackr.io/blog/angular-interview-questions)
   2. [50-top-angular-interview-questions](https://dzone.com/articles/50-top-angular-interview-questions-amp-answers)
   3. [Top-angularjs-interview-questions](https://www.edureka.co/blog/interview-questions/top-angularjs-interview-questions-2016/)
   
## Angular Optimization And Hacks
   1. Creating Modules for lazy loading
      Generates Module, component and route for the component.
      
      ```
         ng generate module --module aap.module --route component component_name
      ```
      
   2. Optimization of angular app:
      Angular apps can be optimized by removing the unused modules and references.
      
      That can be done by setting sourceMap: True and NameChunks: true      
      Using **source-map-explorer** we can verify the bundle size and optimized it.
          `npm i source-map-explorer@1.7.0`         
          
      Details: https://www.npmjs.com/package/source-map-explorer/v/1.7.0
      
      How to use: source-map-explorer foo.min.js(generated js file)
      - On Top of this we have 
         - https://www.npmjs.com/package/@ngx-builders/analyze
            **Run the source-map-explorer with zero configuration.**
         - ng add @ngx-builders/analyze --project={projectName}
      
   3. **NGX-Quick Link**
      It provides router preloading strategy which automatically downloads the lazy-loaded modules associated with all the visible links on the screen.

   4. **Angular Project Architecture**
      - [angular-folder-structure-examples](https://github.com/jcyovera/angular-folder-structure-examples)

## How can I support / Contributing

Please refer to the [contributing](/CONTRIBUTING.md) file.
