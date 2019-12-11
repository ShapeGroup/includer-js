/* V F-1.0 */

( jsIncluder =  () => {

  let debugs = true
  
  
    let elements = [...document.getElementsByTagName("*")], qnt = elements.length;
    for (let i = 0; i < qnt; i++)
    {

        let path = elements[i].getAttribute('path');
        
        if(path !== null || path !== undefined)
        {
    
          if (path && i <= qnt)
          {
            
            //check the path error
            if (path.startsWith("/") )
            {
              alert("\n\nIncluder :: error in file path: do not use the ' / ' as initial.\n\nFollow the example below:\n<div include='myfolder/.../file.html'></div>\n\n");
              let mex = '<p style="backraound:white !important; padding:20px !important; border: 1px solid red !important; color:red !important; font-weight:bold !important;"> !! ERROR: WRONG PATH FOR INCLUDE</p>';
              elements[i].innerHTML = mex;
            };

            let options = { method: 'GET', credentials: 'omit', mode: 'cors', cache: 'no-cache' },
                request = new Request(path, options);

            
            fetch(request)
            .then((response) => {
              return response.text();
            })
            .then((file) => {
              elements[i].innerHTML = file;
              elements[i].outerHTML = elements[i].innerHTML;


  if(debugs===true){console.info(`

  ::: INCLUDER :::

  request status: ok | data is printed
  Included file:
  ` + file +`

  `);};


            });

          }

          if(path<=-1)
          { break; return; }
    
        }
    }

})();

document.addEventListener('readystatechange',
() => {

  if (document.readyState != 'complete')
  {
    jsIncluder();
  }

} , true );
