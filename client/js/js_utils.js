/*
 * js_utils.js
 * Copyright(c) 2016 Universidad de Las Palmas de Gran Canaria
 * Authors: 
 *   Jaisiel Santana <jaisiel@gmail.com>,
 *   Alejandro Sánchez <alemagox@gmail.com>
 *   Pablo Fernández <pablo.fernandez@ulpgc.es>
 * MIT Licensed

*/


function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}


function get_ajax_petition(url, on_success_callback, on_failure_callback)
{
  var xmlhttp;

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
          
           if(xmlhttp.status == 200){
               on_success_callback(xmlhttp.responseText);
           }
           else if(xmlhttp.status == 404) {
              try
              {
                on_failure_callback();
              }
              catch(err)
              {
                on_failure_callback(xmlhttp.responseText);
              }
              
           }
           else {
              try
              {
                on_failure_callback();
              }
              catch(err)
              {
                on_failure_callback(xmlhttp.responseText);
              }
           }
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.setRequestHeader('Fiware-Service','devguide')
    xmlhttp.send();
}


function delete_ajax_petition(url, on_success_callback, on_failure_callback)
{
  var xmlhttp;

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           console.log(xmlhttp.responseText);
           if(xmlhttp.status == 204){
               on_success_callback(xmlhttp.responseText);
           }
           else if(xmlhttp.status == 404) {
              try
              {
                on_failure_callback();
              }
              catch(err)
              {
                on_failure_callback(xmlhttp.responseText);
              }
              
           }
           else {
              try
              {
                on_failure_callback();
              }
              catch(err)
              {
                on_failure_callback(xmlhttp.responseText);
              }
           }
        }
    }
    xmlhttp.open("DELETE", url, true);
    xmlhttp.setRequestHeader('Fiware-Service','devguide')
    xmlhttp.send();
}



function post_ajax_petition(url, on_success_callback, on_failure_callback, data)
{
  var xmlhttp;

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           
           if(xmlhttp.status == 201){
               on_success_callback(xmlhttp.responseText);
           }
           else if(xmlhttp.status == 404) {
              try
              {
                on_failure_callback();
              }
              catch(err)
              {
                on_failure_callback(xmlhttp.responseText);
              }
              
           }
           else {
              try
              {
                on_failure_callback();
              }
              catch(err)
              {
                on_failure_callback(xmlhttp.responseText);
              }
           }
        }
    }
    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader('Fiware-Service','devguide')
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(JSON.stringify(data));
}