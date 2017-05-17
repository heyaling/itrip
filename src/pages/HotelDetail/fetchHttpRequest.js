

import React from 'react' 
let fetchRequest  = function (url,map,callback,type){
      
        fetch(url, {
            method: type?type:"GET",
            mode: "cors",
            dataType: "jsonp",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
           body: map
        })
            .then(function(response) {
                return response.json()
            })
            .then(res => {
                callback(res);
            })
            
}
export  default fetchRequest;
