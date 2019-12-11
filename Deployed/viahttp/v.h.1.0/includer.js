/* V H-1.0 */

console.info(`

 ::: INCLUDER :::
 start check
 [
`);


( jsIncluder =  () => {

      let x, i, el, file, request;

      //loop all doc el
      x = [...document.getElementsByTagName("*")];
      for (i = 0; i < x.length; i++)
      {

          el = x[i];

          if(el.getAttribute('path') !== null || el.getAttribute('path') !== undefined)
          {

            file = el.getAttribute('path');

            if (file && i <= x.length)
            {

              //check the path error
              if (file.startsWith("/") )
              {
                alert("\n\nIncluder :: error in file path: do not use the ' / ' as initial.\n\n\Follow the example below:\n<div include='myfolder/.../file.html'></div>\n\n");
                let mex = '<p style="backraound:white !important; padding:20px !important; border: 1px solid red !important; color:red !important; font-weight:bold !important;"> !! ERROR: WRONG PATH FOR INCLUDE</p>';
                el.innerHTML = mex;
              };

              //create HTTP request
              request = new XMLHttpRequest(); 
              request.open("GET", file, false);

              request.onload = function ()
              {


                if (this.status == 200 ) // if ok
                {

                  el.innerHTML = this.responseText;
                  el.outerHTML = el.innerHTML; // unwrap

                  console.info(`    Includer file: ` + file +`
                    request status: `+this.status+` | xmlhttp state: `+request.readyState+` | data is printed`); //+this.responseText

                  }
                  else if (this.status == 404) // if ok... but not found
                  {
                    alert("Includer :: error in file path or server 404 error.\nfile not founded :: "+file);
                  }
                  else if (this.status != (404 && 0 && 200)) // else
                  {
                    alert("Includer :: undefined server error on include filename :: "+file);
                  }

                }

                // sand all... and exit
                request.send();

              }

          }

      }


})();

window.addEventListener('DOMContentLoaded', () => {


// stop and repeat
jsIncluder();

console.info(`

  ] [ not other files, end loop]

`);
}, true);
