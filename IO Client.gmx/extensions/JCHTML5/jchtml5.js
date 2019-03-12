// **************************************************
// Copyright (C) 2014, Sam Whillance
//
// File:			jchtml5.js
// Author:			Sam Whillance
// Description:		Extension for the JCHTML5 Engine
//***************************************************

// Hide the address bar
function jchtml5_hide_address_bar(){
	if(!window.location.hash){
		var divh = document.getElementById('gm4html5_div_id').style.height;
		if (divh < (window.outerHeight + 200)){
			document.getElementById('gm4html5_div_id').style.height = (window.outerHeight + 200) + 'px';
		}
		
		setTimeout ( function(){ if (window.pageYOffset == 0)window.scrollTo(window.pageXOffset,1); },50);
	}
}

/*************** MISC ***************/

function jchtml5_get_scroll_x(){
	return window.pageXOffset;
}

function jchtml5_get_scroll_y(){
	return window.pageYOffset;
}

// Scroll to position
function jchtml5_scroll_to(x,y){
	window.scrollTo(x,y === 0 ? y+1 : y);
}

// Change the title of the game
function jchtml5_rename_title(argument0){
	document.title = argument0;
}

// Change the background color
function jchtml5_set_background_color(argument0){
	document.body.style.background = argument0;
}

/*************** AD FUNCTIONS ***************/

// Show banner ad
function jchtml5_show_ad_banner() {
   var e = document.getElementById('ad_banner_div');
    e.style.display = 'block';
}

// Hide banner ad
function jchtml5_hide_ad_banner() {
   var e = document.getElementById('ad_banner_div');
    e.style.display = 'none';
}

// Show wall ad
function jchtml5_show_ad_wall() {
   var e = document.getElementById('ad_wall_div');
    e.style.display = 'block';
}

// Hide wall ad
function jchtml5_hide_ad_wall() {
   var e = document.getElementById('ad_wall_div');
    e.style.display = 'none';
}

/*************** DIV FUNCTIONS ***************/

// Show a div
function jchtml5_show_div(id) {
	var e = document.getElementById(id);
	e.style.display = 'block';
}

// Hide a div
function jchtml5_hide_div(id) {
	var e = document.getElementById(id);
	e.style.display = 'none';
}

// Toggle a div
function jchtml5_toggle_div(id) {
	var e = document.getElementById(id);
	if (e.style.display == 'block')
	  e.style.display = 'none';
	else
	  e.style.display = 'block';
}

/*************** COOKIES ***************/

// Check if cookies are enabled
function jchtml5_cookies_enabled(){
	return navigator.cookieEnabled;
}

// Set cookie
function jchtml5_cookie_set(cname,cvalue,exdays){
	var d = new Date();
	d.setTime(d.getTime()+(exdays*24*60*60*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}

// Return cookie
function jchtml5_cookie_get(cname){
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) 
	  {
	  var c = ca[i].trim();
	  if (c.indexOf(name)==0) return c.substring(name.length,c.length);
	  }
	return "";
}

// Check if cookie exists
function jchtml5_cookie_exists(cname){
	var exists=jchtml5_cookie_get(cname);
	if (exists!="" && exists!=null)
	  return 1;
	else 
	  return 0;
}

// Get or set a cookie
function jchtml5_cookie_get_set(cname, value){
	var exists=jchtml5_cookie_get(cname);
	if (exists!="" && exists!=null){
		return jchtml5_cookie_get(cname);
	}
	else
	{
		jchtml5_cookie_set(cname,value,999);
		return value;
	}
}

// Delete cookie
function jchtml5_cookie_delete(cname){
	if (jchtml5_cookie_exists(cname))
		document.cookie = cname + '=;expires=Thu, 01 Jan 1234 00:00:01 GMT;';
}

// Delete cookie
function jchtml5_cookie_delete_all(){
	document.cookie = cname + '=;expires=Thu, 01 Jan 1234 00:00:01 GMT;';

	var cookies = document.cookie.split(";");
	for (var i = 0; i < cookies.length; i++) {
		jchtml5_cookie_delete(cookies[i].split("=")[0]);
	}
}

// Show an alert (message)
function jchtml5_alert(message){
	alert(message);
}

// Prompt user for input
function jchtml5_prompt(message, default_text){
	value = prompt(message,default_text);
	if (value!="" && value!=null)
		return value;
	else
		return default_text;
}

// Show an email form (iOS and Android)
function jchtml5_email(to, subject, body){
	window.location.href = 'mailto:'+to+'?subject='+subject+'&body='+body;
}

/*************** LOCAL STORAGE ***************/

// Returns true is local storage is supported
function jchtml5_storage_supported(){
	return (typeof(Storage) !== "undefined");
}

// Load something from storage
function jchtml5_storage_get(name){
	return localStorage.getItem(name);
}

// Save something into storage
function jchtml5_storage_set(name, value){
	localStorage.setItem(name, value);
}

// Load something from storage
function jchtml5_storage_get_set(name, value){
	var res = localStorage.getItem(name);
	if (res == null){
		localStorage.setItem(name,value);
		return value;
	}
	else
	{
		return localStorage.getItem(name);
	}
}

// Delete something from storage
function jchtml5_storage_delete(name){
	localStorage.removeItem(name);
}

// Delete all local storage
function jchtml5_storage_delete_all(){
	localStorage.clear();
}

/*************** SESSION STORAGE ***************/

// Get something from session (temp) storage
function jchtml5_session_storage_get(name){
	let item = sessionStorage.getItem(name);
	return item == null ? "undefined" : item;
}

// Save something into session (temp) storage
function jchtml5_session_storage_set(name, value){
	sessionStorage.setItem(name, value);
}

// Load something from storage
function jchtml5_session_storage_get_set(name, value){
	var res = sessionStorage.getItem(name);
	if (res == null){
		sessionStorage.setItem(name,value);
		return value;
	}
	else
	{
		return localStorage.getItem(name);
	}
}

// Delete something from session (temp) storage
function jchtml5_session_storage_delete(name){
	sessionStorage.removeItem(name);
}

// Delete all local session (temp) storage
function jchtml5_session_storage_delete_all(){
	sessionStorage.clear();
}