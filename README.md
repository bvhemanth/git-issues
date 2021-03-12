# Issues

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.5.

### live link

https://git-issues-sigma.vercel.app/


### steps to follow

step 1: use `git clone` to download project 

step 2: then go to folder

step 3: `npm i`

step 4: `sudo ng serve --open`

now the project is ready to see on `browser`



"dafault list page with 25 records and increament of 25 when you react scroll end , if you click on any card it ll redirect to particular issue details page"



# test cases

by defaul it ll show list page with approproate testcases

>ng test --code-coverage  


tested with two different pages with two ways

## test issues list page 

Give fdescribe which are related to list page

issues-list.component.spec.ts

issues.component.spec.ts

> ng test --code-coverage

then 

## test issue details page

Give fdescribe which are related to details page

issue-details.component.spec.ts

> ng test --code-coverage 