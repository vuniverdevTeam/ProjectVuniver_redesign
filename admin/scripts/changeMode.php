<?php

    $link = mysql_connect('185.25.117.161', 'vuniver', '5S1CQhvO');
    mysql_query("SET NAMES utf8");
    if (!$link) {
        die('Error: ' . mysql_error());
    }

    $query = "select optionValue from vuniver.config WHERE config.optionId=1";
    $result = mysql_query ($query);
    while ($row = mysql_fetch_row($result)) {
        $current = $row[0];
    }

    if($current == 1) $nB = 0;
    else $nB = 1;

    $query = "UPDATE vuniver.config SET optionValue=".$nB." WHERE config.optionId=1";
    mysql_query($query);

    echo $nB;

    mysql_close($link);
?>