
(function(){ 
    //! - - - - - - - - - -- - - - - - -INITS
     function LoadCSS() {
       
         var css_link = "http://localhost:3000/css/fuspay-checkout.css"
         var cssId = 'fusCSS'; // you could encode the css path itself to generate id..
         if (!document.getElementById(cssId)) {
             var head = document.getElementsByTagName('head')[0]
             var link = document.createElement('link')
             link.id = cssId
             link.rel = 'stylesheet'
             link.type = 'text/css'
             link.href = css_link
             link.media = 'all'
             head.appendChild(link)
         }
         
     }
    

    LoadCSS()
    
    //! - - - - - - - - - -- - - - - - -
    return $_fp = {

        Config: function(){

            var siteConf = {

            siteURL: "http://localhost:3000",
            siteAPI: "http://localhost:3000/api/merchant",
            siteCSS: "http://localhost:3000/css/fuspay-checkout.css"
        }
            return siteConf
        },
        inputAttrVal: function(node, attr){

            return node.getAttribute(attr).value

        },
         Pay: function(){
        var mthis = this
        //: hide pay btn
        document.getElementById("fpayBtn").style.display = "none"
       
        //: get form inputs
        var fusForm = document.getElementById("fuspayForm")
        var div = document.createElement("div");
        var overlay = document.createElement("div");
        overlay.setAttribute("id", "fuspay-overlay")
        div.setAttribute("id", "fus-checkout")
        // div.style.width = "60%";
        // div.style.height = "50vh";
        // div.style.background = "black";
        // div.style.color = "red";
        // div.style.position = "absolute"
        // div.style.marginRight = "auto"
        // div.style.marginLeft = "auto"
        // div.style.left = "0px"
        // div.style.right = "0px"
        // div.style.border = "1px solid green"
        // div.style["z-index"] = "1000"
        div.innerHTML = "<input id = 'f-token' placeholder = 'token' type = ''><br><input id = 'f-amount' placeholder = 'amount' type = ''><br><button id = 'f-checkout'>Checkout</button>";
        
        fusForm.appendChild(div);
       
        //: overlay css
        // overlay.style.position = "fixed"
        // overlay.style.display =  "block"
        // overlay.style.width = "100%" 
        // overlay.style.height = "100%"
        // overlay.style.top = "0"
        // overlay.style.left = "0"
        // overlay.style.right = "0"
        // overlay.style.bottom = "0"
        // overlay.style["background-color"] = "rgba(0, 0, 0, 0.7)"
        // overlay.style["z-index"] = "" 
        // overlay.style.cursor = "pointer"
        fusForm.appendChild(overlay);
        document.querySelector("#fus-checkout").style.opacity = "1"
       

        
            
           
        //: collect  inputs
            let formInputs = {}
            for(let node of fusForm.childNodes){

                if (node.nodeName == "INPUT" || node.nodeName == "input") {
                    var mName = node.getAttribute("name")
                    formInputs[mName] = node.value
                
                }
               
            }


              console.log(formInputs)
               //: init token and amount
               document.getElementById("f-token").value = formInputs.fusToken
               document.getElementById("f-amount").value = formInputs.amountToPay

               // checkout
               document.getElementById("f-checkout").onclick = function () {
                   var token = document.getElementById("f-token").value
                   var amt = document.getElementById("f-amount").value
                  
                   var formData = new FormData();
                   var req = mthis.createCORSRequest()
                   if(! req)
                    throw new Error('CORS not supported');
                    
                   //var req = new XMLHttpRequest();
                  // req.withCredentials = true;
                   formData.append("fusToken", token);
                   formData.append("amountToPay", amt);
                   formData.append("callback_url", formInputs.callback_url);
                   formData.append("description", formInputs.description);
                   formData.append("pubKey", formInputs.pubKey);
                   formData.append("reference", formInputs.reference);
                  //alert(mthis.Config().siteAPI)
                   req.open("POST", mthis.Config().siteAPI);
                  //req.setRequestHeader('Access-Control-Allow-Origin', '*')
                  //req.setRequestHeader("Content-Type", "application/form-data")
                   //req.setRequestHeader("Cache-Control", "no-cache")
                
                   req.send(formData);
                   //     show loading
                  req.onreadystatechange = function () {
                           if (req.readyState != XMLHttpRequest.DONE)
                           {
                               // show loading

                           }
                           else {
                               alert(req.responseText);
                              
                               // hide loading

                           }
                       }

               }
           

        },
        createCORSRequest: function(method, url) {
            var xhr = new XMLHttpRequest();
            if ("withCredentials" in xhr) {

                // Check if the XMLHttpRequest object has a "withCredentials" property.
                // "withCredentials" only exists on XMLHTTPRequest2 objects.
                xhr.open(method, url, true);

            } else if (typeof XDomainRequest != "undefined") {

                // Otherwise, check if XDomainRequest.
                // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
                xhr = new XDomainRequest();
                xhr.open(method, url);

            } else {

                // Otherwise, CORS is not supported by the browser.
                xhr = null;

            }
            return xhr;
        },
        test: function(){
            return "gggg"
        }


    }
    


})()