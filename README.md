# Includer js 

A Javascript client-side dom parts includer

---

__It's a simple client-side javascript system that, through an http request or fetch request, loads content and html pages into a web page.
Perfect for small projects, apps, and basic realizations on node.js__<br>
Do you like this project? we would like to have your appreciation: click on the ★ above this page. Thanks :)

---

### Download:


Version Http Request: [open deployed versions](https://github.com/ShapeGroup/jsIncluder/tree/master/Deployed/viahttp/) / Currently recommended


Version Fetch:  [open deployed versions](https://github.com/ShapeGroup/jsIncluder/tree/master/Deployed/viafetch/)

---

### How to use:


Copy the file anywhere in your project (it's usual in www) and upload it as the first item in the head of the document.


Create your html files to include on the page and link them to them via the fake attribute like this:


      in head: <script type="text/javascript" src="./includer.js"></script>

      into body: <div path="./myfolder/mywebfile.html"></div>


At the first reading of the body, jsIncluder will read all the paths and replace them with the html files present in the path.


Important note: _This rapid technique is valid outside the seo roles, it is not suitable for content indexing on web site._

