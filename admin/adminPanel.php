<?php
    header('Content-Type: text/html; charset=utf-8');
    echo '<link rel="stylesheet" href="1.css" type="text/css"/>';
    echo '<link rel="stylesheet" href="adm.css" type="text/css"/>';
    echo '<script type="text/javascript" src="adminForm.js"></script>';
    $link = mysql_connect('185.25.117.161', 'vuniver', '5S1CQhvO');
    mysql_query("SET NAMES utf8");
    if (!$link) {
        die('Error: ' . mysql_error());
    }
    $isLogined = 0;
    $isFromHisto = 0;

   $query = "select * from vuniver.admins where login='" . $_POST['login'] ."'"; //. "' and pass='" . $_POST['qwe']

   $key = md5($_POST['qwe']).'|'.$_POST['login'];
   $result = mysql_query($query);
   while ($row = mysql_fetch_row($result)) {
       if ($row[1] == $_POST['qwe']) $isLogined = 1;
   }
   if ($_POST['isFromHisto'] == 1)
   {
   	$key = $_POST['hash'];
   	$isFromHisto = 1;
   }
   echo '<div id="header" class="fixed">
   <div id="title">Панель адміністратора</div>
   </div>';
   if (($isFromHisto == 1) or ($isLogined == 1))
       {
       	$query = "select optionValue from vuniver.config where optionName='useBeta'";
       	$result = mysql_query($query);
        while ($row = mysql_fetch_row($result)) {
            $isBetaActive = ($row[0] == 1);
        }


		$query = "select optionValue from vuniver.config WHERE config.optionId=2";
		$result = mysql_query ($query);
		while ($row = mysql_fetch_row($result)) {
			$currentFill = $row[0];
		}

		if($currentFill == 0) $currentFill = "База зараз заповнена по нормальному розподілу";
		else $currentFill = "База зараз заповнена по рівномірному розподілу";

       	echo '<div id="loading" style="visibility: hidden">
       			<div id="load-message">
       				База перегенеровується, зачекайте... <br/>
       				<div class="spinner"></div>
       			</div>
       		  </div>';
       	echo '<div id="popup-bg" style="visibility: hidden">
               			<div id="popup-window">
							<div id="popup"></div>
               				<input type="button" class="OK" onclick="hidePopup()" value="OK"/>
               			</div>
               		  </div>';
       	echo '<div id="content" style="padding-top:50px">';
       	echo '<h4>Поточний алгоритм розрахунку ймовірності:</h4>';
       	if ($isBetaActive) echo '<div class="switch inline active" id="left">Бета-алгоритм</div><div class="switch inline notactive" id="right">Нормальний алгоритм</div><br>';
        else echo '<div class="switch inline notactive" id="left">Бета-алгоритм</div><div class="switch inline active" id="right">Нормальний алгоритм</div><br>';
        echo '<form action="1.php" method="post"><input name="hash" value="' . $key .'" style="visibility: hidden; position: absolute; top: 0px; left: 0px;"><br/><input type="submit" value="Гісторамма"></form>';
        echo '<a href="http://alex.inet-tech.org.ua/cgi-bin/dump-page.cpp.o"><input type="button" value="Завантаження або збереження бази" style="display: none"/></a><br><br>
		<div id="last-gen" style="display: none">'. $currentFill .'</div><div class="inline-table" style="display: none"><form class="cell border" method="" action="">
	        <h4>Нормальний розподіл</h4>
	        <table cellpadding=0>
	            <tr>
	                <td><h5>Бюджет:</h5></td>
	            </tr>
	            <tr>
	                <td>Математичне сподівання:</td>
	                <td><label>M<sub>M</sub><input id="M1" name="M1" type="text" value="175" onchange="func3(this);"/></label></td>
	                <td><label>D<sub>M</sub><input name="D1" type="text" value="25" onchange="func3(this);"/></label></td>
	            </tr>
	            <tr>
	                <td>Дисперсія:</td>
	                <td><label>M<sub>D</sub><input id="M2" name="M2" type="text" value="25" onchange="func3(this)"/></label></td>
	                <td><label>D<sub>D</sub><input name="D2" type="text" value="20" onchange="func3(this)"/></label></td>
	            </tr>
	            <tr>
	                <td><h5>Контракт:</h5></td>
	            </tr>
	            <tr>
	                <td>Математичне сподівання:</td>
	                <td><label>M<sub>M</sub><input id="M3" name="M3" type="text" value="150" onchange="func3(this);"/></label></td>
	                <td><label>D<sub>M</sub><input name="D3" type="text" value="40" onchange="func3(this);"/></label></td>
	            </tr>
	            <tr>
	                <td>Дисперсія:</td>
	                <td><label>M<sub>D</sub><input id="M4" name="M4" type="text" value="40" onchange="func3(this)"/></label></td>
	                <td><label>D<sub>D</sub><input name="D4" type="text" value="40" onchange="func3(this)"/></label></td>
	            </tr>
	        </table>
	        <a id="button-1" onclick="func();">Заповнити базу</a>
	    </form>
	    <form class="cell border" method="" action="">
	        <h4>Рівномірний розподіл</h4>
	        <table>
	        <tr>
	            <td><label for="L2">Ліва межа (бюджет)</label></td>
	            <td><input id="L2" name="L2" type="text" value="170" onchange="func3(this)"/></td>
	            <td><label for="R2">Права межа (бюджет)</label></td>
	            <td><input id="R2" name="R2" type="text" value="200" onchange="func3(this);"/></td>
	        </tr>
	        <tr>
	            <td><label for="L1">Ліва межа (контракт)</label></td>
	            <td><input id="L1" name="L1" type="text" value="140" onchange="func3(this);"/></td>
	            <td><label for="R1">Права межа (контракт)</label></td>
	            <td><input id="R1" name="R1" type="text" value="170" onchange="func3(this);"/><br/></td>
	        </tr>
	        </table>
	        <a id="button-2" onclick="func2();">Заповнити базу</a>
	    </form></div>';
	    echo '</div>';
       }
       else
       {
	echo '<div id="content"><form id="loginPanel" method="post"><h3>Процедура входу завершена невдало</h3>';
	echo 'Невірний логін або пароль<br/>';
	echo '<a href="index.html"><input type="button" value="Назад"/></a></div></div>';
       }

	echo '<div id="cat"><a href="http://kotomatrix.ru/" alt="Больше котиков" title="Больше котиков"><img src="cat.jpg"></a></div>';
   mysql_close($link);
?>