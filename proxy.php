<?php
/**
 * This file is for jsonp proxy.
 */
header('Content-Type: application/x-javascript');
$vid = (isset($_GET["vid"]) && $_GET["vid"] !== "") ? $_GET["vid"] : "x22krda_neapolitan-mastiff-top-pet-dogs-in-india_animals";// for test.
$callback = (isset($_GET["callback"]) && $_GET["callback"] !== "") ? $_GET["callback"] : " getUrl";
$url = (isset($_GET["url"]) && $_GET["url"] !== "") ? $_GET["url"] :  'http://www.dailymotion.com/embed/video/' ;
$url = $url . $vid;
$oResource = curl_init();
curl_setopt($oResource, CURLOPT_URL, $url);
curl_setopt($oResource, CURLOPT_RETURNTRANSFER, true);
curl_setopt($oResource, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($oResource, CURLOPT_SSL_VERIFYPEER, false);
$xml = addslashes(curl_exec($oResource));
$xml = preg_replace( "/\r|\n/", "", $xml );
echo "$callback('$xml')";
curl_close($oResource);
?>
