<?php

    $link = mysql_connect('185.25.117.161', 'vuniver', '5S1CQhvO');
    mysql_query("SET NAMES utf8");
    if (!$link) {
        die('Error: ' . mysql_error());
    }

    $query = "select optionValue from vuniver.config WHERE config.optionId=2";
    $result = mysql_query ($query);
    while ($row = mysql_fetch_row($result)) {
        $current = $row[0];
    }

    $nF = $_GET['mode'];

    $query = "UPDATE vuniver.config SET optionValue=".$nF." WHERE config.optionId=2";
    mysql_query($query);

    echo $nF;

    mysql_close($link);
?>